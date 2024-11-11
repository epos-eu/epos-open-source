import styled from 'styled-components';

export const GlossaryContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const GlossaryTable = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid black; 
`;

export const GlossaryRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const GlossaryCellTerm = styled.div`
  display: table-cell;
  padding: 15px;
  margin: 1rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  text-align: left;
  vertical-align: top;
  font-size:16px;
  border: 1px solid black;
`;

export const GlossaryCellDefinition = styled.div`
  display: table-cell;
  padding: 15px;
  vertical-align: top;
  text-align: justify;
  margin: 1rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  text-align: left;
  font-size:16px;
  border: 1px solid black;
`;
export const GlossaryHeader = styled.h1`
  font-size: 32px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;

export const GlossaryDescription = styled.p`
  margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
 font-size:16px;
`;




