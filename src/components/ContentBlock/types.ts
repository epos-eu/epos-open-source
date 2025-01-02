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
  id: string;
  direction: "left" | "right";
}
