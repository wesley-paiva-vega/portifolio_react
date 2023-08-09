import * as Styles from "./styles";

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
  size: "small" | "medium" | "large";
};

const Icon = ({ name }: IconProps): JSX.Element => {
  return (
    <Styles.Wrapper>
      <img src={icons[name]} alt="Ícone" />
    </Styles.Wrapper>
  );
};

export default Icon;
