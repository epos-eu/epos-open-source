The diagram in this section represents the implementation of the conceptual architecture.

![image](./documentation/images/architecture-diagram.png)

The following key aspects need to be taken into account:

* Each of the _services_ in the conceptual design is rendered as one or more _services_ in the Technical Design.

* Blue services represent functionalities that implement request by specific RESTful APIs endpoints, namely:

| Service Name | Endpoint | Description |
|--|--|--
| Resources Service | /api/resources-service/v1/ | Service for accessing assets stored in the ICS-C catalogue |
| External Access Service | /api/external-access-service/v1/ | Service for executing external services (from TCS) |
| Backoffice Service | /api/backoffice-service/v1/ | Service for managing metadata from the backoffice application |

* In addition, the following services have been supplied with RESTful APIs:

| Service Name | Description |
|--|--|
| Converter Service | Service to convert from one data format to another data format. This might be useful for external users that wish to convert metadata on demand |
| Ingestor Service | Service for populate at once metadata catalogue by means of TTL EPOS-DCAT-AP files |

Messaging: 

The Routing Framework defines the routing of each message. The idea here is to embed the routing path into the message header in order to avoid messages to go back to the Routing Framework at each step (for being routed to the next service).

This choice is motivated by the fact that a centralized management of the messaging (i.e. Routing Framework taking decision at each step of the path) increases the amount of messaging in the queue with connecting the service to the queuing system, managing the connections; the generation and sending/receiving of messages.

* _Routing Framework_: This framework decides which path a message must follow to aggregate the necessary information. This decision is made on the basis of a rule.

In order to implement this, once a request has been made on a service, the following happen:

* Inside the service:
  * Once a request has been made to the service's RESTful API, the Routing Framework activates a request-specific rule
  * The Routing Framework, through the rule, deploys a path that includes the service required to aggregate the information
  * The RoutingFramework creates the message to be sent to the Queuing System and put the information about the routing path in the message header
* On the queueing system, "across services":
  * At each step, on the basis of the route written in the header, the message is properly sent to the right queue (hence right service).
  * In case of conditionals or decisions, the deployed route will contain the originator service, so that appropriate decision can be made by the Routing Framework.

 

Message header example, originated by the Resource Service

```
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
                  <<"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36">>}]}]

```


*RESTful API Definition*


* Resources Service

|  |  | 
|--|-------------|
| Role | Discovery |
| Description | Discovery resources on metadata catalogue. It requires no authentication. It is used to provide a list of all available resources (services, software, organization etc.). |
| Interactions (with other parts of the system) | Broker Service, Data Metadata Service, Converter Service |
| Inputs and outputs (system side) | Message exchange |

* BackOffice Service

|  |  | 
|--|-------------|
| Role | Metadata Management |
| Description | Manage metadata information into metadata catalogue |
| Interactions (with other parts of the system) | Broker Service, Data Metadata Service|
| Inputs and outputs (system side) | Message exchange, Database Interaction |

* Ingestor Service

|  |  | 
|--|-------------|
| Role | Metadata Management |
| Description | Insert metadata information into metadata catalogue |
| Interactions (with other parts of the system) | Broker Service, Data Metadata Service|
| Inputs and outputs (system side) | Message exchange, Database Interaction |

* External Access Service

|  |  | 
|--|-------------|
| Role | Access external metadata and data |
| Description | Access to external services from ICS-C in order to gather data and metadata to be used by clients |
| Interactions (with other parts of the system) |  Broker Service, Data Metadata Service, Converter Service |
| Inputs and outputs | Message Exchange, TCS Webservices APIs |


* Converter Service

|  |  | 
|--|-------------|
| Role | Conversions of payloads |
| Description | It provides a service which enable the conversion of metadata/data payloads, based on a plugin system |
| Interactions (with other parts of the system) |  Broker Service, Data Metadata Service |
| Inputs and outputs |  Message Exchange |


* Data Metadata Service

|  |  | 
|--|-------------|
| Role | Handling Database Requests |
| Description | This service handle request received from services that need to be executed on the database |
| Interactions (with other parts of the system) | Broker Service, Metadata Catalogue |
| Inputs and outputs |Message Exchange, Database Interaction | 