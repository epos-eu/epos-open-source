"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[195],{1195:function(e,r,t){t.r(r),t.d(r,{default:function(){return ae}});var n,i,a,s,o,u,c,l,p,d,m,h=t(4165),f=t(5861),b=t(9439),x=t(2791),v=t(3144),g=t(5671),Z=(0,v.Z)((function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";(0,g.Z)(this,e),this.status=r,this.text=t})),w={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:function(){if("undefined"!==typeof localStorage)return{get:function(e){return Promise.resolve(localStorage.getItem(e))},set:function(e,r){return Promise.resolve(localStorage.setItem(e,r))},remove:function(e){return Promise.resolve(localStorage.removeItem(e))}}}()},k=function(e){return e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{}},y=t(1413),j=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r,t){var n,i,a,s,o=arguments;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},e.next=3,fetch(w.origin+r,{method:"POST",headers:n,body:t});case 3:return i=e.sent,e.next=6,i.text();case 6:if(a=e.sent,s=new Z(i.status,a),!i.ok){e.next=10;break}return e.abrupt("return",s);case 10:throw s;case 11:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),P=function(e,r,t){if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||"string"!==typeof r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||"string"!==typeof t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},S=function(e){if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},_=function(e){return e.webdriver||!e.languages||0===e.languages.length},T=function(){return new Z(451,"Unavailable For Headless Browser")},R=function(e,r){if(function(e){var r;return!(null!==(r=e.list)&&void 0!==r&&r.length)||!e.watchVariable}(e))return!1;!function(e,r){if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof r)throw"The BlockList watchVariable has to be a string"}(e.list,e.watchVariable);var t,n,i=(t=r,n=e.watchVariable,t instanceof FormData?t.get(n):t[n]);return"string"===typeof i&&e.list.includes(i)},L=function(){return new Z(403,"Forbidden")},C=function(e,r){if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&"string"!==typeof r)throw"The LimitRate ID has to be a non-empty string"},q=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r,t,n){var i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,n.get(r);case 3:if(e.t1=e.sent,e.t1){e.next=6;break}e.t1=0;case 6:return e.t2=e.t1,i=(0,e.t0)(e.t2),e.abrupt("return",t-Date.now()+i);case 9:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),H=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r,t,n){var i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.throttle&&n){e.next=2;break}return e.abrupt("return",!1);case 2:return C(t.throttle,t.id),i=t.id||r,e.next=6,q(i,t.throttle,n);case 6:if(!(e.sent>0)){e.next=9;break}return e.abrupt("return",!0);case 9:return e.next=11,n.set(i,Date.now().toString());case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),O=function(){return new Z(429,"Too Many Requests")},D=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r,t,n,i){var a,s,o,u,c,l,p;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=k(i),s=a.publicKey||w.publicKey,o=a.blockHeadless||w.blockHeadless,u=a.storageProvider||w.storageProvider,c=(0,y.Z)((0,y.Z)({},w.blockList),a.blockList),l=(0,y.Z)((0,y.Z)({},w.limitRate),a.limitRate),!o||!_(navigator)){e.next=8;break}return e.abrupt("return",Promise.reject(T()));case 8:if(P(s,r,t),S(n),!n||!R(c,n)){e.next=12;break}return e.abrupt("return",Promise.reject(L()));case 12:return e.next=14,H(location.pathname,l,u);case 14:if(!e.sent){e.next=16;break}return e.abrupt("return",Promise.reject(O()));case 16:return p={lib_version:"4.4.1",user_id:s,service_id:r,template_id:t,template_params:n},e.abrupt("return",j("/api/v1.0/email/send",JSON.stringify(p),{"Content-type":"application/json"}));case 18:case"end":return e.stop()}}),e)})));return function(r,t,n,i){return e.apply(this,arguments)}}(),E=function(e){if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},F=function(e){return"string"===typeof e?document.querySelector(e):e},K=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r,t,n,i){var a,s,o,u,c,l,p,d;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=k(i),s=a.publicKey||w.publicKey,o=a.blockHeadless||w.blockHeadless,u=w.storageProvider||a.storageProvider,c=(0,y.Z)((0,y.Z)({},w.blockList),a.blockList),l=(0,y.Z)((0,y.Z)({},w.limitRate),a.limitRate),!o||!_(navigator)){e.next=8;break}return e.abrupt("return",Promise.reject(T()));case 8:if(p=F(n),P(s,r,t),E(p),d=new FormData(p),!R(c,d)){e.next=14;break}return e.abrupt("return",Promise.reject(L()));case 14:return e.next=16,H(location.pathname,l,u);case 16:if(!e.sent){e.next=18;break}return e.abrupt("return",Promise.reject(O()));case 18:return d.append("lib_version","4.4.1"),d.append("service_id",r),d.append("template_id",t),d.append("user_id",s),e.abrupt("return",j("/api/v1.0/email/send-form",d));case 23:case"end":return e.stop()}}),e)})));return function(r,t,n,i){return e.apply(this,arguments)}}(),V={init:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(e){var t=k(e);w.publicKey=t.publicKey,w.blockHeadless=t.blockHeadless,w.storageProvider=t.storageProvider,w.blockList=t.blockList,w.limitRate=t.limitRate,w.origin=t.origin||r}},send:D,sendForm:K,EmailJSResponseStatus:Z},I=t(8443),M=t(9603),N=t(4942),z=t(168),A=t(1191),B=(0,A.ZP)("div")(n||(n=(0,z.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),J=(0,A.ZP)("form")(i||(i=(0,z.Z)(["\n  width: 100%;\n  max-width: 520px;\n  border: 0.1px solid black;\n  padding: 30px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),U=((0,A.ZP)("span")(a||(a=(0,z.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),(0,A.ZP)("label")(s||(s=(0,z.Z)(["\n  font-size:16px;\n  font-weight:bold;\n  margin-top : 10px;\n"])))),W=((0,A.ZP)("div")(o||(o=(0,z.Z)(["\n  text-align: center;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),(0,A.ZP)("input")(u||(u=(0,z.Z)(["\nborder: 0.1px solid black;\nborder-radius: 10px;\nmargin-top: 10px;\nmargin-bottom: 10px;\n"])))),Y=(0,A.ZP)("input")(c||(c=(0,z.Z)(["\nborder: 0.1px solid black;\nmargin-top: 20px;\ncursor: pointer;\nborder-radius: 30px;\n &:hover{\n    color: white;\n    text-underline-position: under;\n    background:   #457945;\n}\n\n"]))),G=(0,A.ZP)("p")(l||(l=(0,z.Z)(['\n font-family: "OpenSans", sans-serif;\n  color: black;\n  font-size:20px;\n']))),Q=(0,A.ZP)("div")(p||(p=(0,z.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),X=(0,A.ZP)("div")(d||(d=(0,z.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),$=(0,A.ZP)("h1")(m||(m=(0,z.Z)(['\nmargin: 1.5rem 0 2rem 0;\nfont-size:32px;\nfont-family: "Lato", "OpenSans", sans-serif;\ncolor: black;\n&:hover, &:focus {\n  color:  #152c15 ;\n}\n']))),ee=t(184),re=function(e){e.title,e.content;return(0,ee.jsxs)(Q,{children:[(0,ee.jsx)($,{children:"Contact Us"}),(0,ee.jsx)(X,{children:(0,ee.jsx)(G,{children:"Have questions, feedback, or suggestions? We're here to help! Reach out to the team behind EPOS open-source project!"})})]})},te=t(1758),ne=function(e){var r={};return e.user_name||(r.user_name="Name is required"),e.user_email?/\S+@\S+\.\S+/.test(e.user_email)||(r.user_email="Email is invalid"):r.user_email="Email is required",e.message||(r.message="Message is required"),r},ie=t(779),ae=function(){var e=(0,x.useRef)(null),r=function(e){var r=x.useState({values:{},errors:{}}),t=(0,b.Z)(r,2),n=t[0],i=t[1],a=function(){var r=(0,f.Z)((0,h.Z)().mark((function r(t,a){var s;return(0,h.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),s=e(n.values),i((function(e){return(0,y.Z)((0,y.Z)({},e),{},{errors:s})})),0!==Object.keys(s).length){r.next=7;break}return r.next=6,a();case 6:i({values:{},errors:{}});case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}();return{values:n.values,errors:n.errors,handleChange:function(e){var r=e.target,t=r.name,n=r.value;i((function(e){return(0,y.Z)((0,y.Z)({},e),{},{values:(0,y.Z)((0,y.Z)({},e.values),{},(0,N.Z)({},t,n)),errors:(0,y.Z)((0,y.Z)({},e.errors),{},(0,N.Z)({},t,""))})}))},handleSubmit:a}}(ne),t=r.values,n=r.errors,i=r.handleChange,a=r.handleSubmit,s=(0,x.useState)(!1),o=(0,b.Z)(s,2),u=o[0],c=o[1],l=function(){var r=(0,f.Z)((0,h.Z)().mark((function r(){return(0,h.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.current){r.next=12;break}return r.prev=1,r.next=4,V.sendForm("service_rooidig","template_h9q5ysi",e.current,{publicKey:"2SdTrWiRdpJxdw5uT"});case 4:console.log("SUCCESS!"),e.current.reset(),c(!0),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("FAILED...",r.t0.text);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();return(0,ee.jsxs)(B,{children:[(0,ee.jsxs)(I.Z,{justify:"space-between",align:"middle",children:[(0,ee.jsx)(M.Z,{lg:12,md:11,sm:24,xs:24,children:(0,ee.jsx)(te.Mi,{direction:"left",triggerOnce:!0,children:(0,ee.jsx)(re,{title:"",content:""})})}),(0,ee.jsxs)(J,{ref:e,onSubmit:function(e){a(e,l)},children:[(0,ee.jsxs)("div",{children:[(0,ee.jsx)(U,{children:"Name"}),(0,ee.jsx)(W,{type:"text",name:"user_name",value:t.user_name||"",onChange:i}),n.user_name&&(0,ee.jsx)("span",{children:n.user_name})]}),(0,ee.jsxs)("div",{children:[(0,ee.jsx)(U,{children:"Email"}),(0,ee.jsx)(W,{type:"email",name:"user_email",value:t.user_email||"",onChange:i}),n.user_email&&(0,ee.jsx)("span",{children:n.user_email})]}),(0,ee.jsxs)("div",{children:[(0,ee.jsx)(U,{children:"Message"}),(0,ee.jsxs)(M.Z,{span:24,children:[(0,ee.jsx)("textarea",{name:"message",value:t.message||"",onChange:i}),n.message&&(0,ee.jsx)("span",{children:n.message})]})]}),(0,ee.jsx)("div",{children:(0,ee.jsx)(Y,{type:"submit",value:"Submit"})})]})]}),(0,ee.jsxs)(ie.Z,{trigger:u,setTrigger:c,children:[(0,ee.jsx)("h3",{children:"Thank you!"}),(0,ee.jsx)("p",{children:"Your message has been sent successfully."})]})]})}}}]);
//# sourceMappingURL=195.34a1d8c7.chunk.js.map