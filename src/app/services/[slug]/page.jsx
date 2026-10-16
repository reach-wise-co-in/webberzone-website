import { notFound } from "next/navigation";
import SingleService from "@/components/service/singleservice/SingleService";
import { pageMetadata } from "@/lib/seo";
import { SERVICE_PAGES } from "@/lib/site";

// Only the six known service URLs exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return pageMetadata(`/services/${slug}`);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) notFound();
  return <SingleService id={service.id} />;
}
