module.exports = {
  siteMetadata: {
    title: `Gatsby Minimal Portfolio`,
    description: `A simple, minimal and beautiful portfolio built with Gatsby.`,
    author: `Debadipti Patra`,
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      behance: 'https://behance.in',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-minimal-portfolio`,
        short_name: `minimal`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-portfolio`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
