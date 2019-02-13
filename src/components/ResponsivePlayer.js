import React from 'react'
import ReactPlayer from 'react-player'
import "../components/layout.css"

class ResponsivePlayer extends React.Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            preload='true'
            playing='true'
            muted
            controls={true}
<<<<<<< HEAD
            url={require('../images/Flare2.mp4')}
=======
            url={require('../images/Flare-2.mp4')}
>>>>>>> 13c704ceeffcb583d2eab7d8d8ae90a1e66aac65
            width='100%'
            height='100%'
            />
        </div>
        )
    }
}
export default ResponsivePlayer