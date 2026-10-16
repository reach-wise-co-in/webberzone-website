import { pageMetadata } from "@/lib/seo";
import Pricing from "@/components/pricing/Pricing";

export default function Page() {
  return <Pricing />;
}

export const metadata = pageMetadata("/pricing");
