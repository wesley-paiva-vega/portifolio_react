import styled from "styled-components";
import { borders, colors } from "../../theme";

export const Wrapper = styled.div`
  color: ${colors.dark_50};
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_20};
  border: ${borders.light};
`;
