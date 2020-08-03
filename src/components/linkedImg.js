import React from 'react'
import '../components/layout.css'
import Img from "gatsby-image"

const LinkedImgs = ({siteLink, alt, id, fluid}) => (
    <a href={siteLink} target="_blank" rel="noopener noreferrer"><Img alt={alt} id={id} fluid={fluid} /></a> 
)

export default LinkedImgs 
