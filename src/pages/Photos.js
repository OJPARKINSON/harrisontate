import { graphql } from 'gatsby'
import Img from "gatsby-image"
import React from 'react'

import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo'
import '../components/layout.css'
import "../components/Header.css"


const SecondPage = ({ data }) => (
    <Layout>
        <SEO title="Photos"/>
        <Header styling="PHeaderGroup HeaderGroup" />
        <div id="img-container" className="row">
            <div className="column">
                {data?.allContentfulImages?.nodes?.map(node => 
                    <Img alt={node?.alternative} fluid={node?.image?.fluid} id={node?.id}/>
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

export default SecondPage;

export const query = graphql`
{
  allContentfulImages(filter: {title: {ne: "harrisonlanding"}}) {
    nodes {
      title
      alternative
      image {
        title
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`
