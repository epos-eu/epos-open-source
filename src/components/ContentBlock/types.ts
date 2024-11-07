import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  link?:string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: string;
        link:string;
      }
    | {
        title: string;
        color: string;
        link:string;
        useWindowLocation?: boolean;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
