import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";
import { v4 as uuidv4 } from "uuid";

function Gameboard(props) {
  const [cards, setCards] = useState([]);

  function createRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
  }

  function randomNumbers(amount) {
    const amountNumber = Number(amount);
    const emptyArray = new Array(amountNumber).fill(NaN);
    const numbers = emptyArray.map((_el) => createRandomNumber());
    return numbers;
  }

  useEffect(() => {
    const randomCards = randomNumbers(props.cardAmount).map((id) => <MemoryCard id={id} key={uuidv4()} />);

    setCards(randomCards);
  }, [props.cardAmount]);

  return <GameboardStyled>{cards}</GameboardStyled>;
}

export default Gameboard;
