import React from "react";
import ScoreStyled from "./Score.styled";

function Score({ name, value }) {
  return (
    <ScoreStyled>
      <div className="score-label">{name}:</div>
      <div>{value}</div>
    </ScoreStyled>
  );
}

export default Score;
