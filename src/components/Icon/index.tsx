import * as Styles from "./styles";
import { sizes } from "../../theme/index";

import smile from "../../assets/smile.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";

const icons = {
  smile: smile,
  mail: mail,
  intagram: instagram,
  phone: phone,
};

type IconProps = {
  name: keyof typeof icons;
  size: keyof typeof sizes.icons;
};

const Icon = ({ name, size }: IconProps): JSX.Element => {
  return (
    <Styles.Wrapper>
      <img {...sizes.icons[size]} src={icons[name]} alt="Ícone" />
    </Styles.Wrapper>
  );
};

export default Icon;
