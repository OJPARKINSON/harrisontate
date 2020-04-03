const siteAddress = new URL("https://www.harrisontate2.s3.amazonaws.com")

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
        accessToken: '740515ae0c26c730969e370d32096f0479915f781291abdf8b4e6ca494c635b1'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "harrisontate2",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
  ]
}