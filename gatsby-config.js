module.exports = {
  siteMetadata: {
    title: `TDCX Todos`,
    description: `Todos for tdcx challenge`,
    keywords: `challenge, tdcx`,
  },
  pathPrefix: process.env.PATH_PREFIX,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:200,300,400,500,600,700`],
        display: "swap",
      },
    }
  ],
};
