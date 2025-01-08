import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange }: InputProps) => (
  <StyledContainer>
    <StyledTextArea
      placeholder="your message"
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
