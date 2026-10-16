import { pageMetadata } from "@/lib/seo";
import Home from "@/components/home/Home";

export default function Page() {
  return <Home />;
}

export const metadata = pageMetadata("/");
