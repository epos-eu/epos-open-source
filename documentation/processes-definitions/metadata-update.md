[back to Repository](../README.md)

# Problem description

Today if a TCS need to change a specific parameter for a Webservice a or some informations about datasets, we need to change the turtle file a re-ingest all turtle files.
We need to modify the metadata management defining:

- Metadata first insert procedure
- Metadata update procedure
- Metadata delete procedure
- Metadata authorization definition
  
# AS IS analysis

At current project state TCS can manipulate metadata with a specific procedure. The procedure involves several stakeholder and tools. This procedure is based on a specific GitLab repository where TCS can change or insert new metadata. This procedure can be summerized as follow:

- Metadata manager from TCS create a new branch on GilLab Metadata cache repository
- Metadata manager insert new turtle files or change a  turtle file already stored in the repository
- GitLab Worker elaborate a pipe line that ingest new metadata and create a test environment where the TCS metadata manager can verify and check the results of the new metadata directly on the GUI
- Once everything is ok the TCS metadata manager ask for a branch marge into Master
- The Metadata Curator verify that everything is correct and that the new metadata can be released in propduction
- The Metadata Curator merge into Master branch the updated branch
- GitLab Worker elaborate a pipeline to publish on staging environment the new metadata
- DevOps team check if the new metadata are working on Stainging environment and tag the new release candidate 
- GitLab Worker elaborate a pipeline to publish on production environment the new metadata e perform the ingestion

# User Stories Metadata Management

Metadata Management involves 2 main actors:

- TCS DATA MANAGER: is the person in charge to manage the data for the Tematic Community. On the system will be configured many TCS DATA MANAGER as many Tematic Community are involved on EPOS
- METADATA CURATOR: is the person in charge to check the Tematic Community data and deploy the new insert and updates in production

Below is listed all users' storiee processes for every actor involved in Metadata Management

<table>
    <thead>
        <tr>
            <th>User Type</th>
            <th>Functionality</th>
            <th>User Story Process</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=3>TCS DATA MANAGER</td>
            <td rowspan=1>Metadata Import</td>
            <td>
                <li>Backoffice Login</li>
                <li>Open Metada import function</li>
                <li>Upload a new TTL file</li>
                <li>Ask for Metadata Revision</li>
            </td>
        </tr>
        <tr>
            <td rowspan=1>Online Metadata Management</td>
            <td>
                <li>Backoffice Login</li>
                <li>Browse published metadata</li>
                <li>Manage metadata (Update, Delete)</li>
                <li>Insert new metadata (Insert)</li>
            </td>
        </tr>
        <tr>
            <td rowspan=1>Online Integrity Check</td>
            <td>
                <li>Backoffice Login</li>
                <li>Browse system version link</li>
                <li>Open system version link</li>
                <li>Check for data on the system</li>
            </td>
        </tr>
         <tr>
            <td rowspan=1>METADATA CURATOR</td>
            <td rowspan=1>Metadata Revision</td>
            <td>
                <li>Backoffice Login</li>
                <li>Browse system version link</li>
                <li>Open system version link</li>
                <li>Check for data on the system</li>
                <li>Approve changes and start Deploy procedure</li>
            </td>
        </tr>
    </tbody>
</table>


# Macro processes

We described 2 different macro processes involved in Metadata management procedure:

- EPOS DCAT-AP METADATA IMPORT:
  - Metadata identificatom: it is an activity outside the system performed by the TCS DATA MANAGER who select the metadata to be inserted on the system
  - DCAT-AP mapping: using EPOS DCAT-AP vocabulary and definitions the TCS DATA MANAGER describes the previoulsly identified metadata 
  - Using a software that helps to validate the files, the TCS DATA MANAGER create the Turtle (TTL) file
  - The TCS DATA MANAGER access to the system and import the TTL file
  - After importing the data into the system the TCS DATA MANAGER access to the new system version to check the Data
  - After checking the metadata on the new system version the TCS DATA MANAGER ask for the Metadata Revision to the METADATA CURATOR
  - The METADATA CURATOR perform the revision on the system and start the Deploy to production environment
- METADATA CREATION AND EDITING
  - After accessing to the backoffice the TCS DATA MANAGER access to the metadata to insert, update or delete metadata
  - Afte changing the data  the TCS DATA MANAGER access to the new system version to check the data
  - After checking the metadata on the new system version the TCS DATA MANAGER ask for the Metadata Revision to the METADATA CURATOR
  - The METADATA CURATOR perform the revision on the system and start the Deploy to production environment

