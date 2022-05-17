import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Layout, Header, SEO, CardVid, ResponsivePlayer } from '../components'
import '../components/Header.css'

interface GalleryProps {
  data: {
    allFile: {
      edges: {
        node: {
          childImageSharp: {
            fluid: any
          }
        }
      }[]
    }
    flareLogo: {
      tag: string
      img: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    flareVideo: {
      tag: string
      img: {
        file: {
          url: string
        }
      }
    }
    allContentfulGif: {
      nodes: [
        {
          contentfulid: string
          id: string
          tag: string
          img: { file: { url: string } }
        }
      ]
    }
  }
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <div className="container flareLayout">
      <Layout title="Flare" styling="HeaderGroup">
        <div className="imgContainer">
          <GatsbyImage
            className="FlareLogo"
            alt={data.flareLogo.tag}
            image={data.flareLogo.img.gatsbyImageData}
          />
        </div>
        {data.allContentfulGif.nodes
          .filter((node) => node.contentfulid)
          .reverse()
          .map((node) => (
            <CardVid
              key={node.id}
              credits={'https://www.instagram.com/' + node.tag}
              igtag={'@' + node.tag}
              vid={'https:' + node.img.file.url}
            />
          ))}
        <div className="heroTitles" id="harrisonVid">
          <ResponsivePlayer
            playsinline={true}
            key={data.flareVideo.tag}
            url={'https:' + data.flareVideo.img.file.url}
          />
        </div>
        <footer style={{ color: 'white' }}>
          <h3>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
          </h3>
        </footer>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulGif(filter: { contentfulid: { gte: 0 } }) {
      nodes {
        id
        tag
        contentfulid
        img {
          title
          file {
            url
          }
          gatsbyImageData(
            sizes: "2000px 1500px 1000px"
            breakpoints: [400, 750, 1080, 1366, 1920]
            formats: [WEBP]
            quality: 100
          )
        }
      }
    }
    flareLogo: contentfulGif(tag: { eq: "flare-logo" }) {
      id
      tag
      img {
        title
        gatsbyImageData(
          sizes: "2000px 1500px 1000px"
          breakpoints: [400, 750, 1080, 1366, 1920]
          formats: [WEBP]
          quality: 100
        )
      }
    }
    ...flareVideo
  }
`
