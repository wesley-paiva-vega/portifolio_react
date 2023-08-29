import * as Styled from "./styles";
import Header from "../Header";
import NameSection from "../../layouts/Name";
import { SectionButtons } from "../../styles";
import Button from "../Button";
import About from "../../layouts/About";
import Grid from "../Grid";
import Icon from "../Icon";
import Projects from "../../layouts/Projects/";
import SectionServices from "../../layouts/Services";

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
      <About />
      <Grid>
        <Styled.MainIcon>
          <Icon size="xl" name="smile" />
          <h5>My name</h5>
          <span>Wesley Snybool</span>
        </Styled.MainIcon>
        <Styled.MainIcon>
          <Icon size="xl" name="mail" />
          <h5>E-mail</h5>
          <span>wesley.snybool.dev@gmail.com</span>
        </Styled.MainIcon>{" "}
        <Styled.MainIcon>
          <Icon size="xl" name="instagram" />
          <h5>Instagram</h5>
          <span>@wesley-paiva-dev</span>
        </Styled.MainIcon>{" "}
        <Styled.MainIcon>
          <Icon size="xl" name="phone" />
          <h5>My phone</h5>
          <span>11 996931399</span>
        </Styled.MainIcon>
      </Grid>
      <Projects />
      <SectionServices />
    </Styled.Main>
  );
};

export default Main;
