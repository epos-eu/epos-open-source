import styled from 'styled-components';

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
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  margin: 1.5rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  font-size:18px;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  margin: 1.5rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`;

export const BadgeLink = styled.a`
  display: inline-block;
  margin-right: 10px;

  img {
    height: 20px;
  }
`;
export const Title = styled.h2`
   margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;

