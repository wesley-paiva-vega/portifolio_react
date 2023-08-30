import Card from "../../components/Card";
import * as S from "./styles";

const Projects = (): JSX.Element => {
  return (
    <S.Main>
      <h2>Projetos</h2>
      <S.GridCardsProjects gap={40} col={1} row={6}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.GridCardsProjects>
    </S.Main>
  );
};

export default Projects;
