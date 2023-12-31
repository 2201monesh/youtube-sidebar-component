import React from 'react'

function PlaylistCard(props) {

    const clickHandler = (event) => {
        window.location.href = props.url;
        console.log(window.location.href);
    }

  return (
    <div onClick={clickHandler} className='playlist-card'>
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
