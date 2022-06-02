import { lazy } from 'react'
import Image from 'next/image'

import { fetchGraphQL } from '../lib/utils'
import { Layout, GifCard } from '@/components'
const ResponsivePlayer = lazy(() => import('../components/ResponsivePlayer'))

interface items {
  items: [
    {
      id: string
      tag: string
      img: {
        url: string
      }
    }
  ]
}

interface FlareProps {
  gifs: items
  FlareLogo: items
  FlareVideo: items
}

export default function Flare({ gifs, FlareLogo, FlareVideo }: FlareProps) {
  return (
    <div className="container flareLayout">
      <Layout title="Flare" styling="HeaderGroup" whiteFooter={true}>
        <div className="imgContainer">
          <Image
            className="FlareLogo"
            height={400}
            width={400}
            alt={FlareLogo.items[0].tag}
            src={FlareLogo.items[0].img.url}
          />
        </div>
        {gifs.items.reverse().map(({ id, tag, img }) => (
          <GifCard
            key={id}
            credits={'https://www.instagram.com/' + tag}
            igtag={'@' + tag}
            vid={img.url}
          />
        ))}
        <div className="heroTitles" id="harrisonVid">
          <ResponsivePlayer
            playsinline={true}
            key={FlareVideo.items[0].tag}
            url={FlareVideo.items[0].img.url}
          />
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const quote = `
  {
    gifs: gifCollection(where: {id_gte: 0}) {
      items {
        id
        tag
        img {
          url
        }
      }
    }
    FlareLogo: gifCollection(where: {tag: "flare-logo"}) {
      items {
        id
        tag
        img {
          url
        }
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
