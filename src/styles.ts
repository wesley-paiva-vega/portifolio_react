import { createGlobalStyle } from 'styled-components';
import { colors } from './theme/colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.dark_10};
    font-family: 'DM Sans', sans-serif;
  }
`;
 
export default GlobalStyle;