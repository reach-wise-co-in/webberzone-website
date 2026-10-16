# WebberZone website

Next.js 16 marketing site for WebberZone. Production URL: https://web.reachwise.co.in

## Run locally

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start` (or deploy to Vercel and set the same environment variables there).

## Where leads go

When a visitor submits the contact form, it opens WhatsApp (the app on phones, WhatsApp Web on
desktop) in a chat with **+91 85590 68976**, with every field already filled into the message.
The visitor taps Send. No server or API key is involved; the number comes from `phoneE164` in
[src/lib/site.js](src/lib/site.js).

To do the same from another form, call `openWhatsAppLead("Form name", { "Label": value, ... })` from
[src/lib/whatsappLead.js](src/lib/whatsappLead.js).

## Changing details

- Brand name, URL, phone, email, plans and prices: [src/lib/site.js](src/lib/site.js)
- Logo / favicon: `public/webberzone-logo.svg`, `public/webberzone-mark.png`
- SEO metadata: [src/app/layout.jsx](src/app/layout.jsx), `public/sitemap.xml`, `public/robots.txt`
