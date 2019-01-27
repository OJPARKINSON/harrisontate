import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

//https://css-tricks.com/snippets/css/complete-guide-grid/

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
            <Link to=""><h1 className="firstPage">Harrison Tate</h1></Link>
            <Link className="Photos" to="/Photos">Photos</Link>
            <Link className="Lookbook" to="/flare">Lookbook</Link>
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
