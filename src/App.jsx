import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Gameboard from "./components/Gameboard/Gameboard";
import React, { useState } from "react";

function App() {
  const [cardAmount, setCardAmount] = useState(4);

  function handleClick() {
    setCardAmount(8);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Gameboard cardAmount={cardAmount} />
      <button onClick={handleClick}>More cards</button>
    </div>
  );
}

export default App;
