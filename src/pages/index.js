import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo' 


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
    </div>
    <div className="heroTitles">
      <h2>Pictures</h2>
    </div>
    <div className="imageContanier">
      <a href="https://www.instagram.com/p/BkMxMMZH1bW/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/4.jpg')}></img></a>
      <a href="https://www.instagram.com/p/BpEXqeoBfRJ/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/Dfg.jpg')}></img></a>
      <a href="https://www.instagram.com/p/BkMxOQ5nhG9/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/90.jpg')}></img> </a>
      <a href="https://www.instagram.com/p/BkMx1iSniv_/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/Blas.jpg')}></img> </a>
      <a href="https://www.instagram.com/p/Bg3SYQIDuQr/" target="_blank" rel="noopener noreferrer"><img src={require('../images/BLJ.jpg')}></img> </a>
      <img alt="" src={require('../images/Bluy2.jpg')}></img>
      <a href="https://www.instagram.com/p/BkMxNGAH_wc/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/D.jpg')}></img> </a>
      <a href="https://www.instagram.com/p/BpEXh0LBNDt/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/64tygh.jpg')}></img> </a>
      <a href="https://www.instagram.com/p/BoJIQR-hdet/" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../images/ktcg.jpg')}></img></a>
    </div>
    <div className="heroTitles">
      <h2>Lookbook</h2>
      <iframe allowFullScreen src="https://www.youtube.com/embed/sjHPpqmbYNo" rel="0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>

  </Layout>
  
)

export default IndexPage
