import { styled } from "styled-components";
import { breakpoints, colors } from "../../theme";
import Grid from "../../components/Grid";

export const Main = styled.div`
  color: ${colors.dark_50};
  text-align: center;
  margin: 56px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SectionCardsGrid = styled(Grid)`
  @media ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat((2, 1fr));
  }
`;
