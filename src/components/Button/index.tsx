import * as Styled from "./styles";
import { borders, colors } from "../../theme";

type ButtonProps = {
  title: string;
  color: keyof typeof colors;
  border: keyof typeof borders;
  backgroundColor: keyof typeof colors;
};

const Button = ({
  title,
  border,
  color,
  backgroundColor,
}: ButtonProps): JSX.Element => {
  return (
    <Styled.Button
      $backgroundColor={backgroundColor}
      color={color}
      $border={border}
    >
      {title}
    </Styled.Button>
  );
};

export default Button;
