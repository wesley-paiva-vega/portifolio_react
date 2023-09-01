import CardSkils from "../../components/CardSkils";
import Icon from "../../components/Icon";
import * as S from "./styles";

const Skils = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Minhas Skils</h1>

      <S.GridCardSkils gap={15} row={2} col={3}>
        <CardSkils icon={<Icon name="html_five" size="huge" />} />
        <CardSkils icon={<Icon name="css3" size="huge" />} />
        <CardSkils icon={<Icon name="javascript" size="huge" />} />
        <CardSkils icon={<Icon name="tailwind" size="huge" />} />
        <CardSkils icon={<Icon name="react" size="huge" />} />
        <CardSkils icon={<Icon name="nextjs" size="huge" />} />
        <CardSkils icon={<Icon name="nestjs" size="huge" />} />
        <CardSkils icon={<Icon name="styled_components" size="giant" />} />
        <CardSkils icon={<Icon name="typescript" size="giant" />} />
      </S.GridCardSkils>
    </S.Main>
  );
};

export default Skils;
