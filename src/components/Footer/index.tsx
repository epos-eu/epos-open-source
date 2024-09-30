import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>Email : epos-italia@ingv.it</Para>
              <Para>Phone: (+39) 06 518601</Para>
              <Para>Vat: IT15152381008</Para>
              <p></p>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:epos-italia@ingv.it">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("EPOS ERIC Privacy ")}</Title>
              <Large as="a" href="https://www.epos-eu.org/epos-eric-privacy-policy" target="_blank" rel="noopener noreferrer"> {("Policy")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Title>{("Useful Links ")}</Title>
              <Large as="a" href="https://www.epos-eu.org/epos-eric/careers" target="_blank" rel="noopener noreferrer">{t("Careers & Culture")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Via di Vigna Murata 605</Para>
              <Para>00143 Roma, Italia</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{("EPOS ERIC")}</Title>
              <Large as="a" href="https://www.epos-eu.org/about-epos" target="_blank" rel="noopener noreferrer"> {t("About")}</Large>
              <Large as="a" href="https://www.epos-eu.org/dataportal" target="_blank" rel="noopener noreferrer">EPOS Data Portal</Large>
              <Large as="a" href="https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues" target="_blank" rel="noopener noreferrer"> {("Issue Tracker")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="italy.png"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
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

export default withTranslation()(Footer);
