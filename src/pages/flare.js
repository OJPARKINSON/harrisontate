import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import { graphql } from 'gatsby'
//src="../images/FlareLogoCompressed-min.png"
const SecondPage = ({data}) => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare" />
      <Header styling="HeaderGroup" title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink="" />
      <div className="imgContainer">
      {data.allContentfulAsset.nodes.filter(node => node.file.contentType === "image/png").map(node => (
        <img className="FlareLogo" alt={node.id}  src={"https:" + node.file.url}/>
      ))}
      </div>
      {data.allContentfulGif.edges.map(edge => (
        <CardVid key={edge.node.id} credits={"https://www.instagram.com/" + edge.node.tag} igtag={"@" + edge.node.tag} vid={"https:" + edge.node.img.file.url} />
      ))}
      <div className="heroTitles" id="harrisonVid">
        {data.allContentfulAsset.nodes.filter(node => node.file.contentType === "video/mp4").map(node => (
           <ResponsivePlayer playsinline key={node.title} url={"https:" + node.file.url} />
          ))}
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
  allContentfulAsset(filter: {title: {regex: "/(?:[Ff]lare)/"}}) {
    nodes {
      title
      id
      description
      file {
        url
        contentType
      }
    }
  }
  allContentfulGif(sort: { fields: [createdAt], order: ASC }) {
    edges {
        node {
        id
        tag
        img {
          file {
            url
          }
        }
        }
    }
    }
}
`