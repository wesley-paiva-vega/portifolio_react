import { styled } from "styled-components";

type GridProps = {
  row: number;
  col: number;
  gap: number;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  grid-gap: ${({ gap }) => `${gap}px`};
`;
