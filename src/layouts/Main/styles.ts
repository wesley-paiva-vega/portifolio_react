import { styled } from "styled-components";
import { breakpoints, colors } from "../../theme";
import Grid from "../../components/Grid";

export const Main = styled.div`
  padding: 24px;
  max-width: 1250px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    padding: 48px;
  }
  @media ${breakpoints.laptopL} {
    padding: 48px 150px;
  }
`;

export const ContainerNameAndButtons = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${breakpoints.laptop} {
    justify-content: space-between;
  }
`;

export const Avatar = styled.div`
  @media ${breakpoints.mobileL} {
    display: none;
  }

  @media ${breakpoints.tablet} {
    display: none;
  }

  @media ${breakpoints.laptop} {
    display: flex;
    img {
      width: 250px;
    }
  }
`;

export const IconsGrid = styled(Grid)`
  @media ${breakpoints.laptopL} {
    grid-template-columns: repeat(4, 1fr);
    width: 850px;
    margin: 0 auto;
  }
`;

export const MainIcon = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    margin: 0;
    color: ${colors.dark_50};
    font-family: DM Sans;
    font-size: 13.348px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: ${colors.dark_40};
    font-family: DM Sans;
    font-size: 11.865px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    word-wrap: break-word;
  }
`;
