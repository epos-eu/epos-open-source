import { Container, Header, Subheader, Paragraph ,Description ,Title} from './styles';

const Introduction = () => {
  return (
    <Container>
      <Title>EPOS - European Plate Observing System</Title>
      <Description>
        EPOS, the European Plate Observing System, is a multidisciplinary, 
        distributed research infrastructure that facilitates the integrated use of 
        data, data products, and facilities from the solid Earth science community in Europe.
      </Description>
      <Description>
      Learn more about our Vision and Mission at our website <a href="https://www.epos-eu.org/about-epos" style={{ color: 'orange', textDecoration: 'none' }}>
  <strong>here</strong>
</a>

      </Description>
    </Container>
  );
};

export default Introduction;
