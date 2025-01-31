import { lazy } from 'react';
import {
  Title,
  RequirementTable,
  TableHeader,
  TableRow,
  TableCell,
  TableDescription,
  RequirementsDescription
} from './styles';

const architecturalRequirements = [
  { term: 'AR #1:', description: 'The system needs to support many different functionalities.' },
  { term: 'AR #2:', description: 'The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities. AR #1 and AR #2 are common to many current IT systems, and one of the best approaches to satisfy them is to adopt a modular architecture design.' },
  { term: 'AR #3:', description: 'The system should be implemented with a modular architecture.' },
  { term: 'AR #4:', description: 'The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes. Given the distributed nature of the team and flexibility of some teams adopting an Agile approach, modules of the system should be easily maintained.' },
  { term: 'AR #5:', description: 'The system should guarantee maintainability of modules ensuring loose coupling as much as possible.' },
  { term: 'AR #6:', description: 'The system should be based on the EPOS data model.' },
  { term: 'AR #7:', description: 'The system needs to implement a rich metadata catalogue to store all information required by the EPOS data model.' },
];

const systemRequirements = [
  { term: '#1', description: 'The system needs to support many different functionalities.' },
  { term: '#2', description: 'The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities.' },
  { term: '#3', description: 'The system should be implemented with a modular architecture.' },
  { term: '#4', description: 'The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes.' },
  { term: '#5', description: 'The system should guarantee maintainability of modules ensuring loose coupling as much as possible.' },
  { term: '#6', description: 'The system needs to implement a rich metadata catalogue in order to store all the required information to manage the integrated assets.' },
];


const Container = lazy(() => import("../../common/Container"));

const Requirements: React.FC = () => {
  return (
    <Container>
      <Title>Architectural requirements</Title>
     <RequirementsDescription>
        The goal of this section is to establish the basis for a clear and detailed system architecture design by defining the core concepts and constraints derived from the requirements.
      </RequirementsDescription>
      <Title>Architectural Requirements Definition</Title>
      <RequirementsDescription>
        The system needs to satisfy different user stories, which include a variety of functionalities that will evolve over time. As such, we define two main architectural requirements:
      </RequirementsDescription>

      <RequirementTable>
        <thead>
          <TableRow>
            <TableHeader>Architecture Requirement</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {architecturalRequirements.map((item) => (
            <TableRow key={item.term}>
              <TableCell>{item.term}</TableCell>
              <TableDescription>{item.description}</TableDescription>
            </TableRow>
          ))}
        </tbody>
      </RequirementTable>

      <Title>Key System Requirements Definition</Title>
      <RequirementTable>
        <thead>
          <TableRow>
            <TableHeader>Requirement</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {systemRequirements.map((item) => (
            <TableRow key={item.term}>
              <TableCell>{item.term}</TableCell>
              <TableDescription>{item.description}</TableDescription>
            </TableRow>
          ))}
        </tbody>
        <p></p>
      </RequirementTable>
         
      {/* <RequirementsDescription>
        The above requirements are the result of years of study, discussion, and considerations, as documented in key deliverables like the “Second (Final) Report on EPOS-ICS Architecture” <a href='' target='_blank'><u><strong>(10.5281/zenodo.1470257)[1]</strong></u></a>.
        </RequirementsDescription> */}
        <RequirementsDescription>
        As a consequence of these Architectural Requirements, we can define goals and constraints to be considered in the architectural design.
        </RequirementsDescription>
    </Container>
  );
};

export default Requirements;
