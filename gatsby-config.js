const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Kelsey Oates | UX Designer and Writer',
  },
  plugins: 
  [
    'gatsby-plugin-react-helmet',
    
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1120711,
        sv: 6
      },
    },
]

};
