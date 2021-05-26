import React from 'react'
import ReactPlayer from 'react-player/lib/players/FilePlayer'
import "../components/layout.css"

export const ResponsivePlayer = ({ url }) => (
    <div className='player-wrapper'>
        <ReactPlayer
        className='react-player'
        preload="auto"
        muted
        playing={true}
        controls={true}
        url={url}
        width='100%'
        height='100%'
        loop
        playsInline
        />
    </div>
);
