import "./App.css";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Gameboard from "./components/Gameboard/Gameboard";
import React, { useState, useReducer, useEffect } from "react";

function App() {
  const [cardAmount, setCardAmount] = useState(4);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [render, setRender] = useState(0); // To force a rerender of the Gameboard component if cardAmount doesn't change
  const [characterAmount, setCharacterAmount] = useState(0);

  function handleCorrectClick() {
    setScore((prev) => prev + 1);
  }

  function handleGameOver() {
    if (score > highscore) setHighscore(score);
    resetGame();
  }

  function resetGame() {
    setScore(0);
    setCardAmount(4);
    setRender((prev) => prev + 1);
  }

  function handleRoundWon() {
    setCardAmount((prev) => prev + 4);
    setRender((prev) => prev + 1);
  }

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((response) => response.json())
  //     .then((data) => setCharacterAmount(data.info.count));
  // }, []);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} highscore={highscore} />
      <Gameboard cardAmount={cardAmount} onRoundWon={handleRoundWon} onCorrect={handleCorrectClick} onGameover={handleGameOver} render={render} characterAmount={characterAmount} />
    </div>
  );
}

export default App;
