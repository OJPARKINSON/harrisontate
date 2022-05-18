import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Layout, GifCard, ResponsivePlayer } from '@ui'
import '../ui/Header.css'

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
    gifs: {
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
  console.log(data)
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
        {data.gifs.nodes
          .filter(({ contentfulid }) => contentfulid)
          .reverse()
          .map(({ id, tag, img }) => (
            <GifCard
              key={id}
              credits={'https://www.instagram.com/' + tag}
              igtag={'@' + tag}
              vid={'https:' + img.file.url}
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
    ...gifs
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
