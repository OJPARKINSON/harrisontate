import Link from 'gatsby-link'
import './Header.css'
import React from 'react'

//https://css-tricks.com/snippets/css/complete-guide-grid/


const header2 = props => (
    <div className="HeaderScrolled">
        <div className="HeaderGroup">
        <Link to="/"><h1>{props.title}</h1></Link>
        <Link className="Photos" to="/Photos">Photos</Link>
        <Link className="Lookbook" to="/flare">Lookbook</Link>
        </div>
    </div>
)


export default header2
