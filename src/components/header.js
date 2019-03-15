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
          <div className={this.props.styling}>
          <a href={this.props.firstLink}><h1>{this.props.title}</h1></a>
          <a className="Photos" href={this.props.secondLink}>{this.props.LinkedOne}</a>
          <a className="Lookbook" href={this.props.thirdLink}>{this.props.LinkedTwo}</a>
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
