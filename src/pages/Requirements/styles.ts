import styled from 'styled-components';

export const SectionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #333;
`;

export const RequirementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #444;
  color: white;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export const TableDescription = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  vertical-align: top;
  text-align: left;
`;
