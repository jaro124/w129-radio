const path = require(`path`)
const userConfig = require("./config.js")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MyQuery {
      allMdx(sort: { frontmatter: { date: DESC } }) {
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
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Items per page
  const itemsPerPage = userConfig.ITEMS_PER_PAGE;

  // Generate list and  pages for categories
  userConfig.categories.map((category) => {
    var listData = result.data.allMdx.edges.filter(
      (edge) => edge.node.frontmatter.category === category.name
    );
    var pageDataTemplate = path.resolve(category.pageTemplate);
    var listDataTemplate = path.resolve(category.listTemplate);
    var listDataNumPages = Math.ceil(listData.length / itemsPerPage);

    listData.forEach(edge => {
      createPage({
        path: `/` + category.name + `/` + `${edge.node.frontmatter.slug}`,
        component: `${pageDataTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: {
          category: edge.node.frontmatter.category,
          id: edge.node.id
        },
      })
    })

    Array.from({ length: listDataNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` + category.name : `/` + category.name + `/${i + 1}`,
        component: listDataTemplate,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages: listDataNumPages,
          currentPage: i + 1,
          category: category.name,
          title: category.title,
          subTitle: category.subTitle,
        },
      });
    });
  });
};
