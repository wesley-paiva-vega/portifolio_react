import * as Styled from "./styles";
import Header from "../Header";
import NameSection from "../NameSection";
import { SectionButtons } from "../../styles";
import Button from "../Button";

const Main = (): JSX.Element => {
  return (
    <Styled.Main>
      <Header />
      <NameSection />
      <SectionButtons>
        <Button
          color="dark_10"
          border="none"
          backgroundColor="brand_color"
          title="Download CV"
        />
        <Button
          backgroundColor="dark_10"
          border="light"
          color="dark_50"
          title="Download CV"
        />
      </SectionButtons>
    </Styled.Main>
  );
};

export default Main;
