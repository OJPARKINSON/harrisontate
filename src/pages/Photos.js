import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image' 
import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo'

import '../components/layout.css'
import "../components/Header.css"


const SecondPage = ({ data }) => (
  <Layout>
      <Seo title="Photos"/>
      <Header styling="PHeaderGroup HeaderGroup" />
      <div id="img-container" className="row">
          <div className="column">
              {data?.allContentfulImages?.nodes?.map(node => 
                  <GatsbyImage alt={node?.alternative} image={node.image.gatsbyImageData} key={"i" + node?.title} id={node?.id}/>
              )}
          </div>
      </div>
      <footer>
          <h3>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
          </h3>
      </footer>
  </Layout>
);

export const query = graphql`
{
  allContentfulImages(filter: {title: {ne: "harrisonlanding"}}) {
    nodes {
      title
      alternative
      image {
        title
        gatsbyImageData
      }
    }
  }
}
`

export default SecondPage;