import * as Styled from "./styles";
import Header from "../Header";
import NameSection from "../NameSection";
import { SectionButtons } from "../../styles";
import Button from "../Button";
import Aboult from "../About";
import Grid from "../Grid";
import Icon from "../Icon";

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
      <Aboult />
      <Grid>
        <Icon size="small" name="smile" />
      </Grid>
    </Styled.Main>
  );
};

export default Main;
