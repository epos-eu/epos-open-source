import { Container, TextWrapper, Content , Title } from "./styles";

interface Props {
  title: string;
  content: string;
}

const Block = ({ title, content}: Props) => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <TextWrapper>
        <Content>
        Have questions, feedback, or suggestions? We're here to help!
        Reach out to the team behind EPOS open-source project!
        </Content>
      </TextWrapper>
    </Container>
  );
};

export default Block;
