import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #191919;
    font-family: "Outfit", sans-serif;
    color: white;
  }
`;

export default GlobalStyles;
