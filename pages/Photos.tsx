import Image from 'next/image'
import { fetchGraphQL } from '../lib/utils'
import Layout from 'components/layout'

interface PhotosProps {
  images: {
    items: [
      {
        id: string
        alternative: string
        image: {
          url: string
        }
      }
    ]
  }
}

export default function Photos({ images }: PhotosProps) {
  return (
    <Layout title="Photos" styling="PHeaderGroup HeaderGroup">
      <div id="img-container" className="row">
        <div className="column">
          {images.items.map(({ alternative, image, id }) => (
            <Image
              width={600}
              height={1000}
              key={alternative}
              alt={alternative}
              src={image.url}
              id={id}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const quote = `
  {
    images: imagesCollection(where: { title_not: "harrisonlanding" }) {
      items {
        title
        alternative
        image {
          title
          url
        }
      }
    }
  }
`
  return {
    props: { preview, ...((await fetchGraphQL(quote)) ?? []) },
  }
}
