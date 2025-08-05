"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[80,884],{8080:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(5043),n=i(8884),r=i(579);const a=[{term:"AR #1:",description:"The system needs to support many different functionalities."},{term:"AR #2:",description:"The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities. AR #1 and AR #2 are common to many current IT systems, and one of the best approaches to satisfy them is to adopt a modular architecture design."},{term:"AR #3:",description:"The system should be implemented with a modular architecture."},{term:"AR #4:",description:"The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes. Given the distributed nature of the team and flexibility of some teams adopting an Agile approach, modules of the system should be easily maintained."},{term:"AR #5:",description:"The system should guarantee maintainability of modules ensuring loose coupling as much as possible."},{term:"AR #6:",description:"The system should be based on the EPOS data model."},{term:"AR #7:",description:"The system needs to implement a rich metadata catalogue to store all information required by the EPOS data model."}],o=[{term:"#1",description:"The system needs to support many different functionalities."},{term:"#2",description:"The system needs to be able to easily support slight refactoring of existing functionalities and easy inclusion of new functionalities."},{term:"#3",description:"The system should be implemented with a modular architecture."},{term:"#4",description:"The system should be implemented by using modern DevOps techniques that ensure performance and other key attributes."},{term:"#5",description:"The system should guarantee maintainability of modules ensuring loose coupling as much as possible."},{term:"#6",description:"The system needs to implement a rich metadata catalogue in order to store all the required information to manage the integrated assets."}],l=(0,s.lazy)(()=>Promise.resolve().then(i.bind(i,1766))),d=()=>(0,r.jsxs)(l,{children:[(0,r.jsx)(n.MainHeader,{children:"System Architecture"}),(0,r.jsx)(n.Paragraph,{children:"This page describes the software requirements and objectives that led the architectural design of the EPOS Platform and therefore are reflected in the Open Source environment. Key system requirements are derived starting from core concepts and patterns such as safety, security, portability, distribution and reuse."}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.Title,{children:"Architectural design"}),(0,r.jsx)(n.Paragraph,{children:"This section describes the software requirements and objectives we considered while designing the EPOS Platform architecture ; for example, safety, security, privacy, use of an off-the-shelf product, portability, distribution, and reuse."})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Core Concepts and Patterns"}),(0,r.jsx)(n.Paragraph,{children:"Modular approach:"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"The system should be implemented with a modular architecture so that adding new functionalities and scaling current functionalities does not perturb the entire system. Modules should be decoupled and cohesive (implement one functionality). Microservice Architecture is the reference approach;"}),(0,r.jsxs)(n.SubList,{children:[(0,r.jsx)(n.SubListItem,{children:"Each module should have a clearly defined functionality, and dependencies among modules should be avoided (e.g. decoupling of microservices)."}),(0,r.jsx)(n.SubListItem,{children:"Each module should be individually testable (e.g. RabbitMQ endpoint should always answer with the same payload format)."}),(0,r.jsx)(n.SubListItem,{children:"Each module can be deployed (i.e., in any order)."})]})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.Paragraph,{children:"Interaction between clients (GUI or Agent) and system:"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Web API should be designed to serve a specific category of consumers (e.g. GUIs clients, software agents harvesting metadata in specific formats, desktop applications etc.);"}),(0,r.jsx)(n.ListItem,{children:"Web API should be decoupled from any specific client logic (e.g. GUI should not force constraints on the Web API as information about the content to be downloadable or visualized);"}),(0,r.jsxs)(n.ListItem,{children:["Client should hide to the end users the potential complexity caused by a consistent number of negotiations needed to retrieve datasets; this may require:",(0,r.jsxs)(n.SubList,{children:[(0,r.jsx)(n.SubListItem,{children:"Creation of complex agents within the client."}),(0,r.jsx)(n.SubListItem,{children:"Simplifying TCS services."}),(0,r.jsx)(n.SubListItem,{children:"Using ad hoc metadata description."})]})]}),(0,r.jsx)(n.ListItem,{children:"Web API should reuse existing patterns for facilitating adoption and reusage (FAIR)."})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Data and Metadata"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Information used for satisfying user requirements are intrinsically interconnected and thus require to maintain referential integrity (Scientific data, system (workspace) data, GRDB)."}),(0,r.jsx)(n.ListItem,{children:"Technically, they should be stored in a unique data source as much as possible (e.g. main CERIF metadata catalogue, including User Workspace);"}),(0,r.jsx)(n.ListItem,{children:"Stateless modules usage is encouraged, so that there is no need to store internal state, which would ease scalability;"})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Authentication and Authorization"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Should enable different individuals or teams to work in parallel."}),(0,r.jsx)(n.ListItem,{children:"Should be modular, so that modules can be replaced as long as the interfaces with the other modules remain the same."}),(0,r.jsx)(n.ListItem,{children:"Should support the use of several technological tools (e.g. AAAI system, database etc.)."})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Maintainability"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Needs to implement several functionalities, each potentially implemented by different technologies."}),(0,r.jsx)(n.ListItem,{children:"Should be easy to maintain and enable parallel work."}),(0,r.jsx)(n.ListItem,{children:"Modules can be replaced as long as the interfaces with other modules remain the same."})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Deployability"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Should be easy to deploy."}),(0,r.jsx)(n.ListItem,{children:"Should guarantee a minimal level of performance, as defined in the technical Annex."})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Scalability"}),(0,r.jsx)(n.List,{children:(0,r.jsx)(n.ListItem,{children:"Should be resilient to increasing amounts of users or performance requirements."})})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Securability"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Might provide security audit."}),(0,r.jsx)(n.ListItem,{children:"Must provide layered permission access (e.g., Read vs. Create, Write, Update)."})]})]}),(0,r.jsxs)(n.Section,{children:[(0,r.jsx)(n.SectionHeader,{children:"Usability"}),(0,r.jsxs)(n.List,{children:[(0,r.jsx)(n.ListItem,{children:"Should be easy to interact with (reuse existing API where possible)."}),(0,r.jsx)(n.ListItem,{children:"Should document the API."}),(0,r.jsx)(n.ListItem,{children:"Might provide versioning of API messages for old clients."}),(0,r.jsx)(n.ListItem,{children:"Should be resilient to invalid payloads."})]})]}),(0,r.jsx)(n.Title,{children:"Architectural requirements"}),(0,r.jsx)(n.RequirementsDescription,{children:"The goal of this section is to establish the basis for a clear and detailed system architecture design by defining the core concepts and constraints derived from the requirements."}),(0,r.jsx)(n.SectionHeader,{children:"Architectural Requirements Definition"}),(0,r.jsx)(n.RequirementsDescription,{children:"The system needs to satisfy different user stories, which include a variety of functionalities that will evolve over time. As such, we define two main architectural requirements:"}),(0,r.jsxs)(n.RequirementTable,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableHeader,{children:"Architecture Requirement"}),(0,r.jsx)(n.TableHeader,{children:"Description"})]})}),(0,r.jsx)("tbody",{children:a.map(e=>(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableCell,{children:e.term}),(0,r.jsx)(n.TableDescription,{children:e.description})]},e.term))})]}),(0,r.jsx)(n.SectionHeader,{children:"Key System Requirements Definition"}),(0,r.jsxs)(n.RequirementTable,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableHeader,{children:"Requirement"}),(0,r.jsx)(n.TableHeader,{children:"Description"})]})}),(0,r.jsx)("tbody",{children:o.map(e=>(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableCell,{children:e.term}),(0,r.jsx)(n.TableDescription,{children:e.description})]},e.term))}),(0,r.jsx)("p",{})]}),(0,r.jsx)(n.RequirementsDescription,{children:"As a consequence of these Architectural Requirements, we can define goals and constraints to be considered in the architectural design."})]})},8884:(e,t,i)=>{i.r(t),i.d(t,{List:()=>f,ListItem:()=>b,MainHeader:()=>m,Paragraph:()=>p,RequirementTable:()=>r,RequirementsDescription:()=>c,Section:()=>h,SectionHeader:()=>u,SubList:()=>x,SubListItem:()=>y,TableCell:()=>l,TableDescription:()=>d,TableHeader:()=>a,TableRow:()=>o,Title:()=>n});var s=i(9);const n=s.Ay.h1`
  font-size: 24px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color: #152c15;
`,r=s.Ay.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`,a=s.Ay.th`
  padding: 12px;
  font-size: 18px;
  text-align: left;
  background-color: #444;
  color: white;
  border: 1px solid #ddd;
  font-family: "Lato", "OpenSans", sans-serif;
`,o=s.Ay.tr`
  display: table-row;
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`,l=s.Ay.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-size:16px;
  font-family: "OpenSans", sans-serif;

`,d=s.Ay.td`
  margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  text-align: left;
  padding-left: 10px;
  font-size:16px;
`,c=s.Ay.p`
  margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
  font-size:16px;
 
`,h=s.Ay.div`
  margin-bottom: 30px;
`,m=s.Ay.h1`
  font-size: 32px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,u=s.Ay.h1`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,p=s.Ay.p`
 font-size:16px;
 margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
`,f=s.Ay.ul`
  padding-left: 20px;
  margin-bottom: 10px;
`,b=s.Ay.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`,x=s.Ay.ul`
  padding-left: 20px;
`,y=s.Ay.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`}}]);
//# sourceMappingURL=80.b206bd1f.chunk.js.map