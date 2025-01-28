export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
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
  placeholder?: string;
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
