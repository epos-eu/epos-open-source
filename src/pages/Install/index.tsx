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

const installers = [
    {
      name: 'EPOS Open Source Desktop',
      downloadLink: 'https://github.com/epos-eu/opensource-desktop/releases',
      repoLink: 'https://github.com/epos-eu/opensource-desktop',
    },
    {
      name: 'EPOS Open Source Docker',
      downloadLink: 'https://github.com/epos-eu/opensource-docker/releases',
      repoLink: 'https://github.com/epos-eu/opensource-docker',
    },
    {
      name: 'EPOS Open Source Kubernetes',
      downloadLink: 'https://github.com/epos-eu/opensource-kubernetes/releases',
      repoLink: 'https://github.com/epos-eu/opensource-kubernetes',
    },
  ];

const Install: React.FC = () => {
  return (
    <Container>
      <Title>Install EPOS Open Source</Title>
      <Paragraph>
      Download the binary files to install the EPOS Open Source environment as a user-friendly desktop application 
      or as Docker/Kubernetes images. The Git repositories contain the README files with the step-by-step instructions to deploy the system
      and populate it.
      <br></br>
      Contact us at info@epos-eric.eu if you need further assistance. 
      </Paragraph>
    <Table>
      <thead>
        <tr>
          <TableHeader>Installer Name</TableHeader>
          <TableHeader>Installer Download</TableHeader>
          <TableHeader>Git Repository</TableHeader>
        </tr>
      </thead>
      <tbody>
        {installers.map((install, index) => (
          <tr key={index}>
            <TableCell>{install.name}</TableCell>
            <TableCell>
            <MavenLink href={install.downloadLink} target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Download-Get%20the%20binary-brightgreen" alt="Download"/>
            </MavenLink>
            </TableCell>
            <TableCell>
              <RepoLink href={install.repoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat"
                  alt="Git Repository"
                />
              </RepoLink>
            </TableCell>
          </tr>
        ))}
        <p></p>
      </tbody>
    </Table>
    </Container>
  );
};

export default Install;
