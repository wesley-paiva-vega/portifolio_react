import { colors } from '../../theme/colors'
import * as Styled from  './styles'
type ButtonProps = {
    title: string
    background_color: keyof typeof colors;
    border: 'light' | 'none';
    color: keyof typeof colors;
}

const Button = ({ title, background_color, border, color }: ButtonProps): JSX.Element => {    
    return (
        <Styled.Button color={color} border={border} background_color={background_color} >{title}</Styled.Button>
    )
}

export default Button;