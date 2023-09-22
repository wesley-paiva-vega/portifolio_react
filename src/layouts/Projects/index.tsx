import Card from "../../components/Card";
import * as S from "./styles";

import fflushSite from "../../assets/fflush.png";

const Projects = (): JSX.Element => {
  return (
    <S.Main>
      <h2>Projects</h2>
      <S.GridCardsProjects gap={40} col={1} row={6}>
        <Card
          title="FFLush Tech Site"
          link="https://fflushsite.web.app/index.html"
          urlBackGround={fflushSite}
          subTitle="Tecnologias: css3, javascript, bootstrap"
        />
        <Card
          title="Title of Project"
          subTitle="Tecnologias: HTML, CSS e JS."
        />
        <Card
          title="Title of Project"
          subTitle="Tecnologias: HTML, CSS e JS."
        />
        <Card
          title="Title of Project"
          subTitle="Tecnologias: HTML, CSS e JS."
        />
        <Card
          title="Title of Project"
          subTitle="Tecnologias: HTML, CSS e JS."
        />
        <Card
          title="Title of Project"
          subTitle="Tecnologias: HTML, CSS e JS."
        />
      </S.GridCardsProjects>
    </S.Main>
  );
};

export default Projects;
