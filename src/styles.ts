import { createGlobalStyle, styled } from 'styled-components';
import { colors } from './theme/colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.dark_10};
    font-family: 'DM Sans', sans-serif;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;
 
export default GlobalStyle;