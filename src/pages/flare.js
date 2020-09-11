import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import { graphql } from 'gatsby'

const SecondPage = ({data}) => {
const assets = data.allContentfulGif.nodes;
return (
    <Layout>
      <div className="container flareLayout">
        <SEO title="Flare" />
        <Header styling="HeaderGroup" title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink="" />
        <div className="imgContainer">
        {assets.map(node => (
          <img className="FlareLogo" alt={node.tag}  src={"https:" + node.img.file.url}/>
        ))}
        </div>
        {assets.filter(node => node.contentfulid).reverse().map(node => (
          <CardVid key={node.id} credits={"https://www.instagram.com/" + node.tag} igtag={"@" + node.tag} vid={"https:" + node.img.file.url} />
        ))}
        <div className="heroTitles" id="harrisonVid">
          {assets.filter(node => node.tag === "flare-video").map(node => (
            <ResponsivePlayer playsinline key={node.tag} url={"https:" + node.img.file.url} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
export const query = graphql`
{
  allContentfulGif {
    nodes {
      id
      tag
      contentfulid
      img {
        file {
          contentType
          url
          fileName
        }
        title
        description
      }
    }
  }
}
`