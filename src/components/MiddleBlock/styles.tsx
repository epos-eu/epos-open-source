import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 0.1rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
 font-size:16px;
`;

export const Title = styled("h1")`
  margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color: black;
  &:hover, &:focus {
    color:  #152c15 ;
  }
`;


export const title = styled("h6")`
  padding: 0.75rem 0 0.75rem;
  font-family: "OpenSans", sans-serif;
  color:red;
  
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  font-family: "OpenSans", sans-serif;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

// export const MiddleBlockButton = styled("button")`
//   background: white;
//   color: black;
//   font-size: 16px;
//   font-family: "OpenSans", sans-serif;
//   border: 2px solid black;
//   border-radius: 50px;  /* Fully rounded border */
//   padding: 13px 0;
//   cursor: pointer;
//   margin-top: 0.625rem;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 16px 30px rgba(23, 31, 114, 0.2);
//   &:hover,
//   &:active,
//   &:focus {
//     color: white;
//     border: 1px solid  #152c15 ;
//     background-color:  #152c15 ;
//   }
// `;



