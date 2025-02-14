import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Seo = ({ title, description, keywords, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <html lang="pl-PL" />
      <title>{seo.title}</title>
      <link rel="shortcut icon" type="image/png" href="/images/icon.png"></link>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(`, `)} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {children}
    </>
  );
}

export default Seo