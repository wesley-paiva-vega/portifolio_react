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
          borderColor="light"
          backgroundColor="brand_color"
          title="Download CV"
        />
        <Button
          backgroundColor="dark_10"
          borderColor="none"
          color="dark_10"
          title="Download CV"
        />
      </SectionButtons>
    </Styled.Main>
  );
};

export default Main;
