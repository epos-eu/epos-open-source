Microservice Architecture is the reference approach;

1\. Each service should have a clearly defined functionality, and dependencies among services should be avoided (e.g. decoupling of microservices).

2\. Each service should be individually testable (e.g. rabbitmq endpoint should always answer with the same payload format)

3\. Each service can be deployed (i.e. in any order)

EPOS Microservices:

* [Ingestor Service](https://epos-ci.brgm.fr/epos/ingestor-service)
* [Converter Service](https://epos-ci.brgm.fr/epos/converter-service)
* [Backoffice Service](https://epos-ci.brgm.fr/epos/backoffice-service)
* [Data MetaData Service](https://epos-ci.brgm.fr/epos/data-metadata-service)
* [External Service](https://epos-ci.brgm.fr/epos/external-service-module)
* [Resources Service](https://epos-ci.brgm.fr/epos/resources-service)

> [Summary](../README.md)