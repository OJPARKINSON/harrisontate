import React from 'react'
import '../components/layout.css'



const LinkedImgs = ({siteLink, alt, id, link}) => (
    <a href={siteLink} target="_blank" rel="noopener noreferrer"><img alt id src={link} /></a> 
)

export default LinkedImgs 
