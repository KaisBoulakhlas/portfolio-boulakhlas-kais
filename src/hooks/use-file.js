import { useStaticQuery, graphql } from "gatsby"
export const useCvData = () => {
  const cvData = useStaticQuery(graphql`
  query cvData {
    markdownRemark(frontmatter: {typeoffile: {eq: "cv"}}) {
      frontmatter {
        cvpdf {
          relativePath
          publicURL
        }
        name
      }
    }
  }
`)

  return cvData.markdownRemark.frontmatter;
}
