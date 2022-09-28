import React from "react";
import MemoryCardStyled from "./MemoryCard.styled";

function MemoryCard(props) {
  return (
    <div>
      <img src={props.image} alt={`A picture of ${props.name}`} />
      <div className="picture-label">{props.name ? props.name : "..."}</div>
    </div>
  );
}

export default MemoryCard;
