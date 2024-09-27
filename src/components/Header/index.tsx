import { useState } from "react";
import i18n from "i18next";
import { Row, Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  }

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const learnMenu = (
    <AntMenu>
      <AntMenu.Item>
        <Link to="/introduction">{t("Introduction")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/glossary">{t("Glossary")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/goals">{t("Goals & Constrains")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/requirements-section">{t("Requirements Section")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/references">{t("References")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  const installMenu = (
    <AntMenu>
      <AntMenu.Item>
        <Link to="/install">{t("Install")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/current-component">{t("Current component")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/Libraries">{t("Libraries")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  const designMenu = (
    <AntMenu>
      <AntMenu.Item>
        <Link to="/conceptual-design">{t("Conceptual Design")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/technical-design">{t("Technical Design")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/rest-api-definition">{t("RESTful API Definitions")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/epos-geo-json">{t("EPOS GeoJSON")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/epos-data-model">{t("EPOS Data Model")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  const languageMenu = (
    <LanguageSwitchContainer>
      <AntMenu>
        <AntMenu.Item key="en">
          <LanguageSwitch onClick={() => handleChange("en")}>
            <SvgIcon
              src="united-states.svg"
              aria-label="Switch to English"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
        </AntMenu.Item>
        <AntMenu.Item key="es">
          <LanguageSwitch onClick={() => handleChange("es")}>
            <SvgIcon
              src="spain.svg"
              aria-label="Switch to Spanish"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
        </AntMenu.Item>
      </AntMenu>
    </LanguageSwitchContainer>
  );
  
  const MenuItem = () => {
    return (
      <>
        <Dropdown overlay={installMenu} trigger={['click']}>
          <CustomNavLinkSmall>
            <Span>{t("Installation")}</Span>
          </CustomNavLinkSmall>
        </Dropdown>
        <Dropdown overlay={learnMenu} trigger={['click']}>
          <CustomNavLinkSmall>
            <Span>{t("Learn")}</Span>
          </CustomNavLinkSmall>
        </Dropdown>
        <Dropdown overlay={designMenu} trigger={['click']}>
          <CustomNavLinkSmall>
            <Span>{t("Documentaion")}</Span>
          </CustomNavLinkSmall>
        </Dropdown>
        <Dropdown overlay={languageMenu} trigger={['click']}>
          <CustomNavLinkSmall>
            <Span>{t("Languages")}</Span>
          </CustomNavLinkSmall>
        </Dropdown>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact us")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
