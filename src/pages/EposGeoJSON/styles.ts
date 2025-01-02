import styled from 'styled-components';


export const Section = styled.section`
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
`;

export const List = styled.ul`
    padding-left: 20px;
`;

export const ListItem = styled.li`
      margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`;

export const CodeBlock = styled.pre`
    background-color: #eee;
    padding: 10px;
    border-radius: 4px;
    overflow: auto;
    font-family: 'Courier New', Courier, monospace;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;

    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
`;

export const TableRow = styled.tr``;

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

export const Image = styled.img`
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.p`
  margin: 1.5rem 0 2rem 0;
  font-size:16px;
  font-family: "Lato", "OpenSans", sans-serif;
  color: black;
`;
export const SubTitle = styled.h3`
  margin: 1.5rem 0 2rem 0;
  font-size:18px;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;


export const Maintitle = styled.h1`
  margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;


















