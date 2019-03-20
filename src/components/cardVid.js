import React from 'react'
import '../components/layout.css'

const CardImg = props => (
    <div className="Card">
        <video className="leftCard" alt={props.alternative}  src={props.vid} controls={false} loop playsInline preload="auto" playing="true" autoPlay muted></video>
        <a target="_blank" rel="noopener noreferrer" className="igtag" href={props.credits}><p>{props.igtag}</p></a>
    </div>
)

export default CardImg 
