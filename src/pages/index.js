import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo' 
import Header from '../components/header'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <div className="Hero">
    </div>
    <div className="container">
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        <a href="https://www.instagram.com/p/BkMxMMZH1bW/" target="_blank" rel="noopener noreferrer">
          <img alt="" src={require('../images/4.jpg')}/>
        </a>
        <a href="https://www.instagram.com/p/BpEXqeoBfRJ/" target="_blank" rel="noopener noreferrer"><img alt="Chimney" src={require('../images/Dfg.jpg')}/></a>
        <a href="https://www.instagram.com/p/BkMxOQ5nhG9/" target="_blank" rel="noopener noreferrer"><img alt="person and red pipe" src={require('../images/90.jpg')}/> </a>
        <a href="https://www.instagram.com/p/BkMx1iSniv_/" target="_blank" rel="noopener noreferrer"><img alt="Dock through ship window" src={require('../images/Blas.jpg')}/> </a>
        <a href="https://www.instagram.com/p/Bg3SYQIDuQr/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/BLJ.jpg')}/> </a>
        <img alt="" src={require('../images/Bluy2.jpg')}/>
        <a href="https://www.instagram.com/p/BkMxNGAH_wc/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/D.jpg')}/> </a>
        <a href="https://www.instagram.com/p/BpEXh0LBNDt/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/64tygh.jpg')}/> </a>
        <a href="https://www.instagram.com/p/BoJIQR-hdet/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/ktcg.jpg')}/></a>
      </div>
      <div className="heroTitles">
        <h2>Lookbook</h2>
        <iframe title="lookbook" allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    </div>
  </Layout>
  
)

export default IndexPage
