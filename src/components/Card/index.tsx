import * as Styled from "./styles";

const Card = () => {
  return (
    <Styled.Main>
      <Styled.ImageProject></Styled.ImageProject>
      <Styled.FooterCard>
        <Styled.Title>Title Project</Styled.Title>
        <Styled.SubTitle>Tecnologias: HTML, CSS e JS.</Styled.SubTitle>
      </Styled.FooterCard>
    </Styled.Main>
  );
};

export default Card;
