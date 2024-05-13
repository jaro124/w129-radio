import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";
import PostListNavigation from "../components/post-list-navigation";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subtitle
            slug
            tags
            category
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

const PostListTemplate = ({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) => {
  const { edges } = data.allMdx
  const { numPages, currentPage } = pageContext
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Radia
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {edges.map((edge) => (
              <Link to={"/" + edge.node.frontmatter.category + "/" + edge.node.frontmatter.slug}>
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl border dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-500">
                  <GatsbyImage
                    image={getImage(edge.node.frontmatter.hero_image)}
                    alt={edge.node.frontmatter.hero_image_alt}
                  />

                  <div className="py-2 text-center">
                    <span className="block text-xl font-bold text-gray-800 dark:text-white">
                      {edge.node.frontmatter.title}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-blue-400">
                      {edge.node.frontmatter.subtitle}
                    </span>
                    <div className="bg-white dark:bg-gray-800 pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                      {edge.node.frontmatter.tags.map((tag, index) => (
                        <div className="ml-2">
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                            {tag}
                          </span>
                        </div>
                        
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <PostListNavigation numPages={numPages} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostListTemplate;

export const Head = () => (
  <Seo
    title="List posts page"
    description="List posts page"
    keywords={["Blog", "Post"]}
  />
);
