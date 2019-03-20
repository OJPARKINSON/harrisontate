import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import { graphql } from 'gatsby'

const SecondPage = ({data}) => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare" />
      <Header styling="HeaderGroup" title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink="" />
      <div className="imgContainer">
        <img className="FlareLogo" alt="" src={require("../images/FlareLogoCompressed-min.png")} />
      </div>
      {data.allContentfulGif.edges.map(edge => (
        <CardVid key={edge.node.id} credits={"https://www.instagram.com/" + edge.node.tag} igtag={"@" + edge.node.tag} vid={"https:" + edge.node.img.file.url} />
      ))}
      <div className="heroTitles" id="harrisonVid">
        {data.allContentfulVideo.edges.map(edge => (
           <ResponsivePlayer key={edge.node.title} url={"https:" + edge.node.video.file.url} />
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
query video {
allContentfulVideo {
  edges {
      node {
      id
      title
      video {
          file {
          url
          }
      }
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