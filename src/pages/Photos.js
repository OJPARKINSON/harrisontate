import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image' 

import Header from '../components/header';
import '../components/layout.css'
import "../components/Header.css"


const SecondPage = ({ data }) => {
  console.log(data?.allContentfulImages?.nodes)
return (
    <Layout>
        <SEO title="Photos"/>
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
)};

export default SecondPage;

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
