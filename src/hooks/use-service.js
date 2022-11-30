import { useStaticQuery, graphql } from "gatsby"
export const useServicesData = () => {
  const servicesData = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          serviceimage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, formats: WEBP)
            }
          }
          description
          titre
        }
      }
    }
  }
`)

  return servicesData.allMarkdownRemark.nodes;
}