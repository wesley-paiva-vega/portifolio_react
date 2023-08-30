import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../theme";
import Grid from "../../components/Grid";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.dark_50};
  font-family: ${fonts.font_normal};
  margin-top: 56px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 25px;

  @media ${breakpoints.laptopL} {
    margin-top: 127px;
  }
`;

export const GridCardsProjects = styled(Grid)`
  @media ${breakpoints.laptopL} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
