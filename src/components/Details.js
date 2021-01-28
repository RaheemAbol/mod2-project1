import React from 'react'
//lines 9-10 will be used for styling
//line 11 will display the image 
//line 15 will display the song title
//line 16 will display the artist's name
//passing props through enables us to target them via props.song.* 

export default function Details(props) {
    return (
        <div className="player-details">
            <div className="details-img">
                <img src={props.song.img_src} alt="" />

            </div>

            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}
