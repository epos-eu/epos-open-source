"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[823,614],{5669:function(e,n,t){t.d(n,{Z:function(){return g}});var r,i,s=t(9439),o=t(2791),a=t(3071),c=t(168),l=t(1191),d=l.ZP.pre(r||(r=(0,c.Z)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  padding: 10px;\n  overflow: auto;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  border-radius: 5px;\n  position: relative; /* Set parent to relative */\n"])),(function(e){return e.isNightMode?"#2d2d2d":"#f5f5f5"}),(function(e){return e.isNightMode?"#ffffff":"#000000"}),(function(e){return e.isNightMode?"#444":"#ddd"})),h=l.ZP.button(i||(i=(0,c.Z)(["\n background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  position: absolute; /* Position the button absolutely */\n  top: 10px; /* Adjust spacing from the top */\n  right: 10px; /* Adjust spacing from the right */\n  z-index: 10000; /* Ensure it appears above other elements */\n  margin-top:12px;\n"]))),p=t(184),g=function(e){var n=e.code,t=e.initialNightMode,r=void 0!==t&&t,i=(0,o.useState)(r),c=(0,s.Z)(i,2),l=c[0],g=c[1];return(0,p.jsx)("div",{children:(0,p.jsxs)(d,{isNightMode:l,children:[(0,p.jsx)(h,{onClick:function(){g((function(e){return!e}))},"aria-label":"Toggle Night Mode",children:l?(0,p.jsx)(a.Mei,{color:"#ffdd57"}):(0,p.jsx)(a.TLr,{color:"#555"})}),n]})})}},6823:function(e,n,t){t.r(n);var r=t(9439),i=t(2791),s=t(9614),o=t(5669),a=t(184),c=(0,i.lazy)((function(){return Promise.resolve().then(t.bind(t,2478))})),l='\n2023-03-09 14:08:15:314: Message published\n\nNode:         rabbit@netrabbit-server-0.netrabbit-nodes.test\nConnection:   10.1.5.47:34160 -> 10.1.5.40:5672\nVirtual host: changeme\nUser:         changeme\nChannel:      5\nExchange:     metadataService\nRouting keys: [<<"resources.get.test.api.resources-service.v1.resources.search.fetch">>]\nRouted queues: [<<"fetch">>]\nProperties:   [{<<"timestamp">>,signedint,1678370895},\n               {<<"reply_to">>,longstr,<<"web-api">>},\n               {<<"correlation_id">>,longstr,<<"08122848-ebaf-15a6-34da-72b435d21c6e">>},\n               {<<"headers">>,table,\n                [{<<"x-request-id">>,longstr,<<"5cf17dc881b670c59b2345c8ec34a5c3">>},\n                 {<<"referer">>,longstr,<<"http://10.101.10.44/test/">>},\n                 {<<"epos_component-audit">>,array,[{longstr,<<"WEB_API">>}]},\n                 {<<"x-forwarded-proto">>,longstr,<<"http">>},\n                 {<<"accept-language">>,longstr,<<"it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7">>},\n                 {<<"cookie">>,longstr,\n                  <<"_pk_id.241.d8d2=248ff2c9c692d01c.1677067197.; _pk_ses.241.d8d2=1">>},\n                 {<<"kind">>,longstr,\n                  <<"get.test.api.resources-service.v1.resources.search">>},\n                 {<<"x-forwarded-port">>,longstr,<<"80">>},\n                 {<<"epos_operation-type">>,longstr,<<"get">>},\n                 {<<"accept">>,longstr,\n                  <<"application/json, text/plain, */*">>},\n                 {<<"epos_request-type">>,longstr,\n                  <<"test.api.resources-service.v1.resources.search">>},\n                 {<<"x-real-ip">>,longstr,<<"192.168.65.4">>},\n                 {<<"x-forwarded-scheme">>,longstr,<<"http">>},\n                 {<<"x-forwarded-host">>,longstr,<<"10.101.10.44">>},\n                 {<<"epos_type-of-current-payload">>,longstr,<<"plain-text">>},\n                 {<<"host">>,longstr,<<"10.101.10.44">>},\n                 {<<"connection">>,longstr,<<"upgrade">>},\n                 {<<"epos_ttl-in-processor">>,long,10000},\n                 {<<"x-scheme">>,longstr,<<"http">>},\n                 {<<"accept-encoding">>,longstr,<<"gzip, deflate">>},\n                 {<<"user-agent">>,longstr,\n                  <<"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36">>}]}]\n';n.default=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0];n[1];return o.Z,(0,a.jsxs)(c,{children:[(0,a.jsx)(s.Title,{children:"Architecture Implementation"}),(0,a.jsx)(s.Description,{children:"The diagram in this section represents the implementation of the conceptual architecture."}),(0,a.jsx)(s.Image,{src:"./epos-open-source/img/graphs/architecture-diagram.png",alt:"Architecture Diagram"}),(0,a.jsxs)(s.AspectList,{children:[(0,a.jsxs)(s.AspectItem,{children:["Each of the ",(0,a.jsx)("strong",{children:"services"})," in the conceptual design is rendered as one or more ",(0,a.jsx)("strong",{children:"services"})," in the Technical Design."]}),(0,a.jsx)(s.AspectItem,{children:"Blue services represent functionalities that implement requests via specific RESTful API endpoints:"})]}),(0,a.jsxs)(s.ServiceTable,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableHeader,{children:"Service Name"}),(0,a.jsx)(s.TableHeader,{children:"Endpoint"}),(0,a.jsx)(s.TableHeader,{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableCell,{children:"Resources Service"}),(0,a.jsx)(s.TableCell,{children:"/api/resources-service/v1/"}),(0,a.jsx)(s.TableDescription,{children:"Service for accessing assets stored in the ICS-C catalogue"})]}),(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableCell,{children:"External Access Service"}),(0,a.jsx)(s.TableCell,{children:"/api/external-access-service/v1/"}),(0,a.jsx)(s.TableDescription,{children:"Service for executing external services (from TCS)"})]}),(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableCell,{children:"Backoffice Service"}),(0,a.jsx)(s.TableCell,{children:"/api/backoffice-service/v1/"}),(0,a.jsx)(s.TableDescription,{children:"Service for managing metadata from the backoffice application"})]})]})]}),(0,a.jsx)(s.AspectItem,{children:"In addition, the following services have been supplied with RESTful APIs:"}),(0,a.jsxs)(s.ServiceTable,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableHeader,{children:"Service Name"}),(0,a.jsx)(s.TableHeader,{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableCell,{children:"Converter Service"}),(0,a.jsx)(s.TableDescription,{children:"Service to convert from one data format to another data format. This might be useful for external users that wish to convert metadata on demand."})]}),(0,a.jsxs)(s.TableRow,{children:[(0,a.jsx)(s.TableCell,{children:"Ingestor Service"}),(0,a.jsx)(s.TableDescription,{children:"Service for populating the metadata catalogue at once by means of TTL EPOS-DCAT-AP files."})]})]})]}),(0,a.jsx)(s.Title,{children:"Messaging"}),(0,a.jsx)(s.AspectItem,{children:"The Routing Framework defines the routing of each message. The idea here is to embed the routing path into the message header in order to avoid messages going back to the Routing Framework at each step (for being routed to the next service)."}),(0,a.jsx)(s.AspectItem,{children:"This choice is motivated by the fact that a centralized management of the messaging (i.e., Routing Framework taking decisions at each step of the path) increases the amount of messaging in the queue with connecting the service to the queuing system, managing the connections; the generation and sending/receiving of messages."}),(0,a.jsxs)(s.AspectItem,{children:[(0,a.jsx)("strong",{children:"Routing Framework"}),": This framework decides which path a message must follow to aggregate the necessary information. This decision is made on the basis of a rule."]}),(0,a.jsx)(s.AspectItem,{children:"In order to implement this, once a request has been made on a service, the following happens:"}),(0,a.jsxs)(s.AspectItem,{children:[(0,a.jsx)("strong",{children:"Inside the service:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Once a request has been made to the service's RESTful API, the Routing Framework activates a request-specific rule."}),(0,a.jsx)("li",{children:"The Routing Framework, through the rule, deploys a path that includes the service required to aggregate the information."}),(0,a.jsx)("li",{children:"The Routing Framework creates the message to be sent to the Queuing System and puts the information about the routing path in the message header."})]})]}),(0,a.jsxs)(s.AspectItem,{children:[(0,a.jsx)("strong",{children:'On the queuing system, "across services":'}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"At each step, based on the route written in the header, the message is properly sent to the right queue (hence the right service)."}),(0,a.jsx)("li",{children:"In case of conditionals or decisions, the deployed route will contain the originator service, so that appropriate decisions can be made by the Routing Framework."})]})]}),(0,a.jsx)(s.Title,{children:"Message Header Example"}),(0,a.jsx)(o.Z,{code:l,initialNightMode:t})]})}},9614:function(e,n,t){t.r(n),t.d(n,{AspectItem:function(){return j},AspectList:function(){return b},CodeBlock:function(){return Z},Description:function(){return y},Image:function(){return x},ServiceTable:function(){return v},TableCell:function(){return k},TableDescription:function(){return S},TableHeader:function(){return T},TableRow:function(){return w},Title:function(){return m}});var r,i,s,o,a,c,l,d,h,p,g,u=t(168),f=t(1191),m=f.ZP.h1(r||(r=(0,u.Z)(['\n  margin: 1.5rem 0 2rem 0;\n  font-size:32px;\n  font-family: "Lato", "OpenSans", sans-serif;\n  color: #152c15;\n']))),x=f.ZP.img(i||(i=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n"]))),b=f.ZP.ul(s||(s=(0,u.Z)(['\n    margin: 5px 0;\n  font-size: 16px;\n  text-align: left;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n']))),j=f.ZP.li(o||(o=(0,u.Z)(['\n    margin: 5px 0;\n  font-size: 16px;\n  text-align: left;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n']))),v=f.ZP.table(a||(a=(0,u.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 40px;\n"]))),T=f.ZP.th(c||(c=(0,u.Z)(['\n  padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  background-color: #f2f2f2;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:18px;\n']))),w=f.ZP.tr(l||(l=(0,u.Z)(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"]))),k=f.ZP.td(d||(d=(0,u.Z)(['\n  padding: 10px;\n  text-align: left;\n  border: 1px solid #ddd;\n  margin: 1.5rem 0 2rem 0;\n  font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n']))),S=f.ZP.td(h||(h=(0,u.Z)(["\n  padding: 12px;\n  border: 1px solid #ddd;\n  vertical-align: top;\n"]))),Z=f.ZP.pre(p||(p=(0,u.Z)(["\n   backgroundColor: isNightMode ? '#2d2d2d' : '#f5f5f5',\n   color: isNightMode ? '#ffffff' : '#000000',\n    borderColor: isNightMode ? '#444' : '#ddd',\n"]))),y=f.ZP.p(g||(g=(0,u.Z)(['\n padding: 10px;\n  text-align: left;\n  margin: 1.5rem 0 2rem 0;\n font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:16px;\n'])))}}]);
//# sourceMappingURL=823.3faa3436.chunk.js.map