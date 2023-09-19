import React from 'react'

function PlaylistCard(props) {
  return (
    <div className='playlist-card'>
      <div className="serial-number">{props.serial + 1}</div>
      <div className="image"><img src={props.image} alt="" /></div>
      <div className="playlist-info">
        <div className="video-title">{props.title}</div>
        <div className="channel-name">{props.channelTitle}</div>
      </div>
    </div>
  )
}

export default PlaylistCard;
