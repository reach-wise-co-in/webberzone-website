import { SITE } from "@/lib/site";

// Search-result title and description for every page, in one place.
// Keep titles under ~60 characters including " | WebberZone" (added automatically)
// and descriptions under ~155 characters, or Google cuts them off.
export const DEFAULT_TITLE = "WebberZone | Social Media & Ads Agency for US Businesses";
export const DEFAULT_DESCRIPTION =
  "WebberZone helps US small businesses get more leads with social media management, Meta & Google ads, geo-fencing, SEO and websites. Plans from $299.";

const PAGES = {
  "/": {
    title: DEFAULT_TITLE,
    absolute: true,
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About Us - Marketing Agency for US Businesses",
    description:
      "Meet WebberZone, a remote-first marketing and web agency helping US small and medium businesses win more customers with ads, content and SEO.",
  },
  "/services": {
    title: "Digital Marketing & Web Services",
    description:
      "Social media management, Meta & Google ads, geo-fencing ads, AI videos, SEO and website & app development for US businesses that want more leads.",
  },
  "/services/social-media-management": {
    title: "Social Media Management for Small Businesses",
    description:
      "Done-for-you social media management: posts, videos and full content creation that keep your business top of mind and bring in new customers.",
  },
  "/services/meta-google-ads": {
    title: "Meta & Google Ads Management",
    description:
      "Meta and Google Ads campaigns built and managed to turn your ad budget into calls, form fills and bookings, with tracking and clear reporting.",
  },
  "/services/geo-fencing-ads": {
    title: "Geo-Fencing Ads for Local Businesses",
    description:
      "Reach people in the exact neighborhoods and locations you choose. Geo-fencing ads put your offer in front of nearby customers ready to buy.",
  },
  "/services/content-creation-ai-videos": {
    title: "Content Creation & AI Videos",
    description:
      "Scroll-stopping posts, AI videos and full content creation for your social pages and ads, made to tell your story and turn viewers into leads.",
  },
  "/services/seo": {
    title: "SEO Services for Small Businesses",
    description:
      "SEO that helps customers find your business on Google and rank higher in local search, with advanced analytics and clear monthly reports.",
  },
  "/services/website-app-development": {
    title: "Website & App Development",
    description:
      "Modern, responsive websites from $299 and app + website packages from $2,999, built to load fast and turn your ad traffic into customers.",
  },
  "/pricing": {
    title: "Pricing Plans from $299",
    description:
      "Marketing plans: Basic $299, Reach $599 and All-in-One $799, plus websites from $299 and app + web from $2,999. Compare what each plan includes.",
  },
  "/contact": {
    title: "Contact Us - Get a Free Consultation",
    description:
      "Tell us about your business and goals. Send your details to our team on WhatsApp, or call or email WebberZone for a free consultation.",
  },
  "/faq": {
    title: "FAQ - Plans, Services & Getting Started",
    description:
      "Answers to common questions about WebberZone's social media, ads, SEO and website services, what each plan includes, and how to get started.",
  },
  "/privacypolicy": {
    title: "Privacy Policy",
    description:
      "How WebberZone collects, uses and protects the information you share through our website and contact form.",
  },
  "/terms": {
    title: "Terms & Conditions",
    description:
      "The terms that apply when you use the WebberZone website and our digital marketing, advertising and web development services.",
  },
  "/sitemap": {
    title: "Sitemap",
    description:
      "Every page on the WebberZone website: services, pricing plans, FAQ, contact details and legal pages.",
  },
};

// Next.js metadata for a page path. The page's own Open Graph title/description
// are included because Next replaces (not merges) the layout's openGraph object.
export function pageMetadata(path) {
  const page = PAGES[path] || { title: DEFAULT_TITLE, absolute: true, description: DEFAULT_DESCRIPTION };
  const fullTitle = page.absolute ? page.title : `${page.title} | ${SITE.name}`;
  return {
    title: page.absolute ? { absolute: page.title } : page.title,
    description: page.description,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_US",
      url: `${SITE.url}${path === "/" ? "/" : path}`,
      title: fullTitle,
      description: page.description,
    },
  };
}
