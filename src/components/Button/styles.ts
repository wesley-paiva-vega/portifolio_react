import { styled } from "styled-components";
import { borders, colors } from "../../theme/colors";

type ButtonProps = {
  color: keyof typeof colors;
};

export const Button = styled.button<
  ButtonProps & {
    $border: keyof typeof borders;
    $backgroundColor: keyof typeof colors;
  }
>`
  background-color: ${({ $backgroundColor }) => colors[$backgroundColor]};
  border: ${({ $border }) => borders[$border]};
  color: ${({ color }) => colors[color]};
  font-family: DM Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: 0em;
  width: 150px;
  height: 30px;
  padding: 8px 28px;
`;
