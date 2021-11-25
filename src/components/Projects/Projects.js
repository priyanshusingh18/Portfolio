import React, { useState, useRef, useEffect } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Slider,
  Img,
  LeftArrow,
  RightArrow,
} from "./ProjectsStyles";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "../TimeLine/TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { CarouselContainer } from "../TimeLine/TimeLineStyles";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        <LeftArrow onClick={prevSlide}>
          {" "}
          <FaArrowAltCircleLeft />
        </LeftArrow>
        <RightArrow onClick={prevSlide}>
          {" "}
          <FaArrowAltCircleRight />
        </RightArrow>

        <Slider>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }, index) => {
              console.log(source, visit);
              return (
                <CarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={current}
                >
                  <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                      <HeaderThree title>{title}</HeaderThree>
                      <Hr />
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>

                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                    <UtilityList>
                      <ExternalLinks href={visit}>Visit</ExternalLinks>
                      <ExternalLinks
                        href={
                          source === "Private"
                            ? " mailto:priyanshusinghverma1809@gmail.com"
                            : source
                        }
                      >
                        {source === "Private" ? "Discuss in Interview" : "Code"}
                      </ExternalLinks>
                    </UtilityList>
                  </BlogCard>
                </CarouselItem>
              );
            }
          )}
        </Slider>
      </GridContainer>
    </Section>
  );
};

export default Projects;
