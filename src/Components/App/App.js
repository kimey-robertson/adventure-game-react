import React, { useState } from "react";
import Container from "../Container/Container";
import CardContainer from "../CardContainer/CardContainer";
import "./App.css";

// Here we are defining the base state that we begin the game with.
// All App.js does is hold onto the state and render the other components

const App = () => {
  const [playerState, setPlayerState] = useState({
    gold: 0,
    health: 5,
    energy: 5,
    attack: 3,
    defence: 3
})

  return (
    <div className="App">
      <CardContainer 
        playerState={playerState} />
      <Container 
        playerState={playerState}
        setPlayerState={setPlayerState}/>
    </div>
  );
}

export default App;
