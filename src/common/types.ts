import { TFunction } from "react-i18next";
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

interface ItemProps {
  title: string;
  color?: string;
  link: string; // Ensure `link` is always defined as a string
  useWindowLocation?: boolean; // Optional property to control navigation method
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  useWindowLocation?: boolean;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
}
