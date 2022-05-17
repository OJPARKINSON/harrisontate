import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { SEO, Header, Layout } from '../components'
import '../components/layout.css'
import '../components/Header.css'

interface GalleryProps {
  data: {
    allContentfulImages: {
      nodes: [
        {
          id: string
          alternative: string
          image: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      ]
    }
  }
}

const Gallery = ({ data }: GalleryProps) => (
  <Layout title="Photos" styling="PHeaderGroup HeaderGroup">
    <div id="img-container" className="row">
      <div className="column">
        {data?.allContentfulImages?.nodes?.map(({ alternative, image, id }) => (
          <GatsbyImage
            key={alternative}
            alt={alternative}
            image={image?.gatsbyImageData}
            id={id}
          />
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

export const query = graphql`
  {
    allContentfulImages(filter: { title: { ne: "harrisonlanding" } }) {
      nodes {
        title
        alternative
        image {
          title
          gatsbyImageData(quality: 100, formats: [WEBP])
        }
      }
    }
  }
`

export default Gallery
