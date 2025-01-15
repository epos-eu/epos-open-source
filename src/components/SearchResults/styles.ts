import styled from "styled-components";

export const SearchResult = styled.ul`
 z-index: 1000000; 
margin-top: 20px;
 cursor: pointer; /* Change cursor to pointer */
`;
export const ResultItems = styled.li`
border : 0.01px solid grey;
padding: 10px;
margin-bottom:10px;
z-index: 1000000; 
 cursor: pointer; /* Change cursor to pointer */
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
&:hover,
  &:active,
  &:focus {
    background-color: #457945;
  }
`;