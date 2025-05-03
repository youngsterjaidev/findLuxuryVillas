import { Metadata } from "next";
import { SITE } from "./site";

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterSite?: string;
  ogUrl?: string;
  url?: string;
  image?: string;
  canonical?: string; // Make sure this is defined in the interface
}

export function generateSEO({
  title,
  description,
  image,
  canonical = "", // Provide default value
}: PageSEOProps): Metadata {
  return {
    title: title ? `${title} | ${SITE.name}` : SITE.name,
    description: description || SITE.description,
    alternates: {
      canonical: canonical ? `${SITE.url}/${canonical}` : SITE.url,
    },
    openGraph: {
      title: title || SITE.name,
      description: description || SITE.description,
      url: `${SITE.url}${canonical ? `/${canonical}` : ""}`,
      siteName: SITE.name,
      images: image
        ? [{ url: image }]
        : [{ url: `${SITE.url}${SITE.ogImage}` }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE.name,
      description: description || SITE.description,
      images: image
        ? [{ url: image }]
        : [{ url: `${SITE.url}${SITE.ogImage}` }],
    },
    metadataBase: new URL(SITE.url),
  };
}
