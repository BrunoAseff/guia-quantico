import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-weight: 50;
    font-style: normal;

  body, html {
    width: 100%;
    height: 100%;
    overflow: hidden; // Ensures no scroll bars appear
  }
`;

export default GlobalStyle;
