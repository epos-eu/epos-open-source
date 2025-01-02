import styled from "styled-components";
export const StyledCodeBlock = styled.pre<{ isNightMode: boolean }>`
  background-color: ${(props) => (props.isNightMode ? '#2d2d2d' : '#f5f5f5')};
  color: ${(props) => (props.isNightMode ? '#ffffff' : '#000000')};
  border: 1px solid ${(props) => (props.isNightMode ? '#444' : '#ddd')};
  padding: 10px;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-radius: 5px;
  position: relative; /* Set parent to relative */
`;

export const ToggleButton = styled.button`
 background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute; /* Position the button absolutely */
  top: 10px; /* Adjust spacing from the top */
  right: 10px; /* Adjust spacing from the right */
  z-index: 10000; /* Ensure it appears above other elements */
  margin-top:12px;
`;