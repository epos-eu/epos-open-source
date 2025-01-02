import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>name</Label>
    <StyledTextArea
      placeholder="placeholder"
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
