import { pageMetadata } from "@/lib/seo";
import PrivacyPolicy from "@/components/privacypolicy/PrivacyPolicy";

export default function Page() {
  return <PrivacyPolicy />;
}

export const metadata = pageMetadata("/privacypolicy");
