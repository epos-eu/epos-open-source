import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: white;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 2px solid black;
  border-radius: 50px;  /* Fully rounded border */
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgba(23, 31, 114, 0.2);

  &:hover,
  &:active,
  &:focus {
    color: white;
    border: 1px solid green;
    background-color: green;
  }
`;

