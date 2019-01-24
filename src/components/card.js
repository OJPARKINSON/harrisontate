import React from 'react'
import '../components/Layout.css'

const Card = props => (
    <div className="Card">
        <img className="leftCardImg" alt={props.alternative} src={props.image}></img>
        <p className="rightCardText">{props.text}</p>
    </div>
)

export default Card