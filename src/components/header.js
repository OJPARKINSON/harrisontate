import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import './Header.css'
import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.HandeleScroll)
  }
  HandeleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  } 
    render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}> 
        <div className="HeaderGroup">
          <h1>Harrison Tate</h1>
          <Link className="Photos" to="/Photos">Photos</Link>
          <Link className="Videos" to="/Photos">Videos</Link>
          <Link className="Flare" to="/Flare">Flare logo</Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
