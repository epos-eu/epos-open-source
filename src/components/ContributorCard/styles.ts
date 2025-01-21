import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 16px;
  background-color: #fff;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust alignment */
  gap: 16px; /* Optional spacing between cards */
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

export const Name = styled.h3`
  font-size: 1em;
  margin: 8px 0;
`;

export const Role = styled.p`
  font-size: 0.9em;
  color: #666;
`;
