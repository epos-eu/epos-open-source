import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

// Existing styles...

export const HeaderSection = styled("header")`
  padding: 0.7rem 0.3rem;
  border-Bottom: 0.5px solid #cccc;
  display:flex;
  
`;


export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 100px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 17px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  margin: 0.5rem 15px;
  gap:10px;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #457945 ;
  &:hover, &:focus {
    color: orange;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomHeaderLink = styled(NavLink)`
  font-size: 1.5rem;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  display: flex;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
  &:hover, &:focus {
    color: orange;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;



export const QuickLink = styled.a`
  font-size: 14px;
  width: 120px;
  border-radius: 30px;
  border: 1px solid #ccc;
  height: 36px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  font-family: "Lato", "OpenSans", sans-serif;
  color: black;
  margin-left:580px;
  margin-bottom:12.5px;
   &:hover{
    color: white;
    text-underline-position: under;
    background:   #457945;
  }
`;



