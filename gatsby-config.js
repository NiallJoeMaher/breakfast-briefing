const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Proven components versus traditional development`,
    description: `Breakfast briefing talk.`,
    author: `@marcysutton`
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        // disable gatsby-mdx plugin – use this when your site already uses gatsby-mdx
        mdx: true,
        // source directory for decks
        contentPath: `src/slides`,
        basePath: "/slides"
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Proven components versus traditional development`,
        short_name: `Breakfast Briefing`,
        start_url: `/`,
        background_color: `#FFCF01`,
        theme_color: `#FFCF01`,
        display: `minimal-ui`,
        icon: `src/images/x.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ]
};
