const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Kelsey Oates | UX Designer and Writer',
  },
  plugins: 
  [
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1120711,
        sv: 6
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-react-helmet', 
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`
]

};
