/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pentoda - radiotechnika z dawnych lat`,
    titleTemplate: "Pentoda - radiotechnika z dawnych lat",
    description: `Pentoda - radiotechnika z dawnych lat`,
    keywords: [`radia`, `lampy`, `czasopisma`],
    author: `w129`,
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/site-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@w129",
    lang: "pl-PL",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/w129-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/radio/*`, `/about`],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/images/svg-icons/" 
        }
      }
    }
  ],
};
