import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 0.875rem;
  width: 950px;
  padding-left: 30px; /* Space for the icon */
  padding-right: 30px; /* Space for the placeholder */
  border-radius: 25px;
  border: 1px solid #ccc;
  height: 36px;
  box-sizing: border-box; /* To ensure padding is included in the element's total width */
  text-align: center; /* Align the placeholder to the right */
  position: relative; /* To position the icon inside the input */
  outline: none; /* Remove default focus outline */
  transition: border 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effect */
  cursor: text; /* Change the mouse cursor to text input style */

  /* Default background and text color */
  background-color: #fff;
  color: #333;

  /* Highlight on hover */
  &:hover {
    border-color: #007bff; /* Change border color on hover */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle shadow effect */
  }

  /* Highlight on focus */
  &:focus {
    border-color: #0056b3; /* Darker blue border on focus */
    box-shadow: 0 0 8px rgba(0, 86, 179, 0.75); /* Stronger shadow on focus */
  }

  /* Adjust placeholder color */
  &::placeholder {
    color: #aaa; /* Lighter color for placeholder text */
    font-style: italic; /* Optional for styling */
  }
`;


export const IconWrapper = styled.div`
  position: absolute;
  left: 10px; /* Position the icon inside the input */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Prevents the icon from interfering with input */
`;
