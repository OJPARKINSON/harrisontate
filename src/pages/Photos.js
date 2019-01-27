import React from 'react'
import Header2 from '../components/header2'
import '../components/layout.css'
import SEO from '../components/seo'

const SecondPage = () => (
<div className="container3">
    <SEO title="Photos"/>
    <Header2 title="Photos" LinkedOne="Harrison Tate" LinkedTwo="Flare" firstLink="/Photos" secondLink="" thirdLink="/flare"/>
    <div id="img-container" className="row">
        <div className="column">
            <img src={require('../images/red/crane-r9-min.jpg')}  alt="buidling under construction in distance"/>
            <img src={require('../images/green/DSC_0206.jpg')}  alt="shopping center in leeds"/> 
            <img src={require('../images/green/abi-and-elise.jpg')}   alt="two Photographers down narrow street"/>
            <img src={require('../images/green/DSC_0294.jpg')} alt="a couple on a bridge"/>
            <img src={require('../images/green/DSC_0947.jpg')}   alt="teenager on steps in a street"/>
            <img src={require('../images/green/GWINDOW.jpg')}   alt="a reflection of a highstreet"/>
            <img src={require('../images/green/JAYGO.jpg')}   alt="dog running in field"/>
            <img src={require('../images/green/greens.jpg')}   alt="tenager in a narrow street"/>
        </div>
        <div className="column">
            <img src={require('../images/black/SAM-BL-min.jpg')}   alt="teenager in middel of water feature"/>
            <img src={require('../images/black/160-min.jpg')}   alt="groom at wedding"/>
            <img src={require('../images/black/harry6.jpg')}   alt="two tenagers"/>
            <img src={require('../images/black/b-and-w-min.jpg')}   alt="tenager in a narrow street"/>
            <img src={require('../images/black/B-P-min.jpg')}   alt="pigeon near stepps"/>
            <img src={require('../images/black/BL-EL-min.jpg')}   alt="woman on a escalator"/>
            <img src={require('../images/green/jjj.jpg')}  alt="tenager jumping between rocks"/>
        </div>
        <div className="column">
            <img src={require('../images/red/A.B-YELLOW-min.jpg')}  alt="tenager stood next to yellow bollard"/>
            <img src={require('../images/red/bloody-york-at-2-min.jpg')}  alt="long exposure cars passing"/>
            <img src={require('../images/green/DSC_0213.jpg')}   alt="teenager sat on wall"/>
            <img src={require('../images/red/crsn-min.jpg')}   alt="port skyline"/>
            <img src={require('../images/red/DSC_0082-min.jpg')}   alt="port skyline"/>
            <img src={require('../images/red/DSC_5621-min.jpg')}   alt="couple walking down beach"/>
            <img src={require('../images/green/DSC_0976.jpg')}  alt="teenagers down a street" />
            <img src={require('../images/green/green-JH.jpg')}   alt="a teenager walking down a street"/>
        </div>
    </div>
</div>  
)


export default SecondPage
