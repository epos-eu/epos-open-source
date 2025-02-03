import { lazy } from 'react';
import {
  Title,
  Description,
  List,
  ListItem,
} from './styles';

const Container = lazy(() => import("../../common/Container"));
const EPOSDataModel = () => {
  return (
    <Container>
      <Title>EPOS Data Model</Title>
      <Description>
        In order to guarantee that the concepts of interest in EPOS are well dealt with within the architecture, and to ensure that appropriate communication occurs among different modules, it was necessary to define an EPOS data model.
      </Description>

      <Description>
        Such model is mostly conceptual and serves for different purposes:
      </Description>
      <List>
        <ListItem>To define the structure of the information that the system provides to the end users by means of appropriate interfaces (e.g. web APIs).</ListItem>
        <ListItem>To define the components of the system, that have the role of implementing specific functionalities.</ListItem>
        <ListItem>As a guideline to define inputs and outputs of the different system components.</ListItem>
      </List>

      <Description>
        The EPOS data model was discussed and defined in EPOS-IP as of 2018 in the document “Second (Final) Report on EPOS-ICS Architecture” and is here reported for reader’s convenience in the following class diagram.
      </Description>
      <img src="./img/graphs/epos-data-model.png" alt="EPOS Data Model" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      
      <Description>
        The EPOS Data model includes the following concepts:
      </Description>
      <List>
        <ListItem>Person</ListItem>
        <ListItem>Equipment</ListItem>
        <ListItem>Facility</ListItem>
        <ListItem>Service</ListItem>
        <ListItem>Web service</ListItem>
        <ListItem>Organization</ListItem>
        <ListItem>Data</ListItem>
        <ListItem>Software and mode code</ListItem>
        <ListItem>Publication</ListItem>
      </List>

      <Description>
        The data model defines the objects that the user will have to deal with in the EPOS ecosystem. This has consequences, for instance, in the definition of the User experience and associated functionalities implemented by the System modules.
      </Description>

      <Description>
      <a href="/Documents/EPOS_DATA_MODEL.pdf" download="EPOS_DATA_MODEL.pdf">
                <strong>Download EPOS Data Model PDF</strong>
      </a>
      </Description>
    </Container>
  );
};

export default EPOSDataModel;
