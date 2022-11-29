import { useStaticQuery, graphql } from "gatsby"
export const useServicesData = () => {
  const servicesData = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          serviceimage
          titre
        }
      }
    }
  }
`)

  return servicesData.allMarkdownRemark.nodes;
}