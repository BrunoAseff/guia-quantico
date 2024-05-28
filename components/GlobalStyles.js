import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  overflow: hidden; // Ensures no scroll bars appear
}

.Inter {
  font-family: var(--font-inter);
}

`;
export default GlobalStyle;
