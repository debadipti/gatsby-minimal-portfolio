module.exports = {
  siteMetadata: {
    // site info
    title: `Gatsby Minimal Portfolio`,
    description: `A simple, minimal and beautiful portfolio built with Gatsby.`,
    // personal info
    author: `Debadipti Patra`,
    bio: `Hey, my name is Debadipti Patra. Provident laudantium rem aliquam exercitationem fugiat nisi consectetur illum dolorum, dolore aliquid placeat vero accusamus aperiam consequuntur.`,
    links: {
      github: 'https://github.com/debadipti',
      twitter: 'https://twitter.com/pdebadipti',
      behance: 'https://www.behance.net/pdebadipti',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
