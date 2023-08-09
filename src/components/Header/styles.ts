import { styled } from "styled-components";
import { colors } from "../../theme";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.dark_10};
  width: 100%;
  height: 80px;
  font-weight: 700;

  span {
    color: ${colors.dark_50};
  }

  img {
    width: 28px;
    height: 11px;
    flex-shrink: 0;
  }
`;
