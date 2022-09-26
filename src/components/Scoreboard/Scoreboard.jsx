import React from "react";
import Score from "./Score/Score";
import ScoreboardStyled from "./Scoreboard.styled";

function Scoreboard(props) {
  return (
    <ScoreboardStyled>
      <Score name="Score" value={props.score} />
      <Score name="Best" value="10" />
    </ScoreboardStyled>
  );
}

export default Scoreboard;
