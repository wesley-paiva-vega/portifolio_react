import { ReactNode } from "react";
import * as Styled from './styles'

 type MainProps = {
    children: ReactNode
 }
 
 const Main = ({ children }: MainProps): JSX.Element => {
    return (
        <Styled.Main>
            {children}
        </Styled.Main>
    )
}

export default Main;