import React from 'react'
import SEO from '../components/seo' 
import Header from '../components/header'
import "../components/layout.css"
import "../components/Header.css"

const IndexPage = () => (
 <div className="container">
  <SEO title="Home" keywords={[`Harrison Tate`, `Portfolio`, `Photography`]} />
  <Header />
  <div className="Hero">
  </div>
    <div className="heroTitles">
      <h2>Pictures</h2>
    </div>
    <div className="imageContainer">
      <a href="https://www.instagram.com/p/BkMxMMZH1bW/" target="_blank" rel="noopener noreferrer"><img alt="Chimney" src={require('../images/4.webp')}/></a>
      <a href="https://www.instagram.com/p/BpEXqeoBfRJ/" target="_blank" rel="noopener noreferrer"><img alt="Person and red pipe" src={require('../images/Dfg.webp')}/></a>
      <a href="https://www.instagram.com/p/BkMxOQ5nhG9/" target="_blank" rel="noopener noreferrer"><img alt="Dock through ship window" src={require('../images/90.webp')}/> </a>
      <a href="https://www.instagram.com/p/BkMx1iSniv_/" target="_blank" rel="noopener noreferrer"><img alt="Ship corridor" src={require('../images/Blas.webp')}/> </a>
      <a href="https://www.instagram.com/p/Bg3SYQIDuQr/" target="_blank" rel="noopener noreferrer"><img alt="Old office block with person stood infront" src={require('../images/BLJ.webp')}/> </a>
      <a href="https://www.instagram.com/p/BoJIIT3h-9I/" target="_blank" rel="noopener noreferrer"><img alt="Person at art gallery" src={require('../images/Bluy2.webp')}/></a>
      <a href="https://www.instagram.com/p/BkMxNGAH_wc/" target="_blank" rel="noopener noreferrer"><img alt="Old TV" src={require('../images/D.webp')}/> </a>
      <a href="https://www.instagram.com/p/BpEXh0LBNDt/" target="_blank" rel="noopener noreferrer"><img alt="Person walking down street" src={require('../images/64tygh.webp')}/> </a>
      <a href="https://www.instagram.com/p/BoJIQR-hdet/" target="_blank" rel="noopener noreferrer"><img alt="Far crane though fence" src={require('../images/ktcg.webp')}/></a>
    </div>
    <div className="heroTitles">
      <h2>Lookbook</h2>
      <iframe title="lookbook" allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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