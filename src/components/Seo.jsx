import React from "react"
import { useMetaData } from "../hooks/use-meta-data"

export const Seo = ({ title, descriptionData, pathname, children }) => {
  const { title: defaultTitle, descriptionData: defaultDescription, image, siteUrl, author, keywords } = useMetaData()

  const seo = {
    title: title || defaultTitle,
    descriptionData: descriptionData || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    author,
    keywords,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.descriptionData} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Portfolio - Kaïs Boulakhlas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="Portfolio - Kaïs Boulakhlas" />
      <meta name="twitter:creator" content={seo.author} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  )
}