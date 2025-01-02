import styled from 'styled-components';

export const StyledInput = styled.input`
 font-size: 0.875rem;
  width: 250px;
  padding-left: 30px; /* Space for the icon */
  padding-right: 30px; /* Space for the placeholder */
  border-radius: 25px;
  border: 1px solid #ccc;
  height: 36px;
  box-sizing: border-box; /* To ensure padding is included in the element's total width */
  position: relative; /* To position the icon inside the input */
  text-align: center; /* Align the placeholder to the right */
  align-item: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px; /* Position the icon inside the input */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Prevents the icon from interfering with input */
`;
