import { useStaticQuery, graphql } from "gatsby"
export const useProjectsData = () => {
  const projectsData = useStaticQuery(graphql`
  query projectsData {
    allMarkdownRemark(filter: {frontmatter: {typeoffile: {eq: "projet"}}}) {
      nodes {
        frontmatter {
          projectimage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, formats: WEBP)
            }
          }
          description
          title
          projectlink
          codelink
          tags
          type
        }
      }
    }
  }
`)

  return projectsData.allMarkdownRemark.nodes;
}