import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import "../components/layout.css"
import "../components/Header.css"
import ResponsivePlayer from '../components/ResponsivePlayer';

const IndexPage = () => (
 <div className="container">
  <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
  <Header styling="HeaderGroup" title="Harrison Tate" LinkedOne="Photos" LinkedTwo="Lookbook" firstLink="" secondLink="/Photos" thirdLink="/flare" />
  <div className="Hero">
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
      <a href="https://www.instagram.com/p/BkMxMMZH1bW/" target="_blank" rel="noopener noreferrer"><img alt="Chimney" src={require('../images/4.jpg')} /></a>
      <a href="https://www.instagram.com/p/BpEXqeoBfRJ/" target="_blank" rel="noopener noreferrer"><img alt="Person and red pipe" src={require('../images/Dfg.jpg')}/></a>
      <a href="https://www.instagram.com/p/BkMxOQ5nhG9/" target="_blank" rel="noopener noreferrer"><img alt="Dock through ship window" src={require('../images/90.jpg')}/> </a>
      <a href="https://www.instagram.com/p/BkMx1iSniv_/" target="_blank" rel="noopener noreferrer"><img alt="Ship corridor" src={require('../images/Blas.jpg')}/> </a>
      <a href="https://www.instagram.com/p/Bg3SYQIDuQr/" target="_blank" rel="noopener noreferrer"><img alt="Old office block with person stood infront" src={require('../images/BLJ.jpg')}/> </a>
      <a href="https://www.instagram.com/p/BoJIIT3h-9I/" target="_blank" rel="noopener noreferrer"><img alt="Person at art gallery" src={require('../images/Bluy2.jpg')}/></a>
      <a href="https://www.instagram.com/p/BkMxNGAH_wc/" target="_blank" rel="noopener noreferrer"><img alt="Old TV" src={require('../images/D.jpg')}/> </a>
      <a href="https://www.instagram.com/p/BpEXh0LBNDt/" target="_blank" rel="noopener noreferrer"><img alt="Person walking down street" src={require('../images/64tygh.jpg')}/> </a>
      <a href="https://www.instagram.com/p/BoJIQR-hdet/" target="_blank" rel="noopener noreferrer"><img alt="Far crane though fence" src={require('../images/ktcg.jpg')}/></a>
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
