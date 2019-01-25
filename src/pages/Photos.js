import React from 'react'
import Header2 from '../components/header2'
import SEO from '../components/seo'

const SecondPage = () => (
<div className="container3">
    <SEO title="Photos"/>
    <Header2 title="Photos" LinkedOne="Harrison Tate" LinkedTwo="Flare" firstLink="/Photos" secondLink="" thirdLink="/flare"/>
    <div id="img-container" className="row">
        <div className="column">
            <img src={require('../images/red/crane-r9-min.jpg')}  alt="image of buidling under construction in distance"/>
            <img src={require('../images/green/DSC_0206.jpg')}  alt="image of shopping center in leeds"/> 
            <img src={require('../images/green/abi-and-elise.jpg')}   alt="image of two Photographers down narrow street"/>
            <img src={require('../images/green/DSC_0294.jpg')}   alt="image of a couple on a bridge"/>
            <img src={require('../images/green/DSC_0947.jpg')}   alt="image of teenager on steps in a street"/>
            <img src={require('../images/green/GWINDOW.jpg')}   alt="image of a reflection of a highstreet"/>
            <img src={require('../images/green/JAYGO.jpg')}   alt="image of dog running in field"/>
            <img src={require('../images/green/greens.jpg')}   alt="image of tenager in a narrow street"/>
        </div>
        <div className="column">
            <img src={require('../images/black/SAM-BL-min.jpg')}   alt="image of teenager in middel of water feature"/>
            <img src={require('../images/black/160-min.jpg')}   alt="image of groom at wedding"/>
            <img src={require('../images/black/harry6.jpg')}   alt="image of two tenagers"/>
            <img src={require('../images/black/b-and-w-min.jpg')}   alt="image of tenager in a narrow street"/>
            <img src={require('../images/black/B-P-min.jpg')}   alt="image of pigeon near stepps"/>
            <img src={require('../images/black/BL-EL-min.jpg')}   alt="image of woman on a escalator"/>
            <img src={require('../images/green/jjj.jpg')}  alt="image of tenager jumping between rocks"/>
        </div>
        <div className="column">
            <img src={require('../images/red/A.B-YELLOW-min.jpg')}  alt="image of tenager stood next to yellow bollard"/>
            <img src={require('../images/red/bloody-york-at-2-min.jpg')}  alt="long exposure image of cars passing"/>
            <img src={require('../images/green/DSC_0213.jpg')}   alt="image of teenager sat on wall"/>
            <img src={require('../images/red/crsn-min.jpg')}   alt="image of port skyline"/>
            <img src={require('../images/red/DSC_0082-min.jpg')}   alt="image of port skyline"/>
            <img src={require('../images/red/DSC_5621-min.jpg')}   alt="image of couple walking down beach"/>
            <img src={require('../images/green/DSC_0976.jpg')}  alt="image of teenagers down a street" />
            <img src={require('../images/green/green-JH.jpg')}   alt="image of a teenager walking down a street"/>
        </div>
    </div>
</div>  
)


export default SecondPage
