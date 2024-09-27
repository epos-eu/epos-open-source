import { GlossaryContainer, GlossaryTable, GlossaryRow, GlossaryCellTerm, GlossaryCellDefinition,GlossaryDescription,GlossaryHeader} from './styles';

const glossaryData = [
  { term: 'AAAI', definition: 'Authentication, Authorisation, and Accounting' },
  { term: 'Cohesion', definition: 'Cohesion refers to how well the individual elements within an application work together. Highly cohesive systems tend to be more robust, reliable, and reusable.' },
  { term: 'csv', definition: 'Comma Separated Value' },
  { term: 'DDSS', definition: 'Data, Data products, Software, and Services' },
  { term: 'Decoupling', definition: 'Microservice architecture is often achieved by decoupling a monolithic application into independent modules for each business function.' },
  { term: 'DOI', definition: 'Digital Object Identifier' },
  { term: 'EAB', definition: 'External Advisory Board' },
  { term: 'EIDA', definition: 'European Integrated Data Archive' },
  { term: 'EPOS-IP', definition: 'European Plate Observing System – Implementation Phase' },
  { term: 'EPOS-N', definition: 'European Plate Observing System – Norway' },
  { term: 'EUREF', definition: 'Reference Frame Sub Commission for Europe' },
  { term: 'FAIR', definition: 'Data principles: Findable, Accessible, Interoperable, Reusable' },
  { term: 'GLASS', definition: 'Software/portal for WP10' },
  { term: 'GNSS', definition: 'Global Navigation Satellite System' },
  { term: 'GPS', definition: 'Global Positioning System' },
  { term: 'ICS', definition: 'Integrated Core Services' },
  { term: 'ICS-C', definition: 'Integrated Core Services - Central Hub' },
  { term: 'ICS-D', definition: 'Integrated Core Services - Distributed' },
  { term: 'MoU', definition: 'Memorandum of Understanding' },
  { term: 'MSEED', definition: 'MiniSEED (data format)' },
  { term: 'ORFEUS', definition: 'Observatories and Research Facilities for European Seismology' },
  { term: 'PMB', definition: 'Project Management Board' },
  { term: 'RCN', definition: 'Research Council of Norway (Forskningsrådet)' },
  { term: 'RINEX', definition: 'Receiver Independent Exchange Format' },
  { term: 'SAC', definition: 'Seismic Analysis Code (storage/file format)' },
  { term: 'SeedLink', definition: 'Protocol for seismic data exchange' },
  { term: 'SEISAN', definition: 'Earthquake analysis software' },
  { term: 'TCS', definition: 'Thematic Core Services' },
  { term: 'WMS', definition: 'Web Map Service' },
  { term: 'WP', definition: 'Work Package' },
  { term: 'Data Provider', definition: 'An organisation which produces data or metadata.' },
];

const Glossary = () => {
  return (
    <GlossaryContainer>
     <GlossaryHeader>Glossary</GlossaryHeader>
      <GlossaryDescription>
        Below is a glossary of terms related to the EPOS project and its software architecture. It includes key technical terms and abbreviations used throughout the documentation.
      </GlossaryDescription>
      <GlossaryTable>
        {glossaryData.map((item) => (
          <GlossaryRow key={item.term}>
            <GlossaryCellTerm>{item.term}</GlossaryCellTerm>
            <GlossaryCellDefinition>{item.definition}</GlossaryCellDefinition>
          </GlossaryRow>
        ))}
      </GlossaryTable>
    </GlossaryContainer>
  );
};

export default Glossary;
