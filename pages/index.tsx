import Image from 'next/image'
import dynamic from 'next/dynamic'

import { fetchGraphQL } from '../lib/utils'
import { LinkedImgs, ResponsivePlayer } from '@/components'

const Layout = dynamic(import('../components/layout'), { ssr: false })

interface IndexProps {
  harrisonLanding: {
    items: [
      {
        description: string
        url: string
      }
    ]
  }
  IntroIMGs: {
    items: [
      {
        id: string
        alt: string
        socialLink: string
        image: {
          url: string
        }
      }
    ]
  }
  FlareVideo: {
    items: [
      {
        tag: string
        img: {
          url: string
        }
      }
    ]
  }
}

export default function Index({
  harrisonLanding,
  IntroIMGs,
  FlareVideo,
}: IndexProps) {
  return (
    <Layout styling="HeaderGroup" title="Home">
      <div className="Hero-Image">
        <Image
          alt={harrisonLanding.items[0].description}
          className="loader"
          quality="100"
          height={1000}
          width={3000}
          placeholder="blur"
          priority={true}
          src={harrisonLanding.items[0].url}
          blurDataURL={harrisonLanding.items[0].url}
        />
      </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <ul className="imageContainer">
        {IntroIMGs.items.map(({ alt, id, image }) => (
          <LinkedImgs key={alt} alt={alt} id={id} image={image.url} />
        ))}
      </ul>
      <div className="heroTitles">
        <h2>Lookbook</h2>
        <div className="heroTitles" id="harrisonVid">
          <ResponsivePlayer
            playsinline={true}
            key={FlareVideo.items[0].tag}
            url={FlareVideo.items[0].img.url}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const quote = `
  {
    harrisonLanding: assetCollection(where: {title: "harrisonlanding"}) {
      items {
        title
        description
        url
        contentType
      }
    }
    IntroIMGs: indexCollection(order: [order_ASC]) {
      items {
        title
        alt
        image {
          url
        }
        order
      }
    }
    FlareVideo: gifCollection(where: {tag: "flare-video"}) {
      items {
        id
        tag
        img {
          url
        }
      }
    }
  }
  `
  return {
    props: { ...((await fetchGraphQL(quote)) ?? []) },
  }
}
