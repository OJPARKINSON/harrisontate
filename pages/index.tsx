import { lazy } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { fetchGraphQL } from '../lib/utils'
import { LinkedImgs } from '@/components'

const Layout = dynamic(import('../components/layout'), { ssr: false })
const ResponsivePlayer = lazy(() => import('../components/ResponsivePlayer'))

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
          layout="fill"
          objectFit="cover"
          height="100vh"
          width="100vw"
          sizes="100vw"
          quality="100"
          src={harrisonLanding.items[0].url}
        />
      </div>
      <div className="heroTitles">
        <h2>Pictures</h2>
      </div>
      <div className="imageContainer">
        {IntroIMGs.items.map(({ alt, id, socialLink, image }) => (
          <LinkedImgs
            key={alt}
            alt={alt}
            id={id}
            siteLink={socialLink}
            image={image.url}
          />
        ))}
      </div>
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
        socialLink
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
