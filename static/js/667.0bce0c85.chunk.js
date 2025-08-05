"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[667],{7667:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var s=r(5043);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},o=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=await fetch(a.origin+e,{method:"POST",headers:r,body:t}),n=await s.text(),o=new i(s.status,n);if(s.ok)return o;throw o},l=(e,t,r)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!==typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new i(451,"Unavailable For Headless Browser"),h=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const r=(s=t,i=e.watchVariable,s instanceof FormData?s.get(i):s[i]);var s,i;return"string"===typeof r&&e.list.includes(r)},m=()=>new i(403,"Forbidden"),u=async(e,t,r)=>{if(!t.throttle||!r)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const s=t.id||e,i=await(async(e,t,r)=>{const s=Number(await r.get(e)||0);return t-Date.now()+s})(s,t.throttle,r);return i>0||(await r.set(s,Date.now().toString()),!1)},p=()=>new i(429,"Too Many Requests"),g=async(e,t,r,s)=>{const i=n(s),g=i.publicKey||a.publicKey,x=i.blockHeadless||a.blockHeadless,b=a.storageProvider||i.storageProvider,y={...a.blockList,...i.blockList},f={...a.limitRate,...i.limitRate};if(x&&d(navigator))return Promise.reject(c());const v=(e=>"string"===typeof e?document.querySelector(e):e)(r);l(g,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(v);const w=new FormData(v);return h(y,w)?Promise.reject(m()):await u(location.pathname,f,b)?Promise.reject(p()):(w.append("lib_version","4.4.1"),w.append("service_id",e),w.append("template_id",t),w.append("user_id",g),o("/api/v1.0/email/send-form",w))};var x=r(2273),b=r(4647);var y=r(9);const f=(0,y.Ay)("div")`
  padding: 5rem 0;
  height: auto; /* Adjusts height based on content */

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
      @media (min-width: 2440px) {
    
  padding: 5rem 0;
   height: auto; /* Adjusts height based on content */

`,v=(0,y.Ay)("form")`
  width: 100%;
  max-width: 520px;
  border: 0.1px solid black;
  padding: 30px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
      @media (min-width: 2440px) {
    max-width: 700px;
    height: 500px;
    margin-right:110px;
}
`,w=((0,y.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,(0,y.Ay)("label")`
  font-size:16px;
  font-weight:bold;
  margin-top : 10px;
`),j=((0,y.Ay)("div")`
  text-align: center;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,(0,y.Ay)("input")`
border: 0.1px solid black;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 10px;
`),k=(0,y.Ay)("input")`
border: 0.1px solid black;
margin-top: 20px;
cursor: pointer;
border-radius: 30px;
 &:hover{
    color: white;
    text-underline-position: under;
    background:   #457945;
}

`,S=(0,y.Ay)("p")`
 font-family: "OpenSans", sans-serif;
  color: black;
  font-size:20px;
`,_=(0,y.Ay)("div")`
  position: relative;
  max-width: 700px;
`,A=(0,y.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`,T=(0,y.Ay)("h1")`
margin: 1.5rem 0 2rem 0;
font-size:32px;
font-family: "Lato", "OpenSans", sans-serif;
color: black;
&:hover, &:focus {
  color:  #152c15 ;
}
`;var q=r(579);const P=e=>{let{title:t,content:r}=e;return(0,q.jsxs)(_,{children:[(0,q.jsx)(T,{children:"Contact Us"}),(0,q.jsx)(A,{children:(0,q.jsx)(S,{children:"Have questions, feedback, or suggestions? We're here to help! Reach out to the team behind EPOS open-source project!"})})]})};var C=r(3614);const D=e=>{const t={};return e.user_name||(t.user_name="Name is required"),e.user_email?/\S+@\S+\.\S+/.test(e.user_email)||(t.user_email="Email is invalid"):t.user_email="Email is required",e.message||(t.message="Message is required"),t};var L=r(5484);const R=()=>{const e=(0,s.useRef)(null),{values:t,errors:r,handleChange:i,handleSubmit:a}=(e=>{const[t,r]=s.useState({values:{},errors:{}});return{values:t.values,errors:t.errors,handleChange:e=>{const{name:t,value:s}=e.target;r(e=>({...e,values:{...e.values,[t]:s},errors:{...e.errors,[t]:""}}))},handleSubmit:async(s,i)=>{s.preventDefault();const a=e(t.values);r(e=>({...e,errors:a})),0===Object.keys(a).length&&(await i(),r({values:{},errors:{}}))}}})(D),[n,o]=(0,s.useState)(!1),l=async()=>{if(e.current)try{await g("service_rooidig","template_h9q5ysi",e.current,{publicKey:"2SdTrWiRdpJxdw5uT"}),console.log("SUCCESS!"),e.current.reset(),o(!0)}catch(t){console.error("FAILED...",t.text)}};return(0,q.jsxs)(f,{children:[(0,q.jsxs)(x.A,{justify:"space-between",align:"middle",children:[(0,q.jsx)(b.A,{lg:12,md:11,sm:24,xs:24,children:(0,q.jsx)(C.q7,{direction:"left",triggerOnce:!0,children:(0,q.jsx)(P,{title:"",content:""})})}),(0,q.jsxs)(v,{ref:e,onSubmit:e=>{a(e,l)},children:[(0,q.jsxs)("div",{children:[(0,q.jsx)(w,{children:"Name"}),(0,q.jsx)(j,{type:"text",name:"user_name",value:t.user_name||"",onChange:i}),r.user_name&&(0,q.jsx)("span",{children:r.user_name})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)(w,{children:"Email"}),(0,q.jsx)(j,{type:"email",name:"user_email",value:t.user_email||"",onChange:i}),r.user_email&&(0,q.jsx)("span",{children:r.user_email})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)(w,{children:"Message"}),(0,q.jsxs)(b.A,{span:24,children:[(0,q.jsx)("textarea",{name:"message",value:t.message||"",onChange:i}),r.message&&(0,q.jsx)("span",{children:r.message})]})]}),(0,q.jsx)("div",{children:(0,q.jsx)(k,{type:"submit",value:"Submit"})})]})]}),(0,q.jsxs)(L.A,{trigger:n,setTrigger:o,children:[(0,q.jsx)("h3",{children:"Thank you!"}),(0,q.jsx)("p",{children:"Your message has been sent successfully."})]})]})}}}]);
//# sourceMappingURL=667.0bce0c85.chunk.js.map