import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From creating Back-end to Designing and coding the frontend,
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>The Fundamentals</ListTitle>
          <ListParagraph>
            Highly proficient with <br /> HTML5, CSS and JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end Frameworks</ListTitle>
          <ListParagraph>
            Demonstrable Experience with <br />
            React, Redux, NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience in creating complex back-end applications with
            <br />
            NodeJs, express
          </ListParagraph>
        </ListContainer>
      </ListItem>{" "}
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>DataBase</ListTitle>
          <ListParagraph>
            Creating, Modelling and Querying
            <br />
            Scalable MongoDB databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Component Libraries</ListTitle>
          <ListParagraph>
            Creating Beautiful Ui with <br />
            Bootstrap, MaterialUi, antDesign
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <ListParagraph>
            Also Experienced in <br />
            TailwindCss, StyledComponents, Sass And Typescript,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Including but not limited to <br />
            git, npm, github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
