import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color: #152c15;
`;

export const RequirementTable = styled.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 12px;
  font-size: 18px;
  text-align: left;
  background-color: #444;
  color: white;
  border: 1px solid #ddd;
  font-family: "Lato", "OpenSans", sans-serif;
`;

export const TableRow = styled.tr`
  display: table-row;
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-size:16px;
  font-family: "OpenSans", sans-serif;

`;

export const TableDescription = styled.td`
  margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  text-align: left;
  padding-left: 10px;
  font-size:16px;
`;

export const RequirementsDescription = styled.p`
  margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
  font-size:16px;
 
`;