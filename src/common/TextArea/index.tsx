import { StyledTextArea, StyledContainer} from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, onChange }: InputProps) => (
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
