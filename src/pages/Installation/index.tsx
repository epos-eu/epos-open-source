import {lazy} from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  DownloadLink,
  RepoLink,
} from './styles'; // Adjust the path as needed

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

const Installation: React.FC = () => {
  return (
    <Container>
    <Table>
      <thead>
        <tr>
          <TableHeader>Installer Name</TableHeader>
          <TableHeader>Installer Download</TableHeader>
          <TableHeader>Git Repository</TableHeader>
        </tr>
      </thead>
      <tbody>
        {installers.map((installer, index) => (
          <tr key={index}>
            <TableCell>{installer.name}</TableCell>
            <TableCell>
              <DownloadLink href={installer.downloadLink}>
                <img
                  src="https://img.shields.io/badge/Download-Get%20the%20binary-brightgreen"
                  alt="Download"
                />
              </DownloadLink>
            </TableCell>
            <TableCell>
              <RepoLink href={installer.repoLink}>
                <img
                  src="https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat"
                  alt="Git Repository"
                />
              </RepoLink>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default Installation;
