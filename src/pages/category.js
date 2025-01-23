import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/core/layout"
import Seo from "../components/core/seo"
import CardCategory from "../components/card-category.js"

const userConfig = require("../../config.js");

export const query = graphql`
  query {
    allMdx {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
      }
    }
    allFile(filter: {extension: {eq: "jpg"}, name: {regex: "/^category/"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const CategoryList = ({data}) => {
  var categories = userConfig.categories
  
  const categoryCounters = data.allMdx.group
  const categoryImages = data.allFile.edges
  
  categories.forEach(category => {
      categoryCounters.forEach(categoryCounter => {
        if(category.name===categoryCounter.fieldValue)
          category.counter = categoryCounter.totalCount
      })
      categoryImages.forEach(categoryImage => {
        if(category.image===categoryImage.node.name)
          category.image = getImage(categoryImage.node.childImageSharp)
    })
  })
  
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
              Kategorie eksponatów
            </h1>
          </div>

          {categories.map((category) => (
            <CardCategory key={category.name} category={category} />
          ))}

        </div>
      </div>
    </Layout>
  );
};

export default CategoryList;

export const Head = () => (
  <Seo
    title="Pentoda - radiotechnika z dawnych lat"
    description="Zapraszamy na niezwykłą podróż w przeszłość do świata starych radioodbiorników. Zobacz, jak ewoluowała technika i design przez dekady."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy"]}
    pathname="/category"
  />
);
