"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[158,478],{2478:(e,t,s)=>{s.r(t),s.d(t,{AspectItem:()=>o,AspectList:()=>a,BulletList:()=>x,CodeBlock:()=>g,Description:()=>m,Image:()=>n,ServiceTable:()=>l,TableCell:()=>h,TableDescription:()=>p,TableHeader:()=>c,TableRow:()=>d,Title:()=>r});var i=s(9);const r=i.Ay.h1`
  margin: 1.5rem 0 2rem 0;
  font-size:32px;
  font-family: "Lato", "OpenSans", sans-serif;
  color: #152c15;
`,n=i.Ay.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`,a=i.Ay.ul`
    margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`,o=i.Ay.li`
    margin: 5px 0;
  font-size: 16px;
  text-align: left;
  font-family: "OpenSans", sans-serif;
  color: black;
`,l=i.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`,c=i.Ay.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  margin: 1.5rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  font-size:18px;
`,d=i.Ay.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,h=i.Ay.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  margin: 1.5rem 0 2rem 0;
  font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`,p=i.Ay.td`
  padding: 12px;
  border: 1px solid #ddd;
  vertical-align: top;
`,g=i.Ay.pre`
   backgroundColor: isNightMode ? '#2d2d2d' : '#f5f5f5',
   color: isNightMode ? '#ffffff' : '#000000',
    borderColor: isNightMode ? '#444' : '#ddd',
`,m=i.Ay.p`
 padding: 10px;
  text-align: left;
  margin: 1.5rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:16px;
