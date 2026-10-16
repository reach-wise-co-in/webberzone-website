import "./all-styles";
import SiteShell from "./SiteShell";
import { SITE } from "@/lib/site";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, pageMetadata } from "@/lib/seo";

const description = DEFAULT_DESCRIPTION;

// Defaults; each page sets its own title and description from src/lib/seo.js.
export const metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(SITE.url),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE.name}` },
  icons: { icon: "/webberzone-mark.png", apple: "/webberzone-mark.png" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/webberzone-mark.png`,
  email: SITE.email,
  telephone: SITE.phoneE164,
  areaServed: "US",
  description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts were @import-ed from several component CSS files in the Vite app */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&family=Sora:wght@100..800&family=Syne:wght@400..800&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
