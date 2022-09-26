import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";
import { v4 as uuidv4 } from "uuid";

function Gameboard(props) {
  const [cards, setCards] = useState([]);
  const [ids, setIds] = useState([]);

  function createRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
  }

  function randomNumbers(amount) {
    const amountNumber = Number(amount);
    const emptyArray = new Array(amountNumber).fill(NaN);
    const numbers = emptyArray.map((_el) => createRandomNumber());
    return numbers;
  }

  //   function shuffleArray(array) {
  //     // Fisher-Yates shuffle algorithm
  //     let j, x, i;
  //     for (i = array.length - 1; i > 0; i--) {
  //       j = Math.floor(Math.random() * (i + 1));
  //       x = array[i];
  //       array[i] = array[j];
  //       array[j] = x;
  //     }
  //     return array;
  //   }

  //   function handleCardClick() {
  //     console.log("CARD CLICK");
  //   }

  //   function createCards() {
  //     console.log(ids);
  //     const randomCards = ids.map((id) => <MemoryCard id={id} key={uuidv4()} onClick={handleCardClick} />);

  //     setCards(randomCards);
  //   }

  //   useEffect(() => {
  //     setIds(randomNumbers(props.cardAmount));
  //     createCards();
  //   }, [props.cardAmount]);

  return (
    <GameboardStyled>
      {/* {cards} */}
      <MemoryCard id="2" />
      <MemoryCard id="7" />
    </GameboardStyled>
  );
}

export default Gameboard;
