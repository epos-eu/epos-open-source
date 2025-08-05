"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[470,958],{4470:(e,i,s)=>{s.r(i),s.d(i,{BulletList:()=>d,Description:()=>r,ServiceTable:()=>a,TableCell:()=>o,TableHeader:()=>l,TableRow:()=>c,Title:()=>n});var t=s(9);const n=t.Ay.h1`
  margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,r=t.Ay.p`
 padding: 10px;
  text-align: left;
  margin: 1.5rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`,a=t.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`,l=t.Ay.th`
 padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  margin: 1.5rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  font-size:18px;
`,c=t.Ay.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,o=t.Ay.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  margin: 1.5rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`,d=t.Ay.ul`
  margin: 10px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
  }
`},4958:(e,i,s)=>{s.r(i),s.d(i,{default:()=>l});var t=s(5043),n=s(4470),r=s(579);const a=(0,t.lazy)(()=>Promise.resolve().then(s.bind(s,1766))),l=()=>(0,r.jsxs)(a,{children:[(0,r.jsx)(n.Title,{children:"Conceptual Services of the Architecture"}),(0,r.jsx)("img",{src:"./img/graphs/conceptual-design.png",alt:"Conceptual Design",style:{width:"100%",height:"auto",marginBottom:"20px"}}),(0,r.jsx)(n.Description,{children:"The driving concepts can be summarized by the following statements:"}),(0,r.jsxs)(n.BulletList,{children:[(0,r.jsx)("li",{children:"Each of the Services is supposed to capture a well-defined functionality."}),(0,r.jsx)("li",{children:"Services interaction is guaranteed by one main service, namely the queueing system."}),(0,r.jsx)("li",{children:"Services interact through message exchanges."}),(0,r.jsx)("li",{children:'A main "EPOS API Gateway" service ensures interaction between the system and external users (humans or machines).'}),(0,r.jsx)("li",{children:"Services outside the ICS-C system boundary are external systems with which the ICS-C system is supposed to communicate and interoperate (AAI manager, ICS-D, TCS service)."}),(0,r.jsx)("li",{children:"Services in the blue squares implement functionalities required by the user and actionable by means of RESTful APIs (proxied by the EPOS API Gateway)."}),(0,r.jsx)("li",{children:"Currently, the following main functionalities emerged from the user requirements, here represented as RESTful APIs endpoints:"})]}),(0,r.jsxs)(n.ServiceTable,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.TableHeader,{children:"Service Name"}),(0,r.jsx)(n.TableHeader,{children:"Endpoint"}),(0,r.jsx)(n.TableHeader,{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableCell,{children:"Resources Service"}),(0,r.jsx)(n.TableCell,{children:"/api/resources-service/v1/"}),(0,r.jsx)(n.TableCell,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableCell,{children:"External Access Service"}),(0,r.jsx)(n.TableCell,{children:"/api/external-access-service/v1/"}),(0,r.jsx)(n.TableCell,{children:"Service for executing external services (from TCS)"})]}),(0,r.jsxs)(n.TableRow,{children:[(0,r.jsx)(n.TableCell,{children:"Backoffice Service"}),(0,r.jsx)(n.TableCell,{children:"/api/backoffice-service/v1/"}),(0,r.jsx)(n.TableCell,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,r.jsx)(n.Description,{children:'Services in the red squares implement "support" functionalities, that is to say functionalities needed by the system internally. Although the converter is supposed to be an internal "support" service, this may implement Web-APIs to provide an additional service to end users.'}),(0,r.jsx)(n.Title,{children:"Data Elements"}),(0,r.jsxs)(n.BulletList,{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Metadata"}),': representing the "scientific metadata" that enables the system to manage the interaction with the TCS, and is mostly provided by the communities.']}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"System data"}),": representing data needed by the users of the ICS-C system that should persist after the end of the session. It includes, for instance, information about workspaces and may include workflow information."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"GRDB data"}),': this represents the metadata currently stored in the Granularity Database, and partially overlaps with the "metadata" service.']})]}),(0,r.jsx)(n.Description,{children:"The three data elements above represent the data that the ICS-C system is required to manage. Such data is intrinsically related and requires referential integrity."})]})}}]);
//# sourceMappingURL=958.dfe8272f.chunk.js.map