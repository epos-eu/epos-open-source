import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  padding: 16px;
  margin: 16px;
  background-color: #fff;
  text-align: center;
  
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
  object-fit: cover;
  margin-bottom: 16px;
   border-radius: 50%; 
    border: 1px solid #ddd;
`;

export const Name = styled.h3`
  font-size: 1.5em;
  margin: 8px 0;
  font-weight: bold;
  color:black;
`;

export const Role = styled.p`
  font-size: 1.3em;
  color: #457945;;
  font-weight: bold;
`;
export const Introduction = styled.p`
  font-size: 1em;
  color: black;
`;
export const SocialCardContainer = styled("div")`
  width: 130px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;