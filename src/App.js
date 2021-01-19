import {useState} from 'react';
import Player from './components/Player';


function App() {
  const [songs, setSongs] = useState([
    {
      title: "Look at me now",
      artist: "XXXtentacion",
      img_src: "./images/musicappimg1.jpg" 
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/musicappimg2.jpg"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/musicappimg3.jpg"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/musicappimg4.jpg"
    }
  ]);


  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className= "App">
      <Player
       song={songs[currentSongIndex]}
       nextSong={songs[nextSongIndex]}
     />
    </div>
  )
}

export default App;
