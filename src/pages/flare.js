import React from 'react'
import Header2 from '../components/header2'
import SEO from '../components/seo'
import Card from '../components/card';

const SecondPage = () => (
  <div className="container2">
    <SEO title="Flare"/>
    <Header2 title="Flare"> 
    </Header2>
    <div className="imgContainer">
      <img className="FlareLogo" alt="" src={require("../images/FlareLogo.png")} />
    </div>
    <Card image={require('../images/AIDAN2GIF.gif')} text="hello"></Card>
  </div>  
)


export default SecondPage
