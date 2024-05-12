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
  const { edges } = data.allMdx;
  const { numPages, currentPage } = pageContext;
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Radia
            </h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {edges.map((edge) => (
              <Link to={"/radia/" + edge.node.frontmatter.slug}>
                <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <GatsbyImage
                    image={getImage(edge.node.frontmatter.hero_image)}
                    alt={edge.node.frontmatter.hero_image_alt}
                  />

                  <div class="py-5 text-center">
                    <span class="block text-xl font-bold text-gray-800 dark:text-white">
                      {edge.node.frontmatter.title}
                    </span>
                    <span class="text-sm text-gray-700 dark:text-gray-200">
                      {edge.node.frontmatter.subtitle}
                    </span>
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
