import React from 'react'
import { Link } from "gatsby"

const Header = ({ styling }) => {
  return (
    <ul className={styling}>
      <li><Link to="/"><h1>Harrison Tate</h1></Link></li>
      <li className="Photos"><Link to="/Photos" >Photos</Link></li>
      <li className="Lookbook"><Link to="/flare" >Flare</Link></li>
    </ul>
  )
}

export default Header
