import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo' 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
    </div>
    <div className="heroPics">
      <h2>Pictures</h2>
    </div>
    <div className="imageContanier">
      <img src={require('../images/4.jpg')}></img>
      <img src={require('../images/64tygh.jpg')}></img> 
      <img src={require('../images/90.jpg')}></img> 
      <img src={require('../images/Blas.jpg')}></img> 
      <img src={require('../images/BLJ.jpg')}></img> 
      <img src={require('../images/Bluy2.jpg')}></img> 
      <img src={require('../images/D.jpg')}></img> 
      <img src={require('../images/Dfg.jpg')}></img>
      <img src={require('../images/ktcg.jpg')}></img>
    </div>
  </Layout>

)


export default IndexPage
