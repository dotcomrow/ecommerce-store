var $=(m,r,e)=>{"use strict";e.d(r,{ZP:()=>o});var n=e(92005);let i=(0,n.D)(String.raw`/home/runner/work/ecommerce-store/ecommerce-store/src/components/SidenavContainer.tsx`),{__esModule:d,$$typeof:s}=i,a=i.default,o=a},y=(m,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>h});var n=e(67197),i=e(60529),d=e(23714),s=e(75939),a=e(23912),o=e(5924),t=e(76317);let p=(0,s.ZP)(a.default).withConfig({componentId:"sc-8d89d611-0"})`
  display: flex;
  padding-top: 24px;
  position: relative;

  .sidenav {
    top: 0;
    bottom: 0;
    position: relative;
    width: ${t.P.grocerySidenavWidth};
    min-width: ${t.P.grocerySidenavWidth};
    height: calc(100vh - ${t.P.headerHeight});
  }

  .fixed {
    position: fixed;
    scroll-behavior: unset;
    top: ${t.P.headerHeight};
  }

  .pageContent {
    left: unset;
    position: relative;
    margin-left: 1.75rem;
    width: calc(100% - 2rem - ${t.P.grocerySidenavWidth});
  }

  .pageContentShifted {
    left: ${t.P.grocerySidenavWidth};
  }

  .section1 {
    margin-bottom: 3rem;
    margin-top: 1.75rem;
  }

  @media (max-width: ${t.J.md}px) {
    .sidenav {
      display: none;
    }

    .pageContent {
      left: 0px !important;
      width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
`,h=g=>{let{SideNav:f,children:u,navFixedComponentID:v}=g,[l,w]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>{let x=document.getElementById(v),C=x.getBoundingClientRect().bottom,S=C+window.scrollY-80;w(window.pageYOffset>S)},[]);return(0,o.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]),(0,n.jsxs)(p,{children:[(0,n.jsx)(d.default,{className:(0,i.Z)({sidenav:!0,fixed:l}),children:f}),(0,n.jsx)(d.default,{className:(0,i.Z)({pageContent:!0,pageContentShifted:l}),children:u})]})}};export{$ as __chunk_89579,y as __chunk_93481};
