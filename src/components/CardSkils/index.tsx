import React from "react";
import * as S from "./styles";

type CardSkilsProps = {
  icon: React.ReactNode;
};

const CardSkils = ({ icon }: CardSkilsProps): JSX.Element => {
  return <S.Wrapper>{icon}</S.Wrapper>;
};

export default CardSkils;
