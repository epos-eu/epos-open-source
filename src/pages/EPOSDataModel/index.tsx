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
      The EPOS Data Model defines the structure of the information provided by the system to the end user. The Model’s components of the model are accessible 
      through appropriate interfaces (e.g. web APIs) and they implement specific functionalities. In particular, they represent a guideline to define inputs and 
      outputs of different system components.
      </Description>

      <Description>
      The EPOS Data Model defines the structure of the information provided by the system to the end user. The Model’s components are accessible through appropriate
       interfaces (e.g. web APIs) and they implement specific functionalities. In particular, they offer guidelines to define inputs and outputs of different system
        components.
      </Description>
      <img src="./img/graphs/epos-data-model.png" alt="EPOS Data Model" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <Description>
      The EPOS data model was discussed and defined in EPOS-IP as of 2018 in the document “Second (Final) Report on EPOS-ICS Architecture” and is here reported for reader’s 
      convenience in the following class diagram.
      </Description>
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
      The data model defines the objects that the user canwill have to deal with in the EPOS ecosystem.Therefore, the User experience and associated functionalities implemented 
      by the system modules must adhere to the data structure defined in the model.
      </Description>

      <Description>
      <a href="./Documents/EPOS_DATA_MODEL.pdf" download="EPOS_DATA_MODEL.pdf"><strong>Download EPOS Data Model PDF</strong></a>
      </Description>
    </Container>
  );
};

export default EPOSDataModel;
