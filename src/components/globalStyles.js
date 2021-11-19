import { createGlobalStyle } from "styled-components";

import helpers from "./helpers";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Monospace Light';
    src: src('../assets/fonts/monospace-light-webfont.woff2') format('woff2'),
         src('../assets/fonts/monospace-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Monospace Bold';
    src: src('../assets/fonts/monospace-semi-webfont.woff2') format('woff2'),
         src('../assets/fonts/monospace-semi-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: ${helpers.colors.body};
}

header {
  font-family: 'Monospace Bold', sans-serif;
  font-weight: 500;
}

ul {
  list-style-type: none;
  padding: 0;
}

input::placeholder {
  font-family: 'Monospace light', sans-serif;
}

.todo {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  font-family: 'Monospace Light', sans-serif;
  color: ${helpers.colors.body};
  border: 2px solid #dddce9;
  border-radius: 32px;
  margin-block: 0.4rem;  

  button{
    border: none;
    outline: none;
    background-color: transparent;
    border: none;

    img{
      width: 32px;
      height: 32px;
    }
  }
}


.input-group {
  position: relative;

  input {
    width: 100%;  
  }
}

.add-button {
  position:absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  background-color: transparent;
  padding: .6rem;

  img {
    width: 32px;
    height: 32px;
  }
}

.control-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
}

`;
