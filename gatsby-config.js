require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `Harrison Tate`,
    description: `This is a portfolio site for Harrison Tate.`,
    author: `@OliverParkinson`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vmhm8j7yot4g',
        accessToken: process.env.CONTENTAC,
        host: process.env.CONTENTURL
      }
    },
  ]
}