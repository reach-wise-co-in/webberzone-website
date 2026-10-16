import { pageMetadata } from "@/lib/seo";
import Service from "@/components/service/Service";

export default function Page() {
  return <Service />;
}

export const metadata = pageMetadata("/services");
