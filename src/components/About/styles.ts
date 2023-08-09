import { styled } from "styled-components";
import { colors } from "../../theme";

export const Main = styled.div`
  color: ${colors.dark_50};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  flex-direction: column;

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
