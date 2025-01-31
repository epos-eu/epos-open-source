import {lazy} from 'react';
import {
  ReferencesContainer,
  ReferenceItem,
  Link,
  RefrenceeDescription,
  Title
} from './styles'; // Adjust the path as needed


const Container = lazy(() => import("../../common/Container"));

const references = [
  {
    authors: 'Bailo, D., Paciello, R., Michalek, J., Cocco, M., Freda, C., Jeffery, K., Atakan, K.',
    title: 'The EPOS multi-disciplinary Data Portal for integrated access to solid Earth science datasets.',
    journal: 'Sci Data',
    year: '2023',
    volume: '10',
    article: '784',
    doi: 'https://doi.org/10.1038/s41597-023-02697-9',
  },
  {
    authors: 'Bailo, D. et al.',
    title: 'Integrated Access to Multidisciplinary Data Through Semantically Interoperable Services in a Metadata-Driven Platform for Solid Earth Science.',
    bookTitle: 'Metadata and Semantic Research',
    editors: 'Garoufallou, E., Vlachidis, A.',
    series: 'Communications in Computer and Information Science',
    volume: '1789',
    publisher: 'Springer, Cham.',
    year: '2023',
    doi: 'https://doi.org/10.1007/978-3-031-39141-5_20',
  },
  {
    authors: 'Vinciarelli, V., Orfino, A., Paciello, R., Bailo, D., Goffi, C., Giuliacci, K., Sbarra, M., Michalek, J., Nedrebø, H., Roquencourt, J.-B., Retout, Y., Warren, D., and Lavrnja-Czapski, J.',
    title: 'EPOS Open Source: A platform for integrating high-quality research products and services.',
    conference: 'EGU General Assembly 2023',
    location: 'Vienna, Austria',
    date: '24-28 Apr 2023',
    reference: 'EGU23-6400',
    doi: 'https://doi.org/10.5194/egusphere-egu23-6400',
  },
];

const References: React.FC = () => {
  return (
    <Container>
    <ReferencesContainer>
        <Title>References</Title>
      {references.map((ref, index) => (
        <ReferenceItem key={index}>
          <RefrenceeDescription>
            {ref.authors}. {ref.title}
            {ref.journal && ` ${ref.journal},`} 
            {ref.year && ` ${ref.year},`} 
            {ref.volume && ` ${ref.volume},`} 
            {ref.article && ` ${ref.article}.`} 
            {ref.bookTitle && ` In: ${ref.bookTitle}.`}
            {ref.editors && ` Eds: ${ref.editors}.`}
            {ref.series && ` ${ref.series},`} 
            {ref.publisher && ` ${ref.publisher}.`}
            {ref.conference && ` ${ref.conference},`} 
            {ref.location && ` ${ref.location},`} 
            {ref.date && ` ${ref.date}.`} 
            {ref.reference && ` ${ref.reference}. `}
            <Link href={ref.doi} target="_blank" rel="noopener noreferrer" style={{ color: 'orange', textDecoration: 'none' }}>
              [DOI]
            </Link>
            </RefrenceeDescription>
        </ReferenceItem>
      ))}
    </ReferencesContainer>
    </Container>
  );
};

export default References;
