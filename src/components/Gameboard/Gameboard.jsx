import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";
import { v4 as uuidv4 } from "uuid";

function Gameboard() {
  const [cards, setCards] = useState([]);
  const [cardAmount, setCardAmount] = useState(4);

  function createRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
  }

  function randomNumbers(amount) {
    const emptyArray = new Array(amount).fill(NaN);
    const numbers = emptyArray.map((el) => createRandomNumber());
    console.log(numbers);
    return numbers;
  }

  useEffect(() => {
    const randomCards = randomNumbers(cardAmount).map((id) => <MemoryCard id={id} key={uuidv4()} />);

    setCards(randomCards);
  }, []);

  return <GameboardStyled>{cards}</GameboardStyled>;
}

export default Gameboard;
