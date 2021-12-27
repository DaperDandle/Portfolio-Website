require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Daniel Weber's Portfolio",
    description: "My portfolio with the projects I've completed",
    author: "Daniel Weber",
  },
  plugins: [
    "gatsby-plugin-image",

    "gatsby-transformer-sharp",

    "gatsby-plugin-sharp",

    "gatsby-plugin-sass",

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
