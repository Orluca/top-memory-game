import React, { useEffect, useState } from "react";
import MemoryCardStyled from "./MemoryCard.styled";

function MemoryCard(props) {
  // const [name, setName] = useState("");
  // const [picture, setPicture] = useState("");
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  function handleClick() {
    if (hasBeenClicked) {
      props.onGameOver();
    } else {
      setHasBeenClicked(true);
      props.onCorrect();
      props.onClick();
    }
  }

  return (
    <MemoryCardStyled onClick={handleClick}>
      <img src={props.picture} alt={"A picture of " + { props.name }} />
      <div className="picture-label">{props.name ? props.name : "..."}</div>
    </MemoryCardStyled>
  );
}

export default MemoryCard;
