import * as Styled from './styles';
import { borders, colors } from '../../theme/colors';

type ButtonProps = {
    title: string;
    color: keyof typeof colors;
    borderColor: keyof typeof borders;
    backgroundColor: keyof typeof colors;
};

const Button = ({ title, borderColor, color, backgroundColor }: ButtonProps): JSX.Element => {    
    return (
        <Styled.Button $backgroundColor={backgroundColor} color={color} $borderColor={borderColor} >{title}</Styled.Button>
    );
};

export default Button;
