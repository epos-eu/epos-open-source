import { SvgIcon } from "../../common/SvgIcon";
interface SocialLinkProps {
    href: string;
    src: string;
  }
  
  
    export const SocialLink = ({ href, src }: SocialLinkProps) => {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          key={src}
          aria-label={src}
        >
          <SvgIcon src={src} width="20px" height="20px" />
        </a>
      );
    };