import React from "react";
import {
  CardContainer,
  ProfileImage,
  Name,
  Role,
  Introduction,
  SocialCardContainer,
} from "./styles";
import { SocialLink } from "../../common/SocialLink";

// Define the props interface
interface CardProps {
  name: string;
  surname: string;
  image?: string; // Optional property
  role?: string;
  src?: string;
  width?: string;
  height?: string;
  LinkldnHref?: string;
  GithubHref?: string;
  intro?:string
}

const Card: React.FC<CardProps> = ({
  name,
  surname,
  image,
  role,
  src,
  width = "80px", // Default width
  height = "80px", // Default height
  LinkldnHref,
  GithubHref,
  intro
}) => {
  return (
    <CardContainer>
      <ProfileImage
        src={
         //  image ||
          // src ||
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        alt={`${name}'s profile`}
        width={width}
        height={height}
      />
      <Name>
        {name} {surname}
      </Name>
      <Role>{role}</Role>
      <Introduction>{intro}</Introduction>
      <SocialCardContainer>
        {LinkldnHref && (
          <SocialLink href={LinkldnHref} src="linkedin.svg" />
        )}
        {GithubHref && <SocialLink href={GithubHref} src="github.svg" />}
        {LinkldnHref && (
          <SocialLink href={LinkldnHref} src="linkedin.svg" />
        )}
        {GithubHref && <SocialLink href={GithubHref} src="github.svg" />}
        
      </SocialCardContainer>
    </CardContainer>
  );
};

export default Card;
