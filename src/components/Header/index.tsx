import * as Styled from './styles'
import menuHamburguer from '../../assets/menu_hamburguer.svg'

const Header = (): JSX.Element => {
    return (
        <Styled.Header>
            <span>Portfólio</span>
            <img src={menuHamburguer} alt="" />
        </Styled.Header>
    )
}

export default Header;