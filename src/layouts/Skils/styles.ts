import styled from "styled-components";
import { breakpoints, colors } from "../../theme";
import Grid from "../../components/Grid";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.dark_50};
  margin-bottom: 40px;
`;

export const GridCardSkils = styled(Grid)`
  @media ${breakpoints.tablet} {
    grid-template-columns: repeat(7, 1fr);
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(9, 1fr);
  }
`;
