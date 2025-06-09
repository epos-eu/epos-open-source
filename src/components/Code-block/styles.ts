import styled from 'styled-components';

export const Demo = styled("div")`
  font-family: monospace; /* Using a monospace font for terminal-like appearance */
  white-space: pre-wrap; /* Preserves whitespace and line breaks */
  background-color: black; /* Terminal background color */
  color: white; /* Terminal text color */
  border: 5px solid #457945; /* Optional border */
  font-size: 9px;
  border-radius: 5px; /* Optional rounded corners */
  line-height: 1;

    @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
    @media (min-width: 2440px) {
    max-width: 2000px;
}


}
`;