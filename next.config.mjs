/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old addresses permanently redirect to the readable ones, keeping any
  // search ranking and links that point at them.
  async redirects() {
    const services = [
      [1, "social-media-management"],
      [2, "meta-google-ads"],
      [3, "geo-fencing-ads"],
      [4, "content-creation-ai-videos"],
      [5, "seo"],
      [6, "website-app-development"],
    ];
    return [
      ...services.map(([id, slug]) => ({
        source: `/services/${id}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
      { source: "/terms&conditions", destination: "/terms", permanent: true },
      { source: "/terms%26conditions", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
