import { useStaticQuery, graphql } from "gatsby"
export const useCompetencesData = () => {
  const competencesData = useStaticQuery(graphql`
  query competencesData {
    allMarkdownRemark(filter: {frontmatter: {typeoffile: {eq: "competence"}}}) {
      nodes {
        frontmatter {
          bgcolor
          icon {
            childImageSharp {
              gatsbyImageData(formats: WEBP, placeholder: TRACED_SVG, layout: CONSTRAINED, height: 100,
                width: 100)
            }
          }
          name
        }
      }
    }
  }
`)

  return competencesData.allMarkdownRemark.nodes;
}