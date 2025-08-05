import { lazy, useState } from "react";
import { Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  QuickLink,
  SearchDataAcess,
  HeaderWrapper
} from "./styles";
import SearchBar from "../Search";
const Container = lazy(() => import("../../common/Container"));

const Header = () => {
  const [visible, setVisibility] = useState(false);

 
  const toggleButton = () => {
    setVisibility(!visible);
  };

  const learnMenu = (
    <AntMenu>
      <AntMenu.Item > 
        <Link to="/system-architecture">System Architecture</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/references">References</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/glossary">Glossary</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  const installMenu = (
    <AntMenu>
      <AntMenu.Item>
        <Link to="/install">Install</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/current-component">Components</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/Libraries">Libraries</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
  const designMenu = (
    <AntMenu>
      <AntMenu.Item>
        <Link to="/implementation-details">Implementation Details</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/rest-api-definition">RESTful API Definitions</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/epos-data-model">EPOS Data Model</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/epos-geo-json">EPOS GeoJSON</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
    </AntMenu>
  );
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
    <HeaderWrapper>
  {/* Left side: Logo and menu */}
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to="/">
      <CustomNavLinkSmall>
        <SvgIcon src="logo.svg" width="90px" height="50px" />
      </CustomNavLinkSmall>
    </Link>
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      <Link to="/">
        <CustomNavLinkSmall>Home</CustomNavLinkSmall>
      </Link>
      <Link to="/contributors">
        <CustomNavLinkSmall>Contributors</CustomNavLinkSmall>
      </Link>
      <Dropdown
        overlay={installMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'install')}
      >
        <CustomNavLinkSmall>
          <span style={{ marginRight: '0.2rem' }}>Download</span>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className={`arrow ${openKeys.includes('install') ? 'arrow-active' : ''}`}
          />
        </CustomNavLinkSmall>
      </Dropdown>
      <Dropdown
        overlay={learnMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'learn')}
      >
        <CustomNavLinkSmall>
          <span style={{ marginRight: '0.2rem' }}>Approach</span>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className={`arrow ${openKeys.includes('learn') ? 'arrow-active' : ''}`}
          />
        </CustomNavLinkSmall>
      </Dropdown>
      <Dropdown
        overlay={designMenu}
        trigger={['hover']}
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'design')}
      >
        <CustomNavLinkSmall>
          <span style={{ marginRight: '0.2rem' }}>Documentation</span>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className={`arrow ${openKeys.includes('design') ? 'arrow-active' : ''}`}
          />
        </CustomNavLinkSmall>
      </Dropdown>
    </ul>
  </div>
  <SearchDataAcess>
    <QuickLink style={{ marginRight: '10px' }}>
      <a href="https://www.ics-c.epos-eu.org/" target="_blank" rel="noopener noreferrer">EPOS platform</a>
    </QuickLink>
    <SearchBar />
  </SearchDataAcess>
</HeaderWrapper>
</>

    );
  };

  return (
    <Container>
    <HeaderSection>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
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
    </Container>
  );
};

export default Header;
