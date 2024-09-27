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
  font-weight: bold;
  width: 200px;
  vertical-align: top;
  background-color: #f2f2f2;
`;

export const GlossaryCellDefinition = styled.div`
  display: table-cell;
  padding: 15px;
  vertical-align: top;
  text-align: justify;
  color: #555;
`;
export const GlossaryHeader = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const GlossaryDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
`;