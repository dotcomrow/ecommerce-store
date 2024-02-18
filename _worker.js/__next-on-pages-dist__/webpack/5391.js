var C=($,b,t)=>{"use strict";t.d(b,{Z:()=>u});var o=t(67197),h=t(95838),a=t(5924),s=t(75939),r=t(23689);let m=s.ZP.input.withConfig({componentId:"sc-279837f1-0"})(({color:e,size:i})=>(0,h.ZP)({appearance:"none",outline:"none",cursor:"pointer",margin:0,width:i,height:i,border:"2px solid",borderColor:"text.hint",borderRadius:2,position:"relative","&:checked":{borderColor:`${e}.main`},"&:after":{width:"calc(100% - 5px)",height:"calc(100% - 5px)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",position:"absolute",bg:"transparent",content:'" "',visibility:"visible",borderRadius:1,transition:"all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},"&:checked:after":{bg:`${e}.main`},"&:disabled":{borderColor:"text.disabled"},"&:checked:disabled:after":{bg:"text.disabled"}}),(0,r.qC)(r.$_)),p=s.ZP.div.withConfig({componentId:"sc-279837f1-1"})`
  display: flex;
  align-items: center;
  flex-direction: ${e=>e.labelPlacement!=="end"?"row":"row-reverse"};
  input {
    ${e=>e.labelPlacement!=="end"?"margin-right: 0.5rem":"margin-left: 0.5rem"};
  }
  label {
    cursor: pointer;
  }
  input[disabled] + label {
    /* color: text.disabled; */
    color: disabled;
    cursor: unset;
  }

  ${r.$_}
  ${r.Dh}
`,u=({id:e,label:i,labelColor:f="secondary",labelPlacement:x,...n})=>{let[d,g]=(0,a.useState)(e),c={};for(let l in n)(l.startsWith("m")||l.startsWith("p"))&&(c[l]=n[l]);return(0,a.useEffect)(()=>g(Math.random()),[]),(0,o.jsxs)(p,{labelPlacement:x,color:`${f}.main`,size:18,...c,children:[(0,o.jsx)(m,{id:d,type:"checkbox",...n}),(0,o.jsx)("label",{htmlFor:d,children:i})]})}};export{C as __chunk_5391};
