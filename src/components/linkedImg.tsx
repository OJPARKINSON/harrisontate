import React from 'react'
import '../components/layout.css'
import { GatsbyImage } from 'gatsby-plugin-image'

interface LinkedImgsProps {
  siteLink: string
  alt: string
  id: string
  image: any
}

const LinkedImgs = ({ siteLink, alt, id, image }: LinkedImgsProps) => (
  <a href={siteLink} target="_blank" rel="noopener noreferrer">
    <GatsbyImage alt={alt} id={id} image={image} />
  </a>
)

export default LinkedImgs
