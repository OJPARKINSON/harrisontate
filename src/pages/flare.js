import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'

const SecondPage = () => (
  <Layout>
    <div className="container flareLayout">
      <SEO title="Flare" />
      <Header styling="HeaderGroup" title="Flare" LinkedOne="Photos" LinkedTwo="Harrison Tate" firstLink="/flare" secondLink="/Photos" thirdLink="" />
      <div className="imgContainer">
        <img className="FlareLogo" alt="" src={require("../images/FlareLogoCompressed-min.png")} />
      </div>
      <CardVid vid={require('../images/AIDAN2.mp4')} credits="https://www.instagram.com/aida.n_/" igtag="@aida.n_" alternative=""></CardVid>
      <CardVid vid={require('../images/ME.mp4')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardVid>
      <CardVid vid={require('../images/moshed.mp4')} credits="https://www.instagram.com/abibeckramdesignz/" igtag="@abibeckram" alternative=""></CardVid>
      <CardVid vid={require('../images/giffy3.mp4')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardVid>
      <CardVid vid={require('../images/giffy1.mp4')} credits="https://www.instagram.com/abibeckram/" igtag="@abibeckram" alternative=""></CardVid>
      <div className="heroTitles">
        <ResponsivePlayer />
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
