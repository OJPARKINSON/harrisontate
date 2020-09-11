import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout';
import '../components/layout.css'
import "../components/Header.css"
import Header from '../components/header';


const SecondPage = ({ data }) => {
  const images = data.allContentfulImages.edges.filter(edge => edge.node.title !== "harrisonlanding");
  return (
    <Layout>
        <SEO title="Photos"/>
        <Header styling="PHeaderGroup HeaderGroup" title="Photos" LinkedOne="Harrison Tate" LinkedTwo="Flare" firstLink="/Photos" secondLink="" thirdLink="/flare"/>
        <div id="img-container" className="row">
            <div className="column">
                {images.map(edge => (
                    <img src={"https:" + edge.node.image.file.url } key={"i" + edge.node.title} id={"i" + edge.node.title} alt={edge.node.alternative} />
                ))}
            </div>
        </div>
    </Layout>
  )
};

export default SecondPage
export const query = graphql`
{
    allContentfulImages(limit: 24){
        edges {
            node {
                title
                alternative
                image {
                    file {
                       url
                    }
                }
            }
        }
    }
}
`
