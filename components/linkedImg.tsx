import Image from 'next/image'

interface LinkedImgsProps {
  alt: string
  id: string
  image: any
}

const LinkedImgs = ({ alt, id, image }: LinkedImgsProps) => (
  <li>
    <Image alt={alt} id={id} src={image} height={300} width={300} />
  </li>
)

export default LinkedImgs
