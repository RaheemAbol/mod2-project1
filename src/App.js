// importing useState and UseEffect \\
// importing player from our components folder \\

import {useState, useEffect} from 'react';
import Player from './components/Player';


export default function App() {
// using the state of useState to create an array [songs] which will be looped through \\
  const [songs] = useState([
    {
      title: "Falling down Ft. Lil Peep",
      artist: "XXXtentacion",
      img_src: "./images/musicappimg1.jpg", 
      src: "./music/lilpeep.mp3"
    },
    {
      title: "Saturday Night Special",
      artist: "Lynard Skynard",
      img_src: "./images/musicappimg2.jpg",
      src: "./music/lynard.mp3"
    },
    {
      title: " Singapur (Remix) ",
      artist: "El Alfa",
      img_src: "./images/musicappimg5.jpg",
      src: "./music/singapur.mp3"
    },
    {
      title: "Sleeping on the Blacktop",
      artist: "Coltor Wall",
      img_src: "./images/musicappimg4.jpg",
      src: "./music/coltorwall.mp3"
    }
  ]);
// currentSongIndex state is initilized at zero \\
// nextSongIndex will always hold the state of currentSongIndex plus one  \\

  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

// useEffect will only call when currentSongIndex is updated. If not it will update on any change. \\
// in lines 47-49 if currentSongIndex or our next song is greater than songs.length-1 or our array return to the start \\
// in lines 50-51  if currentSongIndex is not greater than songs.length-1 than we will return the current song \\

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);


  // passing currentSongIndex, setCurrentSongIndex, nextSongIndex as props. Songs is our array \\
  return (
    <div className= "App">
    <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
     />
    </div>
  )
}
