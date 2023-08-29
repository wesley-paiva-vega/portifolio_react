import { styled } from "styled-components";
import { colors } from "../../theme";

export const Main = styled.div`
  color: ${colors.dark_50};
  text-align: center;
  margin: 56px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
