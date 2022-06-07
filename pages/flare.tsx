import { lazy } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { fetchGraphQL } from '../lib/utils'
import { GifCard } from '@/components'

const Layout = dynamic(import('../components/layout'), { ssr: false })

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
        <div className="FlareContainer">
          <Image
            height={100}
            width={100}
            sizes="100vw"
            layout="responsive"
            priority={true}
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
