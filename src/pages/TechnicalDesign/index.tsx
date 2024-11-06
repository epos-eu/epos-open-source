import {
  SectionContainer,
  Title,
  Image,
  AspectList,
  AspectItem,
  ServiceTable,
  TableHeader,
  TableRow,
  TableCell,
  TableDescription,
  MessageHeader,
  CodeBlock,
  Description
} from './styles';

const TechnicalDesign = () => {
  return (
    <SectionContainer>
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
      <CodeBlock>
        {`2023-03-09 14:08:15:314: Message published

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
               {<<"correlation_id">>,longstr,
                <<"08122848-ebaf-15a6-34da-72b435d21c6e">>},
               {<<"headers">>,table,
                [{<<"x-request-id">>,longstr,
                  <<"5cf17dc881b670c59b2345c8ec34a5c3">>},
                 {<<"referer">>,longstr,<<"http://10.101.10.44/test/">>},
                 {<<"epos_component-audit">>,array,[{longstr,<<"WEB_API">>}]},
                 {<<"x-forwarded-proto">>,longstr,<<"http">>},
                 {<<"accept-language">>,longstr,
                  <<"it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7">>},
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
                  <<"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36">>}]}]`}
      </CodeBlock>
    </SectionContainer>
  );
};

export default TechnicalDesign;
