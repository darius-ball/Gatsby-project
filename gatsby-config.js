module.exports = {
    siteMetadata: {
        title: `Vitruvian`,
        description: 'Vitruvian is a cutting edge piece of hardware with immersive software that empowers you to do a full range of resistance based training in your own home.',
        author: `@vitruvianme`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
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
                name: `Vitruvian`,
                short_name: `vitruvian`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/vitruvian-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
