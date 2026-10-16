// Sends a form submission to /api/lead, which forwards it to WhatsApp.
// `fields` maps a human-readable label to the value, e.g. { "Name": "Jane" }.
export async function sendLead(source, fields, { honeypot = "" } = {}) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source,
      fields,
      hp: honeypot,
      page: typeof window !== "undefined" ? window.location.href : "",
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
}
