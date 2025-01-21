import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { SocialLink } from "../../common/SocialLink";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  FooterContainer,
} from "./styles";


const Footer = () => {


  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{("EPOS ERIC")}</Title>
              <Para as="a" href="https://www.epos-eu.org/about-epos" target="_blank" rel="noopener noreferrer">About</Para>
              <Para as="a" href="https://www.epos-eu.org/dataportal" target="_blank" rel="noopener noreferrer">EPOS Platform</Para>
              <Para as="a" href="https://www.epos-eu.org/epos-eric-privacy-policy" target="_blank" rel="noopener noreferrer">Privacy & Policy</Para>
              <Para as="a" href="https://www.epos-eu.org/epos-eric/careers" target="_blank" rel="noopener noreferrer">Careers & Culture</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Title>{("Useful Links ")}</Title>
            <Para as="a" href="https://github.com/epos-eu/epos-open-source" target="_blank" rel="noopener noreferrer">Github repository</Para>
            <Para as="a" href="https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues" target="_blank" rel="noopener noreferrer"> Issue Tracker</Para>
    
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>Contact</Title>
              <Para>Via di Vigna Murata 605</Para>
              <Para>00143 Roma, Italia</Para>
              <Para>Email : info@epos-eric.eu</Para>
              <Para>Phone: (+39) 06 518601</Para>
              <Para>Vat: IT15152381008</Para>
              <p></p>
            </Col>
          </Row>
          <Row justify="space-between">
           
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/EPOSeu"
                src="facebook.png"
              />
              <SocialLink
                href="https://x.com/i/flow/login?redirect_after_login=%2FEPOSeu"
                src="x.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/eposeu"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://www.youtube.com/c/EposProjectEu"
                src="youtube.svg"
              />
              <SocialLink
                href="https://www.flickr.com/photos/eposeu"
                src="flickr.svg"
              />
     
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
