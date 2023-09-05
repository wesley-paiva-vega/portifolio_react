import { styled } from "styled-components";

export const Grid = styled.div<{ $row: number; $col: number; $gap: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $col }) => $col}, 1fr);
  grid-gap: ${({ $gap }) => `${$gap}px`};
`;
