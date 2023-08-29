import CardServices from "../../components/CardServices";
import Icon from "../../components/Icon";
import * as S from "./styles";

const SectionServices = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Services</h1>

      <S.SectionCards>
        <CardServices
          icon={<Icon name="code" size="xxl" />}
          title="Create WEB Plataforms"
        />
        <CardServices
          icon={<Icon name="figma" size="xxl" />}
          title="Create WEB Sites"
        />
        <CardServices
          icon={<Icon name="smartphone" size="xxl" />}
          title="Create Mobile Apps"
        />
      </S.SectionCards>
    </S.Main>
  );
};

export default SectionServices;