![Macro process](../images/MACRO%20PROCESS.png)

# Use cases

Below a representation of the USE CASES derived for the user stories previously described

![Use Cases](../images/USE%20CASE.png)

# Process definition

In this chapter are described the main processes above defined. The BPNM methodology is used to describe the every process. The system has his own swimlane as the other actors involved in the process.
For each process are highlighted some key points  and attention points:

- ![focal_icon](../images/focal25.png) focal points
- ![warning_icon](../images/warning25.png) warning points

## Metadata import

This process starts from the TCS METADATA MANAGER and the first 3 activities are perfomed outside the system

![Metadata Import](../images/METADATA%20IMPORT.png)

|Type|Description|
|:--:|--|
|![focal_icon](../images/focal25.png)|The import function starts the ingestion process on an new system version branch|
|![focal_icon](../images/focal25.png)|The duration in time of every system version should be defined, after that time the system vesion will be deleted if the changes will not be approved by the Metadata Curator|
|![warning_icon](../images/warning25.png)|The TTL imported file should be validate using the official EPOS DCAT-AP Shackel |


## Metadata Integrity Check

This process let the TCS DATA MANAGERS check the new metadata ro updated metadata. This process has 3 starting point:

- The TCS DATA MANAGER should open a specific system version starting from a list of available system versions
- The TCS DATA MANAGEr should open the system version from the METADATA IMPORT PROCESS
- The TCS DATA MANAGEr should open the system version from the ONLINE METADATA MANAGEMENT PROCESS

![Metadata Integrity Check](../images/METADATA%20%20INTEGRITY%20CHECK.png)

|Type|Description|
|:--:|--|
|![focal_icon](../images/focal25.png)|The system version should let the TCS METADATA MANAGER checks all updated/inserted metadata. The system should be complete with GUI and all systema modules|
|![focal_icon](../images/focal25.png)|When the TCS METADATA MANAGER approve the metadata system version, the system should send and email to the Metadata Curator|
|![warning_icon](../images/warning25.png)|A specific process definition is needed in case of rejection of the new metadata system version. Editing the changes made is better than deleteign all changes and reinsert them form scratch|

## Metadata Revision

When the Metadata curator receive an email from the system will access to the backoffice and will open a new metadata version

![Metadata Revision](../images/METADATA%20REVISION.png)

|Type|Description|
|:--:|--|
|![focal_icon](../images/focal25.png)|The Metadata curator will check the TCS new metadata and will check if there is any impact of the changes inserted by me TCS METADATA MANAGER on other TCSs' metadata|
![focal_icon](../images/focal25.png)|If the METADATA CURATOR finds any interconnection with orther TCSs' metadata will inform the related TCS METADATA MANAGER to ask him to check the system version|
|![warning_icon](../images/warning25.png)|A specific process definition is needed in case of rejection of the new metadata system version. Editing the changes made is better than deleteign all changes and reinsert them form scratch|

## Metadata Version Management
This is specific process entirely manage by the system.

![Metadata Version Management](../images/METADATA%20VERSION%20MANAGEMENT.png)

|Type|Description|
|:--:|--|
|![warning_icon](../images/warning25.png)|System disk space should be keep under controll to avoid any disk space problems|

## Online Metadata Management

This process let the TCS METADATA MANAGER to perforom changes on metadata. The available function are:

- INSERT new metadata starting from scratch
- UPDATE existing metadata
- DELETE existing metadata

![Online Metadata Management](../images/ONLINE%20METADATA%20MANAGEMENT.png)

|Type|Description|
|--|--|
|![focal_icon](../images/focal25.png)|The process end with the METADATA INTEGRITY CHECK PROCESS|
|![warning_icon](../images/warning25.png)|The system should guide the TCS METADATA MANAGER trough the correct steps to insert any new metadata (e.g. Organization->Person->Dataset->Webservice->Operation|

# Tool and software proposal

We propose to use 3 specific tool:
- EPOS METADATA EDITOR: to create Shackl validate TTL file 
- CERIF BACKOFFICE: a new module to be develop to help TCS METADATA CURATOR and METADATA CURATOR, to work ona structired system
- GITLAB: to manage the new metadata system management to hel the METADATA INTEGRITY CHECKS and METADATA REVISION processes

# Appendix1 - related documents

- [Kick off Presentation](documents/Kick%20Off%20Presentation.pdf)
- [Drawio Charts](documents/BPNM%20-%20US2%20-%20Metadata%20Management%20(1).pdf)
- [Final presentation](./documents/Metadata%20update%20procedure%20-%20process.pdf)

