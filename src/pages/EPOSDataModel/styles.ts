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

export const Description = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #555;
`;

export const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 5px 0;
    font-size: 16px;
    color: #555;
  }
`;

export const ListItem = styled.li``; // Individual list items will inherit styles from List
