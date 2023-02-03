const maxWidth = 800

module.exports = {
  siteMetadata: {
    title: `Philip Renkert`,
    description: `Maker of Things`,
    author: "Philip Renkert",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`, // Required for Netlify CMS + Remark
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // Required for Netlify CMS + Remark
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    }, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: maxWidth,
                linkImagesToOriginal: false,
                quality:75,
                disableBgImage: true
              },
            },
        ],
      },
    },
    'gatsby-plugin-image',
    `gatsby-plugin-react-helmet`,
    `react-scroll-horizontal`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`, // gatsby-plugin-manifest is for people to make this an icon on a mobile devices
      options: {
        name: `Philip Renkert Portfolio`,
        short_name: `Philip Renkert`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
