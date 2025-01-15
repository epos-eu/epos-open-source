import styled from "styled-components";

export const PopupContainer = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:100%;
  height:100vh;
  background-color: #656C85CC;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupInnerContainer = styled("div")`
  position: relative;
  padding:32px;
  width:1000px;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #F5F6F7;
`;

export const PopupCloseBtn = styled("div")`
  position: absolute;
  top: 16px;
 right:16px;
`;

