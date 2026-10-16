# WebberZone website

Next.js 16 marketing site for WebberZone. Production URL: https://web.reachwise.co.in

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in CALLMEBOT_API_KEY
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start` (or deploy to Vercel and set the same environment variables there).

## Where leads go

Every form posts to `/api/lead` ([src/app/api/lead/route.js](src/app/api/lead/route.js)), which sends the lead
as a WhatsApp message to **+91 85590 68976** using the free CallMeBot API. If delivery fails, the lead is
printed in the server logs and the visitor is shown the phone number instead.

One-time setup to get `CALLMEBOT_API_KEY`:

1. On the phone with WhatsApp number +91 85590 68976, save the CallMeBot number shown at
   https://www.callmebot.com/blog/free-api-whatsapp-messages/ to contacts.
2. Send it the message: `I allow callmebot to send me messages`
3. CallMeBot replies with an API key. Put it in `.env.local` (and in your hosting provider's env settings).

To add lead capture to a new form, call `sendLead("Form name", { "Label": value, ... })` from
[src/lib/sendLead.js](src/lib/sendLead.js).

## Changing details

- Brand name, URL, phone, email, plans and prices: [src/lib/site.js](src/lib/site.js)
- Logo / favicon: `public/webberzone-logo.svg`, `public/favicon.svg`
- SEO metadata: [src/app/layout.jsx](src/app/layout.jsx), `public/sitemap.xml`, `public/robots.txt`
