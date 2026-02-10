import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  siteName?: string;
}

export default function ReactHelmet({
  title,
  description,
  url,
  image = "https://www.bits-apogee.org/logo2.png",
  siteName = "APOGEE 2026 | Under the Steel Skies",
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
