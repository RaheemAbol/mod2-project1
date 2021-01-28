// Importing react hooks for function components  {useState, useRef, useEffect} \\
// importing fahoolie for added logo \\
import React, {useState, useRef, useEffect} from 'react';
import Controls from './Controls';
import Details from './Details';
import { FaHooli } from "react-icons/fa";

// setting isPlaying as our state and setIsPlaying as setState \\
// current state will be set to false so music doesnt start when the app is opened \\
// useRef will be used to reference the audio \\
export default function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
// if audio is playing then it will continue else, it will pause \\
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

//SkipSong function takes a parameter (forwards) that is set to true \\
// passing our props through to with setCurrentSongIndex to set the state \\
//using a function we set temp equal to the current song and then add one or go to the next song \\
// if temp or current song  is greater than the amount of songs in our array than return to the start \\
// else temp is set to the current song. If the current song is less than zero temp will be set to the last song in the array\\
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }
// Passing audio the currentSongIndex src of the songs array \\
// Passing Details component the currentSongIndex of songs \\
// Passing Controls variables of isPlaying & setIsPlaying , setIsPlaying will update isPlaying\\
// Controls will also be passed the function SkipSong \\
    return (
        <div className="c-player">          
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
        <div className="hooli">
            <FaHooli />
        </div>
            <h4>Playing now</h4>
            <Details 
                song={props.songs[props.currentSongIndex]}
            />
            <Controls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong} 
            />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}


    


