import Link from 'next/link'

interface CardVidProps {
  vid: string
  igtag: string
  credits: string
}

const GifCard = (props: CardVidProps) => (
  <div className="Card">
    <video
      src={props.vid}
      controls={false}
      loop
      playsInline
      preload="auto"
      autoPlay
      muted
    />
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="igtag"
      href={props.credits}
    >
      {props.igtag}
    </Link>
  </div>
)

export default GifCard
