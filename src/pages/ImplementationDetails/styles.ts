import styled from 'styled-components';


export const Title = styled.h1`
  margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color: #152c15;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const AspectList = styled.ul`
    margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`;

export const AspectItem = styled.li`
    margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`;

export const ServiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
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

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
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

export const TableDescription = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  vertical-align: top;
`;

export const CodeBlock = styled.pre`
   backgroundColor: isNightMode ? '#2d2d2d' : '#f5f5f5',
   color: isNightMode ? '#ffffff' : '#000000',
    borderColor: isNightMode ? '#444' : '#ddd',
`;





export const Description = styled.p`
 padding: 10px;
  text-align: left;
  margin: 1.5rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`;




export const BulletList = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
  }
`;
