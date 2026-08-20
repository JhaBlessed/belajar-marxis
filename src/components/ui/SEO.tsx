import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
}

export function SEO({ 
  title = "Belajar Marxis", 
  description = "Peta Belajar Karya-Karya Marxis dalam Bahasa Indonesia. Jelajahi tokoh, karya, konsep, sejarah, dan perdebatan.",
  type = "website",
  url = "https://ensiklopedia-mia.netlify.app"
}: SEOProps) {
  const siteTitle = title === "Belajar Marxis" 
    ? title 
    : `${title} | Belajar Marxis`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
}
