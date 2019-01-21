import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Harrison Tate</h1>
        <p>Welcome to my photography and photography portfolio site.</p>
      </div>
    </div>
    <div className="heroPics">
      <h2>Pictures</h2>
    </div>
  </Layout>

)


export default IndexPage
