import Image from 'next/image'

interface ContentfulImageProps {
  src: string
  width: number
  quality?: number
}

const ContentfulImage = (props: any) => {
  return <Image {...props} />
}

export default ContentfulImage
