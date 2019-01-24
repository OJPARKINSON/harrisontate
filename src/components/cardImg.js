import React from 'react'
import '../components/Layout.css'

const CardImg = props => (
    <div className="Card">
        <img className="leftCard" alt={props.alternative} src={props.image}></img>
    </div>
)


export default CardImg 
