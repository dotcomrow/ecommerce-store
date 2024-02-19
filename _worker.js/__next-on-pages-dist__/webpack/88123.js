var j=(w,i,r)=>{"use strict";r.r(i),r.d(i,{default:()=>g});var e=r(67197),t=r(51739),d=r.n(t),a=r(4164),n=r(99570),s=r(75939),c=r(23689),o=r(43948);let p=s.ZP.div.withConfig({componentId:"sc-25aa1f5d-0"})`
  .pagination {
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    padding: 0px;

    li {
      cursor: pointer;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        margin: 0px 5px;
        border-radius: 5px;
        outline: none;
        border: 1px solid transparent;
        border-radius: 50%;
        @media only screen and (max-width: 450px) {
          margin: 4px;
        }
      }

      &:not(.active):hover {
        a {
          color: ${(0,o.gh)("colors.primary.main")};
          border: 1px solid ${(0,o.gh)("colors.primary.main")};
        }
      }
    }

    .active {
      cursor: none;
      a {
        border: 1px solid ${(0,o.gh)("colors.primary.main")};
        color: ${(0,o.gh)("colors.primary.main")};
      }
    }

    .disabled {
      .control-button {
        cursor: none;
        border: 1px solid ${(0,o.gh)("colors.primary.light")};
        color: ${(0,o.gh)("colors.primary.light")};
      }
    }
  }

  .control-button {
    height: 32px;
    width: 32px;
    min-width: 32px;
    border: 1px solid ${(0,o.gh)("colors.primary.main")};
  }

  ${c.Dh}
`,g=({onChange:l,pageCount:h,pageRangeDisplayed:m,marginPagesDisplayed:u,...x})=>{let b=async C=>{l&&l(C.selected)},y=(0,e.jsx)(n.z,{height:"auto",padding:"6px",color:"primary",overflow:"hidden",borderRadius:"50%",className:"control-button",children:(0,e.jsx)(a.default,{defaultcolor:"currentColor",variant:"small",children:"chevron-left"})}),f=(0,e.jsx)(n.z,{height:"auto",padding:"6px",color:"primary",overflow:"hidden",borderRadius:"50%",className:"control-button",children:(0,e.jsx)(a.default,{defaultcolor:"currentColor",variant:"small",children:"chevron-right"})}),v=(0,e.jsx)(a.default,{defaultcolor:"currentColor",variant:"small",children:"triple-dot"});return(0,e.jsx)(p,{...x,children:(0,e.jsx)(d(),{pageCount:h,nextLabel:f,breakLabel:v,activeClassName:"active",disabledClassName:"disabled",containerClassName:"pagination",previousLabel:y,onPageChange:b,pageRangeDisplayed:m,marginPagesDisplayed:u})})}};export{j as __chunk_88123};
