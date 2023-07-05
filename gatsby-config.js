module.exports = {
  siteMetadata: {
    siteTitle: `Warehouse Sheriff Docs`,
    defaultTitle: `WHS Docs`,
    siteTitleShort: `WHS Docs`,
    siteDescription: `Collective information about Warehouse Sheriff for both technical and operations.`,
    siteUrl: `https://documentation.warehousesheriff.com`,
    siteAuthor: `@warehousesheriff`,
    siteImage: `/`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        homePath: `src/home`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/warehousesheriff/whs-docs`,
        baseDir: `/`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WHS Docs`,
        short_name: `WHS Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://documentation.warehousesheriff.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
