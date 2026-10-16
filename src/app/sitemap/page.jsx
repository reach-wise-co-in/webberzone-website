import { pageMetadata } from "@/lib/seo";
import Sitemap from "@/components/sitemap/Sitemap";

export default function Page() {
  return <Sitemap />;
}

export const metadata = pageMetadata("/sitemap");
