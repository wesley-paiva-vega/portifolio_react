import CardServices from "../../components/CardServices";
import * as S from "./styles";

const SectionServices = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Services</h1>

      <S.SectionCards>
        <CardServices title="Create WEB Plataforms" />
        <CardServices title="Create WEB Plataforms" />
        <CardServices title="Create WEB Plataforms" />
      </S.SectionCards>
    </S.Main>
  );
};

export default SectionServices;
