import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative; /* Positioning context for the dropdown */
`;

export const SearchBarContainer = styled.div`
  display: flex; /* Align input and button in a row */
  align-items: center; /* Center items vertically */
  margin-top: 10px; /* Space below the icon if needed */ 
`;

export const SearchInput = styled.input`
  padding: 8px; /* Adds padding for better aesthetics */
  border: 1px solid #ccc; /* Light border */
  border-radius: 4px; /* Rounded corners */
  font-size: 10px; /* Font size */
  width: 200px; /* Set width of the input */
  background-color: white; /* White background */

  &:focus {
    border-color: orange; /* Change border color on focus */
    outline: none; /* Remove default outline */
  }
`;

export const SearchButton = styled.button`
  padding: 8px 12px; /* Padding for the button */
  margin-left: 5px; /* Space between input and button */
  border: none; /* Remove border */
  background-color: #007bff; /* Button color */
  color: white; /* Text color */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Cursor change on hover */

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

export const SearchIcon = styled.div`
  cursor: pointer; /* Change cursor to pointer */
  margin: 0.5rem 2rem;
  display: flex; /* Center icon vertically */
  align-items: center; /* Center icon vertically */
  font-size: 1.4rem;
`;

export const PopSerachInput = styled.div`
  margin-bottom: 10px;
`;
export const SerachButtonInput = styled.input`
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
 cursor: pointer; /* Change cursor to pointer */
`;
export const IconWrapper = styled.div`
  position: absolute;
  left: 15px; /* Position the icon inside the input */
  top: 62%;
  transform: translateY(-50%);
  pointer-events: none; /* Prevents the icon from interfering with input */
`;