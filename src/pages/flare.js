import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardImg from '../components/cardImg'
import Header from '../components/header'
import "../components/Header.css"
<<<<<<< HEAD
import ResponsivePlayer from '../components/ResponsivePlayer'

=======
>>>>>>> parent of 68f867f... vid added insted of youtube

const SecondPage = () => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare" />
      <Header styling="HeaderGroup" title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink="" />
      <div className="imgContainer">
        <img className="FlareLogo" alt="" src={require("../images/FlareLogoCompressed-min.png")} />
      </div>
      <CardImg image={require('../images/AIDAN2GIF.gif')} credits="https://www.instagram.com/aida.n_/" igtag="@aida.n_" alternative=""></CardImg>
      <CardImg image={require('../images/MEGIF.gif')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardImg>
      <CardImg image={require('../images/MOSHED.gif')} credits="https://www.instagram.com/abibeckramdesignz/" igtag="@abibeckram" alternative=""></CardImg>
      <CardImg image={require('../images/giffy3.gif')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardImg>
      <CardImg image={require('../images/giffy1.gif')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardImg>
      <div className="heroTitles">
<<<<<<< HEAD
       <ResponsivePlayer />
=======
        <iframe title="lookbook2" allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
>>>>>>> parent of 68f867f... vid added insted of youtube
      </div>
    
    <footer style={{color: 'white'}}>
    <h3>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
    </h3>
    </footer>
    </div>
  </Layout>
)


export default SecondPage
