import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { LinkedImgs, ResponsivePlayer, Layout } from '@ui'

interface HomeProps {
  data: {
    harrisonlanding: {
      nodes: [
        {
          id: string
          description: string
          gatsbyImageData: IGatsbyImageData
          title: string
          file: {
            url: string
          }
        }
      ]
    }
    allContentfulIndex: {
      nodes: [
        {
          alt: string
          id: string
          socialLink: string
          image: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      ]
    }
    flareVideo: {
      tag: string
      img: {
        file: {
          url: string
        }
      }
    }
  }
}

const IndexPage = ({ data }: HomeProps) => {
  return (
    <Layout styling="HeaderGroup" title="Home">
      <GatsbyImage
        alt={data.harrisonlanding.nodes[0].description}
        className="loader"
        image={data.harrisonlanding.nodes[0].gatsbyImageData}
      />
      <div className="Hero-Image">
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        {data.allContentfulIndex.nodes.map((node) => (
          <LinkedImgs
            key={node.alt}
            alt={node.alt}
            id={node.id}
            siteLink={node.socialLink}
            image={node.image.gatsbyImageData}
          />
        ))}
      </div>
      <div className="heroTitles">
        <h2>Lookbook</h2>
        <div className="heroTitles" id="harrisonVid">
          <ResponsivePlayer
            playsinline={true}
            key={data.flareVideo.tag}
            url={'https:' + data.flareVideo.img.file.url}
          />
        </div>
      </div>
      <footer>
        <h3>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
        </h3>
      </footer>
    </Layout>
  )
}

export const query = graphql`
  {
    harrisonlanding: allContentfulAsset(
      filter: { title: { in: ["harrisonlanding", "Flare"] } }
    ) {
      nodes {
        title
        description
        file {
          url
          contentType
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [WEBP]
          quality: 100
          placeholder: BLURRED
        )
        id
      }
    }
    allContentfulIndex(sort: { fields: order, order: ASC }) {
      nodes {
        title
        alt
        socialLink
        image {
          gatsbyImageData(
            width: 300
            breakpoints: [200, 300, 400, 500]
            formats: WEBP
            quality: 100
          )
        }
        id
        order
      }
    }
    ...flareVideo
  }
`

export default IndexPage
