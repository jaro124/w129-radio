import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/core/layout"
import { Link } from "gatsby"
import Seo from "../components/core/seo"
import PostListNavigation from "../components/post-list-navigation"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HomeIcon } from "@heroicons/react/16/solid"

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMdx(filter: {frontmatter: {category: {eq: $category}}}, sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            slug
            tags
            category
            hero_image_alt
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

const LampyListTemplate = ({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) => {
  const { edges } = data.allMdx
  const { numPages, currentPage, category, title, subTitle } = pageContext
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-8">

        <nav className="text-sm sm:text-base bg-white dark:bg-black p-2 rounded-md shadow-lg">
    <ol className="list-none p-0 inline-flex space-x-2">
      <li className="flex items-center">
        <Link to="/" className="text-gray-500 hover:text-orange-400"><HomeIcon className="size-5" /> </Link>
             <span className="mx-2">/</span>
      </li>
      <li className="flex items-center">
        <Link to="/category" className="text-gray-500 hover:text-orange-400">Eksponaty</Link>
        <span className="mx-2">/</span>
      </li>
      <li className="flex items-center">
        <span className="text-gray-500">{title}</span>
      </li>
    </ol>
  </nav>

          <div className="text-center mt-8">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
              {title}
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              {subTitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {edges.map((edge) => (
              
                <div key={edge.node.title} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl border dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-500">
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
              
            ))}
          </div>

          <div>
            <PostListNavigation numPages={numPages} currentPage={currentPage} category={category} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LampyListTemplate;

export const Head = ({data}) => (
  <Seo
    title="Pentoda - radiotechnika z dawnych lat"
    description="Zapraszamy na niezwykłą podróż w przeszłość do świata starych radioodbiorników. Zobacz, jak ewoluowała technika i design przez dekady."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy"]}
  />
);
