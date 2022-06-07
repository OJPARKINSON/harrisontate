import Image from 'next/image'

interface LinkedImgsProps {
  siteLink: string
  alt: string
  id: string
  image: any
}

const LinkedImgs = ({ siteLink, alt, id, image }: LinkedImgsProps) => (
  <Image alt={alt} id={id} src={image} width={600} height={1000} />
)

export default LinkedImgs
