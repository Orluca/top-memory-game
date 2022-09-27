import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";
import { v4 as uuidv4 } from "uuid";

function Gameboard(props) {
  const [cardComponents, setCardComponents] = useState([]);
  const [ids, setIds] = useState([]);
  const [characters, setCharacters] = useState([]);

  // function createRandomNumber() {
  //   return Math.floor(Math.random() * 826) + 1;
  // }

  // function randomNumbers(amount) {
  //   const amountNumber = Number(amount);
  //   const emptyArray = new Array(amountNumber).fill(NaN);
  //   const numbers = emptyArray.map((_el) => createRandomNumber());
  //   return numbers;
  // }

  // function shuffleArray(array) {
  //   let j, x, i;
  //   for (i = array.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = array[i];
  //     array[i] = array[j];
  //     array[j] = x;
  //   }
  //   return array;
  // }

  // function handleCardClick() {
  //   setCardComponents((prev) => [...shuffleArray(prev)]);
  // }

  // function handleCorrectClick() {
  //   props.onCorrect();
  // }

  // function handleGameOver() {
  //   props.onGameOver();
  // }

  // function createCards() {
  //   const randomCards = ids.map((id) => <MemoryCard id={id} key={uuidv4()} onClick={handleCardClick} onCorrect={handleCorrectClick} onGameOver={handleGameOver} />);

  //   setCardComponents(randomCards);
  // }

  // useEffect(() => {
  //   setIds(randomNumbers(props.cardAmount));
  // }, [props.cardAmount]);

  // useEffect(() => {
  //   createCards();
  // }, [ids]);

  async function getCharacterData(id) {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data);
    return data;
  }

  function createCharacter(id) {
    getCharacterData(id).then((data) =>
      setCharacters((prev) => {
        return [...prev, { name: data.name, id: data.id, image: data.image }];
      })
    );
  }

  useEffect(() => {
    createCharacter(1);
    createCharacter(2);
    createCharacter(3);
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return <GameboardStyled>{cardComponents}</GameboardStyled>;
}

export default Gameboard;
