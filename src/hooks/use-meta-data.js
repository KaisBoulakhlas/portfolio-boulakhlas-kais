import { useStaticQuery, graphql } from "gatsby"
export const useMetaData = () => {
  const metaData = useStaticQuery(graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        keywords
        image
        descriptionMeta
      }
    }
  }
`)

  return metaData.site.siteMetadata;
}