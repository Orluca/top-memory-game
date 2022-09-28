import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";

function Gameboard(props) {
  const [characters, setCharacters] = useState([]);

  function createRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
  }

  function randomNumbers(amount) {
    const amountNumber = Number(amount);
    const emptyArray = new Array(amountNumber).fill(NaN);
    const numbers = emptyArray.map((_el) => createRandomNumber());
    return numbers;
  }

  async function getCharacterData(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  function createCharacter(id) {
    getCharacterData(id).then((data) =>
      setCharacters((prev) => {
        const filteredPrev = prev.filter((char) => char.id !== id);
        return [...filteredPrev, { name: data.name, id: data.id, image: data.image }];
      })
    );
  }

  function generateCharacters(amount) {
    const randomIds = randomNumbers(amount);

    randomIds.forEach((id) => createCharacter(id));
  }

  useEffect(() => {
    setCharacters([]);
    generateCharacters(props.cardAmount);
  }, [props.cardAmount]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  function handleClick() {
    console.log(characters);
  }

  return (
    <GameboardStyled>
      <button onClick={handleClick}>btn</button>
    </GameboardStyled>
  );
}

export default Gameboard;
