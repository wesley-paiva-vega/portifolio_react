import { styled } from "styled-components";
import { borders, colors } from "../../theme/colors";

type ButtonProps = {
    background_color: keyof typeof colors;
    border: keyof typeof borders;
    color: keyof typeof colors;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({ background_color }) => `${colors[background_color]}` ?? `${colors.dark_40}`};
    display: flex;
    width: 150px;
    height: 30px;
    padding: 8px 28px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: ${({ border }) => `${borders[border]}`};
    color: ${({ color }) => `${colors[color]}`};
`;