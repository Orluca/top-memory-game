import "./App.css";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Gameboard from "./components/Gameboard/Gameboard";
import React, { useState, useReducer } from "react";

function App() {
  const [cardAmount, setCardAmount] = useState(4);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [rounds, setRounds] = useState(0);

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
    setTotalGames((prev) => prev + 1);
  }

  function handleRoundWon() {
    setCardAmount((prev) => prev + 4);
    setRounds((prev) => prev + 1);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} highscore={highscore} />
      <Gameboard cardAmount={cardAmount} onRoundWon={handleRoundWon} onCorrect={handleCorrectClick} onGameover={handleGameOver} totalGames={totalGames} rounds={rounds} />
    </div>
  );
}

export default App;
