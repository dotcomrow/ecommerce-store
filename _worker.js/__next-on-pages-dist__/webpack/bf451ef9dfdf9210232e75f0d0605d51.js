var N=(b,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>f});var r=e(67197),c=e(23714),d=e(4164),h=e(87296),a=e(56636),m=e(36377),u=e(76774),p=e(23462);let f=({iconName:x,title:t,button:n})=>{let j=(0,m.Z)(),l=j<1025;return(0,r.jsxs)(c.default,{mb:"1.5rem",mt:"-1rem",children:[(0,r.jsxs)(h.default,{justifyContent:"space-between",alignItems:"center",mt:"1rem",children:[(0,r.jsxs)(h.default,{alignItems:"center",children:[(0,r.jsx)(d.default,{color:"primary",children:x}),(0,r.jsx)(a.H2,{ml:"12px",my:"0px",lineHeight:"1",whitespace:"pre",children:t})]}),l&&(0,r.jsx)(u.Z,{position:"left",handle:(0,r.jsx)(d.default,{mx:"1rem",children:"menu"}),children:(0,r.jsx)(p.Z,{})}),!l&&n]}),l&&!!n&&(0,r.jsx)(c.default,{mt:"1rem",children:n})]})}},v=(b,s,e)=>{"use strict";e.d(s,{Z:()=>y});var r=e(67197),c=e(5924),d=e(23714),h=e(92492),a=e(75939),m=e(4164),u=e(87296),p=e(57114),f=e(56636),x=e(98938),t=e(43948);let n=(0,a.ZP)(h.default).withConfig({componentId:"sc-f21ec4c9-0"})`
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px);
    box-shadow: none;
    overflow-y: auto;
  }
`,j=(0,a.ZP)(x.Z).withConfig({componentId:"sc-f21ec4c9-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid;
  color: ${({isCurrentPath:o})=>o?(0,t.gh)("colors.primary.main"):"inherit"};
  border-left-color: ${({isCurrentPath:o})=>o?(0,t.gh)("colors.primary.main"):"transparent"};

  .dashboard-nav-icon-holder {
    color: ${(0,t.gh)("colors.gray.600")};
  }

  :hover {
    border-left-color: ${(0,t.gh)("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${(0,t.gh)("colors.primary.main")};
    }
  }
`,l=[{title:"DASHBOARD",list:[{href:"/orders",title:"Orders",iconName:"bag",count:5},{href:"/wish-list",title:"Wishlist",iconName:"heart",count:19},{href:"/support-tickets",title:"Support Tickets",iconName:"customer-service",count:1}]},{title:"ACCOUNT SETTINGS",list:[{href:"/profile",title:"Profile Info",iconName:"user",count:3},{href:"/address",title:"Addresses",iconName:"pin",count:16},{href:"/payment-methods",title:"Payment Methods",iconName:"credit-card",count:4}]}],y=()=>{let o=(0,p.usePathname)();return(0,r.jsx)(n,{px:"0px",pb:"1.5rem",color:"gray.900",borderRadius:8,children:l.map(g=>(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(f.default,{p:"26px 30px 1rem",color:"text.muted",fontSize:"12px",children:g.title}),g.list.map(i=>(0,r.jsxs)(j,{px:"1.5rem",mb:"1.25rem",href:i.href,isCurrentPath:o.includes(i.href),children:[(0,r.jsxs)(u.default,{alignItems:"center",children:[(0,r.jsx)(d.default,{className:"dashboard-nav-icon-holder",children:(0,r.jsx)(m.default,{variant:"small",defaultcolor:"currentColor",mr:"10px",children:i.iconName})}),(0,r.jsx)("span",{children:i.title})]}),(0,r.jsx)("span",{children:i.count})]},i.title))]},g.title))})}};export{v as __chunk_23462,N as __chunk_68618};
