import Card from "../../components/Card";
import CardSkils from "../../components/CardSkils";
import Grid from "../../components/Grid";
import Icon from "../../components/Icon";
import * as S from "./styles";

const Skils = (): JSX.Element => {
  return (
    <S.Main>
      <h1>Minhas Skils</h1>

      <Grid gap={15} row={2} col={3}>
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
        <CardSkils icon={<Icon name="instagram" size="xxl" />} />
      </Grid>
    </S.Main>
  );
};

export default Skils;
