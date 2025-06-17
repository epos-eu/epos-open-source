import React, { lazy } from 'react';
import {
  Title,
  ServiceTable,
  TableRow,
  TableCell,
  Maintitle
} from './styles';
import { Description } from '../EPOSDataModel/styles';

const Container = lazy(() => import("../../common/Container"));
const RestApiDefinition = () => {
  return (
    <Container>
      <Maintitle>RESTful API Definition</Maintitle>
      <Description>
      Here we list the main categories of APIs provided in the EPOS Open Source platform. For a complete list of methods, see the Swagger page.
      </Description>
      <Title>Resources Service</Title>
      <ServiceTable>
        <tbody>
          <TableRow>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell>Discovery</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell>Discovery resources on metadata catalogue. It requires no authentication. It is used to provide a list of all available resources (services, software, organization etc.).</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Interactions (with other parts of the system)</strong></TableCell>
            <TableCell>Metadata Catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Inputs and outputs (system side)</strong></TableCell>
            <TableCell>Database Interaction</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Title>BackOffice Service</Title>
      <ServiceTable>
        <tbody>
          <TableRow>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell>Metadata Management</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell>Manage metadata information into metadata catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Interactions (with other parts of the system)</strong></TableCell>
            <TableCell>Metadata Catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Inputs and outputs (system side)</strong></TableCell>
            <TableCell>Database Interaction</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Title>Ingestor Service</Title>
      <ServiceTable>
        <tbody>
          <TableRow>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell>Metadata Management</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell>Insert metadata information into metadata catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Interactions (with other parts of the system)</strong></TableCell>
            <TableCell>Metadata Catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Inputs and outputs (system side)</strong></TableCell>
            <TableCell>Database Interaction</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Title>External Access Service</Title>
      <ServiceTable>
        <tbody>
          <TableRow>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell>Access external metadata and data</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell>Access to external services from ICS-C in order to gather data and metadata to be used by clients</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Interactions (with other parts of the system)</strong></TableCell>
            <TableCell>Broker Service, Metadata Catalogue, Converter Service</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Inputs and outputs</strong></TableCell>
            <TableCell>Message Exchange, Database Interaction, TCS Webservices APIs</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Title>Converter Service</Title>
      <ServiceTable>
        <tbody>
          <TableRow>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell>Conversions of payloads</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell>It provides a service which enables the conversion of metadata/data payloads, based on a plugin system</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Interactions (with other parts of the system)</strong></TableCell>
            <TableCell>Broker Service, Metadata Catalogue</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Inputs and outputs</strong></TableCell>
            <TableCell>Message Exchange, Database Interaction</TableCell>
          </TableRow>
        </tbody>
      </ServiceTable>
    </Container>
  );
};

export default RestApiDefinition;
