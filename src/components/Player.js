import React from 'react';
import Details from './Details';


export default function player(props) {
    return (
        <div className="c-player">
            <h4>Playing Now</h4>
            <Details song={props.song} />
            <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
            
        </div>
    )
}
