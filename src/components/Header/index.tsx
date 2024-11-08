import { useState } from "react";
import i18n from "i18next";
import { Row, Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import SearchBar from "../Search";
import { DownOutlined } from '@ant-design/icons';
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
  DropdownMenuWrapper,
  CustomHeaderLink
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
    <DropdownMenuWrapper>
    <AntMenu>
      <AntMenu.Item > 
        <Link to="/goals">{t("Architectural design")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/requirements-section">{t("Architectural requirements")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/references">{t("References")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/glossary">{t("Glossary")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
    </DropdownMenuWrapper>
  );
  const installMenu = (
    <DropdownMenuWrapper>
    <AntMenu>
      <AntMenu.Item>
        <Link to="/install">{t("Install")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/current-component">{t("Components")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/Libraries">{t("Libraries")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
    </DropdownMenuWrapper>
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
        <Link to="/epos-data-model">{t("EPOS Data Model")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/epos-geo-json">{t("EPOS GeoJSON")}</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  // const languageMenu = (
  //   <LanguageSwitchContainer>
  //     <AntMenu>
  //       <AntMenu.Item key="en">
  //         <LanguageSwitch onClick={() => handleChange("en")}>
  //           <SvgIcon
  //             src="united-states.svg"
  //             aria-label="Switch to English"
  //             width="30px"
  //             height="30px"
  //           />
  //         </LanguageSwitch>
  //       </AntMenu.Item>
  //       <AntMenu.Item key="es">
  //         <LanguageSwitch onClick={() => handleChange("es")}>
  //           <SvgIcon
  //             src="italy.png"
  //             aria-label="Switch to Spanish"
  //             width="30px"
  //             height="30px"
  //           />
  //         </LanguageSwitch>
  //       </AntMenu.Item>
  //     </AntMenu>
  //   </LanguageSwitchContainer>
  // );
  
  // const homeMenu = (
  //   <AntMenu >
  //     <AntMenu.Item  style={{ width: "180px" }}
  //         onClick={() => scrollTo("intro")}>{t("EPOS Platform)}
  //     </AntMenu.Item>
  //     <AntMenu.Item  style={{ width: "180px" }}
  //         onClick={() => scrollTo("contribute")}>{t("Contributation")}
  //     </AntMenu.Item>
  //     <AntMenu.Item  style={{ width: "180px" }}
  //         onClick={() => scrollTo("goals")}>{t("EPOS Goals")}
  //     </AntMenu.Item>
  //     <AntMenu.Item  style={{ width: "180px" }}
  //         onClick={() => scrollTo("whoWeAre")}>{t("Who We Are")}
  //     </AntMenu.Item>
  //     <AntMenu.Item  style={{ width: "180px" }}
  //         onClick={() => scrollTo("contact")}>{t("Contact us")}
  //     </AntMenu.Item>
  //   </AntMenu>
  // );
  
  const MenuItem = () => {
    const [openKeys, setOpenKeys] = useState<string[]>([]); // State to manage dropdown visibility
  
    const handleDropdownVisibleChange = (visible: boolean, menuKey: string) => {
      if (visible) {
        setOpenKeys([menuKey]); // Set the opened dropdown key
      } else {
        setOpenKeys(openKeys.filter((key) => key !== menuKey)); // Remove the closed dropdown key
      }
    };
  
    return (
      <>
        <Link to="/">
        <CustomNavLinkSmall>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
      </Link>
      
      <Dropdown
        overlay={installMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'install')}
      >
        <CustomNavLinkSmall>
        <span style={{ marginRight: '0.5rem' }}>{t("Download")}</span>
              <FontAwesomeIcon icon={faAnglesDown} className={`arrow ${openKeys.includes('install') ? 'arrow-active' : ''}`} />
        </CustomNavLinkSmall>
      </Dropdown>
      <Dropdown
        overlay={learnMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'learn')}
      >
        <CustomNavLinkSmall>
        <span style={{ marginRight: '0.5rem' }}>{t("Approach")}</span>
              <FontAwesomeIcon icon={faAnglesDown} className={`arrow ${openKeys.includes('learn') ? 'arrow-active' : ''}`} />
        </CustomNavLinkSmall>
      </Dropdown>

      <Dropdown
        overlay={designMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'design')}
      >
        <CustomNavLinkSmall>
        <span style={{ marginRight: '0.5rem' }}>{t("Documentation")}</span>
              <FontAwesomeIcon icon={faAnglesDown} className={`arrow ${openKeys.includes('design') ? 'arrow-active' : ''}`} />
        </CustomNavLinkSmall>
        </Dropdown>
        {/* <Dropdown
          overlay={languageMenu}
          trigger={['hover']}
          onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'language')}
        >
          <CustomNavLinkSmall>
            <Span>
              {t("Languages")}
              <DownOutlined className={openKeys.includes('language') ? 'arrow-active' : ''} />
            </Span>
          </CustomNavLinkSmall>
        </Dropdown> */}
        {/* <CustomNavLinkSmall>
          <SearchBar />
        </CustomNavLinkSmall> */}
      </>
    );
  };

  return (
    <HeaderSection>
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
    </HeaderSection>
  );
};

export default withTranslation()(Header);
