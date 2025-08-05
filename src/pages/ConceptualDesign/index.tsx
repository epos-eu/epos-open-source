import { lazy } from 'react';
import {
  Title,
  Description,
  ServiceTable,
  TableHeader,
  TableRow,
  TableCell,
  BulletList,
} from './styles';

const Container = lazy(() => import("../../common/Container"));

const ConceptualDesign = () => {
  return (
    <Container> 
      <Title>Conceptual Services of the Architecture</Title>
      <img src="./img/graphs/conceptual-design.png" alt="Conceptual Design" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />

      <Description>The driving concepts can be summarized by the following statements:</Description>
      <BulletList>
        <li>Each of the Services is supposed to capture a well-defined functionality.</li>
        <li>Services interaction is guaranteed by one main service, namely the queueing system.</li>
        <li>Services interact through message exchanges.</li>
        <li>A main "EPOS API Gateway" service ensures interaction between the system and external users (humans or machines).</li>
        <li>Services outside the ICS-C system boundary are external systems with which the ICS-C system is supposed to communicate and interoperate (AAI manager, ICS-D, TCS service).</li>
        <li>Services in the blue squares implement functionalities required by the user and actionable by means of RESTful APIs (proxied by the EPOS API Gateway).</li>
        <li>Currently, the following main functionalities emerged from the user requirements, here represented as RESTful APIs endpoints:</li>
      </BulletList>

      <ServiceTable>
        <thead>
          <tr>
            <TableHeader>Service Name</TableHeader>
            <TableHeader>Endpoint</TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Resources Service</TableCell>
            <TableCell>/api/resources-service/v1/</TableCell>
            <TableCell>Service for accessing assets stored in the ICS-C catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>External Access Service</TableCell>
            <TableCell>/api/external-access-service/v1/</TableCell>
            <TableCell>Service for executing external services (from TCS)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Backoffice Service</TableCell>
            <TableCell>/api/backoffice-service/v1/</TableCell>
            <TableCell>Service for managing metadata from the backoffice application</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Description>Services in the red squares implement "support" functionalities, that is to say functionalities needed by the system internally. Although the converter is supposed to be an internal "support" service, this may implement Web-APIs to provide an additional service to end users.</Description>

      <Title>Data Elements</Title>
      <BulletList>
        <li>
          <strong>Metadata</strong>: representing the "scientific metadata" that enables the system to manage the interaction with the TCS, and is mostly provided by the communities.
        </li>
        <li>
          <strong>System data</strong>: representing data needed by the users of the ICS-C system that should persist after the end of the session. It includes, for instance, information about workspaces and may include workflow information.
        </li>
        <li>
          <strong>GRDB data</strong>: this represents the metadata currently stored in the Granularity Database, and partially overlaps with the "metadata" service.
        </li>
      </BulletList>
      
      <Description>
        The three data elements above represent the data that the ICS-C system is required to manage. Such data is intrinsically related and requires referential integrity.
      </Description>
    </Container>
  );
};

export default ConceptualDesign;
