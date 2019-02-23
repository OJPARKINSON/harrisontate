import React from 'react'
import '../components/layout.css'



const LinkedImgs = (props) => (
    <a href={props.siteLink} target="_blank" rel="noopener noreferrer"><img alt={props.alt} src={props.link} /></a> 
)

export default LinkedImgs 
