import styled from "styled-components";

export const Content = styled("p")`
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:20px;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;

export const Title = styled("h1")`
margin: 1.5rem 0 2rem 0;
font-size:32px;
font-family: "Lato", "OpenSans", sans-serif;
color: black;
&:hover, &:focus {
  color:  #152c15 ;
}
`