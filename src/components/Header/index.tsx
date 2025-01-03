import { useState } from "react";
import { Row, Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
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
  Span,
  QuickLink
} from "./styles";
import SearchBar from "../Search";
import Popup from "../../common/pop-up";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const [popUp , setPopUp] = useState(false);
 
  const toggleButton = () => {
    setVisibility(!visible);
  };

  const learnMenu = (
    <AntMenu>
      <AntMenu.Item > 
        <Link to="/goals">Architectural design</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/requirements-section">Architectural requirements</Link> {/* Navigate to Introduction page */}
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
        <Link to="/conceptual-design">Conceptual Design</Link> {/* Navigate to Introduction page */}
      </AntMenu.Item>
      <AntMenu.Item > 
        <Link to="/technical-design">Technical Design</Link> {/* Navigate to Introduction page */}
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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    {/* Left side: Logo and Menu items */}
    <div>
      <Link to="/">
        <CustomNavLinkSmall>
          <SvgIcon src="logo.svg" width="90px" height="50px" />
        </CustomNavLinkSmall>
      </Link>
      </div>
      <ul>
      <Link to="/">
        <CustomNavLinkSmall>
          Home
        </CustomNavLinkSmall>
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
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'learn')}  >
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
        onVisibleChange={(visible) => handleDropdownVisibleChange(visible, 'design')} >
        <CustomNavLinkSmall>
          <span style={{ marginRight: '0.2rem' }}>Documentation</span>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className={`arrow ${openKeys.includes('design') ? 'arrow-active' : ''}`}/>
        </CustomNavLinkSmall>
      </Dropdown>
      </ul>
      <QuickLink href="https://www.ics-c.epos-eu.org/" target="_blank" rel="noopener noreferrer">Data Access</QuickLink>
    </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px' , marginRight:'30px' , alignItems: 'center'  , display:'flex'} }>
      <SearchBar />
    </div>
  
  
</>

    );
  };

  return (
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
  );
};

export default Header;
