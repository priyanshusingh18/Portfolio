import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-9685100340">9685100340</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:priyanshusinghverma1809@gmail.com">
            Priyanshusinghverma1809@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <div>
          <SocialIcons href="https://github.com/priyanshusingh18">
            <AiFillGithub />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/priyanshu-verma-a32903212/">
            <AiFillLinkedin />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/const_username_prince/">
            <AiFillInstagram />
          </SocialIcons>
        </div>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
