const ID = process.env.ID;
const Token = process.env.Token;
module.exports = {
  siteMetadata: {
    title: `Harrison Tate`,
    description: `This is a portfolio site for Harrison Tate.`,
    author: `@OliverParkinson`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vmhm8j7yot4g',
        accessToken: '740515ae0c26c730969e370d32096f0479915f781291abdf8b4e6ca494c635b1'
      }
    }
  ],
  pathPrefix: "/harrisontate2",
}