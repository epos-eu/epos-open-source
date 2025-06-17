import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
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

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const MainHeader = styled.h1`
  font-size: 32px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;
export const SectionHeader = styled.h1`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`;

export const Paragraph = styled.p`
 font-size:16px;
 margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
`;

export const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const ListItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`;

export const SubList = styled.ul`
  padding-left: 20px;
`;

export const SubListItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`;
