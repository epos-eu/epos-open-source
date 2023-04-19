This section **describes the software requirements and objectives that have some significant impact on the architecture**; for example, safety, security, privacy, use of an off-the-shelf product, portability, distribution, and reuse.

# **Core Concepts and Patterns**

## **Modular approach.**

The system should be implemented with a modular architecture so that adding new functionalities and scaling current functionalities does not perturb the entire system. Modules should be decoupled and cohesive (implement one functionality). Microservice Architecture is the reference approach;

1. Each module should have a clearly defined functionality, and dependencies among modules should be avoided (e.g. decoupling of microservices).
2. Each module should be individually testable (e.g. rabbitmq endpoint should always answer with the same payload format)
3. Each module can be deployed (i.e. in any order)

## **Interaction between clients (GUI or Agent) and system**

* Web API should be designed to serve a specific category of consumers (e.g. GUIs clients, software agents harvesting metadata in specific formats, desktop applications etc.);
* Web API should be decoupled from any specific client logic (e.g. GUI should not force constraints on the WEBAPI as information about the content to be downloadable or visualized);
* Client should hide to the end users the potential complexity caused by a consistent number of negotiations needed to retrieve datasets; this may require for instance:
  * Creation of complex agents within the client
  * Simplifying TCS services
  * Using ad hoc metadata description
* Web API should reuse existing patterns for facilitating adoption and reusage (FAIR)
* Data and Metadata
  * Information used for satisfying user requirements are intrinsically interconnected and thus require to maintain referential integrity. (Scientific data, system (workspace) data, GRDB).\
    Technically, they should be stored in a unique data source as much as possible (e.g. main CERIF metadata catalogue, including User Workspace);
  * Persistence within modules might be necessary for storing cache information (status, routing etc.): these are reused in case of scaling (e.g. container duplication); stateless modules usage is encouraged, so that there is no need to store internal state, which would ease scalability;
  * The main database containing information should be persistent over time and allow incremental updates (CRUD operations). Re-population, re-building, and total erasing are not sustainable (e.g. no full ingestion pipeline)
* Authentication and Authorization
  * should enable different individuals or teams to work in parallel
  * should be modular, so that modules can be replaced as long as the interfaces with the other modules remain the same
  * Should support the use of several technological tools (e.g. AAAI system, database etc.)
* Maintainability: The following requirements and constraints make this quality attribute relevant:
  * needs to implement several functionalities each of which potentially implemented by different technologies.
  *  needs to be easy to maintain
  *  should enable different individuals or teams to work in parallel
  *  modules can be replaced as long as the interfaces with the other modules remain the same
  * Should support the use of several technological tools (e.g. AAAI system, database etc.)
* Deployability: The following requirements and constraints make this quality attribute relevant:
  * Should be easy to deploy
  * Should guarantee a minimal level of performances, as defined in the technical Annex
* Scalability: The following requirements and constraints make this quality attribute relevant:
  * Should be resilient to increasing amount of user or to incresing performance requirements
* Securability: The following requirements and constraints make this quality attribute relevant:
  *  Might provide security audit
  * Must provide layered permission access (i.e.: Read vs Create, Write, Update)
*  Usability - The following requirements and constraints make this quality attribute relevant:
  * should be easy to interact with, for example reuse existing API where possible
  * Should document API
  * Might provide versioning of API message for old clients
  * Should be resilient to invalid payloads

  > [Summary](../README.md)
