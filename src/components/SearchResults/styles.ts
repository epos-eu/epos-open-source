import styled from "styled-components";

export const SearchResult = styled.ul`
  z-index: 1000000;
  cursor: pointer;
  max-height: 300px; /* Set max height for scrolling */
  overflow-y: auto; /* Enables vertical scrolling */
  border: 1px solid #ccc; /* Optional: Adds a border for better visibility */
  padding: 5px;
  background: white; /* Ensures content is visible */
`;

export const ResultItems = styled.li`
  border: 0.01px solid grey;
  padding: 10px;
  margin-bottom: 10px;
  z-index: 1000000;
  cursor: pointer;
  list-style-type: none;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #457945;
  }
`;

export const LinkItems = styled.a`
  color: black;
  text-decoration: none;
  display: block; /* Ensures full clickable area */
  
  &:hover,
  &:active,
  &:focus {
    background-color: #457945;
  }
`;
