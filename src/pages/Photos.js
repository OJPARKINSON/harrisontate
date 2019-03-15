import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout';
import '../components/layout.css'
import "../components/Header.css"
import Header from '../components/header';
import { graphql } from 'gatsby'

const SecondPage = ({ data }) => (
<Layout>
    <SEO title="Photos"/>
    <Header styling="HeaderGroup" title="Photos" LinkedOne="Harrison Tate" LinkedTwo="Flare" firstLink="/Photos" secondLink="" thirdLink="/flare"/>
    <div className="altPhotos">

    </div>
    <div id="img-container" className="row">
        <div className="column">
            {data.allContentfulImages.edges.map(edge => (
                <img src={"https:" + edge.node.image.file.url } key={"i" + edge.node.title} id={"i" + edge.node.title} alt={edge.node.alternative} />
            ))}
        </div>
    </div>
    <footer>
        <h3>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
        </h3>
    </footer>
</Layout>
)
export default SecondPage
export const query = graphql`
query siteMetaTitleQuery {
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
