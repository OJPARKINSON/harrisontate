import Link from 'gatsby-link'
import './Header.css'
import React from 'react'

//https://css-tricks.com/snippets/css/complete-guide-grid/


const header2 = props => (
    <div className="HeaderScrolled">
        <div className="HeaderGroup">
        <Link to={props.firstLink}><h1>{props.title}</h1></Link>
        <Link className="Photos" to={props.secondLink}>{props.LinkedOne}</Link>
        <Link className="Lookbook" to={props.thirdLink}>{props.LinkedTwo}</Link>
        </div>
    </div>
)

export default header2
