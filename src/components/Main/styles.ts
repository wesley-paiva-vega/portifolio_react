import { styled } from "styled-components";
import { colors } from "../../theme";

export const Main = styled.div`
  padding: 24px;
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
