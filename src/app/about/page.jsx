import { pageMetadata } from "@/lib/seo";
import About from "@/components/about/About";

export default function Page() {
  return <About />;
}

export const metadata = pageMetadata("/about");
