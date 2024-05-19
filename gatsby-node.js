const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
 
  const radiaListTemplate = path.resolve(`./src/templates/radia-list-template.js`)
  const czasopismaListTemplate = path.resolve(`./src/templates/radia-list-template.js`)
  const lampyListTemplate = path.resolve(`./src/templates/radia-list-template.js`)
  
    const { createPage } = actions;
    
    const result = await graphql(`
    query MyQuery {
      allMdx (sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            frontmatter {
              slug
              title
              category
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
    }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }
  
    const all = result.data.allMdx.edges
    const lampy = result.data.allMdx.edges.filter(edge => edge.node.frontmatter.category === "lampy")
    const czasopisma = result.data.allMdx.edges.filter(edge => edge.node.frontmatter.category === "czasopisma")
    const radia = result.data.allMdx.edges.filter(edge => edge.node.frontmatter.category === "radia")

    // Items per page
    const itemsPerPage = 3

    // Create radia list pages
    const radiaNumPages = Math.ceil(radia.length / itemsPerPage)
    Array.from({ length: radiaNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/radia` : `/radia/${i + 1}`,
        component: radiaListTemplate,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages: radiaNumPages,
          currentPage: i + 1,
          category: "radia",
        },
      })
    })

    // Create czasopisma list pages
    const czasopismaNumPages = Math.ceil(czasopisma.length / itemsPerPage)
    Array.from({ length: czasopismaNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/czasopisma` : `/czasopisma/${i + 1}`,
        component: czasopismaListTemplate,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages: czasopismaNumPages,
          currentPage: i + 1,
          category: "czasopisma",
        },
      })
    })
    
    // Create lampy list pages
    const lampyNumPages = Math.ceil(lampy.length / itemsPerPage)
    Array.from({ length: lampyNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/lampy` : `/lampy/${i + 1}`,
        component: lampyListTemplate,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages: lampyNumPages,
          currentPage: i + 1,
          category: "lampy",
        },
      })
    })    
};