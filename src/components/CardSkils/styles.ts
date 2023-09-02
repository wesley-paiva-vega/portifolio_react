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

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
    scale: calc(1.02);
    transition: all ease-in-out 0.5s;
  }
`;
