// import dotevn from "dotenv"

// dotevn.config({ path: ".env" })

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Techscienceonline Forum`,
    description: `A forum/blog application made with Gatsby.`,
    author: `Vaibhav Khulbe`,
    url: `https://techscienceonline.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TechScienceonline Forum`,
        short_name: `Forum`,
        start_url: `/`,
        background_color: `##9250b4`,
        theme_color: `##9250b4`,
        display: `minimal-ui`,
        icon: `src/images/logo/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    // Gatsby Sanity plugin which is used to fetch the Sanity backend data to Gatsby frontend
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `kcm6olxr`,
        dataset: `production`,
        // This is used to have real-time editing enabled as what we change on Sanity, it will automatically build in Gatsby
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
