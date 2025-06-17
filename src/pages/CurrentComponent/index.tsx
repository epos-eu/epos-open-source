import { lazy } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  BadgeLink,
  Title
} from './styles';
import { Paragraph } from '../Contributors/styles';
const Container = lazy(() => import("../../common/Container"));
const CurrentComponent = () => {
  return (
    <Container>
      <Paragraph>
      Follow the links below to download the binary files of each component/service of the EPOS Open Source environment. 
      Go to “Install” page if you want to deploy all of them at the same time. The relative Git repositories contain the README
       files with the step-by-step instructions to deploy the components and customize them if needed.more information, in case
        you need to customize them.
         <br></br>
         Contact us at info@epos-eric.eu if you need further assistance. 
      </Paragraph>
      <Title>User Interfaces</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>User Interface Name</TableHeader>
            <TableHeader>DockerHub</TableHeader>
            <TableHeader>Git Repository</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>EPOS Platform</TableCell>
            <TableCell>
              <BadgeLink href="https://hub.docker.com/r/epos/data-portal">
                <img src="https://img.shields.io/docker/v/epos/data-portal" alt="Docker Version" />
              </BadgeLink>
              <BadgeLink href="https://hub.docker.com/r/epos/data-portal">
                <img src="https://img.shields.io/docker/image-size/epos/data-portal" alt="Docker Image Size" />
              </BadgeLink>
              <BadgeLink href="https://hub.docker.com/r/epos/data-portal">
                <img src="https://img.shields.io/docker/pulls/epos/data-portal" alt="Docker Pulls" />
              </BadgeLink>
            </TableCell>
            <TableCell>
              <BadgeLink href="https://github.com/epos-eu/data-portal">
                <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
              </BadgeLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>EPOS Backoffice</TableCell>
            <TableCell>
              <img src="https://img.shields.io/badge/Git-Available%20Soon-red" alt="Not Available" />
            </TableCell>
            <TableCell>
              <img src="https://img.shields.io/badge/Git-Available%20Soon-red" alt="Not Available" />
            </TableCell>
          </TableRow>
        </tbody>
      </Table>

      <Title>Microservices</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Microservice Name</TableHeader>
            <TableHeader>DockerHub</TableHeader>
            <TableHeader>Git Repository</TableHeader>
          </TableRow>
        </thead>
        <tbody>
  {/* API Gateway */}
  <TableRow>
    <TableCell>API Gateway</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/epos-api-gateway">
        <img src="https://img.shields.io/docker/v/epos/epos-api-gateway" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/epos-api-gateway">
        <img src="https://img.shields.io/docker/image-size/epos/epos-api-gateway" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/epos-api-gateway">
        <img src="https://img.shields.io/docker/pulls/epos/epos-api-gateway" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/epos-api-gateway">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* Resources Service */}
  <TableRow>
    <TableCell>Resources Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/resources-service">
        <img src="https://img.shields.io/docker/v/epos/resources-service" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/resources-service">
        <img src="https://img.shields.io/docker/image-size/epos/resources-service" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/resources-service">
        <img src="https://img.shields.io/docker/pulls/epos/resources-service" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/resources-service">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* External Access Service */}
  <TableRow>
    <TableCell>External Access Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/external-access-service">
        <img src="https://img.shields.io/docker/v/epos/external-access-service" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/external-access-service">
        <img src="https://img.shields.io/docker/image-size/epos/external-access-service" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/external-access-service">
        <img src="https://img.shields.io/docker/pulls/epos/external-access-service" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/external-access-service">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* Ingestor Service */}
  <TableRow>
    <TableCell>Ingestor Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/ingestor-service">
        <img src="https://img.shields.io/docker/v/epos/ingestor-service" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/ingestor-service">
        <img src="https://img.shields.io/docker/image-size/epos/ingestor-service" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/ingestor-service">
        <img src="https://img.shields.io/docker/pulls/epos/ingestor-service" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/ingestor-service">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* Converter Service */}
  <TableRow>
    <TableCell>Converter Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service-go">
        <img src="https://img.shields.io/docker/v/epos/converter-service-go" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service-go">
        <img src="https://img.shields.io/docker/image-size/epos/converter-service-go" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service-go">
        <img src="https://img.shields.io/docker/pulls/epos/converter-service-go" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/converter-service-go">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* Converter Service */}
  <TableRow>
    <TableCell>Converter Routine Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-routine-go">
        <img src="https://img.shields.io/docker/v/epos/converter-routine-go" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-routine-go">
        <img src="https://img.shields.io/docker/image-size/epos/converter-routine-go" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-routine-go">
        <img src="https://img.shields.io/docker/pulls/epos/converter-routine-go" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/converter-routine-go">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>

  {/* Backoffice Service */}
  <TableRow>
    <TableCell>Backoffice Service</TableCell>
    <TableCell>
      <BadgeLink href="https://hub.docker.com/r/epos/backoffice-service">
        <img src="https://img.shields.io/docker/v/epos/backoffice-service" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/backoffice-service">
        <img src="https://img.shields.io/docker/image-size/epos/backoffice-service" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/backoffice-service">
        <img src="https://img.shields.io/docker/pulls/epos/backoffice-service" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/backoffice-service">
        <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
      </BadgeLink>
    </TableCell>
  </TableRow>
</tbody>

      </Table>

      <Title>Databases</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Database Name</TableHeader>
            <TableHeader>DockerHub</TableHeader>
            <TableHeader>Git Repository</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Metadata Database</TableCell>
            <TableCell>
              <BadgeLink href="https://hub.docker.com/r/epos/metadata-database-deploy">
                <img src="https://img.shields.io/docker/v/epos/metadata-database-deploy" alt="Docker Version" />
              </BadgeLink>
              <BadgeLink href="https://hub.docker.com/r/epos/metadata-database-deploy">
                <img src="https://img.shields.io/docker/image-size/epos/metadata-database-deploy" alt="Docker Image Size" />
              </BadgeLink>
              <BadgeLink href="https://hub.docker.com/r/epos/metadata-database-deploy">
                <img src="https://img.shields.io/docker/pulls/epos/metadata-database-deploy" alt="Docker Pulls" />
              </BadgeLink>
            </TableCell>
            <TableCell>
              <BadgeLink href="https://github.com/epos-eu/metadata-database">
                <img src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat" alt="Git Repository" />
              </BadgeLink>
            </TableCell>
          </TableRow>
          {/* Add more Database rows here */}
        </tbody>
      </Table>
    </Container>
  );
};

export default CurrentComponent;
