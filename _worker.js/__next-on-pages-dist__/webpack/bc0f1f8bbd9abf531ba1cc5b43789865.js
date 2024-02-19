var nt=(te,B,s)=>{"use strict";s.r(B),s.d(B,{default:()=>c});var e=s(67197),v=s(11440),R=s(23714),N=s(5924),y=s(27751),d=s(67114),P=s(64518),o=s(2861),q=s(4164),Z=s(87296),h=s(57114),p=s(99570),u=s(56636),U=s(31786),r=s(43948);let c=({images:_,title:G,price:L,id:$})=>{let K=(0,h.useParams)(),{state:X,dispatch:T}=(0,U.useAppContext)(),[J,Y]=(0,N.useState)(0),Q=K.slug,O=X.cart.find(H=>H.id===$||H.id===Q),ee=H=>()=>Y(H),F=H=>()=>{T({type:"CHANGE_CART_AMOUNT",payload:{price:L,qty:H,name:G,imgUrl:_[0],id:$||Q}})};return(0,e.jsx)(R.default,{overflow:"hidden",children:(0,e.jsxs)(o.default,{container:!0,justifyContent:"center",spacing:16,children:[(0,e.jsx)(o.default,{item:!0,md:6,xs:12,alignItems:"center",children:(0,e.jsxs)(R.default,{children:[(0,e.jsx)(Z.default,{mb:"50px",overflow:"hidden",borderRadius:16,justifyContent:"center",children:(0,e.jsx)(y.Z,{width:300,height:300,src:_[J],style:{display:"block",width:"100%",height:"auto"}})}),(0,e.jsx)(Z.default,{overflow:"auto",children:_.map((H,E)=>(0,e.jsx)(R.default,{size:70,bg:"white",minWidth:70,display:"flex",cursor:"pointer",border:"1px solid",borderRadius:"10px",alignItems:"center",justifyContent:"center",ml:E===0?"auto":"",mr:E===_.length-1?"auto":"10px",borderColor:J===E?"primary.main":"gray.400",onClick:ee(E),children:(0,e.jsx)(P.default,{src:H,borderRadius:"10px",size:65})},E))})]})}),(0,e.jsxs)(o.default,{item:!0,md:6,xs:12,alignItems:"center",children:[(0,e.jsx)(u.H1,{mb:"1rem",children:G}),(0,e.jsxs)(Z.default,{alignItems:"center",mb:"1rem",children:[(0,e.jsx)(u.SemiSpan,{children:"Brand:"}),(0,e.jsx)(u.H6,{ml:"8px",children:"Ziaomi"})]}),(0,e.jsxs)(Z.default,{alignItems:"center",mb:"1rem",children:[(0,e.jsx)(u.SemiSpan,{children:"Rated:"}),(0,e.jsx)(R.default,{ml:"8px",mr:"8px",children:(0,e.jsx)(d.Z,{color:"warn",value:4,outof:5})}),(0,e.jsx)(u.H6,{children:"(50)"})]}),(0,e.jsxs)(R.default,{mb:"24px",children:[(0,e.jsx)(u.H2,{color:"primary.main",mb:"4px",lineHeight:"1",children:(0,r.Aq)(L)}),(0,e.jsx)(u.SemiSpan,{color:"inherit",children:"Stock Available"})]}),O?.qty?(0,e.jsxs)(Z.default,{alignItems:"center",mb:"36px",children:[(0,e.jsx)(p.z,{p:"9px",size:"small",color:"primary",variant:"outlined",onClick:F(O?.qty-1),children:(0,e.jsx)(q.default,{variant:"small",children:"minus"})}),(0,e.jsx)(u.H3,{fontWeight:"600",mx:"20px",children:O?.qty.toString().padStart(2,"0")}),(0,e.jsx)(p.z,{p:"9px",size:"small",color:"primary",variant:"outlined",onClick:F(O?.qty+1),children:(0,e.jsx)(q.default,{variant:"small",children:"plus"})})]}):(0,e.jsx)(p.z,{mb:"36px",size:"small",color:"primary",variant:"contained",onClick:F(1),children:"Add to Cart"}),(0,e.jsxs)(Z.default,{alignItems:"center",mb:"1rem",children:[(0,e.jsx)(u.SemiSpan,{children:"Sold By:"}),(0,e.jsx)(v.default,{href:"/shops/scarlett-beauty",children:(0,e.jsx)(u.H6,{lineHeight:"1",ml:"8px",children:"Mobile Store"})})]})]})]})})}},ot=(te,B,s)=>{"use strict";s.d(B,{Ud:()=>X,xw:()=>pe,Sy:()=>me,ZS:()=>ve,pN:()=>Ae,v6:()=>qe,Pr:()=>Ue,ZP:()=>Me,y1:()=>Ke,m1:()=>Ye,qn:()=>lt,zI:()=>J,Mw:()=>Y,WI:()=>Q,He:()=>O,W6:()=>E,wI:()=>ae,it:()=>ce});var e=s(67197),v=s(11440),R=s(82930),N=s.n(R),y=s(5924),d=s(75939),P=s(31786),o=s(23714),q=s(67114),Z=s(86108),h=s(4164),p=s(87296),u=s(99570),U=s(92492),r=s(56636),c=s(43948),_=s(76317),G=s(32478),L=s(74983);let $=t=>{let{open:l,onClose:n,product:i}=t;return(0,e.jsx)(G.Z,{open:l,onClose:n,children:(0,e.jsxs)(U.default,{p:"1rem",width:"100%",maxWidth:"800px",borderRadius:8,position:"relative",children:[(0,e.jsx)(L.default,{id:i.id,title:i.title,price:i.price,images:i.images}),(0,e.jsx)(o.default,{position:"absolute",top:"0.75rem",right:"0.75rem",cursor:"pointer",children:(0,e.jsx)(h.default,{className:"close",color:"primary",variant:"small",onClick:n,children:"close"})})]})})},K=(0,d.ZP)(U.default).withConfig({componentId:"sc-5c7f8eec-0"})`
  margin: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms ease-in-out;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: block;
      }
    }
  }

  .image-holder {
    text-align: center;
    position: relative;
    display: inline-block;
    height: 100%;

    .extra-icons {
      z-index: 2;
      top: 0.75rem;
      display: none;
      right: 0.75rem;
      cursor: pointer;
      position: absolute;
    }

    @media only screen and (max-width: ${_.J.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;

    .title,
    .categories {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${(0,c.gh)("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`,X=({id:t,off:l,slug:n,title:i,price:a,imgUrl:x,images:m,rating:g=4,...S})=>{let[w,z]=(0,y.useState)(!1),{state:A,dispatch:I}=(0,P.useAppContext)(),C=A.cart.find(k=>k.id===t),f=(0,y.useCallback)(()=>z(k=>!k),[]),j=k=>()=>{I({type:"CHANGE_CART_AMOUNT",payload:{id:t,slug:n,price:a,imgUrl:x,name:i,qty:k}})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(K,{borderRadius:8,...S,children:[(0,e.jsxs)("div",{className:"image-holder",children:[!!l&&(0,e.jsxs)(Z.Chip,{top:"10px",left:"10px",p:"5px 10px",fontSize:"10px",fontWeight:"600",bg:"primary.main",position:"absolute",color:"primary.text",zIndex:1,children:[l,"% off"]}),(0,e.jsxs)(p.default,{className:"extra-icons",children:[(0,e.jsx)(h.default,{color:"secondary",variant:"small",mb:"0.5rem",onClick:f,children:"eye-alt"}),(0,e.jsx)(h.default,{className:"favorite-icon outlined-icon",variant:"small",children:"heart"})]}),(0,e.jsx)(v.default,{href:`/product/${n}`,children:(0,e.jsx)(N(),{alt:i,width:100,src:x,height:100,objectFit:"cover",layout:"responsive"})})]}),(0,e.jsx)("div",{className:"details",children:(0,e.jsxs)(p.default,{children:[(0,e.jsxs)(o.default,{flex:"1 1 0",minWidth:"0px",mr:"0.5rem",children:[(0,e.jsx)(v.default,{href:`/product/${n}`,children:(0,e.jsx)(r.H3,{mb:"10px",title:i,fontSize:"14px",textAlign:"left",fontWeight:"600",className:"title",color:"text.secondary",children:i})}),(0,e.jsx)(q.Z,{value:g||0,outof:5,color:"warn",readonly:!0}),(0,e.jsxs)(p.default,{alignItems:"center",mt:"10px",children:[(0,e.jsx)(r.SemiSpan,{pr:"0.5rem",fontWeight:"600",color:"primary.main",children:(0,c.Et)(a,l)}),!!l&&(0,e.jsx)(r.SemiSpan,{color:"text.muted",fontWeight:"600",children:(0,e.jsx)("del",{children:(0,c.Aq)(a)})})]})]}),(0,e.jsxs)(p.default,{width:"30px",alignItems:"center",flexDirection:"column-reverse",justifyContent:C?.qty?"space-between":"flex-start",children:[(0,e.jsx)(u.z,{size:"none",padding:"3px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:j((C?.qty||0)+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})}),!!C?.qty&&(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(r.SemiSpan,{color:"text.primary",fontWeight:"600",children:C.qty}),(0,e.jsx)(u.z,{size:"none",padding:"3px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:j(C.qty-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})})]})]})]})})]}),(0,e.jsx)($,{open:w,onClose:f,product:{images:m,title:i,price:a,id:t,slug:n}})]})};var T=s(65435);let J=({imgUrl:t,title:l,price:n,slug:i})=>(0,e.jsxs)(v.default,{href:`/product/${i}`,children:[(0,e.jsx)(T.Z,{borderRadius:8,mb:"0.5rem",children:(0,e.jsx)(N(),{src:t,width:100,height:100,layout:"responsive",alt:l})}),(0,e.jsx)(r.H4,{fontWeight:"600",fontSize:"14px",mb:"0.25rem",children:l}),(0,e.jsx)(r.H4,{fontWeight:"600",fontSize:"14px",color:"primary.main",children:(0,c.Aq)(n)})]});d.ZP.div.withConfig({componentId:"sc-47de10b1-0"})`
  border-radius: 8px;
  display: inline-block;
  transition: all 250ms ease-in-out;
  background-color: ${(0,c.gh)("colors.body.default")};

  &:hover {
    box-shadow: ${(0,c.gh)("shadows.6")};
    .details {
      .add-cart {
        display: flex;
      }
    }
  }

  .image-holder {
    position: relative;
    text-align: center;
    display: inlin-block;

    .sale-chip {
      top: 0.625rem;
      left: 0.625rem;
      color: white;
      font-size: 13px;
      position: absolute;
      border-radius: 500px;
      display: inline-block;
      padding: 0.4rem 0.78rem;
      background: ${(0,c.gh)("colors.primary.main")};
    }
  }

  .details {
    padding: 1rem;

    h4 {
      margin: 0 0 0.5rem;
      color: ${(0,c.gh)("colors.text.secondary")};
    }

    .price {
      display: flex;
      margin-top: 0.5rem;
      font-weight: 600;

      h4 {
        margin: 0px;
        padding-right: 0.5rem;
        color: ${(0,c.gh)("colors.primary.main")};
      }
      del {
        color: ${(0,c.gh)("colors.text.hint")};
      }
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${(0,c.gh)("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;

      span {
        font-size: 15px;
        font-weight: 600;
        padding: 0px 0.5rem;
      }
    }
  }
`;let Y=t=>{let{imgUrl:l,rating:n,title:i,price:a,reviewCount:x}=t;return(0,e.jsxs)(o.default,{children:[(0,e.jsx)(T.Z,{mb:"1rem",mx:"auto",borderRadius:8,children:(0,e.jsx)(N(),{src:l,width:100,height:100,layout:"responsive",alt:i})}),(0,e.jsxs)(p.default,{justifyContent:"center",alignItems:"center",mb:"0.25rem",children:[(0,e.jsx)(q.Z,{value:n,color:"warn"}),(0,e.jsxs)(r.Small,{fontWeight:"600",pl:"0.25rem",children:["(",x,")"]})]}),(0,e.jsx)(r.H4,{fontWeight:"600",fontSize:"14px",textAlign:"center",mb:"0.25rem",title:i,ellipsis:!0,children:i}),(0,e.jsx)(r.H4,{fontWeight:"600",fontSize:"14px",textAlign:"center",color:"primary.main",children:(0,c.Aq)(a)})]})},Q=({imgUrl:t,title:l})=>(0,e.jsxs)(o.default,{children:[(0,e.jsx)(T.Z,{borderRadius:5,mb:"0.5rem",children:(0,e.jsx)(N(),{width:260,alt:l,src:t,height:175,objectFit:"cover",layout:"responsive"})}),(0,e.jsx)(r.H4,{fontSize:"14px",fontWeight:"600",children:l})]}),O=({title:t,subtitle:l,imgUrl:n})=>(0,e.jsxs)(U.default,{position:"relative",children:[(0,e.jsx)(Z.Chip,{zIndex:2,p:"4px 10px",color:"white",top:"0.875rem",left:"0.875rem",fontSize:"10px",fontWeight:"600",bg:"secondary.main",position:"absolute",children:t}),(0,e.jsx)(Z.Chip,{zIndex:2,p:"4px 10px",bg:"gray.300",top:"0.875rem",fontSize:"10px",color:"gray.800",fontWeight:"600",right:"0.875rem",position:"absolute",children:l}),(0,e.jsx)(T.Z,{position:"relative",height:"120px",borderRadius:8,children:(0,e.jsx)(N(),{src:n,layout:"fill",objectFit:"cover",alt:"bonik"})})]});var ee=s(23689),F=s(27751);let H=d.ZP.div.withConfig({componentId:"sc-8ecaf4da-0"})`
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: ${(0,c.gh)("shadows.4")};
  background-color: ${(0,c.gh)("colors.body.paper")};

  .product-details {
    padding: 20px;
  }
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
    img {
      height: auto;
      min-width: 100%;
    }
    .product-details {
      // padding: 1rem;
    }
  }
  ${ee.Dh}
`,E=t=>{let{id:l,name:n,qty:i,price:a,imgUrl:x,slug:m,...g}=t,{dispatch:S}=(0,P.useAppContext)(),w=z=>()=>{S({type:"CHANGE_CART_AMOUNT",payload:{qty:z,name:n,price:a,imgUrl:x,id:l}})};return(0,e.jsxs)(H,{...g,children:[(0,e.jsx)(F.Z,{size:140,alt:n,display:"block",src:x||"/assets/images/products/iphone-xi.png"}),(0,e.jsxs)(p.default,{width:"100%",minWidth:"0px",flexDirection:"column",className:"product-details",justifyContent:"space-between",children:[(0,e.jsx)(v.default,{href:`/product/${m}`,children:(0,e.jsx)(r.default,{className:"title",fontWeight:"600",fontSize:"18px",mb:"0.5rem",children:n})}),(0,e.jsx)(o.default,{position:"absolute",right:"1rem",top:"1rem",children:(0,e.jsx)(u.h,{padding:"4px",ml:"12px",onClick:w(0),children:(0,e.jsx)(h.default,{size:"1.25rem",children:"close"})})}),(0,e.jsxs)(p.default,{justifyContent:"space-between",alignItems:"flex-end",children:[(0,e.jsxs)(p.default,{flexWrap:"wrap",alignItems:"center",children:[(0,e.jsxs)(r.default,{color:"gray.600",mr:"0.5rem",children:[(0,c.Aq)(a)," x ",i]}),(0,e.jsx)(r.default,{fontWeight:600,color:"primary.main",mr:"1rem",children:(0,c.Aq)(a*i)})]}),(0,e.jsxs)(p.default,{alignItems:"center",children:[(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",disabled:i===1,borderColor:"primary.light",onClick:w(i-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})}),(0,e.jsx)(r.default,{mx:"0.5rem",fontWeight:"600",fontSize:"15px",children:i}),(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:w(i+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})})]})]})]})]})},ae=({id:t,price:l,title:n,off:i,slug:a,imgUrl:x,...m})=>(0,e.jsx)(U.default,{p:"1rem",...m,children:(0,e.jsxs)(v.default,{href:`/product/${a}`,children:[(0,e.jsx)(T.Z,{mb:"0.75rem",borderRadius:8,overflow:"hidden",children:(0,e.jsx)(N(),{src:x||"/assets/images/products/Rectangle 116.png",width:500,height:500,layout:"responsive",objectFit:"contain",objectPosition:"center",alt:"bonik"})}),(0,e.jsx)(r.SemiSpan,{title:n,mb:"0.25rem",color:"inherit",ellipsis:!0,display:"block",children:n}),(0,e.jsxs)(p.default,{alignItems:"center",children:[(0,e.jsx)(r.H6,{color:"primary.main",mr:"0.25rem",children:(0,c.Et)(l,i)}),(0,e.jsx)(r.SemiSpan,{children:(0,e.jsx)("del",{children:(0,c.Aq)(l)})})]})]})});var ie=s(96548),V=s(2861),re=s(98938);let de=(0,d.ZP)(U.default).withConfig({componentId:"sc-d2ddbdd3-0"})`
  .quick-view {
    top: 0.75rem;
    display: none;
    right: 0.75rem;
    cursor: pointer;
    position: absolute;
  }
  .categories {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .categories {
    display: flex;
    .link {
      font-size: 14px;
      margin-right: 0.5rem;
      text-decoration: underline;
      color: ${(0,c.gh)("colors.text.hint")};
    }
  }

  h4 {
    text-align: left;
    margin: 0.5rem 0px;
    color: ${(0,c.gh)("colors.text.secondary")};
  }

  .price {
    display: flex;
    font-weight: 600;
    margin-top: 0.5rem;

    h4 {
      margin: 0px;
      padding-right: 0.5rem;
      color: ${(0,c.gh)("colors.primary.main")};
    }
    del {
      color: ${(0,c.gh)("colors.text.hint")};
    }
  }

  .icon-holder {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
  }

  .favorite-icon {
    cursor: pointer;
  }
  .outlined-icon {
    svg path {
      fill: ${(0,c.gh)("colors.text.hint")};
    }
  }
  .add-cart {
    display: none;
  }

  &:hover {
    .add-cart {
      display: flex;
    }
    .quick-view {
      display: block;
    }
  }
`,ce=({id:t,off:l,slug:n,title:i,price:a,imgUrl:x,rating:m,images:g,categories:S,...w})=>{let[z,A]=(0,y.useState)(!1),{state:I,dispatch:C}=(0,P.useAppContext)(),f=I.cart.find(b=>b.id===t),j=(0,y.useCallback)(()=>A(b=>!b),[]),k=b=>()=>{C({type:"CHANGE_CART_AMOUNT",payload:{price:a,imgUrl:x,id:t,qty:b,slug:n,name:i}})};return(0,e.jsxs)(de,{overflow:"hidden",width:"100%",...w,children:[(0,e.jsxs)(V.default,{container:!0,spacing:1,children:[(0,e.jsx)(V.default,{item:!0,md:3,sm:4,xs:12,children:(0,e.jsxs)(o.default,{position:"relative",children:[!!l&&(0,e.jsxs)(Z.Chip,{top:"10px",left:"10px",p:"5px 10px",fontSize:"10px",fontWeight:"600",bg:"primary.main",position:"absolute",color:"primary.text",children:[l,"% off"]}),(0,e.jsx)(h.default,{color:"secondary",variant:"small",className:"quick-view",onClick:j,children:"eye-alt"}),(0,e.jsx)(F.Z,{src:x,alt:i,width:"100%",borderRadius:"0.5rem"})]})}),(0,e.jsx)(V.default,{item:!0,md:8,sm:8,xs:12,children:(0,e.jsxs)(p.default,{flexDirection:"column",justifyContent:"center",height:"100%",p:"1rem",children:[!!S&&(0,e.jsx)("div",{className:"categories",children:S.map(b=>(0,e.jsx)(re.Z,{className:"link",href:`/product/search/${b}`,children:b},b))}),(0,e.jsx)(v.default,{href:`/product/${n}`,children:(0,e.jsx)(r.H5,{fontWeight:"600",my:"0.5rem",children:i})}),(0,e.jsx)(q.Z,{value:m||0,outof:5,color:"warn"}),(0,e.jsxs)(p.default,{mt:"0.5rem",mb:"1rem",alignItems:"center",children:[(0,e.jsx)(r.H5,{fontWeight:600,color:"primary.main",mr:"0.5rem",children:(0,c.Et)(a,l)}),l&&(0,e.jsx)(r.SemiSpan,{fontWeight:"600",children:(0,e.jsx)("del",{children:(0,c.Aq)(a)})})]}),(0,e.jsx)(ie.default,{up:"sm",children:(0,e.jsxs)(p.default,{height:"30px",alignItems:"center",flexDirection:"row-reverse",justifyContent:"space-between",children:[(0,e.jsx)(h.default,{className:"favorite-icon outlined-icon",variant:"small",children:"heart"}),(0,e.jsxs)(p.default,{alignItems:"center",flexDirection:"row-reverse",children:[(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:k((f?.qty||0)+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})}),f?.qty&&(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(r.H5,{fontWeight:"600",fontSize:"15px",mx:"0.75rem",children:f.qty}),(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:k(f.qty-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})})]})]})]})})]})}),(0,e.jsx)(ie.default,{as:V.default,down:"sm",item:!0,md:1,xs:12,children:(0,e.jsxs)(p.default,{ml:"auto",p:"1rem 0rem",height:"100%",minWidth:"30px",alignItems:"center",flexDirection:"column",justifyContent:"space-between",children:[(0,e.jsx)(h.default,{className:"favorite-icon outlined-icon",variant:"small",children:"heart"}),(0,e.jsxs)(p.default,{alignItems:"center",className:"add-cart",flexDirection:f?.qty?"column":"column-reverse",children:[(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:k((f?.qty||0)+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})}),f?.qty&&(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(r.H5,{fontWeight:"600",fontSize:"15px",m:"0.5rem",children:f.qty}),(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:k(f.qty-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})})]})]})]})})]}),(0,e.jsx)($,{open:z,onClose:j,product:{id:t,images:g,price:a,title:i,slug:n}})]})},he=(0,d.ZP)(U.default).withConfig({componentId:"sc-79573f7-0"})`
  margin: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms ease-in-out;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: block;
      }
    }
  }

  .image-holder {
    text-align: center;
    position: relative;
    display: inlin-block;

    .extra-icons {
      z-index: 2;
      top: 0.75rem;
      display: none;
      right: 0.75rem;
      cursor: pointer;
      position: absolute;
    }

    @media only screen and (max-width: ${_.J.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;

    .title,
    .categories {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${(0,c.gh)("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`,pe=t=>{let{id:l,off:n,unit:i,slug:a,title:x,price:m,imgUrl:g,images:S}=t,[w,z]=(0,y.useState)(!1),[A,I]=(0,y.useState)(""),[C,f]=(0,y.useState)("");(0,y.useEffect)(()=>{I(()=>(0,c.Et)(m,n)),f(()=>(0,c.Aq)(n))},[]);let{state:j,dispatch:k}=(0,P.useAppContext)(),b=j.cart.find(M=>M.id===l),oe=(0,y.useCallback)(()=>z(M=>!M),[]),se=M=>()=>{k({type:"CHANGE_CART_AMOUNT",payload:{price:m,imgUrl:g,id:l,qty:M,slug:a,name:x}})};return(0,e.jsxs)(he,{borderRadius:8,children:[(0,e.jsxs)("div",{className:"image-holder",children:[n&&(0,e.jsxs)(Z.Chip,{top:"10px",left:"10px",p:"5px 10px",fontSize:"10px",fontWeight:"600",bg:"primary.main",position:"absolute",color:"primary.text",children:[n,"% off"]}),(0,e.jsxs)(p.default,{className:"extra-icons",children:[(0,e.jsx)(h.default,{color:"secondary",variant:"small",mb:"0.5rem",onClick:oe,children:"eye-alt"}),(0,e.jsx)(h.default,{className:"favorite-icon outlined-icon",variant:"small",children:"heart"})]}),(0,e.jsx)(v.default,{href:`/product/${a}`,children:(0,e.jsx)(N(),{src:g,width:100,height:100,layout:"responsive",alt:x})})]}),(0,e.jsx)("div",{className:"details",children:(0,e.jsxs)(p.default,{children:[(0,e.jsxs)(o.default,{flex:"1 1 0",minWidth:"0px",mr:"0.5rem",children:[(0,e.jsx)(v.default,{href:`/product/${a}`,children:(0,e.jsx)(r.H3,{mb:"6px",title:x,fontSize:"14px",textAlign:"left",fontWeight:"600",className:"title",color:"text.secondary",children:x})}),(0,e.jsx)(r.SemiSpan,{children:i||"300ml"}),(0,e.jsxs)(p.default,{alignItems:"center",mt:"6px",children:[(0,e.jsx)(r.SemiSpan,{pr:"0.5rem",fontWeight:"600",color:"primary.main",children:A}),n&&(0,e.jsx)(r.SemiSpan,{color:"text.muted",fontWeight:"600",children:(0,e.jsx)("del",{children:C})})]})]}),(0,e.jsxs)(p.default,{width:"30px",alignItems:"center",flexDirection:"column-reverse",justifyContent:b?"space-between":"flex-start",children:[(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:se((b?.qty||0)+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})}),b?.qty&&(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(r.SemiSpan,{color:"text.primary",fontWeight:"600",children:b.qty}),(0,e.jsx)(u.z,{size:"none",padding:"5px",color:"primary",variant:"outlined",borderColor:"primary.light",onClick:se(b.qty-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})})]})]})]})}),(0,e.jsx)($,{open:w,onClose:oe,product:{id:l,images:S,slug:a,price:m,title:x}})]})},xe=d.ZP.div.withConfig({componentId:"sc-bc0d33f2-0"})`
  .image-holder {
    position: relative;
    :after {
      content: " ";
      position: absolute;
      transition: all 250ms ease-in-out;
    }
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    .image-holder:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.07);
    }
  }
`,me=t=>{let{title:l,imgUrl:n,price:i,rating:a,slug:x,off:m=0}=t;return(0,e.jsx)(v.default,{href:`/product/${x}`,children:(0,e.jsxs)(xe,{children:[(0,e.jsx)(o.default,{mb:"1rem",className:"image-holder",children:(0,e.jsx)(N(),{src:n,width:100,height:100,objectFit:"cover",layout:"responsive",alt:"bonik"})}),(0,e.jsx)(o.default,{mb:"0.5rem",children:(0,e.jsx)(q.Z,{value:a,outof:5,color:"warn",readonly:!0})}),(0,e.jsx)(r.H6,{className:"ellipsis",mb:"6px",title:l,children:l}),(0,e.jsxs)(p.default,{alignItems:"center",children:[(0,e.jsx)(r.SemiSpan,{pr:"0.3rem",fontWeight:"600",color:"primary.main",lineHeight:"1",children:(0,c.Et)(i,m)}),!!m&&(0,e.jsx)(r.Small,{color:"text.muted",lineHeight:"1",children:(0,e.jsx)("del",{children:(0,c.Aq)(i,0)})})]})]})})};var D=s(87307),W=s(37224);let fe=(0,d.ZP)("div").withConfig({componentId:"sc-8a906130-0"})`
  height: 100%;
  margin: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`,ue=(0,d.ZP)(o.default).withConfig({componentId:"sc-8a906130-1"})({borderRadius:8,overflow:"hidden",textAlign:"center",position:"relative",display:"inline-block","&:hover":{"& .hoverButtonBox":{opacity:1},"& .hoverImgBox":{filter:"blur(5px)"}}}),ge=(0,d.ZP)(o.default).withConfig({componentId:"sc-8a906130-2"})({opacity:0,top:"50%",left:"50%",width:"100%",height:"100%",position:"absolute",transition:".5s ease",transform:"translate(-50%, -50%)","& .buttonBox":{width:"100%",height:"100%",display:"flex",alignItems:"center",position:"relative",flexDirection:"column",justifyContent:"center","& .addCartButton":{bottom:20,margin:"auto",padding:"4px 14px",position:"absolute","& svg":{fontSize:16}}}}),je=(0,d.ZP)(o.default).withConfig({componentId:"sc-8a906130-3"})({opacity:1,padding:"44px 40px",background:"#F5F5F5",transition:"all .3s ease"}),ye=(0,d.ZP)(p.default).withConfig({componentId:"sc-8a906130-4"})({background:"#fff",overflow:"hidden",borderRadius:"5px",boxShadow:W.r.shadows[2],"& span":{width:"100%",height:"100%",display:"flex",padding:"6px 12px",alignItems:"center","&:hover":{cursor:"pointer",background:"#f3f5f9"}},"& svg":{fontSize:22,color:W.r.colors.gray[600]}}),be=(0,d.ZP)(o.default).withConfig({componentId:"sc-8a906130-5"})({padding:"1rem","& .title, & .categories":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}),ve=t=>{let{off:l,title:n,price:i,imgUrl:a,rating:x,slug:m,id:g,images:S}=t,[w,z]=(0,y.useState)(!1),{state:A,dispatch:I}=(0,P.useAppContext)(),C=A.cart.find(k=>k.id===g),f=(0,y.useCallback)(()=>z(k=>!k),[]),j=k=>()=>{I({type:"CHANGE_CART_AMOUNT",payload:{price:i,imgUrl:a,id:g,qty:k,slug:m,name:n}})};return(0,e.jsxs)(fe,{children:[(0,e.jsxs)(ue,{children:[l!==0&&(0,e.jsxs)(Z.Chip,{top:"10px",zIndex:1,left:"10px",p:"5px 10px",fontSize:"10px",fontWeight:"600",bg:"primary.main",position:"absolute",color:"primary.text",children:[l,"% off"]}),(0,e.jsx)(je,{className:"hoverImgBox",children:(0,e.jsx)(v.default,{href:`/product/${m}`,children:(0,e.jsx)(D.Z,{alt:n,width:190,height:190,src:a,layout:"responsive",objectFit:"contain"})})}),(0,e.jsx)(ge,{className:"hoverButtonBox",children:(0,e.jsxs)(o.default,{className:"buttonBox",children:[(0,e.jsxs)(ye,{children:[(0,e.jsx)(r.Span,{onClick:f,children:(0,e.jsx)(h.default,{variant:"small",children:"eye-alt"})}),(0,e.jsx)(r.Span,{children:(0,e.jsx)(h.default,{variant:"small",children:"heart"})}),(0,e.jsx)(r.Span,{onClick:j(1),children:(0,e.jsx)(h.default,{variant:"small",children:"shopping-cart"})})]}),(0,e.jsx)(u.z,{color:"primary",variant:"outlined",borderColor:"primary.light",className:"addCartButton",onClick:j(C?.qty?C?.qty-1:1),children:C?.qty?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.default,{variant:"small",mr:1,children:"minus"})," ","Remove from Cart"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.default,{variant:"small",mr:1,children:"plus"})," ","Add to Cart"]})})]})})]}),(0,e.jsxs)(be,{children:[(0,e.jsx)(v.default,{href:"#",children:(0,e.jsx)(r.H3,{mb:1,title:n,fontSize:"14px",fontWeight:"600",className:"title",color:"text.secondary",children:n})}),x&&(0,e.jsxs)(o.default,{display:"flex",alignItems:"center",children:[(0,e.jsx)(q.Z,{value:x||0,color:"warn"})," ",(0,e.jsx)(r.Span,{sx:{color:"grey.600"},ml:1,children:`(${x}.0)`})]}),(0,e.jsxs)(p.default,{alignItems:"center",mt:.5,children:[(0,e.jsx)(o.default,{fontWeight:"600",color:"primary.main",mr:2,children:(0,c.Et)(i,l)}),l!==0&&(0,e.jsx)(o.default,{color:"grey.600",fontWeight:"600",children:(0,e.jsx)("del",{children:(0,c.Aq)(i)})})]})]}),(0,e.jsx)($,{open:w,onClose:f,product:{id:g,images:S,slug:m,price:i,title:n}})]})},we=(0,d.ZP)(o.default).withConfig({componentId:"sc-af0d3d21-0"})(({theme:t})=>({height:"100%",margin:"auto",borderRadius:0,overflow:"hidden",position:"relative",transition:"all 250ms ease-in-out",outline:`2px solid ${t.colors.gray[200]}`,"&:hover":{boxShadow:t.shadows[4],"& .controlBox":{display:"block"}}})),Ce=(0,d.ZP)(o.default).withConfig({componentId:"sc-af0d3d21-1"})(({theme:t})=>({background:t.colors.primary[50]})),Se=(0,d.ZP)(o.default).withConfig({componentId:"sc-af0d3d21-2"})({padding:"1rem","& .title, & .categories":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}),ke=(0,d.ZP)(o.default).withConfig({componentId:"sc-af0d3d21-3"})(({theme:t})=>({width:40,height:42,zIndex:11,top:"0px",right:"30px",fontSize:"12px",position:"absolute",backgroundColor:t.colors.primary.main,"& .triangle-left":{width:0,height:0,borderTop:"0px solid transparent",borderBottom:"10px solid transparent",borderLeft:`20px solid ${t.colors.primary.main}`},"& .triangle-right":{width:0,height:0,borderTop:"0px solid transparent",borderBottom:"10px solid transparent",borderRight:`20px solid ${t.colors.primary.main}`}})),Ie=(0,d.ZP)(r.Span).withConfig({componentId:"sc-af0d3d21-4"})({color:"#fff",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),ze=(0,d.ZP)(p.default).withConfig({componentId:"sc-af0d3d21-5"})(({theme:t})=>({gap:8,padding:"10px 5px","& span":{width:12,height:12,borderRadius:8,"&:hover":{cursor:"pointer",outline:`2px solid ${t.colors.gray[200]}`}}})),le=(0,d.ZP)(u.z).withConfig({componentId:"sc-af0d3d21-6"})(({theme:t})=>({maxWidth:32,maxHeight:32,borderRadius:0,transition:"all 0.3s",color:t.colors.primary.main,borderColor:t.colors.primary.main,"& svg path":{fill:`${t.colors.primary.main} !important`},"&:hover":{color:"#fff",background:t.colors.primary.main,border:`1px solid ${t.colors.primary.main}`,"& svg path":{fill:"white !important"}}})),Ae=t=>{let{off:l,status:n,id:i,title:a,price:x,imgUrl:m,rating:g,productColors:S,slug:w}=t,{state:z,dispatch:A}=(0,P.useAppContext)(),I=z.cart.find(f=>f.slug===w),C=f=>()=>{A({type:"CHANGE_CART_AMOUNT",payload:{price:x,imgUrl:m,id:i,qty:f,slug:w,name:a}})};return(0,e.jsxs)(we,{children:[(0,e.jsx)(v.default,{href:`/product/${w}`,children:(0,e.jsxs)(Ce,{id:"imgBox",children:[n&&(0,e.jsxs)(ke,{children:[(0,e.jsx)(Ie,{children:n}),(0,e.jsxs)(o.default,{width:"100%",display:"flex",children:[(0,e.jsx)(o.default,{className:"triangle-left"}),(0,e.jsx)(o.default,{className:"triangle-right"})]})]}),!!l&&(0,e.jsxs)(Z.Chip,{top:"10px",zIndex:1,left:"10px",p:"5px 10px",fontSize:"10px",fontWeight:"600",bg:"primary.main",position:"absolute",color:"primary.text",children:[l,"% off"]}),(0,e.jsx)(D.Z,{width:400,height:400,src:m,id:"productImg",style:{width:"100%",height:"auto"},alt:"bonik"})]})}),(0,e.jsx)(Se,{children:(0,e.jsxs)(p.default,{children:[(0,e.jsxs)(o.default,{flex:"1 1 0",minWidth:"0px",mr:1,children:[(0,e.jsx)(v.default,{href:`/product/${w}`,children:(0,e.jsx)(r.H3,{mb:1,title:a,fontSize:"24px",fontWeight:"700",className:"title",color:"text.secondary",children:a})}),g&&(0,e.jsxs)(o.default,{display:"flex",alignItems:"center",children:[(0,e.jsx)(q.Z,{value:g||0,color:"warn"})," ",(0,e.jsx)(r.Span,{sx:{color:"grey.600"},ml:1,children:`(${g}.0)`})]}),(0,e.jsx)(ze,{children:S.map((f,j)=>(0,e.jsx)(r.Span,{style:{background:f}},j))}),(0,e.jsxs)(p.default,{alignItems:"center",mt:.5,children:[(0,e.jsx)(o.default,{fontWeight:"600",color:"primary.main",mr:".5rem",children:(0,c.Et)(x,l)}),l>0&&(0,e.jsx)(o.default,{color:"grey.600",fontWeight:"600",children:(0,e.jsx)("del",{children:(0,c.Aq)(x)})})]})]}),(0,e.jsxs)(p.default,{width:"30px",alignItems:"center",className:"add-cart",flexDirection:"column-reverse",justifyContent:I?.qty?"space-between":"flex-start",children:[(0,e.jsx)(le,{variant:"outlined",onClick:C((I?.qty||0)+1),children:(0,e.jsx)(h.default,{variant:"small",children:"plus"})}),I?.qty&&(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(o.default,{color:"text.primary",fontWeight:"600",children:I.qty}),(0,e.jsx)(le,{variant:"outlined",onClick:C(I.qty-1),children:(0,e.jsx)(h.default,{variant:"small",children:"minus"})})]})]})]})})]})},Ze=(0,d.ZP)(o.default).withConfig({componentId:"sc-df338d6c-0"})({textAlign:"center",transition:"all 0.3s","&:hover":{"& h6":{color:W.r.colors.marron.main}}}),Ne=(0,d.ZP)(o.default).withConfig({componentId:"sc-df338d6c-1"})({padding:"0 40px 20px 40px",background:W.r.colors.marron[100]}),qe=t=>{let{imgUrl:l,title:n,available:i}=t;return(0,e.jsxs)(Ze,{children:[(0,e.jsx)(Ne,{children:(0,e.jsx)(D.Z,{src:l,width:100,height:100,style:{width:"100%",objectFit:"contain"},alt:"bonik"})}),(0,e.jsx)(r.H6,{fontSize:15,mt:"8px",mb:"2px",children:n}),(0,e.jsx)(r.Paragraph,{color:"gray.600",children:i})]})},We=(0,d.ZP)(o.default).withConfig({componentId:"sc-2e336517-0"})({height:"100%",margin:"auto",borderRadius:0,overflow:"hidden",position:"relative",transition:"all 250ms ease-in-out","&:hover":{boxShadow:W.r.shadows[6],"& .controlBox":{display:"flex",bottom:0}}}),Pe=(0,d.ZP)(o.default).withConfig({componentId:"sc-2e336517-1"})({height:"200px",overflow:"hidden",position:"relative",padding:"0 40px 20px 40px",background:W.r.colors.marron[100],display:"flex",alignItems:"center",justifyContent:"center"}),$e=(0,d.ZP)(p.default).withConfig({componentId:"sc-2e336517-2"})({width:35,right:15,height:120,bottom:-120,overflow:"hidden",background:"#fff",position:"absolute",flexDirection:"column",transition:"bottom 0.3s ease-in-out","& svg":{fontSize:18,color:W.r.colors.gray[600]},"& span":{width:"100%",height:"100%",display:"flex",padding:"8px 10px",alignItems:"center",justifyContent:"center","&:hover":{cursor:"pointer",background:W.r.colors.marron.main,"& svg":{color:"#fff"}}}}),He=(0,d.ZP)(o.default).withConfig({componentId:"sc-2e336517-3"})({padding:"1rem","& .title, & .categories":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}),Re=(0,d.ZP)(Z.Chip).withConfig({componentId:"sc-2e336517-4"})({zIndex:11,top:"16px",left:"0px",color:"white",borderRadius:0,fontWeight:600,fontSize:"10px",padding:"3px 7px",position:"absolute",background:W.r.colors.marron.main}),Ue=t=>{let{off:l,id:n,title:i,price:a,imgUrl:x,rating:m,slug:g,images:S}=t,[w,z]=(0,y.useState)(!1),{state:A,dispatch:I}=(0,P.useAppContext)(),C=A.cart.find(j=>j.slug===g),f=(0,y.useCallback)(()=>z(j=>!j),[]);return(0,e.jsxs)(We,{children:[(0,e.jsxs)(Pe,{id:"imgBox",children:[l!==0&&(0,e.jsxs)(Re,{color:"primary",children:[l,"% off"]}),(0,e.jsx)(v.default,{href:`/product/${g}`,children:(0,e.jsx)(D.Z,{src:x,width:200,height:200,alt:"bonik",style:{height:"auto",width:"100%",objectFit:"contain"}})}),(0,e.jsxs)($e,{className:"controlBox",children:[(0,e.jsx)(r.Span,{onClick:f,children:(0,e.jsx)(h.default,{variant:"small",children:"eye-alt"})}),(0,e.jsx)(r.Span,{children:(0,e.jsx)(h.default,{variant:"small",children:"heart"})}),(0,e.jsx)(r.Span,{onClick:()=>{let j={id:n,slug:g,price:a,imgUrl:x,name:i,qty:(C?.qty||0)+1};I({type:"CHANGE_CART_AMOUNT",payload:j})},children:(0,e.jsx)(h.default,{variant:"small",children:"shopping-cart"})})]})]}),(0,e.jsx)($,{open:w,onClose:f,product:{id:n,slug:g,images:S,price:a,title:i}}),(0,e.jsxs)(He,{children:[(0,e.jsxs)(p.default,{justifyContent:"center",children:[(0,e.jsx)(r.Paragraph,{pr:2,fontWeight:"500",color:"marron.main",children:(0,c.Et)(a,l)}),l!==0&&(0,e.jsx)(r.Paragraph,{color:"gray.600",fontWeight:"500",children:(0,e.jsx)("del",{children:(0,c.Aq)(a)})})]}),(0,e.jsx)(v.default,{href:`/product/${g}`,children:(0,e.jsx)(r.H3,{my:"6px",title:i,fontSize:"15px",fontWeight:"600",className:"title",textAlign:"center",color:"text.secondary",children:i})}),m&&(0,e.jsxs)(p.default,{alignItems:"center",justifyContent:"center",children:[(0,e.jsx)(q.Z,{value:m||0,color:"warn"})," ",(0,e.jsx)(r.Span,{ml:1,color:W.r.colors.gray[600],children:`(${m}.0)`})]})]})]})};var ne=s(59786);let _e=(0,d.ZP)(U.default).withConfig({componentId:"sc-a00e6e64-0"})(({theme:t})=>({margin:"auto",height:"100%",display:"flex",overflow:"hidden",position:"relative",flexDirection:"column",justifyContent:"space-between",transition:"all 250ms ease-in-out",borderRadius:"0px 10px 10px 10px","&:hover":{boxShadow:t.shadows[2],"& .controller":{right:1}}})),Te=(0,d.ZP)(o.default).withConfig({componentId:"sc-a00e6e64-1"})({textAlign:"center",position:"relative",display:"inline-block"}),Fe=(0,d.ZP)(o.default).withConfig({componentId:"sc-a00e6e64-2"})(({theme:t})=>({padding:"44px 40px",borderBottom:`1px solid ${t.colors.gray[300]}`})),Ee=(0,d.ZP)(p.default).withConfig({componentId:"sc-a00e6e64-3"})(({theme:t})=>({top:0,bottom:0,width:25,right:-30,height:120,margin:"auto",overflow:"hidden",borderRadius:"5px",background:"#fff",alignItems:"center",position:"absolute",flexDirection:"column",boxShadow:t.shadows[2],justifyContent:"space-between",transition:"right 0.3s ease-in-out","& svg":{fontSize:18,color:t.colors.gray[600]},"& span":{width:"100%",height:"100%",display:"flex",padding:"10px 0px",alignItems:"center",justifyContent:"center","&:hover":{cursor:"pointer",background:"#f3f5f9"}},"& a":{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{cursor:"pointer",background:"#f3f5f9"}}})),Be=(0,d.ZP)(Z.Chip).withConfig({componentId:"sc-a00e6e64-4"})(({theme:t})=>({zIndex:11,top:"16px",left:"0px",color:"white",fontWeight:600,fontSize:"11px",padding:"3px 12px",position:"absolute",borderRadius:"0px 50px 50px 0px",background:t.colors.primary.main})),Oe=(0,d.ZP)(o.default).withConfig({componentId:"sc-a00e6e64-5"})({padding:"1rem","& .title, & .categories":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}),De=(0,d.ZP)(p.default).withConfig({componentId:"sc-a00e6e64-6"})(({theme:t})=>({gap:10,marginTop:"15px",justifyContent:"space-between","& button":{color:"#fff",background:t.colors.primary.main,"&:hover":{background:t.colors.primary[400]}},"& button svg path":{fill:"white !important"}})),Me=t=>{let{off:l,id:n,title:i,price:a,imgUrl:x,rating:m,hoverEffect:g,slug:S,images:w}=t,{state:z,dispatch:A}=(0,P.useAppContext)(),[I,C]=(0,y.useState)(!1),f=z.cart.find(b=>b.id===n),j=(0,y.useCallback)(()=>C(b=>!b),[]),k=b=>()=>{A({type:"CHANGE_CART_AMOUNT",payload:{price:a,imgUrl:x,id:n,qty:b,slug:S,name:i}})};return(0,e.jsxs)(_e,{hoverEffect:g,children:[(0,e.jsxs)(Te,{children:[l!==0&&(0,e.jsx)(Be,{color:"primary",children:`${l}% off`}),(0,e.jsxs)(Fe,{children:[(0,e.jsx)(v.default,{href:`/product/${S}`,children:(0,e.jsx)(D.Z,{alt:i,src:x,width:190,height:190,layout:"responsive",objectFit:"contain"})}),(0,e.jsxs)(Ee,{className:"controller",children:[(0,e.jsx)(r.Span,{onClick:j,children:(0,e.jsx)(h.default,{variant:"small",children:"eye-alt"})}),(0,e.jsx)(ne.default,{}),(0,e.jsx)(r.Span,{children:(0,e.jsx)(h.default,{variant:"small",children:"heart"})}),(0,e.jsx)(ne.default,{}),(0,e.jsx)(r.Span,{onClick:k(1),children:(0,e.jsx)(h.default,{variant:"small",children:"shopping-cart"})})]})]})]}),(0,e.jsx)($,{open:I,onClose:j,product:{id:n,images:w,slug:S,price:a,title:i}}),(0,e.jsxs)(Oe,{children:[(0,e.jsxs)(o.default,{flex:"1 1 0",minWidth:"0px",mr:1,children:[(0,e.jsx)(v.default,{href:`/product/${S}`,children:(0,e.jsx)(r.H3,{mb:1,title:i,fontSize:"14px",fontWeight:"600",className:"title",color:"text.secondary",children:i})}),m&&(0,e.jsxs)(p.default,{alignItems:"center",children:[(0,e.jsx)(q.Z,{value:m||0,color:"warn"})," ",(0,e.jsx)(r.Span,{ml:1,children:`(${m}.0)`})]}),(0,e.jsxs)(p.default,{alignItems:"center",mt:.5,children:[(0,e.jsx)(o.default,{fontWeight:"600",color:"primary.main",mr:1,children:(0,c.Et)(a,l)}),l!==0&&(0,e.jsx)(o.default,{color:"grey.600",fontWeight:"600",children:(0,e.jsx)("del",{children:(0,c.Aq)(a)})})]})]}),(0,e.jsxs)(De,{children:[(0,e.jsx)(u.z,{variant:"contained",onClick:k(f?.qty?f.qty-1:1),style:{paddingTop:"3px",paddingBottom:"3px",width:"100%",fontSize:"13px"},children:f?.qty?(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(h.default,{size:"16px",children:"minus"})," Remove from Cart"]}):(0,e.jsxs)(y.Fragment,{children:[(0,e.jsx)(h.default,{size:"16px",children:"plus"})," Add to Cart"]})}),(0,e.jsx)(u.z,{variant:"contained",style:{padding:"3px 8px"},children:(0,e.jsx)(h.default,{size:"16px",children:"heart"})})]})]})]})},Ge=(0,d.ZP)(o.default).withConfig({componentId:"sc-2a493c71-0"})({":hover":{"& .product-actions":{right:10},"& img":{transform:"scale(1.1)"},"& .product-view-action":{opacity:1}}}),Le=(0,d.ZP)(o.default).withConfig({componentId:"sc-2a493c71-1"})({maxHeight:300,cursor:"pointer",overflow:"hidden",position:"relative",backgroundColor:W.r.colors.gray[300],"& img":{transition:"0.3s"}}),Je=(0,d.ZP)(u.h).withConfig({componentId:"sc-2a493c71-2"})({top:10,right:-40,position:"absolute",transition:"right 0.3s .1s",backgroundColor:"transparent"}),Qe=(0,d.ZP)(u.h).withConfig({componentId:"sc-2a493c71-3"})({top:45,right:-40,position:"absolute",transition:"right 0.3s .2s",backgroundColor:"transparent"}),Ve=(0,d.ZP)(u.z).withConfig({componentId:"sc-2a493c71-4"})({left:0,bottom:0,opacity:0,width:"100%",color:"white",borderRadius:0,position:"absolute",transition:"all 0.3s",backgroundColor:W.r.colors.secondary.main}),Ke=t=>{let{id:l,title:n,price:i,imgUrl:a,category:x,reviews:m,slug:g,images:S}=t,{state:w,dispatch:z}=(0,P.useAppContext)(),[A,I]=(0,y.useState)(!1),[C,f]=(0,y.useState)(!1),j=w.cart.find(b=>b.slug===g),k=(0,y.useCallback)(()=>I(b=>!b),[]);return(0,e.jsxs)(Ge,{children:[(0,e.jsxs)(Le,{children:[(0,e.jsx)(v.default,{href:`/product/${g}`,children:(0,e.jsx)(N(),{width:300,height:300,src:a,alt:"category",objectFit:"cover",layout:"responsive",className:"product-img"})}),(0,e.jsx)(Je,{className:"product-actions",onClick:()=>{let b={id:l,slug:g,price:i,imgUrl:a,name:n,qty:(j?.qty||0)+1};z({type:"CHANGE_CART_AMOUNT",payload:b})},children:(0,e.jsx)(h.default,{size:"18px",children:"shopping-cart"})}),(0,e.jsx)(Qe,{className:"product-actions",onClick:()=>f(b=>!b),children:(0,e.jsx)(h.default,{size:"18px",children:C?"heart-filled":"heart"})}),(0,e.jsx)(Ve,{size:"large",variant:"contained",className:"product-view-action",onClick:()=>I(!0),children:"Quick View"})]}),(0,e.jsx)($,{open:A,onClose:k,product:{id:l,images:S,slug:g,price:i,title:n}}),(0,e.jsxs)(o.default,{p:1,textAlign:"center",children:[(0,e.jsx)(r.Small,{color:"gray.500",children:x}),(0,e.jsx)(r.Paragraph,{fontWeight:"bold",children:n}),(0,e.jsx)(r.H4,{fontWeight:700,py:.5,children:(0,c.Aq)(i)}),(0,e.jsxs)(p.default,{alignItems:"center",justifyContent:"center",children:[(0,e.jsx)(q.Z,{value:4,color:"warn"}),(0,e.jsxs)(r.Small,{fontWeight:600,color:"gray.500",ml:".5rem",children:["(",m," Reviews)"]})]})]})]})},Xe=(0,d.ZP)(p.default).withConfig({componentId:"sc-3420495a-0"})({gap:"1rem",alignItems:"center","& a":{flexShrink:0},"& img":{transition:"0.3s"},":last-of-type":{marginBottom:0},":hover":{img:{transform:"scale(1.1)"}}}),Ye=t=>{let{image:l,title:n,price:i,slug:a,rating:x}=t;return(0,e.jsxs)(Xe,{mb:"1rem",children:[(0,e.jsx)(v.default,{href:`/product/${a}`,children:(0,e.jsx)(o.default,{maxWidth:100,bg:"gray.300",children:(0,e.jsx)(F.Z,{width:"100%",alt:"product",src:l})})}),(0,e.jsxs)(o.default,{children:[(0,e.jsx)(re.Z,{href:"#",children:(0,e.jsx)(r.Paragraph,{fontSize:16,children:n})}),(0,e.jsx)(r.Paragraph,{fontWeight:700,my:1,children:(0,c.Aq)(i)}),(0,e.jsx)(q.Z,{value:x,size:"small",color:"warn"})]})]})},et=(0,d.ZP)(o.default).withConfig({componentId:"sc-47ca5f8e-0"})({borderRadius:"3px",transition:"all 0.3s",backgroundColor:"white",border:`1px solid ${W.r.colors.gray[100]}`,":hover":{border:"1px solid #000","& .product-actions":{right:5},"& img":{transform:"scale(1.1)"}}}),tt=(0,d.ZP)(o.default).withConfig({componentId:"sc-47ca5f8e-1"})({width:"100%",maxHeight:300,cursor:"pointer",overflow:"hidden",position:"relative","& img":{transition:"0.3s"}}),it=(0,d.ZP)(u.h).withConfig({componentId:"sc-47ca5f8e-2"})({top:10,right:-40,position:"absolute",transition:"right 0.3s .1s",background:"transparent"}),rt=(0,d.ZP)(u.h).withConfig({componentId:"sc-47ca5f8e-3"})({top:45,right:-40,position:"absolute",background:"transparent",transition:"right 0.3s .2s"}),lt=t=>{let{img:l,name:n,price:i,reviews:a,id:x,slug:m,images:g}=t,{state:S,dispatch:w}=(0,P.useAppContext)(),[z,A]=(0,y.useState)(!1),[I,C]=(0,y.useState)(!1),f=S.cart.find(j=>j.slug===m);return(0,e.jsxs)(y.Fragment,{children:[(0,e.jsxs)(et,{height:"100%",children:[(0,e.jsxs)(tt,{children:[(0,e.jsx)(v.default,{href:`/product/${m}`,children:(0,e.jsx)(N(),{src:l,width:300,height:300,alt:"category",objectFit:"cover",layout:"responsive",className:"product-img"})}),(0,e.jsx)(it,{className:"product-actions",onClick:()=>A(!0),children:(0,e.jsx)(h.default,{size:"18px",children:"eye"})}),(0,e.jsx)(rt,{className:"product-actions",onClick:()=>C(j=>!j),children:I?(0,e.jsx)(h.default,{size:"18px",children:"heart-filled"}):(0,e.jsx)(h.default,{size:"18px",children:"heart"})})]}),(0,e.jsxs)(o.default,{p:2,textAlign:"center",children:[(0,e.jsx)(r.Paragraph,{children:n}),(0,e.jsx)(r.H4,{fontWeight:700,py:".5rem",children:(0,c.Aq)(i)}),(0,e.jsxs)(p.default,{justifyContent:"center",alignItems:"center",mb:"1rem",children:[(0,e.jsx)(q.Z,{value:4,color:"warn",size:"small"}),(0,e.jsxs)(r.Small,{fontWeight:600,color:"gray.500",ml:".3rem",children:["(",a,")"]})]}),(0,e.jsx)(u.z,{fullwidth:!0,color:"dark",variant:"outlined",onClick:()=>{let j={id:x,slug:m,name:n,price:i,imgUrl:l,qty:(f?.qty||0)+1};w({type:"CHANGE_CART_AMOUNT",payload:j})},children:"Add To Cart"})]})]}),(0,e.jsx)($,{open:z,onClose:()=>A(j=>!j),product:{id:x,images:g,price:i,slug:m,title:n}})]})}},st=(te,B,s)=>{"use strict";s.d(B,{Z:()=>N});var e=s(23714),v=s(75939);let R=(0,v.ZP)(e.default).withConfig({componentId:"sc-a81f4d1-0"})`
  overflow: hidden;
  position: relative;
  :after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    content: " ";
    position: absolute;
    transition: all 250ms ease-in-out;
  }
  :hover:after {
    background: rgba(0, 0, 0, 0.3);
  }
`,N=R};export{ot as __chunk_1021,st as __chunk_65435,nt as __chunk_74983};
