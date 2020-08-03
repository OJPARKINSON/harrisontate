require('dotenv').config()

var accessToken = process.env.CONTENTAC
var host = process.env.CONTENTURL

module.exports = {
  siteMetadata: {
    title: `Harrison Tate`,
    description: `This is a portfolio site for Harrison Tate.`,
    author: `@OliverParkinson`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vmhm8j7yot4g',
        accessToken,
        host
      }
    },
  ]
}