import styled from 'styled-components';

export const Demo = styled.div`
  font-family: monospace; /* Using a monospace font for terminal-like appearance */
  white-space: pre-wrap; /* Preserves whitespace and line breaks */
  background-color: black; /* Terminal background color */
  color: white; /* Terminal text color */
  padding: 10px; /* Padding around the text */
  border: 10px solid #ccc; /* Optional border */
  margin: 40px;
  font-size: 13px;
  border-radius: 5px; /* Optional rounded corners */
  line-height: 1;

  /* Adjust dimensions for smaller screens */
   @media screen and (max-width: 1389px) {
    max-width: 100%;
    max-height: 100%;
    font-size: 11px;
  }
   @media screen and (max-width: 1272px) {
    max-width: 96%;
    font-size: 10px;
  }
    @media screen and (max-width: 1160px) {
    max-width: 88%;
    max-height: 100%;
    font-size: 8.5px;
  }
    @media screen and (max-width: 946px) {
    max-width: 70%;
    max-height: 100%;
    font-size: 8px;
  }
    @media screen and (max-width: 889px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 5.7px;
  }
     @media screen and (max-width: 768px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 5px;
  }
  
       @media screen and (max-width: 690px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 4.3px;
  }

        @media screen and (max-width: 563px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 3.7px;
  }

        @media screen and (max-width: 446px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 2.8px;
  }
  
        @media screen and (max-width: 332px) {
    max-width: 80%;
    max-height: 100%;
    font-size: 1.8px;
  }



}

`;
