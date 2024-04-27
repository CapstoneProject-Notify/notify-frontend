import { StyledFooter, FooterContainer, FooterTextContainer } from "./styles";
import Logo from "../Logo";

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTextContainer>
          성균관대학교 소프트웨어학과 Capstone Design Project
        </FooterTextContainer>
        <FooterTextContainer>Team 6 Project</FooterTextContainer>
        <FooterTextContainer>
          Copyright © 20234 NOTIFY All rights reserved.
        </FooterTextContainer>
        <FooterTextContainer></FooterTextContainer>
        <FooterTextContainer>
          <Logo variant="25" />
        </FooterTextContainer>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
