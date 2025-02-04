import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  height: auto; /* Adjusts height based on content */

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
      @media (min-width: 2440px) {
    
  padding: 5rem 0;
   height: auto; /* Adjusts height based on content */

`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  border: 0.1px solid black;
  padding: 30px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
      @media (min-width: 2440px) {
    max-width: 700px;
    height: 500px;
    margin-right:110px;
}
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const Label = styled("label")`
  font-size:16px;
  font-weight:bold;
  margin-top : 10px;
`;

export const ButtonContainer = styled("div")`
  text-align: center;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const FormInput = styled("input")`
border: 0.1px solid black;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 10px;
`;

export const SubmitInput = styled("input")`
border: 0.1px solid black;
margin-top: 20px;
cursor: pointer;
border-radius: 30px;
 &:hover{
    color: white;
    text-underline-position: under;
    background:   #457945;
}

`;



