import React from 'react'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

import './layout.css'

interface ResponsivePlayerProps {
  url: string
  playsinline: boolean
}

const ResponsivePlayer = ({ url, playsinline }: ResponsivePlayerProps) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      preload="auto"
      muted
      controls={true}
      url={url}
      width="100%"
      height="100%"
      loop
      playsinline={playsinline}
    />
  </div>
)

export default ResponsivePlayer

export const query = graphql`
  fragment flareVideo on Query {
    flareVideo: contentfulGif(tag: { eq: "flare-video" }) {
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
