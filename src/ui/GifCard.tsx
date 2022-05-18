import React from 'react'
import { graphql } from 'gatsby'

import './layout.css'

interface CardVidProps {
  vid: string
  igtag: string
  credits: string
}

const GifCard = (props: CardVidProps) => (
  <div className="Card">
    <video
      className="leftCard"
      src={props.vid}
      controls={false}
      loop
      playsInline
      preload="auto"
      autoPlay
      muted
    ></video>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="igtag"
      href={props.credits}
    >
      <p>{props.igtag}</p>
    </a>
  </div>
)

export default GifCard

export const query = graphql`
  fragment gifs on Query {
    gifs: allContentfulGif(filter: { contentfulid: { gte: 0 } }) {
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
  }
`
