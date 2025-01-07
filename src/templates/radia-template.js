import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/core/layout.js";
import Seo from "../components/core/seo.js";
import PostNavigation from "../components/post-item-navigation"
import {
  Paragraf,
  MyLink,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  NumberedList,
  DiscList,
  MyBlockquote,
  MyPRE,
} from "../components/core/layout-mdx.js";
import { MDXProvider } from "@mdx-js/react";
import { HomeIcon } from "@heroicons/react/16/solid";

const userConfig = require("/config.js");

export const query = graphql`
  query ($id: String!, $category: String!, $gallery: String!) {
    mdx(id: { eq: $id }, frontmatter: { category: { eq: $category } }) {
      frontmatter {
        title
        slug
        subtitle
        category
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
    allFile(
        filter: {
          relativeDirectory: { eq: $gallery }
          extension: { eq: "jpg" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
            name
            id
          }
        }
        totalCount
      }  
  }
`;

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  const categoryItem = userConfig.categories.find(category => category.name === data.mdx.frontmatter.category);
  const categoryLink = "/" + data.mdx.frontmatter.category
  const categoryName = categoryItem.title

  const images = data.allFile.edges.map((edge) =>
    getImage(edge.node.childImageSharp))

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
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
        <Link to={categoryLink} className="text-gray-500 hover:text-orange-400">{categoryName}</Link>
        <span className="mx-2">/</span>
      </li>
      <li className="flex items-center">
        <span className="text-gray-500">{data.mdx.frontmatter.title}</span>
      </li>
    </ol>
  </nav>



          <h1 className="text-2xl mt-8 font-semibold text-gray-800 lg:text-3xl dark:text-white mb-4">
            {data.mdx.frontmatter.title}
          </h1>
          <h2 className="font-medium text-sm text-orange-500 mb-6 uppercase tracking-wide">
            {data.mdx.frontmatter.subtitle}
          </h2>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          
          <MDXProvider
            components={{
              p: Paragraf,
              a: MyLink,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              ol: NumberedList,
              ul: DiscList,
              blockquote: MyBlockquote,
              pre: MyPRE,
            }}
          >
            {children}
          </MDXProvider>

          <div className="flex justify-center my-6">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
                Galeria
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center mt-2">
                <GatsbyImage image={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

          <PostNavigation category={categoryLink} />

        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title + " - Pentoda - radiotechnika z dawnych lat"}
    description="Zapraszamy na niezwykłą podróż w przeszłość do świata starych radioodbiorników. Zobacz, jak ewoluowała technika i design przez dekady."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy", data.mdx.frontmatter.title]}
    pathname={"/"+data.mdx.frontmatter.category+"/"+data.mdx.frontmatter.slug}
  />
);
