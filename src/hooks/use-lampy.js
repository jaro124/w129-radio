import { graphql, useStaticQuery } from "gatsby"

export const useLampyData = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMdx(
      filter: {frontmatter: {category: {eq: "radia"}}}
      sort: {frontmatter: {date: ASC}}
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
          }
        }
      }
    }
  }
  `)

  return data.allMdx.edges
}