import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4f4f4;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #333;
  color: white;
  border: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export const BadgeLink = styled.a`
  display: inline-block;
  margin-right: 10px;

  img {
    height: 20px;
  }
`;
export const Title = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #333;
`;
export const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;