import { pageMetadata } from "@/lib/seo";
import Faq from "@/components/faq/Faq";

export default function Page() {
  return <Faq />;
}

export const metadata = pageMetadata("/faq");
