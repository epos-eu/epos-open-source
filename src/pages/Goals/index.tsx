import {
  Container,
  Section,
  SectionHeader,
  Paragraph,
  List,
  ListItem,
  SubList,
  SubListItem,
} from "./styles";

const Goals = () => {
  return (
    <Container>
      <Section>
        <SectionHeader>Goals and Constraints</SectionHeader>
        <Paragraph>
          This section describes the software requirements and objectives that
          have some significant impact on the architecture; for example, safety,
          security, privacy, use of an off-the-shelf product, portability,
          distribution, and reuse.
        </Paragraph>
      </Section>

      <Section>
        <SectionHeader>Core Concepts and Patterns</SectionHeader>
        <Paragraph>Modular approach:</Paragraph>
        <List>
          <ListItem>
            The system should be implemented with a modular architecture so that
            adding new functionalities and scaling current functionalities does
            not perturb the entire system. Modules should be decoupled and
            cohesive (implement one functionality). Microservice Architecture is
            the reference approach;
          </ListItem>
          <SubList>
            <SubListItem>
              Each module should have a clearly defined functionality, and
              dependencies among modules should be avoided (e.g. decoupling of
              microservices).
            </SubListItem>
            <SubListItem>
              Each module should be individually testable (e.g. RabbitMQ
              endpoint should always answer with the same payload format).
            </SubListItem>
            <SubListItem>
              Each module can be deployed (i.e., in any order).
            </SubListItem>
          </SubList>
        </List>
      </Section>

      <Section>
        <Paragraph>Interaction between clients (GUI or Agent) and system:</Paragraph>
        <List>
          <ListItem>
            Web API should be designed to serve a specific category of consumers
            (e.g. GUIs clients, software agents harvesting metadata in specific
            formats, desktop applications etc.);
          </ListItem>
          <ListItem>
            Web API should be decoupled from any specific client logic (e.g. GUI
            should not force constraints on the Web API as information about the
            content to be downloadable or visualized);
          </ListItem>
          <ListItem>
            Client should hide to the end users the potential complexity caused
            by a consistent number of negotiations needed to retrieve datasets;
            this may require:
            <SubList>
              <SubListItem>Creation of complex agents within the client.</SubListItem>
              <SubListItem>Simplifying TCS services.</SubListItem>
              <SubListItem>Using ad hoc metadata description.</SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            Web API should reuse existing patterns for facilitating adoption and
            reusage (FAIR).
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Data and Metadata</SectionHeader>
        <List>
          <ListItem>
            Information used for satisfying user requirements are intrinsically
            interconnected and thus require to maintain referential integrity
            (Scientific data, system (workspace) data, GRDB).
          </ListItem>
          <ListItem>
            Technically, they should be stored in a unique data source as much
            as possible (e.g. main CERIF metadata catalogue, including User
            Workspace);
          </ListItem>
          <ListItem>
            Stateless modules usage is encouraged, so that there is no need to
            store internal state, which would ease scalability;
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Authentication and Authorization</SectionHeader>
        <List>
          <ListItem>Should enable different individuals or teams to work in parallel.</ListItem>
          <ListItem>
            Should be modular, so that modules can be replaced as long as the
            interfaces with the other modules remain the same.
          </ListItem>
          <ListItem>Should support the use of several technological tools (e.g. AAAI system, database etc.).</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Maintainability</SectionHeader>
        <List>
          <ListItem>Needs to implement several functionalities, each potentially implemented by different technologies.</ListItem>
          <ListItem>Should be easy to maintain and enable parallel work.</ListItem>
          <ListItem>Modules can be replaced as long as the interfaces with other modules remain the same.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Deployability</SectionHeader>
        <List>
          <ListItem>Should be easy to deploy.</ListItem>
          <ListItem>Should guarantee a minimal level of performance, as defined in the technical Annex.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Scalability</SectionHeader>
        <List>
          <ListItem>Should be resilient to increasing amounts of users or performance requirements.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Securability</SectionHeader>
        <List>
          <ListItem>Might provide security audit.</ListItem>
          <ListItem>Must provide layered permission access (e.g., Read vs. Create, Write, Update).</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeader>Usability</SectionHeader>
        <List>
          <ListItem>Should be easy to interact with (reuse existing API where possible).</ListItem>
          <ListItem>Should document the API.</ListItem>
          <ListItem>Might provide versioning of API messages for old clients.</ListItem>
          <ListItem>Should be resilient to invalid payloads.</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Goals;
