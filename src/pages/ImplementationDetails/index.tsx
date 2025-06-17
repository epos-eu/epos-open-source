import { lazy , useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  Title,
  Image,
  AspectList,
  AspectItem,
  ServiceTable,
  TableHeader,
  TableRow,
  TableCell,
  TableDescription,
  CodeBlock as StyledCodeBlock,
  Description,
  BulletList
} from './styles';
import CodeBlock from '../../common/CodeBlock';

// Lazy-load Container component
const Container = lazy(() => import('../../common/Container'));

// Sample code for demonstration
const sampleCode = `
2023-03-09 14:08:15:314: Message published

Node:         rabbit@netrabbit-server-0.netrabbit-nodes.test
Connection:   10.1.5.47:34160 -> 10.1.5.40:5672
Virtual host: changeme
User:         changeme
Channel:      5
Exchange:     metadataService
Routing keys: [<<"resources.get.test.api.resources-service.v1.resources.search.fetch">>]
Routed queues: [<<"fetch">>]
Properties:   [{<<"timestamp">>,signedint,1678370895},
               {<<"reply_to">>,longstr,<<"web-api">>},
               {<<"correlation_id">>,longstr,<<"08122848-ebaf-15a6-34da-72b435d21c6e">>},
               {<<"headers">>,table,
                [{<<"x-request-id">>,longstr,<<"5cf17dc881b670c59b2345c8ec34a5c3">>},
                 {<<"referer">>,longstr,<<"http://10.101.10.44/test/">>},
                 {<<"epos_component-audit">>,array,[{longstr,<<"WEB_API">>}]},
                 {<<"x-forwarded-proto">>,longstr,<<"http">>},
                 {<<"accept-language">>,longstr,<<"it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7">>},
                 {<<"cookie">>,longstr,
                  <<"_pk_id.241.d8d2=248ff2c9c692d01c.1677067197.; _pk_ses.241.d8d2=1">>},
                 {<<"kind">>,longstr,
                  <<"get.test.api.resources-service.v1.resources.search">>},
                 {<<"x-forwarded-port">>,longstr,<<"80">>},
                 {<<"epos_operation-type">>,longstr,<<"get">>},
                 {<<"accept">>,longstr,
                  <<"application/json, text/plain, */*">>},
                 {<<"epos_request-type">>,longstr,
                  <<"test.api.resources-service.v1.resources.search">>},
                 {<<"x-real-ip">>,longstr,<<"192.168.65.4">>},
                 {<<"x-forwarded-scheme">>,longstr,<<"http">>},
                 {<<"x-forwarded-host">>,longstr,<<"10.101.10.44">>},
                 {<<"epos_type-of-current-payload">>,longstr,<<"plain-text">>},
                 {<<"host">>,longstr,<<"10.101.10.44">>},
                 {<<"connection">>,longstr,<<"upgrade">>},
                 {<<"epos_ttl-in-processor">>,long,10000},
                 {<<"x-scheme">>,longstr,<<"http">>},
                 {<<"accept-encoding">>,longstr,<<"gzip, deflate">>},
                 {<<"user-agent">>,longstr,
                  <<"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36">>}]}]
`;

const ImplementationDetails = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };
  <CodeBlock code={sampleCode} initialNightMode={isNightMode} />
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
      <Title>Architecture Implementation</Title>
      <Description>The diagram in this section represents the implementation of the conceptual architecture.</Description>
      <Image src="./img/graphs/architecture-diagram.png" alt="Architecture Diagram" />

      <AspectList>
        <AspectItem>
          Each of the <strong>services</strong> in the conceptual design is rendered as one or more <strong>services</strong> in the Technical Design.
        </AspectItem>
        <AspectItem>
          Blue services represent functionalities that implement requests via specific RESTful API endpoints:
        </AspectItem>
      </AspectList>

      <ServiceTable>
        <thead>
          <TableRow>
            <TableHeader>Service Name</TableHeader>
            <TableHeader>Endpoint</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Resources Service</TableCell>
            <TableCell>/api/resources-service/v1/</TableCell>
            <TableDescription>Service for accessing assets stored in the ICS-C catalogue</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>External Access Service</TableCell>
            <TableCell>/api/external-access-service/v1/</TableCell>
            <TableDescription>Service for executing external services (from TCS)</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>Backoffice Service</TableCell>
            <TableCell>/api/backoffice-service/v1/</TableCell>
            <TableDescription>Service for managing metadata from the backoffice application</TableDescription>
          </TableRow>
        </tbody>
      </ServiceTable>

      <AspectItem>In addition, the following services have been supplied with RESTful APIs:</AspectItem>

      <ServiceTable>
        <thead>
          <TableRow>
            <TableHeader>Service Name</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Converter Service</TableCell>
            <TableDescription>Service to convert from one data format to another data format. This might be useful for external users that wish to convert metadata on demand.</TableDescription>
          </TableRow>
          <TableRow>
            <TableCell>Ingestor Service</TableCell>
            <TableDescription>Service for populating the metadata catalogue at once by means of TTL EPOS-DCAT-AP files.</TableDescription>
          </TableRow>
        </tbody>
      </ServiceTable>

      <Title>Messaging</Title>
      <AspectItem>
        The Routing Framework defines the routing of each message. The idea here is to embed the routing path into the message header in order to avoid messages going back to the Routing Framework at each step (for being routed to the next service).
      </AspectItem>

      <AspectItem>
        This choice is motivated by the fact that a centralized management of the messaging (i.e., Routing Framework taking decisions at each step of the path) increases the amount of messaging in the queue with connecting the service to the queuing system, managing the connections; the generation and sending/receiving of messages.
      </AspectItem>

      <AspectItem>
        <strong>Routing Framework</strong>: This framework decides which path a message must follow to aggregate the necessary information. This decision is made on the basis of a rule.
      </AspectItem>

      <AspectItem>
        In order to implement this, once a request has been made on a service, the following happens:
      </AspectItem>

      <AspectItem>
        <strong>Inside the service:</strong>
        <ul>
          <li>Once a request has been made to the service's RESTful API, the Routing Framework activates a request-specific rule.</li>
          <li>The Routing Framework, through the rule, deploys a path that includes the service required to aggregate the information.</li>
          <li>The Routing Framework creates the message to be sent to the Queuing System and puts the information about the routing path in the message header.</li>
        </ul>
      </AspectItem>

      <AspectItem>
        <strong>On the queuing system, "across services":</strong>
        <ul>
          <li>At each step, based on the route written in the header, the message is properly sent to the right queue (hence the right service).</li>
          <li>In case of conditionals or decisions, the deployed route will contain the originator service, so that appropriate decisions can be made by the Routing Framework.</li>
        </ul>
      </AspectItem>

      <Title>Message Header Example</Title>
      <CodeBlock code={sampleCode} initialNightMode={isNightMode} />
    </Container>
  );
};

export default ImplementationDetails;
