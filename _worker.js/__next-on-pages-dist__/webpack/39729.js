var H=(y,h,i)=>{"use strict";i.d(h,{Z:()=>E});var g=i(67197),e=i(5924),m=i(75939);let v=m.ZP.div.withConfig({componentId:"sc-e32bce4c-0"})`
  left: 0;
  right: 0;
  z-index: 99;
  transition: all 250ms ease-in-out;
  top: ${t=>t.fixedOn}px;
  position: ${t=>t.fixed?"fixed":"relative"};

  & + .section-after-sticky {
    padding-top: ${t=>t.fixed?`${t.componentHeight}px`:"inherit"};
  }
`,E=t=>{let{fixedOn:r,containerRef:l,children:w,notifyPosition:n,notifyOnScroll:o,onSticky:p}=t,f=(0,e.useRef)(null),s=(0,e.useRef)(null),[c,a]=(0,e.useState)(!1),[O,k]=(0,e.useState)(0),d=(0,e.useCallback)(()=>{if(!window)return;let u=window.pageYOffset-s.current;if(l?.current){let x=l.current.offsetTop+l.current?.offsetHeight-window.pageYOffset;return n&&o&&o(u<=n&&x>n),a(u<=r&&x>r)}n&&o&&o(u>=n),a(u>=r)},[]);return(0,e.useEffect)(()=>{if(window)return window.addEventListener("scroll",d),window.addEventListener("resize",d),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]),(0,e.useEffect)(()=>{s.current||(s.current=f.current?.offsetTop),k(f.current?.offsetHeight||0)},[f.current,w]),(0,e.useEffect)(()=>{p&&p(c)},[c]),(0,g.jsx)(v,{fixed:c,ref:f,fixedOn:r,componentHeight:O,componentPosition:s.current,children:w&&(0,e.cloneElement)(w,{isFixed:c})})}};export{H as __chunk_39729};
