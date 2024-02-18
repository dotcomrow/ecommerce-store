var s=(l,r,e)=>{"use strict";e.d(r,{Z:()=>t});let t=[{title:"Home",child:[{title:"Market 1",url:"/market-1"},{title:"Market 2",url:"/market-2"},{title:"Fashion 1",url:"/fashion-1"},{title:"Fashion 2",url:"/fashion-2"},{title:"Fashion 3",url:"/fashion-3"},{title:"Grocery-1",url:"/grocery-1"},{title:"Grocery-2",url:"/grocery-2"},{title:"Grocery-3",url:"/grocery-3"},{title:"Gift Shop",url:"/gift-shop"},{title:"Gadget Shop",url:"/gadget-shop"},{title:"Furniture Shop",url:"/furniture-shop"},{title:"Health and Beauty",url:"/health-beauty"}]},{title:"Pages",child:[{title:"Sale Page",child:[{title:"Version 1",url:"/sale-page-1"},{title:"Version 2",url:"/sale-page-2"}]},{title:"Vendor",child:[{title:"All vendors",url:"/shops"},{title:"Vendor store",url:"/shops/scarlett-beauty"}]},{title:"Shop",child:[{title:"Search product",url:"/product/search/mobile phone"},{title:"Single product",url:"/product/lord-2019"},{title:"Cart",url:"/cart"},{title:"Checkout",url:"/checkout"},{title:"Alternative Checkout",url:"/checkout-alternative"}]}]},{title:"User Account",child:[{title:"Orders",child:[{title:"Order List",url:"/orders"},{title:"Order Details",url:"/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8"}]},{title:"Profile",child:[{title:"View Profile",url:"/profile"},{title:"Edit Profile",url:"/profile/edit"}]},{title:"Address",child:[{title:"Address List",url:"/address"},{title:"Add Address",url:"/address/create"}]},{title:"Support tickets",child:[{title:"All tickets",url:"/support-tickets"},{title:"Ticket details",url:"/support-tickets/product-broken.-i-need-refund"}]},{title:"Wishlist",url:"/wish-list"}]},{title:"Vendor Account",child:[{title:"Dashboard",url:"/vendor/dashboard"},{title:"Products",child:[{title:"All products",url:"/vendor/products"},{title:"Add/Edit product",url:"/vendor/products/248104"}]},{title:"Orders",child:[{title:"All orders",url:"/vendor/orders"},{title:"Order details",url:"/vendor/orders/248104"}]},{title:"Profile",url:"/vendor/account-settings"}]},{title:"Track My Orders",url:"/orders"},{title:"Back to Demos",url:"/"}]},c=(l,r,e)=>{"use strict";e.d(r,{Z:()=>d});var t=e(43948),i=e(75939);let o=i.ZP.div.withConfig({componentId:"sc-361cd8d3-0"})`
  position: relative;
  height: 60px;
  background: ${(0,t.gh)("colors.body.paper")};
  box-shadow: ${(0,t.gh)("shadows.regular")};

  .nav-link {
    font-size: 14px;
    /* margin-right: 32px; */
    cursor: pointer;
    :hover {
      color: ${(0,t.gh)("colors.primary.main")};
    }
  }
  .nav-link:last-child {
    margin-right: 0px;
  }

  .root-child {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 5;
  }
  .root:hover {
    .root-child {
      display: block;
    }
  }

  .child {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 5;
  }
  .parent:hover > .child {
    display: block;
  }

  .dropdown-icon {
    color: ${(0,t.gh)("colors.text.muted")};
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`,d=o};export{s as __chunk_33010,c as __chunk_39756};
