import React, { useEffect, useState } from "react";
import MemoryCardStyled from "./MemoryCard.styled";

function MemoryCard(props) {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    async function fetchData(id) {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const resultJSON = await result.json();
      return resultJSON;
    }

    async function setData(id) {
      await fetchData(id).then((data) => setName(data.name));
      await fetchData(id).then((data) => setPicture(data.image));
    }

    setData(props.id);
  });

  function handleClick() {
    if (hasBeenClicked) {
      console.log("GAME OVER");
    } else {
      console.log("CORRECT!");
      setHasBeenClicked(true);
    }
    props.onClick();
  }

  return (
    <MemoryCardStyled onClick={handleClick}>
      <img src={picture} alt={"A picture of " + { name }} />
      <div className="picture-label">{name ? name : "..."}</div>
    </MemoryCardStyled>
  );
}

export default MemoryCard;
