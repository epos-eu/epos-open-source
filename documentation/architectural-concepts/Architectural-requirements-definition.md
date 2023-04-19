The goal of this section is to establish the basis for a clear and detailed system architecture design by defining the core concepts and costraints that descend from the requirements.

## **Architectural requirements definition**

What is immediately apparent is that the system needs to satisfy different users stories, that include a number of different functionalities. These functionalities are likely to evolve in time, and new ones are going to be added. This leads to the definition of two main architectural requirements (AR):

| **Architecture Requirement** | **Description** |
|--|--|
| **AR #1:** | The system needs to support many different functionalities |
| **AR #2:** | the system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities <br> AR #1 and AR #2 are common to many current IT systems, and one of the best approaches to satisfy them is adopt a modular architecture design
| **AR #3:** | The system should be implemented with a modular architecture <br> In the EPOS case, the team is composed by an international team where: different roles are assigned, and in particular a Dev Team is responsible for developments while a Dev Team, represented by Hosting Organizations, provides the e-infrastructure. This leads to another key requirement related to the collaborative approach:
| **AR #4:** | The system should be implemented by using modern DevOps techniques that ensure performances and other key attributes (described later). Being the team distributed over different countries, and given the extreme flexibility of some teams where an Agile approach is adopted, it is vital that the modules of the system can be easy maintained, which leads to AR#5. |
| **AR #5:** | The system should guarantee maintainability of modules ensuring loose coupling as much as possible. <br> What also emerges from the use cases in chapter 2, is that the system needs to ensure a strong management of the data and information in order to serve the users who should be able to browse information (metadata) about TCS resources and access the datasets. |
| **AR #6:** | The sytem should be based on the EPOS data model |
| **AR #7:** | The system needs to implement a rich metadata catalogue in order to store all the information required by the EPOS data model. |

## **Key System requirements definition**

| **Requirement #** | **Requirement description** |
|--|--|
| **#1** | The system needs to support many different functionalities |
| **#2** | The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities |
| **#3** | The system should be implemented with a modular architecture |
| **#4** | The system should be implemented by using modern DevOps techniques that ensure performances by and other key attributes (described later). |
| **#5** | The system should guarantee maintainability of modules ensuring loose coupling as much as possible. |
| **#6** | The system needs to implement a rich metadata catalogue in order to store all the required information to manage the integrated assets |

 The above requirements are here summarized in a tabular way but they are the results of years of study, discussion and considerations condensed in key deliverables like “Second (Final) Report on EPOS-ICS Architecture” (10.5281/zenodo.1470257)[\[1\]](#_ftn1)

 As a consequence of these Architectural Requirements, we can define Goals and Constraints to be considered in the architectural design.

> [Summary](../README.md)