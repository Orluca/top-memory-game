import React, { useEffect, useState } from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";

function Gameboard(props) {
  const [characters, setCharacters] = useState([]);
  const [cardComponents, setCardComponents] = useState([]);

  function createRandomNumber() {
    // return Math.floor(Math.random() * props.characterAmount) + 1;
    return Math.floor(Math.random() * 826) + 1;
  }

  function randomNumbers(amount) {
    const amountNumber = Number(amount);
    const numbers = [];

    for (let i = 0; i < amountNumber; i++) {
      const randomNumber = createRandomNumber();
      if (numbers.includes(randomNumber)) i = i - 1;
      else numbers.push(randomNumber);
    }

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
        return [...filteredPrev, { name: data.name, id: data.id, image: data.image, clicked: false }];
      })
    );
  }

  function generateCharacters(amount) {
    const randomIds = randomNumbers(amount);

    randomIds.forEach((id) => createCharacter(id));
  }

  function checkIfAllClicked() {
    if (characters.length === 0) return;
    return characters.every((char) => char.clicked === true);
  }

  function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  function shuffleCards() {
    setCharacters((prev) => shuffle(prev));
  }

  function handleCardClick(id) {
    const index = characters.findIndex((char) => char.id === id);
    const clickedCharacter = characters[index];

    if (clickedCharacter.clicked === true) {
      props.onGameover();
      return;
    } else {
      setCharacters((prev) => {
        prev[index].clicked = true;
        return [...prev];
      });
      shuffleCards();
      props.onCorrect();
    }
  }

  useEffect(() => {
    setCharacters([]);
    generateCharacters(props.cardAmount);
  }, [props.render]);

  useEffect(() => {
    const components = characters.map((data) => <MemoryCard name={data.name} image={data.image} id={data.id} key={data.id} onClick={handleCardClick} />);
    setCardComponents(components);

    if (checkIfAllClicked()) {
      props.onRoundWon();
    }
  }, [characters]);

  return <GameboardStyled>{cardComponents}</GameboardStyled>;
}

export default Gameboard;
