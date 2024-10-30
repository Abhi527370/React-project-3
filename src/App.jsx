
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {
const [isGameStarted,setIsGameStarted]= useState(false);

const toggleGamePlay = () =>{
  setIsGameStarted((prev)=>!prev);
}
  return (
    <>
    {/* to run javascript inside jsx use curly braces */}
    {
      isGameStarted ? <GamePlay/> : <StartGame
      toggle={toggleGamePlay}
      />
    }
    </>
  )
}

export default App
