"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[82,761],{2082:function(e,n,i){i.r(n);i(2791);var t=i(6761),s=i(184);n.default=function(){return(0,s.jsxs)(t.SectionContainer,{children:[(0,s.jsx)(t.Title,{children:"Conceptual Services of the Architecture"}),(0,s.jsx)("img",{src:"./img/graphs/conceptual-design.png",alt:"Conceptual Design",style:{width:"100%",height:"auto",marginBottom:"20px"}}),(0,s.jsx)(t.Description,{children:"The driving concepts can be summarized by the following statements:"}),(0,s.jsxs)(t.BulletList,{children:[(0,s.jsx)("li",{children:"Each of the Services is supposed to capture a well-defined functionality."}),(0,s.jsx)("li",{children:"Services interaction is guaranteed by one main service, namely the queueing system."}),(0,s.jsx)("li",{children:"Services interact through message exchanges."}),(0,s.jsx)("li",{children:'A main "EPOS API Gateway" service ensures interaction between the system and external users (humans or machines).'}),(0,s.jsx)("li",{children:"Services outside the ICS-C system boundary are external systems with which the ICS-C system is supposed to communicate and interoperate (AAI manager, ICS-D, TCS service)."}),(0,s.jsx)("li",{children:"Services in the blue squares implement functionalities required by the user and actionable by means of RESTful APIs (proxied by the EPOS API Gateway)."}),(0,s.jsx)("li",{children:"Currently, the following main functionalities emerged from the user requirements, here represented as RESTful APIs endpoints:"})]}),(0,s.jsxs)(t.ServiceTable,{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)(t.TableHeader,{children:"Service Name"}),(0,s.jsx)(t.TableHeader,{children:"Endpoint"}),(0,s.jsx)(t.TableHeader,{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)(t.TableRow,{children:[(0,s.jsx)(t.TableCell,{children:"Resources Service"}),(0,s.jsx)(t.TableCell,{children:"/api/resources-service/v1/"}),(0,s.jsx)(t.TableCell,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,s.jsxs)(t.TableRow,{children:[(0,s.jsx)(t.TableCell,{children:"External Access Service"}),(0,s.jsx)(t.TableCell,{children:"/api/external-access-service/v1/"}),(0,s.jsx)(t.TableCell,{children:"Service for executing external services (from TCS)"})]}),(0,s.jsxs)(t.TableRow,{children:[(0,s.jsx)(t.TableCell,{children:"Backoffice Service"}),(0,s.jsx)(t.TableCell,{children:"/api/backoffice-service/v1/"}),(0,s.jsx)(t.TableCell,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,s.jsx)(t.Description,{children:'Services in the red squares implement "support" functionalities, that is to say functionalities needed by the system internally. Although the converter is supposed to be an internal "support" service, this may implement Web-APIs to provide an additional service to end users.'}),(0,s.jsx)(t.Title,{children:"Data Elements"}),(0,s.jsxs)(t.BulletList,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Metadata"}),': representing the "scientific metadata" that enables the system to manage the interaction with the TCS, and is mostly provided by the communities.']}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"System data"}),": representing data needed by the users of the ICS-C system that should persist after the end of the session. It includes, for instance, information about workspaces and may include workflow information."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"GRDB data"}),': this represents the metadata currently stored in the Granularity Database, and partially overlaps with the "metadata" service.']})]}),(0,s.jsx)(t.Description,{children:"The three data elements above represent the data that the ICS-C system is required to manage. Such data is intrinsically related and requires referential integrity."})]})}},6761:function(e,n,i){i.r(n),i.d(n,{BulletList:function(){return j},Description:function(){return m},SectionContainer:function(){return p},ServiceTable:function(){return x},TableCell:function(){return y},TableHeader:function(){return b},TableRow:function(){return g},Title:function(){return f}});var t,s,r,a,l,c,o,d,h=i(168),u=i(1191),p=u.ZP.div(t||(t=(0,h.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n"]))),f=u.ZP.h1(s||(s=(0,h.Z)(['\n   margin: 1.5rem 0 2rem 0;\n  font-size:32px;\n  font-family: "Lato", "OpenSans", sans-serif;\n  color:  #152c15 ;\n']))),m=u.ZP.p(r||(r=(0,h.Z)(['\n padding: 10px;\n  text-align: left;\n  margin: 1.5rem 0 2rem 0;\n font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n']))),x=u.ZP.table(a||(a=(0,h.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 40px;\n"]))),b=u.ZP.th(l||(l=(0,h.Z)(['\n padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  background-color: #f2f2f2;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:18px;\n']))),g=u.ZP.tr(c||(c=(0,h.Z)(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"]))),y=u.ZP.td(o||(o=(0,h.Z)(['\n  padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n']))),j=u.ZP.ul(d||(d=(0,h.Z)(['\n  margin: 10px 0;\n  padding-left: 20px;\n  list-style-type: disc;\n\n  li {\n  margin: 5px 0;\n  font-size: 16px;\n  text-align: left;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  }\n'])))}}]);
//# sourceMappingURL=82.bfc4aa27.chunk.js.map