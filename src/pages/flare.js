import React from 'react'
import Header2 from '../components/header2'
import SEO from '../components/seo'
import CardImg from '../components/cardImg'



const SecondPage = () => (
  <div className="container2">
    <SEO title="Flare"/>
    <Header2 title="Flae" Link2="Harrison Tate"></Header2>
    <div className="imgContainer">
      <img className="FlareLogo" alt="" src={require("../images/FlareLogoCompressed-min.png")} />
    </div>
    <CardImg image={require('../images/AIDAN2GIF.gif')} text=""></CardImg>
    <CardImg image={require('../images/MEGIF.gif')} text=""></CardImg>
    <CardImg image={require('../images/MOSHED.gif')} text=""></CardImg>
    <CardImg image={require('../images/giffy3.gif')} text=""></CardImg>
    <CardImg image={require('../images/giffy1.gif')} text=""></CardImg>
    <div className="heroTitles">
      <iframe title="lookbook2" allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  </div>  
)


export default SecondPage
