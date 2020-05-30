module.exports = {
  siteMetadata: {
    title: `sinkopuba`,
    description: `Sinkopere Opuba - Sharing thoughts on code, technology, engineering, and expriences.`,
    author: `@sinkopuba`,
    twitterUsername: `@sinkopuba`,
    siteUrl: "https://sinkopuba.com",
    image: `src/images/sinkopuba.png`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://sinkopuba.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D014B`,
        theme_color: `#1D014B`,
        display: `minimal-ui`,
        icon: `src/images/sinkopuba.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        // gatsby-remark-relative-images must
        // go before gatsby-remark-images

        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 700,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
