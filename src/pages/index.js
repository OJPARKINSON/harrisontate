import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import ResponsivePlayer from '../components/ResponsivePlayer'
import LinkedImgs from '../components/linkedImg.js';
import "../components/layout.css"
import "../components/Header.css"

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Header styling="HeaderGroup" />
      <Img alt={data.allContentfulAsset.nodes[0].description} preload="true" className="loader" fluid={data.allContentfulAsset.nodes[0].fluid} /> 
      <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
      <div className="Hero-Image">
        <div className="scroll-downs"><div className="mousey"><div className="scroller"></div></div></div> 
      </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        {data.allContentfulIndex.nodes.map(node => (
          <LinkedImgs alt={node.alt} id={node.id} siteLink={node.socialLink} fluid={node.image.fluid} /> 
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
  )
}

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
        fluid(quality: 100, maxHeight: 2304, maxWidth: 4096) {
          ...GatsbyContentfulFluid
        }
        id
      }
    }
    allContentfulIndex(sort: {fields: order, order: ASC}) {
      nodes {
        title
        alt
        socialLink
        image {
          fluid(quality: 100, maxHeight: 750, maxWidth: 550) {
            ...GatsbyContentfulFluid
          }
        }
        id
        order
      }
    }
  }
`
