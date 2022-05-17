import React from 'react'
import '../components/layout.css'

interface CardVidProps {
  vid: string
  igtag: string
  credits: string
}

const CardVid = (props: CardVidProps) => (
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

export default CardVid
