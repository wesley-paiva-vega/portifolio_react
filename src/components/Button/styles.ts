import { styled } from "styled-components";
import { borders, colors } from "../../theme/colors";

type ButtonProps = {
    color: keyof typeof colors
}

export const Button = styled.button<ButtonProps & { $borderColor: keyof typeof borders; $backgroundColor: keyof typeof colors;}>`
    background-color: ${({ $backgroundColor }) => colors[$backgroundColor]};
    border: ${({ $borderColor }) => borders[$borderColor]};
    color: ${({color}) => colors[color]};
`;