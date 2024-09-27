import {
  SectionContainer,
  Title,
  RequirementTable,
  TableHeader,
  TableRow,
  TableCell,
  TableDescription,
} from './styles';



const Requirements:React.FC = () => {
  return (
    <>
      <SectionContainer>
    <h1>Requirements Definition</h1>
    <p>The goal of this section is to establish the basis for a clear and detailed system architecture design by defining the core concepts and costraints that descend from the requirements.</p>
    <h6>Architectural requirements definition</h6>
    <p>What is immediately apparent is that the system needs to satisfy different users stories, that include a number of different functionalities. These functionalities are likely to evolve in time, and new ones are going to be added. This leads to the definition of two main architectural requirements (AR):</p>
  
      <Title>Architectural Requirements Definition</Title>
      <RequirementTable>
        <thead>
          <TableRow>
            <TableHeader>Architecture Requirement</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>AR #1:</TableCell>
            <TableDescription>The system needs to support many different functionalities</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #2:</TableCell>
            <TableDescription>
              The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities. <br />
              AR #1 and AR #2 are common to many current IT systems, and one of the best approaches to satisfy them is to adopt a modular architecture design.
            </TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #3:</TableCell>
            <TableDescription>The system should be implemented with a modular architecture.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #4:</TableCell>
            <TableDescription>
              The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes (described later). 
              Being the team distributed over different countries, and given the extreme flexibility of some teams where an Agile approach is adopted, 
              it is vital that the modules of the system can be easily maintained, which leads to AR #5.
            </TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #5:</TableCell>
            <TableDescription>The system should guarantee maintainability of modules ensuring loose coupling as much as possible.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #6:</TableCell>
            <TableDescription>The system should be based on the EPOS data model.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>AR #7:</TableCell>
            <TableDescription>The system needs to implement a rich metadata catalogue in order to store all the information required by the EPOS data model.</TableDescription>
          </TableRow>
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
          <TableRow>
            <TableCell>#1</TableCell>
            <TableDescription>The system needs to support many different functionalities.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>#2</TableCell>
            <TableDescription>The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>#3</TableCell>
            <TableDescription>The system should be implemented with a modular architecture.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>#4</TableCell>
            <TableDescription>The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes (described later).</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>#5</TableCell>
            <TableDescription>The system should guarantee maintainability of modules ensuring loose coupling as much as possible.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>#6</TableCell>
            <TableDescription>The system needs to implement a rich metadata catalogue in order to store all the required information to manage the integrated assets.</TableDescription>
          </TableRow>
        </tbody>
      </RequirementTable>

      <p>
        The above requirements are summarized in a tabular way but they are the results of years of study, discussion, and considerations condensed in key deliverables like 
        “Second (Final) Report on EPOS-ICS Architecture” (10.5281/zenodo.1470257)[1].
      </p>
      <p>As a consequence of these Architectural Requirements, we can define Goals and Constraints to be considered in the architectural design</p>
    </SectionContainer>
    </>
  );
};

export default Requirements;
