import { lazy } from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  MavenLink,
  RepoLink,
  Title
} from './styles'; // Adjust the path as needed
import { Paragraph } from '../Contributors/styles';

const Container = lazy(() => import("../../common/Container"));

const librariesTable = [
  {
    name: 'Metadata Database API Library',
    mavenLink: 'https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/db-api/badge.svg',
    repoLink: 'https://github.com/epos-eu/db-api',
  },
  {
    name: 'Routing Framework',
    mavenLink: 'https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/router-framework/badge.svg',
    repoLink: 'https://github.com/epos-eu/routingframework',
  },
  {
    name: 'EPOS Data Model beans',
    mavenLink: 'https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-data-model-beans/badge.svg',
    repoLink: 'https://github.com/epos-eu/epos-datamodel-beans',
  },
  {
    name: 'EPOS GeoJSON Java Library',
    mavenLink: 'https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-geojson-java-library/badge.svg',
    repoLink: 'https://github.com/epos-eu/epos-geojson-java-library',
  },
  {
    name: 'EPOS CovJSON Java Library',
    mavenLink: 'https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-covjson-java-library/badge.svg',
    repoLink: 'https://github.com/epos-eu/epos-covjson-java-library',
  },
];

const Libraries: React.FC = () => {
  return (
    <Container>
      <Title>Available Libraries</Title>
      <Paragraph>
      Follow the links below to download the binary files of the libraries used within the EPOS Open Source environment. 
      Go to “Install” page if you want to deploy the whole environment at once. The relative Git repositories contain the 
      README files with detailed information, in case you need to customize them or use them in different projects.
      <br></br>
      Contact us at info@epos-eric.eu if you need further assistance. 
      </Paragraph>
    <Table>
      <thead>
        <tr>
          <TableHeader>Library Name</TableHeader>
          <TableHeader>Maven</TableHeader>
          <TableHeader>Git Repository</TableHeader>
        </tr>
      </thead>
        {librariesTable.map((library, index) => (
          <tr key={index}>
            <TableCell>{library.name}</TableCell>
            <TableCell>
              <MavenLink href={library.mavenLink} target="_blank" rel="noopener noreferrer">
                <img src={library.mavenLink} alt="Maven Central" />
              </MavenLink>
            </TableCell>
            <TableCell>
              <RepoLink href={library.repoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat"
                  alt="Git Repository"
                />
              </RepoLink>
            </TableCell>
          </tr>
        ))}
        <p></p>
    </Table>
    </Container>
  );
};

export default Libraries;
