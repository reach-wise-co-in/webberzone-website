// Receives a lead from any form on the site and forwards it to the owner's
// WhatsApp through CallMeBot (https://www.callmebot.com/blog/free-api-whatsapp-messages/).
import { SITE } from "@/lib/site";

const MAX_FIELDS = 20;
const MAX_LABEL = 60;
const MAX_VALUE = 1500;

// Best-effort spam guard: at most 5 submissions per IP every 10 minutes.
// It is per server instance, which is enough to stop casual form flooding.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const recentByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  recentByIp.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

const clean = (value, max) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);

function buildMessage(source, fields, page) {
  const lines = [`*New lead - ${SITE.name}*`, `Form: ${source}`, ""];
  for (const [label, value] of fields) lines.push(`*${label}:* ${value}`);
  lines.push("");
  if (page) lines.push(`Page: ${page}`);
  lines.push(
    `Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`
  );
  return lines.join("\n");
}

async function sendWhatsApp(text) {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!apiKey) throw new Error("CALLMEBOT_API_KEY is not set");

  const phone = process.env.LEAD_WHATSAPP_NUMBER || SITE.phoneE164;
  const url =
    "https://api.callmebot.com/whatsapp.php" +
    `?phone=${encodeURIComponent(phone)}` +
    `&text=${encodeURIComponent(text)}` +
    `&apikey=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(15000) });
  const body = await res.text();
  // CallMeBot answers with an HTML page that echoes the text back. Errors (e.g. a bad key)
  // come back as 203, so require a plain 200 plus its success wording.
  if (res.status !== 200 || !/Message (queued|sent)/i.test(body)) {
    throw new Error(`CallMeBot error ${res.status}: ${body.replace(/<[^>]+>/g, " ").slice(0, 300)}`);
  }
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (payload?.hp) return Response.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const source = clean(payload?.source, 60) || "Website form";
  const page = clean(payload?.page, 200);
  const fields = Object.entries(payload?.fields && typeof payload.fields === "object" ? payload.fields : {})
    .slice(0, MAX_FIELDS)
    .map(([label, value]) => [clean(label, MAX_LABEL), clean(value, MAX_VALUE)])
    .filter(([label, value]) => label && value);

  if (fields.length === 0) {
    return Response.json({ ok: false, error: "The form is empty." }, { status: 400 });
  }

  const message = buildMessage(source, fields, page);
  try {
    await sendWhatsApp(message);
  } catch (err) {
    // Keep the lead in the server logs so it is not lost if WhatsApp delivery fails.
    console.error("[lead] WhatsApp delivery failed:", err.message, "\n" + message);
    return Response.json(
      { ok: false, error: "We could not send your request right now." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
