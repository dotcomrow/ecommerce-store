var u=(i,r,e)=>{"use strict";e.d(r,{ZP:()=>a});var t=e(39834);let s=async()=>(await t.Z.get("/api/shops")).data,n=async()=>(await t.Z.get("/api/shops/slugs")).data,c=async o=>(await t.Z.get("/api/shops/single",{params:{slug:o}})).data,a={getShopList:s,getSlugs:n,getShopBySlug:c}},g=(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>d});var t=e(23109),s=e(92005);let n=(0,s.D)(String.raw`/home/runner/work/ecommerce-store/ecommerce-store/src/components/layout/NavbarLayout.tsx`),{__esModule:c,$$typeof:a}=n,o=n.default;function d({children:l}){return(0,t.jsx)(o,{children:l})}},p=(i,r,e)=>{"use strict";e.d(r,{Q:()=>o,n:()=>a});var t=e(75939),s=e(92492),n=e(45979),c=e(43948);let a=(0,t.ZP)(s.default).withConfig({componentId:"sc-dbde637e-0"})`
  .cover-image {
    background-image: url(/assets/images/banners/shop-cover.png);
    background-size: cover;
    background-position: center;
  }

  .description-holder {
    min-width: 250px;

    @media only screen and (max-width: 500px) {
      margin-left: 0px;
    }
  }
`,o=(0,t.ZP)(s.default).withConfig({componentId:"sc-dbde637e-1"})`
  .black-box {
    background-image: linear-gradient(
        to bottom,
        rgba(${(0,c.Q5)(n.O.gray[900])}, 0.8),
        rgba(${(0,c.Q5)(n.O.gray[900])}, 0.8)
      ),
      url(${d=>d.coverImgUrl||"/assets/images/banners/cycle.png"});
    background-size: cover;
    background-position: center;
    color: white;
  }
`},h=(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>a});var t=e(67197),s=e(4310),n=e(23912),c=e(93228);let a=({children:o})=>(0,t.jsx)(s.default,{navbar:(0,t.jsx)(c.default,{}),children:(0,t.jsx)(n.default,{my:"2rem",children:o})})},m=(i,r,e)=>{Promise.resolve().then(e.bind(e,21673))};export{m as __chunk_14210,h as __chunk_21673,g as __chunk_22823,u as __chunk_85924,p as __chunk_8724};
