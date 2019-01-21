import React from 'react'
import '../components/card.css'

const Card = props => (
    <div className="Card">
        <img alt={props.alternative} src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card