import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  ProfileImage,
  Name,
  Role,
} from "./styles";


// Define the props interface
interface CardProps {
  name: string;
  surname: string;
  image?: string; // Optional property
  role?: string;
}

const Card: React.FC<CardProps> = ({ name, image, role , surname}) => {
  return (
    <CardContainer>
      <ProfileImage
        src={image || "https://via.placeholder.com/80"} // Placeholder if no image provided
        alt={`${name}'s profile`}
      />
      <Name>{name} {surname}</Name>
      <Role>{role}</Role>
    </CardContainer>
  );
};

export default Card;
