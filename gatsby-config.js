module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Daniel Weber's Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-qLxPNQCv-FDdXqFc_h7uOJ2K00vjhp07KJj0dSmvU20",
        spaceId: "m4yx096ojmx1",
      },
    },
  ],
};
