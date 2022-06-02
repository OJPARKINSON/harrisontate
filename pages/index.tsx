import {
  LinkedImgs,
  ResponsivePlayer,
  Layout,
  ContentfulImage,
} from '@/components'
import Image from 'next/image'
import { fetchGraphQL } from '../lib/utils'

interface IndexProps {
  harrisonlanding: {
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
  harrisonlanding,
  IntroIMGs,
  FlareVideo,
}: IndexProps) {
  return (
    <Layout styling="HeaderGroup" title="Home">
      <Image
        alt={harrisonlanding.items[0].description}
        className="loader"
        width={2220}
        height={1680}
        quality={100}
        src={harrisonlanding.items[0].url}
      />
      <div className="Hero-Image">
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
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

export async function getStaticProps({ preview = false }) {
  const quote = `
  {
    harrisonlanding: assetCollection(where: {title: "harrisonlanding"}) {
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
    props: { preview, ...((await fetchGraphQL(quote)) ?? []) },
  }
}
