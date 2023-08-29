import React from "react";
import Icon from "../Icon";
import * as S from "./styles";

type CardServiceProps = {
  title: string;
  icon: React.ReactNode;
};

const CardServices = ({ title, icon }: CardServiceProps): JSX.Element => {
  return (
    <S.Main>
      {icon}
      <h5>{title}</h5>
    </S.Main>
  );
};

export default CardServices;
