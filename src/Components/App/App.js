import React, { useState } from "react";
import Container from "../Container/Container";
import CardContainer from "../CardContainer/CardContainer";
import "./App.css";

// Here we are defining the base state that we begin the game with.
// All App.js does is hold onto the state and render the other components

function App(props) {
  const [playerState, setPlayerState] = useState({
    gold: 0,
    health: 5,
    energy: 5,
    attack: 10,
    defence: 5,
    battle: false
})

  return (
    <div className="App">
      <CardContainer 
      playerState={playerState} 
      setPlayerState={setPlayerState}/>
      <Container 
      playerState={playerState}
      setPlayerState={setPlayerState}/>
      <div className='test-buttons'>
          <button 
          id='test'
          className="btn"
          value=''
          onClick={() => {}
          }
          
          >nothing
          </button>
          <button 
          id='test'
          className="btn"
          value='testing button 2'
          onClick={() => {    
            setPlayerState({...playerState, battle: false})                    
          }}
          >set battle false
          </button>
          <button 
          id='test'
          className="btn"
          value='testing button 2'
          onClick={() => {    
            setPlayerState({...playerState, battle: true})                    
          }}
          >set battle true
          </button>
          </div>
    </div>
  );
}

export default App;
