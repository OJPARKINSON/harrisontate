import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import "../components/layout.css"
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer'
import LinkedImgs from '../components/linkedImg.js';

const IndexPage = () => (
 <div className="container">
  <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
  <Header styling="HeaderGroup" title="Harrison Tate" LinkedOne="Photos" LinkedTwo="Lookbook" firstLink="/" secondLink="/Photos" thirdLink="/flare" />
  <div rel="preLoad" className="Hero">
  <div className="scroll-downs">
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  </div>
    <div className="heroTitles">
      <h2>Pictures</h2>
    </div>
    <div className="imageContainer">
      <LinkedImgs siteLink="https://www.instagram.com/p/BkMxMMZH1bW/" alt="Chimney" link={require('../images/4.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/BpEXqeoBfRJ/" alt="Person and red pipe" link={require('../images/Dfg.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/BkMxOQ5nhG9/" alt="Dock through ship window" link={require('../images/90.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/BkMx1iSniv_/" alt="Ship corridor" link={require('../images/Blas.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/Bg3SYQIDuQr/" alt="Old office block with person stood infront" link={require('../images/BLJ.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/BoJIIT3h-9I/" alt="Person at art gallery" link={require('../images/Bluy2.jpg')} />  
      <LinkedImgs siteLink="https://www.instagram.com/p/BkMxNGAH_wc/" alt="Old TV" link={require('../images/D.jpg')} /> 
      <LinkedImgs siteLink="https://www.instagram.com/p/BpEXh0LBNDt/" alt="Person walking down street" link={require('../images/64tygh.jpg')} />
      <LinkedImgs siteLink="https://www.instagram.com/p/BoJIQR-hdet/" alt="Far crane though fence" id="lastImg" link={require('../images/ktcg.jpg')} />
    </div>
    <div className="heroTitles">
      <h2>Lookbook</h2>
      <ResponsivePlayer />
    </div>
    <footer>
    <h3>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
    </h3>
    </footer>
  </div>
  
)

export default IndexPage

