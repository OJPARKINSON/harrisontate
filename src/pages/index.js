import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import "../components/layout.css"
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import LinkedImgs from '../components/linkedImg.js';
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
  <div className="container">
      {data.allContentfulAsset.nodes.filter(node => node.title === "harrisonlanding").map(node => (
        <img alt={node.description} preload="true" className="loader" src={"https:" + node.file.url} /> 
      ))}
    <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
    <Header styling="HeaderGroup" title="Harrison Tate" LinkedOne="Photos" LinkedTwo="Lookbook" firstLink="/" secondLink="/Photos" thirdLink="/flare" />
    <div className="Hero-Image">
      <div className="scroll-downs"><div className="mousey"><div className="scroller"></div></div></div> 
    </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        {data.allContentfulIndex.nodes.map(node => (
          <LinkedImgs alt={node.alt} id={node.id} siteLink={node.socialLink} link={"https:" + node.image.file.url} /> 
        ))}
      </div>
      <div className="heroTitles">
        <h2>Lookbook</h2>
        <div className="heroTitles" id="harrisonVid">
          {data.allContentfulAsset.nodes.filter(node => node.title === "Flare").map(node => (
            <ResponsivePlayer playsinline key={node.title} url={"https:" + node.file.url} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
export const query = graphql`
{
  allContentfulAsset {
    nodes {
      id
      title
      description
      file {
        url
        contentType
      }
    }
  }
  allContentfulIndex(sort: {fields: order, order: ASC}) {
    nodes {
      title
      alt
      socialLink
      image {
        file {
          url
        }
      }
      id
    }
  }
}

`
