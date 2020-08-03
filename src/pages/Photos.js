import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout';
import Img from "gatsby-image"
import { graphql } from 'gatsby'

import Header from '../components/header';
import '../components/layout.css'
import "../components/Header.css"


const SecondPage = ({ data }) => (
    <Layout>
        <SEO title="Photos"/>
        <Header styling="PHeaderGroup HeaderGroup" />
        <div id="img-container" className="row">
            <div className="column">
                {data.allContentfulImages.nodes.map(node => (
                    <Img fluid={node.image.fluid} key={"i" + node.title} id={"i" + node.title} alt={node.alternative} />
                ))}
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
            fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
