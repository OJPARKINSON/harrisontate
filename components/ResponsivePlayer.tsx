import ReactPlayer from 'react-player'

interface ResponsivePlayerProps {
  url: string
  playsinline: boolean
}

const ResponsivePlayer = ({ url, playsinline }: ResponsivePlayerProps) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      preload="auto"
      muted
      controls={true}
      url={url}
      width="100%"
      height="100%"
      loop
      playsinline={playsinline}
    />
  </div>
)

export default ResponsivePlayer
