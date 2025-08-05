import { SvgIcon } from "../../common/SvgIcon";
interface SocialLinkProps {
    href: string;
    src: string;
  }
  
  
    export const SocialLink = ({ href, src }: SocialLinkProps) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt="social icon"
          width={24}
          height={24}
          style={{ marginRight: "8px" }}
        />
      </a>
      );
    };