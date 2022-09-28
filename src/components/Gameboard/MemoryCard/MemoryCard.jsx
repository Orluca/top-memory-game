import React, { useState } from "react";
import MemoryCardStyled from "./MemoryCard.styled";

function MemoryCard(props) {
  const [id, _setId] = useState(props.id);

  function handleClick() {
    props.onClick(id);
  }

  return (
    <MemoryCardStyled onMouseDown={handleClick}>
      <img src={props.image} alt={`A picture of ${props.name}`} />
      <div className="picture-label">{props.name ? props.name : "..."}</div>
    </MemoryCardStyled>
  );
}

export default MemoryCard;
