import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";

function Gameboard() {
  const [characters, setCharacters] = useState([]);

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

  function generateCards(amount) {
    const emptyArray = new Array(amount).fill(NaN);
  }

  useEffect(() => {
    createCharacter(1);
  }, []);

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
