import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

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
                    <GatsbyImage key={node?.alternative} alt={node?.alternative} image={node?.image?.gatsbyImageData} id={node?.id}/>
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
        gatsbyImageData(quality: 100 formats: [WEBP])
      }
    }
  }
}
`

export default SecondPage;