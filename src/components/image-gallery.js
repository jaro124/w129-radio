import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "radioodbiorniki-lampowe/aga-431a" }
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
  `);

  const images = data.allFile.edges.map((edge) =>
    getImage(edge.node.childImageSharp)
  );

  const path = "D:/projekty/w129-radio/data/radioodbiorniki-lampowe/dux-v54/index.mdx";

  // Funkcja wyciągająca fragment
  function extractFragment(path) {
    const regex = /data\/(.*?)\/index/;
    const match = path.match(regex);
    if (match && match[1]) {
      let fragment = match[1];
      // Usuwanie początkowego i końcowego znaku "/"
      if (fragment.startsWith('/')) {
        fragment = fragment.substring(1);
      }
      if (fragment.endsWith('/')) {
        fragment = fragment.substring(0, fragment.length - 1);
      }
      return fragment;
    }
    return null;
  }
  
  const fragment = extractFragment(path);
  console.log(fragment); // Wyjście: radioodbiorniki-lampowe/dux-v54
  
  console.log(images)
  
  return (
    <div className="bg-slate-200">
      <h1>Gallery</h1>
      <div className="flex flex-col justify-center content-center">
        {images.map((image, index) => (
          <div key={index} className="mt-2">
            <GatsbyImage image={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default ImageGallery;
