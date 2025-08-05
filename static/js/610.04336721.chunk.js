"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[68,610],{3068:(e,i,r)=>{r.r(i),r.d(i,{Header:()=>s,MainHeader:()=>o,Paragraph:()=>l,Section:()=>t,SectionHeader:()=>a});var n=r(9);const t=n.Ay.div`
  margin-bottom: 30px;
`,o=n.Ay.h1`
  font-size: 32px;
  margin: 2rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,s=n.Ay.h1`
  font-size: 32px;
  margin: 7rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
  text-align:center;
`,a=n.Ay.h1`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-family: "Lato", "OpenSans", sans-serif;
  color:  #152c15 ;
`,l=n.Ay.p`
 font-size:16px;
 margin: 1rem 0 2rem 0;
 font-family: "OpenSans", sans-serif;
 color: black;
`},6610:(e,i,r)=>{r.r(i),r.d(i,{default:()=>x});var n=r(5043),t=r(3068),o=r(9);const s=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  padding: 16px;
  margin: 16px;
  background-color: #fff;
  text-align: center;
  
`,a=(o.Ay.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 16px;
   border-radius: 50%; 
    border: 1px solid #ddd;
`,o.Ay.h3`
  font-size: 1.5em;
  margin: 8px 0;
  font-weight: bold;
  color:black;
`),l=o.Ay.p`
  font-size: 1.3em;
  color: #457945;;
  font-weight: bold;
`,c=o.Ay.p`
  font-size: 1em;
  color: black;
`,d=(0,o.Ay)("div")`
  width: 130px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;var h=r(1424),p=r(579);const f=e=>{let{src:i,alt:r="Profile image",width:n=80,height:t=80}=e;return(0,p.jsx)("img",{src:i,alt:r,width:n,height:t,style:{borderRadius:"50%",objectFit:"cover",marginBottom:"16px"}})},g=e=>{let{name:i,surname:r,image:n,role:t,src:o,width:g="80px",height:m="80px",LinkldnHref:x,GithubHref:u,GitLabHref:b,intro:v}=e;return(0,p.jsxs)(s,{children:[(0,p.jsx)(f,{src:n,alt:i,width:120,height:120}),(0,p.jsxs)(a,{children:[i," ",r]}),(0,p.jsx)(l,{children:t}),(0,p.jsx)(c,{children:v}),(0,p.jsxs)(d,{children:[x&&(0,p.jsx)(h.A,{href:x,src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"}),u&&(0,p.jsx)(h.A,{href:u,src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}),b&&(0,p.jsx)(h.A,{href:b,src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"})]})]})},m=(0,n.lazy)(()=>Promise.resolve().then(r.bind(r,1766))),x=()=>{const[e,i]=(0,n.useState)([]);(0,n.useEffect)(()=>{!async function(){try{const r=await fetch("https://epos-ci.brgm.fr/api/v4/projects/epos-public%2Fissuetracker/issues/19500");if(!r.ok)throw new Error("Failed to fetch people data");const n=await r.json();let t=[];try{const e=JSON.parse(n.description);Array.isArray(e)?t=e:console.error("Parsed data is not an array:",e)}catch(e){console.error("Failed to parse people data from description:",e)}i(t),console.log("final data",t)}catch(r){console.error("Error fetching people data:",r)}}()},[]);const r=((e,i)=>{const r=[];for(let n=0;n<e.length;n+=i)r.push(e.slice(n,n+i));return r})(e,4);return console.log("people ",e),(0,p.jsxs)(m,{children:[(0,p.jsxs)(t.Section,{children:[(0,p.jsx)(t.MainHeader,{children:"EPOS Open Source Contribution"}),(0,p.jsx)(t.Paragraph,{children:"EPOS open source projects thrive on collaboration and the collective efforts of diverse individuals from around the world. Contributors bring their unique skills, perspectives, and expertise to create , build, improve, and maintain software that benefits the broader community. These contributions can range from writing code, fixing bugs, and improving documentation to designing user interfaces, testing features, and providing feedback. By participating in EPOS open source, people not only help create accessible, innovative, and sustainable solutions but also gain valuable experience, enhance their technical skills, and build a global network of like-minded professionals. Together, they foster a spirit of knowledge sharing and innovation that drives the EPOS open source movement forward."})]}),(0,p.jsxs)(t.Section,{children:[(0,p.jsx)(t.Header,{children:"Meet The Team"}),(0,p.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:r.map((e,i)=>(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"},children:e.map((e,r)=>(0,p.jsx)(g,{name:e.name,surname:e.surname,image:e.image,role:e.role,GithubHref:e.GithubHref,GitLabHref:e.GitLabHref,LinkldnHref:e.LinkldnHref,intro:e.intro},`${i}-${r}`))}),i<r.length-1&&(0,p.jsx)("hr",{style:{border:"1px solid #ddd",width:"100%"}})]},i))})]})]})}}}]);
//# sourceMappingURL=610.04336721.chunk.js.map