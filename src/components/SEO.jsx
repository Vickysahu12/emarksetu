import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, canonicalUrl, ogImage }) {
  const siteName = "eMark Setu";
  const fullTitle = `${title} | ${siteName}`;
  const defaultDesc = "Scale your brand across Amazon, Flipkart, Myntra, Ajio & Shopify with eMark Setu.";
  const defaultOgImage = "https://emarksetu.com/og-image.jpg"; // Apni image URL daalein

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || "ecommerce management, amazon listing, flipkart seller"} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl || "https://emarksetu.com"} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
}