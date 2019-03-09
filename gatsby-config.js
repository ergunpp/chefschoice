module.exports = {
  siteMetadata: {
    title: `Gurme Petler için Lezzet Festivali`,
    description: `En taze ve kaliteli içeriklerle hazırlanmış, şeker katkısız, sağlıklı super premium yaş mamalar`,
    author: `Atlaspet A.Ş.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chef's Choice - Petiniz için Lezzet Festivali`,
        short_name: `chefschoice`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/icons/ChefsChoiceLogoIcon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yawdzgyg7lyy`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: 'f746c878f4f7e98d23162953ac722beda15bf73cd1dd2b276d1d291e5d8be8f9',
        },
    },
    {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `chefschoicetr`,
    },
  },
  {
      resolve: 'gatsby-plugin-zopfli'
    },
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-KLR4J9K",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // Specify optional GTM environment details.
    },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
