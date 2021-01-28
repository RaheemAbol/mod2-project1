//importing different icon's from the fontawesome library in react icons \\
import { faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FaForward, FaBackward, FaPause, FaPlay} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// play-btn will use the event listener to set the onClick as an arrow function to set what ever is playing (props.setIsPlaying)\\
// to whatever isnt playing (!props.isPlaying) \\
// line 21 we're passing a ternary operator into our icon to determine if we will diplay faPause or faPlay. \\
// if its playing we will display faPause if not faPlay \\
// baskward-btn will use an onClick event listener to use our SkipSong function and input false so that it goes backwards \\
// forward-btn will use the same function but without the false paramater so that it goes forward \\
export default function Controls(props) {
    return (
    <div className="c-controls">
        <button className="backward-btn" onClick={() => props.SkipSong(false)}>
            <FaBackward />  
         </button>
     
         <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>

            
        <button className="forward-btn" onClick={() => props.SkipSong()}>
            <FaForward/>
        </button>
    </div>
      

    )
}

