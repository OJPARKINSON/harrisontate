import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'

const SecondPage = ({data}) => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare" />
      <Header styling="HeaderGroup" />
      <div className="imgContainer">
        <GatsbyImage className="FlareLogo" alt={data.flareLogo.tag}  image={data.flareLogo.img.gatsbyImageData}/>
      </div>
      {data.allContentfulGif.nodes.filter(({contentfulid}) => contentfulid).reverse().map(node => (
        <CardVid key={node.id} credits={"https://www.instagram.com/" + node.tag} igtag={"@" + node.tag} vid={"https:" + node.img.file.url} />
      ))}
      <div className="heroTitles" id="harrisonVid">
        <ResponsivePlayer playsinline key={data.flareVideo.tag} url={"https:" + data.flareVideo.img.file.url} />
      </div>
    <footer style={{color: 'white'}}>
    <h3>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
    </h3>
    </footer>
    </div>
  </Layout>
)

export default SecondPage
export const query = graphql`
{
  allContentfulGif(filter: {contentfulid: {gte: 0}}) {
    nodes {
      id
      tag
      contentfulid
      img {
        title
        file {
          url
        }
        gatsbyImageData(layout: FIXED)
      }
    }
  }
  flareLogo: contentfulGif(tag: {eq: "flare-logo"}) {
    id
    tag
    img {
      title
      gatsbyImageData(layout: FIXED)
    }
  }
  flareVideo: contentfulGif(tag: {eq: "flare-video"}) {
    id
    tag
    img {
      title
      file {
        url
      }
    }
  }
}
`