import * as Styled from "./styles";

type CardProps = {
  title: string;
  link?: string;
  urlBackGround?: string;
  subTitle?: string;
};

const Card = ({
  title,
  link,
  urlBackGround,
  subTitle,
}: CardProps): JSX.Element => {
  return (
    <Styled.Main>
      <a href={link}>
        <Styled.ImageProject $urlBackGround={urlBackGround} />
      </a>
      <Styled.FooterCard>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      </Styled.FooterCard>
    </Styled.Main>
  );
};

export default Card;
