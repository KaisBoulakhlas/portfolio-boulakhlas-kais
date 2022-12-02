import { useStaticQuery, graphql } from "gatsby"
export const useExperiencesData = () => {
  const experiencesData = useStaticQuery(graphql`
  query experiencesData {
    allMarkdownRemark(filter: {frontmatter: {typeoffile: {eq: "experience"}}}) {
      nodes {
        frontmatter {
          tag
          startdate
          enddate
          title
        }
      }
    }
  }
`)

  return experiencesData.allMarkdownRemark.nodes;
}