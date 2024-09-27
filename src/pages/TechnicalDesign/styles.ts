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

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const AspectList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const AspectItem = styled.li`
  margin-bottom: 10px;
`;

export const ServiceTable = styled.table`
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
`;

export const MessageHeader = styled.h3`
  margin-top: 20px;
`;

export const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
