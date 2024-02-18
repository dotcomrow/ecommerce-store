var k=(S,a,e)=>{"use strict";e.d(a,{U:()=>h,_:()=>g});var l=e(67197),t=e(5924),s=e(75939),d=e(23714);let u=(0,s.ZP)(d.default).withConfig({componentId:"sc-56b31b18-0"})`
  cursor: pointer;
  overflow: hidden;
  transition: height 250ms ease-in-out;
`,h=({expanded:r=!1,children:i})=>{let o=(0,t.useRef)(null),[c,C]=(0,t.useState)(r),[v,w]=(0,t.useState)(0),[x,j]=(0,t.useState)(0),I=()=>C(!c);(0,t.useEffect)(()=>{let n=o.current;n&&(w(n.children[0].scrollHeight),j(n.scrollHeight))},[o.current]);let _=t.Children.map(i,(n,b)=>b===0?(0,t.cloneElement)(n,{open:c,onClick:I}):n);return(0,l.jsx)(u,{ref:o,height:c?x:v,children:_})};var f=e(4164),p=e(87296);let m=(0,s.ZP)(p.default).withConfig({componentId:"sc-6acd948c-0"})`
  .caret-icon {
    transition: transform 250ms ease-in-out;
    transform: ${({open:r})=>r?"rotate(90deg)":"rotate(0deg)"};
  }
`,g=({open:r,children:i,showIcon:o=!0,...c})=>(0,l.jsxs)(m,{open:r,alignItems:"center",justifyContent:"space-between",...c,children:[i,o&&(0,l.jsx)(f.default,{className:"caret-icon",variant:"small",defaultcolor:"currentColor",children:"chevron-right"})]})};export{k as __chunk_38385};
