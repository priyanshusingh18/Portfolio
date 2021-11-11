import styled from "styled-components";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const LeftArrow = styled.div`
  content: FaArrowAltCircleLeft;
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;

  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled.div`
  content: FaArrowAltCircleLeft;
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 75%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Slider = styled.section`
  position: relative;
  min-height: 120vh;
  width: 100%;
  // display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh !important;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 70vh;
  }
`;
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  margin-bottom: 3rem;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
