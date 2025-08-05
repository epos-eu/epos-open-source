"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[233,558],{6614:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var s=t(5043),n=t(8558),a=t(579);const r=(0,s.lazy)(()=>Promise.resolve().then(t.bind(t,1766))),o=()=>(0,a.jsxs)(r,{children:[(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.MainHeader,{children:"Architectural design"}),(0,a.jsx)(n.Paragraph,{children:"This section describes the software requirements and objectives we considered while designing the EPOS Platform architecture ; for example, safety, security, privacy, use of an off-the-shelf product, portability, distribution, and reuse."})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Core Concepts and Patterns"}),(0,a.jsx)(n.Paragraph,{children:"Modular approach:"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"The system should be implemented with a modular architecture so that adding new functionalities and scaling current functionalities does not perturb the entire system. Modules should be decoupled and cohesive (implement one functionality). Microservice Architecture is the reference approach;"}),(0,a.jsxs)(n.SubList,{children:[(0,a.jsx)(n.SubListItem,{children:"Each module should have a clearly defined functionality, and dependencies among modules should be avoided (e.g. decoupling of microservices)."}),(0,a.jsx)(n.SubListItem,{children:"Each module should be individually testable (e.g. RabbitMQ endpoint should always answer with the same payload format)."}),(0,a.jsx)(n.SubListItem,{children:"Each module can be deployed (i.e., in any order)."})]})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.Paragraph,{children:"Interaction between clients (GUI or Agent) and system:"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Web API should be designed to serve a specific category of consumers (e.g. GUIs clients, software agents harvesting metadata in specific formats, desktop applications etc.);"}),(0,a.jsx)(n.ListItem,{children:"Web API should be decoupled from any specific client logic (e.g. GUI should not force constraints on the Web API as information about the content to be downloadable or visualized);"}),(0,a.jsxs)(n.ListItem,{children:["Client should hide to the end users the potential complexity caused by a consistent number of negotiations needed to retrieve datasets; this may require:",(0,a.jsxs)(n.SubList,{children:[(0,a.jsx)(n.SubListItem,{children:"Creation of complex agents within the client."}),(0,a.jsx)(n.SubListItem,{children:"Simplifying TCS services."}),(0,a.jsx)(n.SubListItem,{children:"Using ad hoc metadata description."})]})]}),(0,a.jsx)(n.ListItem,{children:"Web API should reuse existing patterns for facilitating adoption and reusage (FAIR)."})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Data and Metadata"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Information used for satisfying user requirements are intrinsically interconnected and thus require to maintain referential integrity (Scientific data, system (workspace) data, GRDB)."}),(0,a.jsx)(n.ListItem,{children:"Technically, they should be stored in a unique data source as much as possible (e.g. main CERIF metadata catalogue, including User Workspace);"}),(0,a.jsx)(n.ListItem,{children:"Stateless modules usage is encouraged, so that there is no need to store internal state, which would ease scalability;"})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Authentication and Authorization"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Should enable different individuals or teams to work in parallel."}),(0,a.jsx)(n.ListItem,{children:"Should be modular, so that modules can be replaced as long as the interfaces with the other modules remain the same."}),(0,a.jsx)(n.ListItem,{children:"Should support the use of several technological tools (e.g. AAAI system, database etc.)."})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Maintainability"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Needs to implement several functionalities, each potentially implemented by different technologies."}),(0,a.jsx)(n.ListItem,{children:"Should be easy to maintain and enable parallel work."}),(0,a.jsx)(n.ListItem,{children:"Modules can be replaced as long as the interfaces with other modules remain the same."})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Deployability"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Should be easy to deploy."}),(0,a.jsx)(n.ListItem,{children:"Should guarantee a minimal level of performance, as defined in the technical Annex."})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Scalability"}),(0,a.jsx)(n.List,{children:(0,a.jsx)(n.ListItem,{children:"Should be resilient to increasing amounts of users or performance requirements."})})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Securability"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Might provide security audit."}),(0,a.jsx)(n.ListItem,{children:"Must provide layered permission access (e.g., Read vs. Create, Write, Update)."})]})]}),(0,a.jsxs)(n.Section,{children:[(0,a.jsx)(n.SectionHeader,{children:"Usability"}),(0,a.jsxs)(n.List,{children:[(0,a.jsx)(n.ListItem,{children:"Should be easy to interact with (reuse existing API where possible)."}),(0,a.jsx)(n.ListItem,{children:"Should document the API."}),(0,a.jsx)(n.ListItem,{children:"Might provide versioning of API messages for old clients."}),(0,a.jsx)(n.ListItem,{children:"Should be resilient to invalid payloads."})]})]})]})},8558:(e,i,t)=>{t.r(i),t.d(i,{List:()=>l,ListItem:()=>d,MainHeader:()=>a,Paragraph:()=>o,Section:()=>n,SectionHeader:()=>r,SubList:()=>c,SubListItem:()=>h});var s=t(9);const n=s.Ay.div`
  margin-bottom: 30px;
`,a=s.Ay.h1`
  font-size: 32px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,r=s.Ay.h1`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,o=s.Ay.p`
 font-size:16px;
 margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
`,l=s.Ay.ul`
  padding-left: 20px;
  margin-bottom: 10px;
`,d=s.Ay.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`,c=s.Ay.ul`
  padding-left: 20px;
`,h=s.Ay.li`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`}}]);
//# sourceMappingURL=233.b53388bb.chunk.js.map