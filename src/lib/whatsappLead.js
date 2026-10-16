import { SITE, whatsappLink } from "@/lib/site";

// Builds a WhatsApp message from a form submission and opens a chat with the
// WhatsApp number in SITE, with the message prefilled for the visitor to send.
// `fields` maps a human-readable label to the value, e.g. { "Name": "Jane" };
// empty values are left out.
export function openWhatsAppLead(source, fields) {
  const lines = [`*New enquiry - ${SITE.name}*`, `Form: ${source}`, ""];
  for (const [label, value] of Object.entries(fields)) {
    const text = String(value ?? "").trim();
    if (text) lines.push(`*${label}:* ${text}`);
  }
  // Same-tab navigation: unlike window.open after an async submit, browsers never block it.
  window.location.href = whatsappLink(lines.join("\n"));
}
