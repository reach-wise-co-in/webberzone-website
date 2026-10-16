import { pageMetadata } from "@/lib/seo";
import Terms from "@/components/tems/Terms";

export default function Page() {
  return <Terms />;
}

export const metadata = pageMetadata("/terms");
