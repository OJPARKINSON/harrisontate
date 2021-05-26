import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import { graphql } from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"

import ResponsivePlayer from '../components/ResponsivePlayer'
import LinkedImgs from '../components/linkedImg.js';
import "../components/layout.css"
import "../components/Header.css"

const IndexPage = ({ data }) => (
  <div className="container">
    <Header styling="HeaderGroup" />
    <GatsbyImage alt={data.allContentfulAsset.nodes[0].description} preload="true" className="loader" image={data.allContentfulAsset.nodes[0].gatsbyImageData} /> 
    <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
    <div className="Hero-Image">
      <div className="scroll-downs"><div className="mousey"><div className="scroller"></div></div></div> 
    </div>
    <div className="heroTitles">
      <h2>Pictures</h2>
    </div>
    <div className="imageContainer">
      {data.allContentfulIndex.nodes.map(node => (
        <LinkedImgs key={node.alt} alt={node.alt} id={node.id} siteLink={node.socialLink} image={node.image.gatsbyImageData} /> 
      ))}
    </div>
    <div className="heroTitles">
      <h2>Lookbook</h2>
      <div className="heroTitles" id="harrisonVid">
          <ResponsivePlayer playsinline key={data.allContentfulAsset.nodes[1].title} url={"https:" + data.allContentfulAsset.nodes[1].file.url} />
      </div>
    </div>
    <footer>
      <h3>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
      </h3>
    </footer>
  </div>
);

export default IndexPage
export const query = graphql`
{
  allContentfulAsset(filter: {title: {in: ["harrisonlanding", "Flare"]}}) {
    nodes {
      title
      description
      file {
        url
        contentType
      }
      id
      gatsbyImageData(
        formats: WEBP
        sizes: "(min-width: 100px) 1800px, 1400px, 200px"
        width: 1000
        layout: FULL_WIDTH
        quality: 100
      )
    }
  }
  allContentfulIndex(sort: {fields: order, order: ASC}) {
    nodes {
      title
      alt
      socialLink
      image {
        gatsbyImageData(
          formats: WEBP
          quality: 100
          outputPixelDensities: [0.1, 0.5, 0.75, 1]
          width: 600
        )
      }
      id
      order
    }
  }
}`
