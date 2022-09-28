import "./App.css";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Gameboard from "./components/Gameboard/Gameboard";
import React, { useState } from "react";

function App() {
  const [cardAmount, setCardAmount] = useState(4);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function handleCorrectClick() {
    setScore((prev) => prev + 1);
  }

  function handleGameOver() {
    setScore((prevScore) => {
      setHighscore((prevHighscore) => {
        if (prevScore > prevHighscore) return prevScore;
        else return prevHighscore;
      });
      return 0;
    });
  }

  function handleClick() {
    setCardAmount(8);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} highscore={highscore} />
      <Gameboard cardAmount={cardAmount} onCorrect={handleCorrectClick} onGameOver={handleGameOver} />
      <button onClick={handleClick}>more</button>
    </div>
  );
}

export default App;
