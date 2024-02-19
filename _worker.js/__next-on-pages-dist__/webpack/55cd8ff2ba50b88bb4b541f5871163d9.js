var I=(f,a,s)=>{"use strict";s.d(a,{Z:()=>k});var e=s(67197),d=s(5924),o=s(96765),t=s(27751),r=s(4164),i=s(87296),h=s(98938),m=s(65903),u=s(23912),n=s(56636),j=s(43948),b=s(75939);let U=b.ZP.div.withConfig({componentId:"sc-c772263e-0"})`
  background: ${(0,j.gh)("colors.secondary.main")};
  color: white;
  height: 40px;
  font-size: 12px;

  .topbar-left {
    .logo {
      display: none;
      img {
        display: block;
        height: 36px;
      }
    }
    span {
      margin-left: 10px;
    }
    @media only screen and (max-width: 900px) {
      .logo {
        display: block;
      }
      *:not(.logo) {
        display: none;
      }
    }
  }

  .topbar-right {
    .link {
      padding-right: 30px;
      color: white;
    }
    .dropdown-handler {
      cursor: pointer;
      img {
        height: 14px;
        border-radius: 4px;
      }
      span {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    @media only screen and (max-width: 900px) {
      .link {
        display: none;
      }
    }
  }
`,p=[{title:"EN",imgUrl:"/assets/images/flags/usa.png"},{title:"BN",imgUrl:"/assets/images/flags/bd.png"},{title:"HN",imgUrl:"/assets/images/flags/in.png"}],x=[{title:"USD",imgUrl:"/assets/images/flags/usa.png"},{title:"EUR",imgUrl:"/assets/images/flags/uk.png"},{title:"BDT",imgUrl:"/assets/images/flags/bd.png"},{title:"INR",imgUrl:"/assets/images/flags/in.png"}],k=()=>{let[g,y]=(0,d.useState)(x[0]),[c,N]=(0,d.useState)(p[0]),Z=l=>()=>y(l),w=l=>()=>N(l);return(0,d.useEffect)(()=>{},[]),(0,e.jsx)(U,{children:(0,e.jsxs)(u.default,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%",children:[(0,e.jsxs)(i.default,{className:"topbar-left",children:[(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:"/assets/images/logo.svg",alt:"logo"})}),(0,e.jsxs)(i.default,{alignItems:"center",children:[(0,e.jsx)(r.default,{size:"14px",children:"phone-call"}),(0,e.jsx)("span",{children:"+88012 3456 7894"})]}),(0,e.jsxs)(i.default,{alignItems:"center",ml:"20px",children:[(0,e.jsx)(r.default,{size:"14px",children:"mail"}),(0,e.jsx)("span",{children:"support@ui-lib.com"})]})]}),(0,e.jsxs)(i.default,{className:"topbar-right",alignItems:"center",children:[(0,e.jsx)(h.Z,{className:"link",href:"/",children:'Theme FAQ"s'}),(0,e.jsx)(h.Z,{className:"link",href:"/",children:"Need Help?"}),(0,e.jsx)(o.Z,{direction:"right",handler:(0,e.jsxs)(i.default,{className:"dropdown-handler",alignItems:"center",height:"40px",mr:"1.25rem",children:[(0,e.jsx)(t.Z,{src:c.imgUrl,alt:c.title}),(0,e.jsx)(n.Small,{fontWeight:"600",children:c.title}),(0,e.jsx)(r.default,{size:"1rem",children:"chevron-down"})]}),children:p.map(l=>(0,e.jsxs)(m.Z,{onClick:w(l),children:[(0,e.jsx)(t.Z,{src:l.imgUrl,borderRadius:"2px",mr:"0.5rem",alt:l.title}),(0,e.jsx)(n.Small,{fontWeight:"600",children:l.title})]},l.title))}),(0,e.jsx)(o.Z,{direction:"right",handler:(0,e.jsxs)(i.default,{className:"dropdown-handler",alignItems:"center",height:"40px",children:[(0,e.jsx)(t.Z,{src:g.imgUrl,alt:g.title}),(0,e.jsx)(n.Small,{fontWeight:"600",children:g.title}),(0,e.jsx)(r.default,{size:"1rem",children:"chevron-down"})]}),children:x.map(l=>(0,e.jsxs)(m.Z,{onClick:Z(l),children:[(0,e.jsx)(t.Z,{src:l.imgUrl,borderRadius:"2px",mr:"0.5rem",alt:l.title}),(0,e.jsx)(n.Small,{fontWeight:"600",children:l.title})]},l.title))})]})]})})}},v=(f,a,s)=>{"use strict";s.d(a,{g:()=>e.default});var e=s(88283);s(22369)};export{v as __chunk_26852,I as __chunk_86767};
