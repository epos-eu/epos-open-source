import styled from 'styled-components';

export const SectionContainer = styled.div`
   padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #333;
`;

export const RequirementTable = styled.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #444;
  color: white;
  border: 1px solid #ddd;
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
`;

export const TableDescription = styled.td`
 font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
`;

export const RequirementsDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;