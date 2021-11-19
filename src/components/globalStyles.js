import { createGlobalStyle } from "styled-components";

import helpers from "./helpers";

export const GlobalStyles = createGlobalStyle`

// fonts
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

// global styling
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 62.5%;
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

input::placeholder, input {
  font-family: 'Monospace light', sans-serif !important;
  
}

// helper classes
.todo {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-block: 0.4rem;  
  padding: 0.3rem .4rem 0.3rem 1rem;
  color: ${helpers.colors.body};
  border: 2px solid #dddce9;
  border-radius: 32px;
  font-family: 'Monospace Light', sans-serif;
  font-size: 1rem;

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

    @media only screen and ${helpers.device.md} {
    font-size: 1.2rem;
  } ;
}

// input ( add todo )
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
  padding: .3rem;


  img {
    width: 32px;
    height: 32px;
  }

  @media only screen and ${helpers.device.md} {
    padding: .6rem;
  } ;
}

// todo right side ( checkbox, delete )
.control-group {
  display: flex;
  flex-direction: row;
  align-items: center;


  input {
    margin: 0;
    width: 24px; 
    height: 24px;
    accent-color: ${helpers.colors.green};
    cursor: pointer;
  }

  img {
    width: 32px;
    height: 32px;
    margin: 0 0 0 .5rem;
  } 
}
`;
