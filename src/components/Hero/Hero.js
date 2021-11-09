import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Priyanshu Singh
        <br />
        I'm a full-stack web developer
      </SectionTitle>
      <SectionText>
        I have serious passion for developing full-stack web applications,
        responsive front-ends, and creating intuitive, dynamic user experiences
      </SectionText>
      <Button onClick={() => (window.location = "http://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;