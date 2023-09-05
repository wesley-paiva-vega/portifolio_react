import * as Styled from "./styles";
import { borders, colors } from "../../theme";

type ButtonProps = {
  title: string;
  color: keyof typeof colors;
  border: keyof typeof borders;
  backgroundColor: keyof typeof colors;
  onClick: () => void;
};

const Button = ({
  title,
  border,
  color,
  backgroundColor,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <Styled.Button
      $backgroundColor={backgroundColor}
      color={color}
      $border={border}
      onClick={onClick}
    >
      {title}
    </Styled.Button>
  );
};

export default Button;
