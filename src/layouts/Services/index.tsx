import CardServices from "../../components/CardServices";
import Icon from "../../components/Icon";
import * as S from "./styles";

const SectionServices = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Services</h1>

      <S.SectionCardsGrid gap={30} col={1} row={3}>
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
          title="Create Landing Pages"
        />
        <CardServices
          icon={<Icon name="smartphone" size="xxl" />}
          title="Create Mobile"
        />
        <CardServices
          icon={<Icon name="code" size="xxl" />}
          title="Create Micro Services"
        />
        <CardServices
          icon={<Icon name="code" size="xxl" />}
          title="Create Front End"
        />
      </S.SectionCardsGrid>
    </S.Main>
  );
};

export default SectionServices;
