import styled from 'styled-components';

export const Containers = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const Section = styled.section`
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
    padding-left: 20px;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
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

export const TableCell = styled.td``;

export const Image = styled.img`
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
export const SubTitle = styled.h3`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;