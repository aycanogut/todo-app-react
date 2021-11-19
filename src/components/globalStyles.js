import { createGlobalStyle } from 'styled-components';

import helpers from './helpers';

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${helpers.colors.body};
}


`;
