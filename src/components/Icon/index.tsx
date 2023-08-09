import * as Styles from "./styles";

import Smile from "../../assets/smile.svg";
import smile from "../../assets/smile.svg";
import Mail from "../../assets/mail.svg";
import Instagram from "../../assets/instagram.svg";
import Phone from "../../assets/phone.svg";

const Icons = {
  smile: <Smile />,
  mail: <Mail />,
  intagram: <Instagram />,
  phone: <Phone />,
};

type IconProps = {
  name: keyof typeof Icons;
  size: "small";
};

const Icon = ({ name }: IconProps): JSX.Element => {
  return (
    <Styles.Wrapper>
      <img src={smile} alt="" />
    </Styles.Wrapper>
  );
};

export default Icon;
