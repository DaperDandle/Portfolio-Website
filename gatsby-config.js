require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://daniel-weber-portfolio.netlify.app/",
    title: "Dan Weber",
    description: "Daniel Weber's front-end portfolio",
    author: "Daniel Weber",
  },
  plugins: [
    "gatsby-plugin-image",

    "gatsby-transformer-sharp",

    "gatsby-plugin-sharp",

    "gatsby-plugin-sass",

    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "m4yx096ojmx1",
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
