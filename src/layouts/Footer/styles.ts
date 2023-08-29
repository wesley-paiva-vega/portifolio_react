import styled from "styled-components";
import { colors } from "../../theme";

export const Wrapper = styled.div`
  color: ${colors.dark_50};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 5px 0;
  background-color: ${colors.dark_20};

  a {
    color: ${colors.brand_color};
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }
`;
