import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/core/layout.js";
import Seo from "../components/core/seo.js";
import {
  Paragraf,
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

export const query = graphql`
  query ($id: String!, $category: String!) {
    mdx(id: { eq: $id }, frontmatter: { category: { eq: $category } }) {
      frontmatter {
        title
        subtitle
        hero_image_alt
        hero_image_author
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl font-medium text-black dark:text-gray-400 mb-2">
            {data.mdx.frontmatter.title}
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            {data.mdx.frontmatter.subtitle}
          </h2>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>Autor: {data.mdx.frontmatter.hero_image_author}</p>
          <MDXProvider
            components={{
              p: Paragraf,
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
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
