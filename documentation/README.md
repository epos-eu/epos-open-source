# **EPOS OPEN SOURCE Documentation**

![Epos_Logo_30](./documentation/images/Epos_Logo_30.jpg)

# Table of Contents
1. [What is EPOS?](#whatisepos)
2. [EPOS Vision](#vision)
3. [EPOS Mission](#mission)
4. [What Are EPOS' Goals?](#goals)
5. [Who We Are](#who)
6. [National Research Infrastructures](#national)
7. [Glossary](#glossary)
8. [Requirements analysis](#requirements)
9. [Processes definition](#process)
10. [Architecture](#architecture)
11. [Microservices](#microservices)
11. [EPOS Libraries](#libraries)
11. [EPOS Open Source installers](#installers)


# **What is EPOS?**  <a name="whatisepos"></a>

EPOS, the European Plate Observing System, is a multidisciplinary, distributed research infrastructure that facilitates the integrated use of data, data products, and facilities from the solid Earth science community in Europe.

EPOS  brings together Earth scientists, national research infrastructures, ICT (Information & Communication Technology) experts, decision makers, and public to develop new concepts and tools for accurate, durable, and sustainable answers to societal questions concerning geo-hazards and those geodynamic phenomena (including geo-resources) relevant to the environment and human welfare.

## **EPOS Vision** <a name="vision"></a>

To ensure sustainable and universal use and re-use of multidisciplinary solid Earth science data and products fostering state-of-the-art research and innovation.

## **EPOS Mission** <a name="mission"></a>

To establish and underpin a sustainable and long-term access to solid Earth science data and services integrating diverse European Research Infrastructures under a common federated framework.

## **What Are EPOS' Goals?** <a name="goals"></a>
 
The EPOS overarching goal is to establish a comprehensive multidisciplinary research platform for the Earth sciences in Europe. 

EPOS aims to:

* represent a scientific vision and approach in which innovative multidisciplinary research is made possible for a better understanding of the physical processes controlling earthquakes, volcanic eruptions, unrest episodes and tsunamis as well as those driving tectonics and Earth surface dynamics;
* establish a long-term plan to facilitate the integrated use of data, models and facilities from existing, and new distributed research infrastructures (RIs), for solid Earth science;
* adopt appropriate legal solutions to manage distributed pan European Research Infrastructures, securing on a common and shared data policy, the open access and the transparent use of data and guaranteeing mutual respect of the intellectual property rights.

## **Who We Are** <a name="who"></a>

EPOS is composed of a variety of Earth Science stakeholders that are together working towards integrating a set of diverse European Earth Science National Research Infrastructures into one single interoperable platform. The programme will develop implementation plans and use new e-science opportunities to monitor and understand the dynamic and complex solid Earth system.

## **The Four Elements of EPOS Architecture**  <a name="elements"></a>

* National Research Infrastructures
* EPOS ERIC
* Thematic Core Services
* Integrated Core Services: central hub and distributed services.

These four, key, elements represent the scientific/technical backbone of the whole enterprise.

## **National Research Infrastructures** <a name="national"></a>

The NRIs participating in the EPOS integration plan already exist and are fully operational, providing access to data and services for specific communities at a national level. European countries together own such a mosaic of hundreds of impressive but separated NRIs that includes geophysical networks, observatories, temporary deployments, laboratories and modeling facilities for solid Earth studies.


# **Glossary** <a name="glossary"></a>

> [Glossary](Glossary.md)

## **Requirements analysis**  <a name="requirements"></a>

>[Requirements Analysis](./documentation/requirements-analysis/requirements-analysis.md)

>[Use Cases](./documentation/requirements-analysis/use-cases.md)

## **Processes definition** <a name="process"></a>

>[Search](./documentation/processes-definitions/search.md)

>[Explore Results](./documentation/processes-definitions/explore-results.md)

>[Overlay Results](./documentation/processes-definitions/overlay-results.md)

>[Download](./documentation/processes-definitions/download.md)

>[Login](./documentation/processes-definitions/login.md)

>[Download Restricted](./documentation/processes-definitions/download-restricted.md)

>[Metadata Update](./documentation/processes-definitions/metadata-update.md)

## Architecture  <a name="architecture"></a>

The Integrated Core Services (ICS) represents the infrastructure consisting of services that will allow access to multidisciplinary resources provided by the TCS's. These will include data and data products as well as synthetic data from simulations, processing, and visualization tools.

The ICS consists of multiple logical areas of functionality, these include Graphical User Interface (GUI), web-API, metadata catalogue, user management etc. A micro-service architecture has been adopted by the ICS-C, where each (micro) service is atomic and dedicated to a specific class of tasks.

### **Architectural Concepts**

> [Architectural requirements definition](./documentation/architectural-concepts/Architectural-requirements-definition.md)

> [Architectural Goals and Constraints](./documentation/architectural-concepts/Architectural-Goals-and-Constraints.md)

### **Architecture design**

> [Conceptual design](./documentation/architecture-design/Conceptual-design.md)

> [Technical design](./documentation/architecture-design/Technical-design.md)

> [Sequence Diagrams](./documentation/architecture-design/Sequence-Diagrams.md)

### **Authentication, Authorization and Accounting**

> [AAAI](./documentation/aai/aai.md)

## **Architecture elements**

> [EPOS Data Model](./documentation/architecture-elements/epos-data-model.md)

> [EPOS GeoJSON Extension](./documentation/architecture-elements/epos-geojson.md)

## **EPOS Microservices:** <a name="microservices"></a>


| Microservice name | Docker | Git Repository |
|--|--|--|
| EPOS Data Portal | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/epos-gui)](https://hub.docker.com/r/epos/epos-gui)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/epos-gui)](https://hub.docker.com/r/epos/epos-gui)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/epos-gui)](https://hub.docker.com/r/epos/epos-gui) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/epos-gui) |
| API Gateway | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/epos-api-gateway)](https://hub.docker.com/r/epos/epos-api-gateway)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/epos-api-gateway)](https://hub.docker.com/r/epos/epos-api-gateway)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/epos-api-gateway)](https://hub.docker.com/r/epos/epos-api-gateway) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/epos-api-gateway) |
| Resources Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/resources-service)](https://hub.docker.com/r/epos/resources-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/resources-service)](https://hub.docker.com/r/epos/resources-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/resources-service)](https://hub.docker.com/r/epos/resources-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/resources-service) |
| External Access Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/external-access-service)](https://hub.docker.com/r/epos/external-access-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/external-access-service)](https://hub.docker.com/r/epos/external-access-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/external-access-service)](https://hub.docker.com/r/epos/external-access-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/external-access-service) |
| Ingestor Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/ingestor-service)](https://hub.docker.com/r/epos/ingestor-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/ingestor-service)](https://hub.docker.com/r/epos/ingestor-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/ingestor-service)](https://hub.docker.com/r/epos/ingestor-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/ingestor-service) |
| Converter Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/converter-service)](https://hub.docker.com/r/epos/converter-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/converter-service)](https://hub.docker.com/r/epos/converter-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/converter-service)](https://hub.docker.com/r/epos/converter-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/converter-service) |
| Backoffice Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/backoffice-service)](https://hub.docker.com/r/epos/backoffice-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/backoffice-service)](https://hub.docker.com/r/epos/backoffice-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/backoffice-service)](https://hub.docker.com/r/epos/backoffice-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/backoffice-service) |
| Data Metadata Service | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/data-metadata-service)](https://hub.docker.com/r/epos/data-metadata-service)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/data-metadata-service)](https://hub.docker.com/r/epos/data-metadata-service)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/data-metadata-service)](https://hub.docker.com/r/epos/data-metadata-service) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/data-metadata-service) |
| Metadata Database | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/epos/metadata-database-deploy)](https://hub.docker.com/r/epos/metadata-database-deploy)<br>[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/epos/metadata-database-deploy)](https://hub.docker.com/r/epos/metadata-database-deploy)<br>[![Docker Pulls](https://img.shields.io/docker/pulls/epos/metadata-database-deploy)](https://hub.docker.com/r/epos/metadata-database-deploy) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/metadata-database) |


## **EPOS Libraries:** <a name="libraries"></a>


| Library name | Maven | Git Repository |
|--|--|--|
| Metadata Database API Library | [![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/db-api/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/db-api) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/db-api) |
| Routing Framework | [![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/router-framework/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/router-framework) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/routingframework) |
| EPOS Data Model beans | [![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-data-model-beans/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-data-model-beans) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/epos_data_model_beans) |
| EPOS GeoJSON Java Library | [![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-geojson-java-library/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-geojson-java-library) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/epos-geojson-java-library) |
| EPOS CovJSON Java Library | [![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-covjson-java-library/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.epos-eu.ics-c/epos-covjson-java-library) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/epos-covjson-java-library) |


## **Open Source installations** <a name="installers"></a>


| Installer name | Installer download | Git Repository |
|--|--|--|
| EPOS Open Source Docker | [![Download](https://img.shields.io/badge/Download-Get%20the%20binary-brightgreen)](https://epos-ci.brgm.fr/epos/opensource-docker/-/packages) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/opensource-docker) |
| EPOS Open Source Kubernetes | [![Download](https://img.shields.io/badge/Download-Get%20the%20binary-brightgreen)](https://epos-ci.brgm.fr/epos/opensource-kubernetes/-/packages) | [![Git Repository](https://img.shields.io/badge/Git-open%20repository-white?logoColor=fff&style=flat)](https://epos-ci.brgm.fr/epos/opensource-kubernetes) |
