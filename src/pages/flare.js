import React from 'react'
import Header2 from '../components/header2'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardImg from '../components/cardImg'

const SecondPage = () => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare"/>
      <Header2 title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink=""/>
      <div className="imgContainer">
        <img className="FlareLogo" alt="" src={require("../images/FlareLogoCompressed-min.png")} />
      </div>
      <CardImg image={require('../images/AIDAN2GIF.gif')} alternative=""></CardImg>
      <CardImg image={require('../images/MEGIF.gif')} alternative=""></CardImg>
      <CardImg image={require('../images/MOSHED.gif')} alternative=""></CardImg>
      <CardImg image={require('../images/giffy3.gif')} alternative=""></CardImg>
      <CardImg image={require('../images/giffy1.gif')} alternative=""></CardImg>
      <div className="heroTitles">
        <iframe title="lookbook2" allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    </div>
  </Layout>
)


export default SecondPage
