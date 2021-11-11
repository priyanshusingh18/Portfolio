import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        My name is Priyanshu, but you can call me Prince. i'm currently in
        Indore, India, but i'll be moving to Pune soon.
        <br />I am a self taught Full-stack web developer and have a deep
        understanding of HTML, CSS and JavaScript language and possess a good
        knowledge of computer software packages (frameworks and tools) that are
        used in today’s technology. <br /> <br /> On a personal level, I am
        highly-motivated, result oriented, self-driven, hard-working, fast
        learner and constantly seeking to improve my skills and am willing to
        work remotely or on-Site. In addition to this, I have the ability to
        adapt to any type of team environment, I also have the ability to work
        independently while staying on schedule and meeting those tight
        deadlines.
      </SectionText>
    </Section>
  );
};

export default Timeline;
