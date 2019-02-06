import React from 'react'
import '../components/layout.css'

const CardImg = props => (
    <div className="Card">
        <img className="leftCard" alt={props.alternative}  src={props.image}></img>
        <a target="_blank" rel="noopener noreferrer" class="igtag" href={props.credits}><p>{props.igtag}</p></a>
    </div>
)


export default CardImg 
