import React from 'react'
import '../components/layout.css'
import { GatsbyImage } from "gatsby-plugin-image"

const LinkedImgs = ({siteLink, alt, id, image}) => (
    <a href={siteLink} target="_blank" rel="noopener noreferrer"><GatsbyImage alt={alt} id={id} image={image} /></a> 
)

export default LinkedImgs 
