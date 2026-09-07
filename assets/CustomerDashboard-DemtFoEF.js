var S=Object.defineProperty,T=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var j=(o,r,t)=>r in o?S(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,_=(o,r)=>{for(var t in r||(r={}))O.call(r,t)&&j(o,t,r[t]);if(N)for(var t of N(r))B.call(r,t)&&j(o,t,r[t]);return o},D=(o,r)=>T(o,k(r));var b=(o,r,t)=>new Promise((m,u)=>{var p=i=>{try{e(t.next(i))}catch(l){u(l)}},x=i=>{try{e(t.throw(i))}catch(l){u(l)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(p,x);e((t=t.apply(o,r)).next())});import{j as s}from"./pdfVendor-DdAo4azW.js";import{f as L,a as c}from"./reactVendor-BrBFq9LG.js";import{u as H,a as I,L as M,A as q}from"./index-BtTUl-qJ.js";import{F}from"./index-CEO5iyI_.js";import R from"./PaymentHistory-DiQlhOKY.js";import{D as $}from"./DashboardHeader-BQyTEJlh.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-jE8dGr1d.js";import"./useApiLoading-0lW1cajJ.js";import"./ClockIcon-CCcvREjO.js";import"./PlatformClassProvider-B0Q0W-gD.js";function ee(){var y,v,w;const o=L(),{t:r}=H(),{appSelector:t,dispatch:m}=I(),[u,p]=c.useState(!1),{loginData:x,selectedAdmin:e}=t(a=>a.app),i=(x==null?void 0:x.admins)||[],l=c.useCallback(a=>{m({type:"APP_SET_SELECTED_ADMIN",payload:a,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[m]),g=c.useCallback(()=>{p(!0)},[]);c.useEffect(()=>{!e&&i.length>0&&l(i[0])},[i,e,l]),c.useEffect(()=>{M.requestPermissions(),P()},[]),c.useEffect(()=>{b(null,null,function*(){yield m(yield q({apiUrl:"auth/customer/session",loader:!1,apiSuccessCallBack:a=>{const{user:n}=a,d=D(_({},x),{role:n.role,user:n,admins:n.admins||[]});if(m({type:"APP_SET_LOGIN_DATA",payload:d,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),e!=null&&e._id){const h=((n==null?void 0:n.admins)||[]).find(E=>E._id===e._id);h&&l(h)}}}))})},[]);const f=()=>{var a;(a=e==null?void 0:e.customer)!=null&&a._id&&o(`/customerBill/${e.customer._id}`)},P=()=>b(null,null,function*(){try{return(yield F.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(a){return console.error("Permission error:",(a==null?void 0:a.message)||a),!1}}),C=c.useMemo(()=>{var n,d;const a=[{icon:"fa-file-invoice",label:r("dashboard.customerDashboard.viewBillTitle"),onClick:f},{icon:"fa-indian-rupee-sign",label:r("dashboard.customerDashboard.paymentsTitle"),onClick:g}];return(n=e==null?void 0:e.settings)!=null&&n.allowOtherSaleOrder&&((d=e==null?void 0:e.settings)==null?void 0:d.allowCounterSale)!==!1&&a.push({icon:"fa-basket-shopping",label:r("dashboard.customerDashboard.myOrdersTitle"),onClick:()=>o("/myOrders")}),a},[r,e,o]);return s.jsxs(s.Fragment,{children:[s.jsx($,{roleLabel:r("dashboard.header.roleCustomer"),identityName:((y=e==null?void 0:e.customer)==null?void 0:y.name)||r("dashboard.header.roleCustomer"),identityRole:r("dashboard.header.roleCustomer"),menuItems:C}),s.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(i==null?void 0:i.length)>1&&s.jsx("div",{className:"px-3 sm:px-4",children:s.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:i.map((a,n)=>{var h;const d=(e==null?void 0:e._id)===a._id;return s.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:s.jsx("div",{onClick:()=>l(a),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${d?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:s.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${d?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:s.jsxs("div",{className:"space-y-1 w-full",children:[s.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:a.name}),s.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((h=a.company)==null?void 0:h.companyName)||r("dashboard.customerDashboard.noCompany")}),s.jsx("p",{className:"text-xs text-gray-900 truncate",children:a.phone||r("dashboard.customerDashboard.noPhone")})]})})})},a._id)})})}),e&&s.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:s.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[s.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:s.jsx("div",{onClick:f,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500\r
                    shadow-[0_10px_40px_rgba(251,191,36,0.35)] transition-all duration-500`,children:s.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[s.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 opacity-20 blur-3xl rounded-full"}),s.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-yellow-600 to-amber-500\r
                            text-white shadow-lg\r
                        `,children:s.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.viewBillTitle")}),s.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.viewBillDesc")})]})]})})}),s.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:s.jsx("div",{onClick:g,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500\r
                    shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-500`,children:s.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[s.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-blue-400 opacity-20 blur-3xl rounded-full"}),s.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-blue-500 to-indigo-700\r
                            text-white shadow-lg\r
                        `,children:s.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.paymentsTitle")}),s.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.paymentsDesc")})]})]})})})]})})]}),u&&((v=e==null?void 0:e.customer)!=null&&v._id)?s.jsx(R,{open:u,onClose:()=>p(!1),customerId:(w=e==null?void 0:e.customer)==null?void 0:w._id,userAdminId:e==null?void 0:e._id}):""]})}export{ee as CustomerDashboard,ee as default};
