var P=(m,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>a});var r=e(23109),i=e(92005);let c=(0,i.D)(String.raw`/home/runner/work/ecommerce-store/ecommerce-store/src/components/layout/vendor-dashboard/index.tsx`),{__esModule:l,$$typeof:f}=c,s=c.default;function a({children:h}){return(0,r.jsx)(s,{children:h})}},N=(m,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>w});var r=e(67197),i=e(23714),c=e(96548),l=e(2861),f=e(4164),s=e(87296),a=e(23912),h=e(57114),p=e(93228),x=e(4310),u=e(75939),g=e(92492),n=e(43948),b=e(98938);let v=(0,u.ZP)(g.default).withConfig({componentId:"sc-1278018-0"})`
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px);
    box-shadow: none;
    overflow-y: auto;
  }
`,j=(0,u.ZP)(b.Z).withConfig({componentId:"sc-1278018-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid;
  color: ${({isCurrentPath:d})=>d?(0,n.gh)("colors.primary.main"):"inherit"};
  border-left-color: ${({isCurrentPath:d})=>d?(0,n.gh)("colors.primary.main"):"transparent"};

  .dashboard-nav-icon-holder {
    color: ${(0,n.gh)("colors.gray.600")};
  }

  :hover {
    border-left-color: ${(0,n.gh)("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${(0,n.gh)("colors.primary.main")};
    }
  }
`;(0,u.ZP)(s.default).withConfig({componentId:"sc-1278018-2"})``;let y=[{href:"/vendor/dashboard",title:"Dashboard",iconName:"board"},{href:"/vendor/products",title:"Products",iconName:"box",count:300},{href:"/vendor/add-product",title:"Add New Product",iconName:"upload"},{href:"/vendor/orders",title:"Orders",iconName:"shopping-cart",count:40},{href:"/vendor/account-settings",title:"Account Settings",iconName:"gear-2"}],w=({children:d})=>{let _=(0,h.usePathname)();return(0,r.jsx)(x.default,{navbar:(0,r.jsx)(p.default,{}),children:(0,r.jsx)(a.default,{my:"2rem",children:(0,r.jsxs)(l.default,{container:!0,spacing:6,children:[(0,r.jsx)(c.default,{as:l.default,item:!0,lg:3,xs:12,down:1024,children:(0,r.jsx)(v,{px:"0px",py:"1.5rem",color:"gray.900",borderRadius:8,children:y.map(t=>(0,r.jsxs)(j,{px:"1.5rem",mb:"1.25rem",href:t.href,isCurrentPath:_.includes(t.href),children:[(0,r.jsxs)(s.default,{alignItems:"center",children:[(0,r.jsx)(i.default,{className:"dashboard-nav-icon-holder",children:(0,r.jsx)(f.default,{variant:"small",defaultcolor:"currentColor",mr:"10px",children:t.iconName})}),(0,r.jsx)("span",{children:t.title})]}),(0,r.jsx)("span",{children:t.count})]},t.title))})}),(0,r.jsx)(l.default,{item:!0,lg:9,xs:12,children:d})]})})})}},C=(m,o,e)=>{Promise.resolve().then(e.bind(e,48256))};export{N as __chunk_48256,C as __chunk_64337,P as __chunk_77475};
