import { pageMetadata } from "@/lib/seo";
import Contact from "@/components/contact/Contact";

export default function Page() {
  return <Contact />;
}

export const metadata = pageMetadata("/contact");
