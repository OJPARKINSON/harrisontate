import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import "../components/layout.css"
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import LinkedImgs from '../components/linkedImg.js';
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  //src='../images/harrisonlanding.jpg'
  return (
  <div className="container">
    <img alt="Harrison Tate" preload="true" className="loader"  /> 
    <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
    <Header styling="HeaderGroup" title="Harrison Tate" LinkedOne="Photos" LinkedTwo="Lookbook" firstLink="/" secondLink="/Photos" thirdLink="/flare" />
    <div className="Hero-Image">
      <div className="scroll-downs"><div className="mousey"><div className="scroller"></div></div></div> 
    </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        <p>add image shit</p>
      </div>
      <div className="heroTitles">
        <h2>Lookbook</h2>
        <div className="heroTitles" id="harrisonVid">
          {data.allContentfulVideo.edges.map(edge => (
            <ResponsivePlayer playsinline key={edge.node.title} url={"https:" + edge.node.video.file.url} />
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
    </div>
  )
}

export default IndexPage
export const query = graphql`
query videos {
allContentfulVideo {
  edges {
      node {
      title
      video {
          file {
          url
          }
      }
      }
  }
  }
}
`
