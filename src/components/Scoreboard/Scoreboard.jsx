import React from "react";
import Score from "./Score/Score";
import ScoreboardStyled from "./Scoreboard.styled";

function Scoreboard() {
  return (
    <ScoreboardStyled>
      <Score name="Score" value="5" />
      <Score name="Best" value="10" />
    </ScoreboardStyled>
  );
}

export default Scoreboard;
