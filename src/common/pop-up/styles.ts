import styled from "styled-components";

export const PopupContainer = styled("div")`
  position: fixed;
  top: 0;
  left:0;
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupInnerContainer = styled("div")`
  position: relative;
  padding:32px;
  width:100%;
  max-width:100%;
  background-color: #FFF;
`;

export const PopupCloseBtn = styled("div")`
  position: absolute;
  top: 16px;
 right:16px;
`;