import Icon from "../Icon";
import * as S from "./styles";

type CardServiceProps = {
  title: string;
};

const CardServices = ({ title }: CardServiceProps): JSX.Element => {
  return (
    <S.Main>
      <Icon name="phone" size="xxl" />
      <h5>{title}</h5>
    </S.Main>
  );
};

export default CardServices;
