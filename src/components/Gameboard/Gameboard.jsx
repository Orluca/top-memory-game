import React from "react";
import GameboardStyled from "./Gameboard.styled";
import MemoryCard from "./MemoryCard/MemoryCard";

function Gameboard() {
  return (
    <GameboardStyled>
      <MemoryCard id="1" />
      <MemoryCard id="11" />
      <MemoryCard id="111" />
    </GameboardStyled>
  );
}

export default Gameboard;
