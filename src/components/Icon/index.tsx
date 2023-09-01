import * as Styles from "./styles";
import { sizes } from "../../theme/index";

import smile from "../../assets/smile.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";
import figma from "../../assets/figma.svg";
import code from "../../assets/code.svg";
import smartphone from "../../assets/smartphone.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import tailwind from "../../assets/tailwind.svg";
import nextjs from "../../assets/nextjs.svg";
import html_five from "../../assets/html_five.svg";
import css3 from "../../assets/css3.svg";
import nestjs from "../../assets/nestjs.svg";
import styled_components from "../../assets/styled_components.svg";
import typescript from "../../assets/typescript.svg";

const icons = {
  smile: smile,
  mail: mail,
  instagram: instagram,
  phone: phone,
  figma: figma,
  code: code,
  smartphone: smartphone,
  react: react,
  tailwind: tailwind,
  javascript: javascript,
  nextjs: nextjs,
  html_five: html_five,
  css3: css3,
  nestjs: nestjs,
  styled_components: styled_components,
  typescript: typescript,
};

type IconProps = {
  name: keyof typeof icons;
  size: keyof typeof sizes.icons;
};

const Icon = ({ name, size }: IconProps): JSX.Element => {
  return (
    <Styles.Wrapper>
      <img {...sizes.icons[size]} src={icons[name]} alt={`Icon ${name}`} />
    </Styles.Wrapper>
  );
};

export default Icon;
