import CardSkils from "../../components/CardSkils";
import Grid from "../../components/Grid";
import Icon from "../../components/Icon";
import * as S from "./styles";

const Skils = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Minhas Skils</h1>

      <Grid gap={15} row={2} col={3}>
        <CardSkils icon={<Icon name="html_five" size="huge" />} />
        <CardSkils icon={<Icon name="css3" size="huge" />} />
        <CardSkils icon={<Icon name="javascript" size="huge" />} />
        <CardSkils icon={<Icon name="tailwind" size="huge" />} />
        <CardSkils icon={<Icon name="react" size="huge" />} />
        <CardSkils icon={<Icon name="nextjs" size="huge" />} />
      </Grid>
    </S.Main>
  );
};

export default Skils;
