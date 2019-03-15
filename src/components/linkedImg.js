import React from 'react'
import '../components/layout.css'



const LinkedImgs = (props) => (
    <a href={props.siteLink} target="_blank" rel="noopener noreferrer"><img alt={props.alt} id={props.id} href={props.link} /></a> 
)

export default LinkedImgs 
