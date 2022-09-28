import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";

function Gameboard(props) {
  const [characters, setCharacters] = useState([]);
  const [cardComponents, setCardComponents] = useState([]);

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
    const components = characters.map((data) => <MemoryCard name={data.name} image={data.image} id={data.id} key={data.id} />);
    setCardComponents(components);
  }, [characters]);

  // function handleClick() {
  //   console.log(characters);
  // }

  return <GameboardStyled>{cardComponents}</GameboardStyled>;
}

export default Gameboard;
