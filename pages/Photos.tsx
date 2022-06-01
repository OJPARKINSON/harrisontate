import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Layout } from '@ui'

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
            style={{ width: '100%' }}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default Gallery
export const query = graphql`
  {
    allContentfulImages(filter: { title: { ne: "harrisonlanding" } }) {
      nodes {
        title
        alternative
        image {
          title
          gatsbyImageData(
            width: 300
            breakpoints: [200, 300, 400, 450]
            formats: [WEBP]
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  }
`
