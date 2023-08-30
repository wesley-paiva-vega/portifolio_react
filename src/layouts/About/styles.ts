import { styled } from "styled-components";
import { breakpoints, colors } from "../../theme";

export const Main = styled.div`
  color: ${colors.dark_50};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 56px;
  flex-direction: column;

  @media ${breakpoints.laptopL} {
    width: 550px;
    margin: 130px auto 120px;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    text-align: center;
    padding: 5px;
    color: ${colors.dark_40};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
