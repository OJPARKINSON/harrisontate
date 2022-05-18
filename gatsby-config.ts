require('dotenv').config()

var accessToken = process.env.CONTENT__ACCESS_TOKEN
var host = process.env.CONTENT_URL

module.exports = {
  siteMetadata: {
    title: `Harrison Tate`,
    description: `This is a portfolio site for Harrison Tate.`,
    author: `@OliverParkinson`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@ui': 'src/ui/',
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vmhm8j7yot4g',
        accessToken,
        host,
      },
    },
  ],
}
