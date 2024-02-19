var k=(H,p,i)=>{"use strict";i.d(p,{q:()=>x,Qz:()=>b,Hx:()=>z});var e=i(67197),c=i(75939),a=i(23714),l=i(99570),t=i(56636);let g=c.ZP.div.withConfig({componentId:"sc-483ceb73-0"})`
  display: flex;
  text-align: left;
  margin-left: 280px;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  justify-content: space-between;

  .title {
    font-size: 50px;
    margin-top: 0px;
    line-height: 1.2;
    margin-bottom: 1.35rem;
  }

  .image-holder {
    position: relative;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
    padding-left: 0px;

    .title {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 425px) {
    .title {
      font-size: 16px;
    }
    .title + * {
      font-size: 13px;
    }
    .button-link {
      font-size: 13px;
      padding: 0.66rem 0.95rem;
    }
  }
`,x=({title:n,image:r,buttonText:o,description:d})=>(0,e.jsxs)(g,{children:[(0,e.jsxs)(a.default,{children:[(0,e.jsx)("h1",{className:"title",children:n}),(0,e.jsx)(t.default,{color:"secondary.main",mb:"1.35rem",children:d}),(0,e.jsx)(l.z,{className:"button-link",variant:"contained",color:"primary",p:"1rem 1.5rem",children:o})]}),(0,e.jsx)("div",{className:"image-holder",children:(0,e.jsx)("img",{src:r,alt:"apple-watch-1"})})]});var h=i(37224),m=i(76317);let f=(0,c.ZP)(a.default).withConfig({componentId:"sc-9fb8ce7e-0"})(({img:n,mode:r})=>({minHeight:500,display:"flex",alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:`url(${n})`,backgroundColor:r==="dark"?"#000":"#fff",color:r==="light"?h.r.colors.secondary.main:"#fff",[`@media(max-width: ${m.J.md}px)`]:{padding:24,textAlign:"center",backgroundImage:"none",justifyContent:"center"}})),u=(0,c.ZP)(a.default).withConfig({componentId:"sc-9fb8ce7e-1"})({paddingLeft:"5rem",[`@media(max-width: ${m.J.md}px)`]:{paddingLeft:0,"& button":{margin:"auto"}}}),b=({title:n,bgImage:r,category:o,discount:d,mode:s="dark"})=>(0,e.jsx)(f,{img:r,mode:s,children:(0,e.jsxs)(u,{children:[(0,e.jsx)(t.H4,{mb:1,lineHeight:1,fontWeight:400,textTransform:"uppercase",fontSize:30,children:n}),(0,e.jsx)(t.H1,{fontSize:60,lineHeight:1,textTransform:"uppercase",children:o}),(0,e.jsxs)(t.H4,{fontSize:30,lineHeight:1,mt:".75rem",textTransform:"uppercase",children:["SALE UP TO ",(0,e.jsxs)(t.Span,{color:"primary.main",children:[d,"% OFF"]})]}),(0,e.jsx)(t.Paragraph,{fontSize:18,mb:"2rem",children:"Get Free Shipping on orders over $99.00"}),(0,e.jsx)(l.z,{variant:"contained",color:"primary",children:"Shop Now"})]})}),j=(0,c.ZP)(a.default).withConfig({componentId:"sc-f4ed3e97-0"})(({img:n})=>({minHeight:500,display:"flex",alignItems:"center",backgroundSize:"cover",backgroundColor:"#fff",backgroundRepeat:"no-repeat",backgroundImage:`url(${n})`,[`@media(max-width: ${m.J.sm}px)`]:{padding:24,textAlign:"center",justifyContent:"center","& button":{margin:"auto"}},[`@media(min-width: ${m.J.sm}px)`]:{"& .hero-content":{paddingLeft:"5rem"}}})),z=n=>{let{img:r,title:o,category:d,discount:s,description:y,buttonText:S}=n;return(0,e.jsx)(j,{img:r,children:(0,e.jsxs)(a.default,{className:"hero-content",children:[(0,e.jsx)(t.H4,{mb:1,fontSize:30,lineHeight:1,fontWeight:400,textTransform:"uppercase",children:o}),(0,e.jsx)(t.H1,{fontSize:60,lineHeight:1,textTransform:"uppercase",children:d}),(0,e.jsxs)(t.H4,{fontSize:30,lineHeight:1,mt:".75rem",textTransform:"uppercase",children:["SALE UP TO ",(0,e.jsxs)(t.Span,{color:"primary.main",children:[s,"% OFF"]})]}),(0,e.jsx)(t.Paragraph,{fontSize:18,mb:"2rem",children:y}),(0,e.jsx)(l.z,{variant:"contained",color:"primary",children:S})]})})}};export{k as __chunk_94794};
