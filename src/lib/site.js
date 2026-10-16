// Single source of truth for brand and contact details.
export const SITE = {
  name: "WebberZone",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://web.reachwise.co.in",
  phoneDisplay: "+91 85590 68976",
  phoneE164: "+918559068976",
  email: "webberzonework@gmail.com",
};

export const whatsappLink = (text = "") =>
  `https://wa.me/${SITE.phoneE164.replace("+", "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Feature rows shown on every marketing plan card; plans tick the ones they include.
export const MARKETING_FEATURES = [
  "Full Content Creation",
  "Geo Fencing Ads",
  "AI Videos",
  "Priority Support",
  "Advanced Analytics",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "Monthly Report",
];

export const MARKETING_PLANS = [
  {
    id: "basic",
    name: "Basic Plan",
    tagline: "Get Started",
    price: "$299",
    social: "Social Media Management (10 Posts, 5 Videos)",
    includes: ["Full Content Creation", "Geo Fencing Ads", "AI Videos", "Priority Support"],
  },
  {
    id: "reach",
    name: "Reach Plan",
    tagline: "Grow Faster",
    price: "$599",
    social: "Social Media Management (15 Posts, 7 Videos)",
    includes: [
      "Full Content Creation", "Geo Fencing Ads", "AI Videos", "Priority Support",
      "Advanced Analytics", "Meta Ads", "Google Ads",
    ],
    adBudget: "$1.5K Ads",
  },
  {
    id: "all-in-one",
    name: "All-in-One Plan",
    tagline: "Complete Growth",
    price: "$799",
    social: "Social Media Management (20 Posts, 10 Videos)",
    includes: MARKETING_FEATURES,
    adBudget: "$2.5K Ads",
  },
];

export const DEV_PLANS = [
  {
    id: "basic-web",
    name: "Basic Web",
    tagline: "Websites",
    price: "$299",
    priceNote: "Starting at",
    features: ["Website Development", "Modern, Responsive Website"],
  },
  {
    id: "app-web",
    name: "App & Web",
    tagline: "Apps + Websites",
    price: "$2,999",
    priceNote: "Starting at",
    features: ["App Development", "Website Development"],
  },
];

export const ALL_PLANS = [...MARKETING_PLANS, ...DEV_PLANS];

export const SERVICES = [
  "Social Media Management",
  "Meta & Google Ads",
  "Geo-Fencing Ads",
  "Content Creation & AI Videos",
  "SEO",
  "Website & App Development",
];
