import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const Layout = ({ props, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <div>
          <Helmet title={data.site.siteMetadata.title} meta={[{ name: 'description', content: 'sample'}, { name: 'keywords', content: 'sample, something'}]}/>
          {children}
          <footer style={{color: 'white'}}>
          <h3>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
          </h3>
          </footer>
        </div>
    )}/>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
