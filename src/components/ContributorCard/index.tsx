import React from "react";
import {
  CardContainer,
  Name,
  Role,
  Introduction,
  SocialCardContainer,
} from "./styles";
import { SocialLink } from "../../common/SocialLink";
import { ProfileImage } from "../../common/profilePicture";
// Define the props interface
export interface CardProps {
  name?: string;
  surname?: string;
  image: string; // Optional property
  role?: string;
  src?: string;
  width?: string;
  height?: string;
  LinkldnHref?: string;
  GithubHref?: string;
  GitLabHref?: string;
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
  GitLabHref,
  intro
}) => {
  return (
    <CardContainer>
      <ProfileImage
          src={image}
          alt={ name}
          width={120}
          height={120}
        />

      <Name>
        {name} {surname}
      </Name>
      <Role>{role}</Role>
      <Introduction>{intro}</Introduction>
      <SocialCardContainer>
  {LinkldnHref && (
    <SocialLink
      href={LinkldnHref}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    />
  )}
  {GithubHref && (
    <SocialLink
      href={GithubHref}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    />
  )}
  {GitLabHref && (
    <SocialLink
      href={GitLabHref}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    />
  )}
</SocialCardContainer>

    </CardContainer>
  );
};

export default Card;
