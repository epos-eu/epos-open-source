import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  BadgeLink,
} from './styles';

const CurrentComponent = () => {
  return (
    <TableContainer>
      <h6>User Interfaces</h6>
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
            <TableCell>EPOS Data Portal</TableCell>
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

      <h6>Microservices</h6>
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
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service">
        <img src="https://img.shields.io/docker/v/epos/converter-service" alt="Docker Version" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service">
        <img src="https://img.shields.io/docker/image-size/epos/converter-service" alt="Docker Image Size" />
      </BadgeLink>
      <BadgeLink href="https://hub.docker.com/r/epos/converter-service">
        <img src="https://img.shields.io/docker/pulls/epos/converter-service" alt="Docker Pulls" />
      </BadgeLink>
    </TableCell>
    <TableCell>
      <BadgeLink href="https://github.com/epos-eu/converter-service">
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

      <h6>Databases</h6>
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
    </TableContainer>
  );
};

export default CurrentComponent;
