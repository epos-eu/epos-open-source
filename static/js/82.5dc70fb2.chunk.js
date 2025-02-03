"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[82,761],{2082:function(e,n,i){i.r(n);var t=i(2791),s=i(6761),r=i(184),a=(0,t.lazy)((function(){return Promise.resolve().then(i.bind(i,2478))}));n.default=function(){return(0,r.jsxs)(a,{children:[(0,r.jsx)(s.Title,{children:"Conceptual Services of the Architecture"}),(0,r.jsx)("img",{src:"./epos-open-source/img/graphs/conceptual-design.png",alt:"Conceptual Design",style:{width:"100%",height:"auto",marginBottom:"20px"}}),(0,r.jsx)(s.Description,{children:"The driving concepts can be summarized by the following statements:"}),(0,r.jsxs)(s.BulletList,{children:[(0,r.jsx)("li",{children:"Each of the Services is supposed to capture a well-defined functionality."}),(0,r.jsx)("li",{children:"Services interaction is guaranteed by one main service, namely the queueing system."}),(0,r.jsx)("li",{children:"Services interact through message exchanges."}),(0,r.jsx)("li",{children:'A main "EPOS API Gateway" service ensures interaction between the system and external users (humans or machines).'}),(0,r.jsx)("li",{children:"Services outside the ICS-C system boundary are external systems with which the ICS-C system is supposed to communicate and interoperate (AAI manager, ICS-D, TCS service)."}),(0,r.jsx)("li",{children:"Services in the blue squares implement functionalities required by the user and actionable by means of RESTful APIs (proxied by the EPOS API Gateway)."}),(0,r.jsx)("li",{children:"Currently, the following main functionalities emerged from the user requirements, here represented as RESTful APIs endpoints:"})]}),(0,r.jsxs)(s.ServiceTable,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(s.TableHeader,{children:"Service Name"}),(0,r.jsx)(s.TableHeader,{children:"Endpoint"}),(0,r.jsx)(s.TableHeader,{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)(s.TableRow,{children:[(0,r.jsx)(s.TableCell,{children:"Resources Service"}),(0,r.jsx)(s.TableCell,{children:"/api/resources-service/v1/"}),(0,r.jsx)(s.TableCell,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,r.jsxs)(s.TableRow,{children:[(0,r.jsx)(s.TableCell,{children:"External Access Service"}),(0,r.jsx)(s.TableCell,{children:"/api/external-access-service/v1/"}),(0,r.jsx)(s.TableCell,{children:"Service for executing external services (from TCS)"})]}),(0,r.jsxs)(s.TableRow,{children:[(0,r.jsx)(s.TableCell,{children:"Backoffice Service"}),(0,r.jsx)(s.TableCell,{children:"/api/backoffice-service/v1/"}),(0,r.jsx)(s.TableCell,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,r.jsx)(s.Description,{children:'Services in the red squares implement "support" functionalities, that is to say functionalities needed by the system internally. Although the converter is supposed to be an internal "support" service, this may implement Web-APIs to provide an additional service to end users.'}),(0,r.jsx)(s.Title,{children:"Data Elements"}),(0,r.jsxs)(s.BulletList,{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Metadata"}),': representing the "scientific metadata" that enables the system to manage the interaction with the TCS, and is mostly provided by the communities.']}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"System data"}),": representing data needed by the users of the ICS-C system that should persist after the end of the session. It includes, for instance, information about workspaces and may include workflow information."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"GRDB data"}),': this represents the metadata currently stored in the Granularity Database, and partially overlaps with the "metadata" service.']})]}),(0,r.jsx)(s.Description,{children:"The three data elements above represent the data that the ICS-C system is required to manage. Such data is intrinsically related and requires referential integrity."})]})}},6761:function(e,n,i){i.r(n),i.d(n,{BulletList:function(){return g},Description:function(){return p},ServiceTable:function(){return m},TableCell:function(){return b},TableHeader:function(){return f},TableRow:function(){return x},Title:function(){return u}});var t,s,r,a,l,c,o,d=i(168),h=i(1191),u=h.ZP.h1(t||(t=(0,d.Z)(['\n  margin: 1.5rem 0 2rem 0;\n  font-size:32px;\n  font-family: "Lato", "OpenSans", sans-serif;\n  color:  #152c15 ;\n']))),p=h.ZP.p(s||(s=(0,d.Z)(['\n padding: 10px;\n  text-align: left;\n  margin: 1.5rem 0 2rem 0;\n font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n']))),m=h.ZP.table(r||(r=(0,d.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 40px;\n"]))),f=h.ZP.th(a||(a=(0,d.Z)(['\n padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  background-color: #f2f2f2;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:18px;\n']))),x=h.ZP.tr(l||(l=(0,d.Z)(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"]))),b=h.ZP.td(c||(c=(0,d.Z)(['\n  padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n']))),g=h.ZP.ul(o||(o=(0,d.Z)(['\n  margin: 10px 0;\n  padding-left: 20px;\n  list-style-type: disc;\n\n  li {\n  margin: 5px 0;\n  font-size: 16px;\n  text-align: left;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  }\n'])))}}]);
//# sourceMappingURL=82.5dc70fb2.chunk.js.map