`,x=i.Ay.ul`
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
`},2777:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(5043),r=s(2478),n=s(9787),a=s(579);const o=(0,i.lazy)(()=>Promise.resolve().then(s.bind(s,1766))),l='\n2023-03-09 14:08:15:314: Message published\n\nNode:         rabbit@netrabbit-server-0.netrabbit-nodes.test\nConnection:   10.1.5.47:34160 -> 10.1.5.40:5672\nVirtual host: changeme\nUser:         changeme\nChannel:      5\nExchange:     metadataService\nRouting keys: [<<"resources.get.test.api.resources-service.v1.resources.search.fetch">>]\nRouted queues: [<<"fetch">>]\nProperties:   [{<<"timestamp">>,signedint,1678370895},\n               {<<"reply_to">>,longstr,<<"web-api">>},\n               {<<"correlation_id">>,longstr,<<"08122848-ebaf-15a6-34da-72b435d21c6e">>},\n               {<<"headers">>,table,\n                [{<<"x-request-id">>,longstr,<<"5cf17dc881b670c59b2345c8ec34a5c3">>},\n                 {<<"referer">>,longstr,<<"http://10.101.10.44/test/">>},\n                 {<<"epos_component-audit">>,array,[{longstr,<<"WEB_API">>}]},\n                 {<<"x-forwarded-proto">>,longstr,<<"http">>},\n                 {<<"accept-language">>,longstr,<<"it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7">>},\n                 {<<"cookie">>,longstr,\n                  <<"_pk_id.241.d8d2=248ff2c9c692d01c.1677067197.; _pk_ses.241.d8d2=1">>},\n                 {<<"kind">>,longstr,\n                  <<"get.test.api.resources-service.v1.resources.search">>},\n                 {<<"x-forwarded-port">>,longstr,<<"80">>},\n                 {<<"epos_operation-type">>,longstr,<<"get">>},\n                 {<<"accept">>,longstr,\n                  <<"application/json, text/plain, */*">>},\n                 {<<"epos_request-type">>,longstr,\n                  <<"test.api.resources-service.v1.resources.search">>},\n                 {<<"x-real-ip">>,longstr,<<"192.168.65.4">>},\n                 {<<"x-forwarded-scheme">>,longstr,<<"http">>},\n                 {<<"x-forwarded-host">>,longstr,<<"10.101.10.44">>},\n                 {<<"epos_type-of-current-payload">>,longstr,<<"plain-text">>},\n                 {<<"host">>,longstr,<<"10.101.10.44">>},\n                 {<<"connection">>,longstr,<<"upgrade">>},\n                 {<<"epos_ttl-in-processor">>,long,10000},\n                 {<<"x-scheme">>,longstr,<<"http">>},\n                 {<<"accept-encoding">>,longstr,<<"gzip, deflate">>},\n                 {<<"user-agent">>,longstr,\n                  <<"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36">>}]}]\n',c=()=>{const[e,t]=(0,i.useState)(!1);return n.A,(0,a.jsxs)(o,{children:[(0,a.jsx)(r.Title,{children:"Conceptual Services of the Architecture"}),(0,a.jsx)("img",{src:"./img/graphs/conceptual-design.png",alt:"Conceptual Design",style:{width:"100%",height:"auto",marginBottom:"20px"}}),(0,a.jsx)(r.Description,{children:"The driving concepts can be summarized by the following statements:"}),(0,a.jsxs)(r.BulletList,{children:[(0,a.jsx)("li",{children:"Each of the Services is supposed to capture a well-defined functionality."}),(0,a.jsx)("li",{children:"Services interaction is guaranteed by one main service, namely the queueing system."}),(0,a.jsx)("li",{children:"Services interact through message exchanges."}),(0,a.jsx)("li",{children:'A main "EPOS API Gateway" service ensures interaction between the system and external users (humans or machines).'}),(0,a.jsx)("li",{children:"Services outside the ICS-C system boundary are external systems with which the ICS-C system is supposed to communicate and interoperate (AAI manager, ICS-D, TCS service)."}),(0,a.jsx)("li",{children:"Services in the blue squares implement functionalities required by the user and actionable by means of RESTful APIs (proxied by the EPOS API Gateway)."}),(0,a.jsx)("li",{children:"Currently, the following main functionalities emerged from the user requirements, here represented as RESTful APIs endpoints:"})]}),(0,a.jsxs)(r.ServiceTable,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)(r.TableHeader,{children:"Service Name"}),(0,a.jsx)(r.TableHeader,{children:"Endpoint"}),(0,a.jsx)(r.TableHeader,{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Resources Service"}),(0,a.jsx)(r.TableCell,{children:"/api/resources-service/v1/"}),(0,a.jsx)(r.TableCell,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"External Access Service"}),(0,a.jsx)(r.TableCell,{children:"/api/external-access-service/v1/"}),(0,a.jsx)(r.TableCell,{children:"Service for executing external services (from TCS)"})]}),(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Backoffice Service"}),(0,a.jsx)(r.TableCell,{children:"/api/backoffice-service/v1/"}),(0,a.jsx)(r.TableCell,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,a.jsx)(r.Description,{children:'Services in the red squares implement "support" functionalities, that is to say functionalities needed by the system internally. Although the converter is supposed to be an internal "support" service, this may implement Web-APIs to provide an additional service to end users.'}),(0,a.jsx)(r.Title,{children:"Data Elements"}),(0,a.jsxs)(r.BulletList,{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Metadata"}),': representing the "scientific metadata" that enables the system to manage the interaction with the TCS, and is mostly provided by the communities.']}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"System data"}),": representing data needed by the users of the ICS-C system that should persist after the end of the session. It includes, for instance, information about workspaces and may include workflow information."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"GRDB data"}),': this represents the metadata currently stored in the Granularity Database, and partially overlaps with the "metadata" service.']})]}),(0,a.jsx)(r.Description,{children:"The three data elements above represent the data that the ICS-C system is required to manage. Such data is intrinsically related and requires referential integrity."}),(0,a.jsx)(r.Title,{children:"Architecture Implementation"}),(0,a.jsx)(r.Description,{children:"The diagram in this section represents the implementation of the conceptual architecture."}),(0,a.jsx)(r.Image,{src:"./img/graphs/architecture-diagram.png",alt:"Architecture Diagram"}),(0,a.jsxs)(r.AspectList,{children:[(0,a.jsxs)(r.AspectItem,{children:["Each of the ",(0,a.jsx)("strong",{children:"services"})," in the conceptual design is rendered as one or more ",(0,a.jsx)("strong",{children:"services"})," in the Technical Design."]}),(0,a.jsx)(r.AspectItem,{children:"Blue services represent functionalities that implement requests via specific RESTful API endpoints:"})]}),(0,a.jsxs)(r.ServiceTable,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableHeader,{children:"Service Name"}),(0,a.jsx)(r.TableHeader,{children:"Endpoint"}),(0,a.jsx)(r.TableHeader,{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Resources Service"}),(0,a.jsx)(r.TableCell,{children:"/api/resources-service/v1/"}),(0,a.jsx)(r.TableDescription,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"External Access Service"}),(0,a.jsx)(r.TableCell,{children:"/api/external-access-service/v1/"}),(0,a.jsx)(r.TableDescription,{children:"Service for executing external services (from TCS)"})]}),(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Backoffice Service"}),(0,a.jsx)(r.TableCell,{children:"/api/backoffice-service/v1/"}),(0,a.jsx)(r.TableDescription,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,a.jsx)(r.AspectItem,{children:"In addition, the following services have been supplied with RESTful APIs:"}),(0,a.jsxs)(r.ServiceTable,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableHeader,{children:"Service Name"}),(0,a.jsx)(r.TableHeader,{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Converter Service"}),(0,a.jsx)(r.TableDescription,{children:"Service to convert from one data format to another data format. This might be useful for external users that wish to convert metadata on demand."})]}),(0,a.jsxs)(r.TableRow,{children:[(0,a.jsx)(r.TableCell,{children:"Ingestor Service"}),(0,a.jsx)(r.TableDescription,{children:"Service for populating the metadata catalogue at once by means of TTL EPOS-DCAT-AP files."})]})]})]}),(0,a.jsx)(r.Title,{children:"Messaging"}),(0,a.jsx)(r.AspectItem,{children:"The Routing Framework defines the routing of each message. The idea here is to embed the routing path into the message header in order to avoid messages going back to the Routing Framework at each step (for being routed to the next service)."}),(0,a.jsx)(r.AspectItem,{children:"This choice is motivated by the fact that a centralized management of the messaging (i.e., Routing Framework taking decisions at each step of the path) increases the amount of messaging in the queue with connecting the service to the queuing system, managing the connections; the generation and sending/receiving of messages."}),(0,a.jsxs)(r.AspectItem,{children:[(0,a.jsx)("strong",{children:"Routing Framework"}),": This framework decides which path a message must follow to aggregate the necessary information. This decision is made on the basis of a rule."]}),(0,a.jsx)(r.AspectItem,{children:"In order to implement this, once a request has been made on a service, the following happens:"}),(0,a.jsxs)(r.AspectItem,{children:[(0,a.jsx)("strong",{children:"Inside the service:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Once a request has been made to the service's RESTful API, the Routing Framework activates a request-specific rule."}),(0,a.jsx)("li",{children:"The Routing Framework, through the rule, deploys a path that includes the service required to aggregate the information."}),(0,a.jsx)("li",{children:"The Routing Framework creates the message to be sent to the Queuing System and puts the information about the routing path in the message header."})]})]}),(0,a.jsxs)(r.AspectItem,{children:[(0,a.jsx)("strong",{children:'On the queuing system, "across services":'}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"At each step, based on the route written in the header, the message is properly sent to the right queue (hence the right service)."}),(0,a.jsx)("li",{children:"In case of conditionals or decisions, the deployed route will contain the originator service, so that appropriate decisions can be made by the Routing Framework."})]})]}),(0,a.jsx)(r.Title,{children:"Message Header Example"}),(0,a.jsx)(n.A,{code:l,initialNightMode:e})]})}},9787:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(5043),r=s(2774),n=s(9);const a=n.Ay.pre`
  background-color: ${e=>e.isNightMode?"#2d2d2d":"#f5f5f5"};
  color: ${e=>e.isNightMode?"#ffffff":"#000000"};
  border: 1px solid ${e=>e.isNightMode?"#444":"#ddd"};
  padding: 10px;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-radius: 5px;
  position: relative; /* Set parent to relative */
`,o=n.Ay.button`
 background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute; /* Position the button absolutely */
  top: 10px; /* Adjust spacing from the top */
  right: 10px; /* Adjust spacing from the right */
  z-index: 10000; /* Ensure it appears above other elements */
  margin-top:12px;
`;var l=s(579);const c=r.wQq,d=r.V6H,h=e=>{let{code:t,initialNightMode:s=!1}=e;const[r,n]=(0,i.useState)(s);return(0,l.jsx)("div",{children:(0,l.jsxs)(a,{isNightMode:r,children:[(0,l.jsx)(o,{onClick:()=>{n(e=>!e)},"aria-label":"Toggle Night Mode",children:r?(0,l.jsx)(c,{color:"#ffdd57"}):(0,l.jsx)(d,{color:"#555"})}),t]})})}}}]);
//# sourceMappingURL=158.97059d2d.chunk.js.map