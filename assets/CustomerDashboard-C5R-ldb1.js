var S=Object.defineProperty,k=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(o,a,t)=>a in o?S(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,D=(o,a)=>{for(var t in a||(a={}))B.call(a,t)&&_(o,t,a[t]);if(j)for(var t of j(a))L.call(a,t)&&_(o,t,a[t]);return o},P=(o,a)=>k(o,H(a));var b=(o,a,t)=>new Promise((c,x)=>{var u=i=>{try{s(t.next(i))}catch(n){x(n)}},m=i=>{try{s(t.throw(i))}catch(n){x(n)}},s=i=>i.done?c(i.value):Promise.resolve(i.value).then(u,m);s((t=t.apply(o,a)).next())});import{j as e,m as g}from"./uiVendor-BVpC3d0N.js";import{f as I,a as d}from"./reactVendor-BrBFq9LG.js";import{u as M,a as O,L as q,A as F}from"./index-CDkkd-Nw.js";import{F as R}from"./index-CcPu66TO.js";import $ from"./PaymentHistory-BJU6IJ0H.js";import{D as G}from"./DashboardHeader-lEC6ifxi.js";import"./pdfVendor-K_pbeCMi.js";import"./reduxVendor-C8DwjTzm.js";import"./useApiLoading-CTDNGljK.js";import"./ClockIcon-CCcvREjO.js";function ee(){var v,w,N;const o=I(),{t:a}=M(),{appSelector:t,dispatch:c}=O(),[x,u]=d.useState(!1),{loginData:m,selectedAdmin:s}=t(r=>r.app),i=(m==null?void 0:m.admins)||[],n=d.useCallback(r=>{c({type:"APP_SET_SELECTED_ADMIN",payload:r,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[c]),f=d.useCallback(()=>{u(!0)},[]);d.useEffect(()=>{!s&&i.length>0&&n(i[0])},[i,s,n]),d.useEffect(()=>{q.requestPermissions(),C()},[]),d.useEffect(()=>{b(null,null,function*(){yield c(yield F({apiUrl:"auth/customer/session",loader:!1,apiSuccessCallBack:r=>{const{user:l}=r,h=P(D({},m),{role:l.role,user:l,admins:l.admins||[]});if(c({type:"APP_SET_LOGIN_DATA",payload:h,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),s!=null&&s._id){const p=((l==null?void 0:l.admins)||[]).find(E=>E._id===s._id);p&&n(p)}}}))})},[]);const y=()=>{var r;(r=s==null?void 0:s.customer)!=null&&r._id&&o(`/customerBill/${s.customer._id}`)},C=()=>b(null,null,function*(){try{return(yield R.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(r){return console.error("Permission error:",(r==null?void 0:r.message)||r),!1}}),T=d.useMemo(()=>[{icon:"fa-file-invoice",label:a("dashboard.customerDashboard.viewBillTitle"),onClick:y},{icon:"fa-indian-rupee-sign",label:a("dashboard.customerDashboard.paymentsTitle"),onClick:f}],[a,s]);return e.jsxs(e.Fragment,{children:[e.jsx(G,{roleLabel:a("dashboard.header.roleCustomer"),identityName:((v=s==null?void 0:s.customer)==null?void 0:v.name)||a("dashboard.header.roleCustomer"),identityRole:a("dashboard.header.roleCustomer"),menuItems:T}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(i==null?void 0:i.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:i.map((r,l)=>{var p;const h=(s==null?void 0:s._id)===r._id;return e.jsx(g.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:l*.04},className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>n(r),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${h?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${h?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:r.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((p=r.company)==null?void 0:p.companyName)||a("dashboard.customerDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:r.phone||a("dashboard.customerDashboard.noPhone")})]})})})},r._id)})})}),s&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[e.jsx(g.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:y,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500\r
                    shadow-[0_10px_40px_rgba(251,191,36,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-yellow-600 to-amber-500\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:a("dashboard.customerDashboard.viewBillTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:a("dashboard.customerDashboard.viewBillDesc")})]})]})})}),e.jsx(g.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.05},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:f,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500\r
                    shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-blue-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-blue-500 to-indigo-700\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:a("dashboard.customerDashboard.paymentsTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:a("dashboard.customerDashboard.paymentsDesc")})]})]})})})]})})]}),x&&((w=s==null?void 0:s.customer)!=null&&w._id)?e.jsx($,{open:x,onClose:()=>u(!1),customerId:(N=s==null?void 0:s.customer)==null?void 0:N._id,userAdminId:s==null?void 0:s._id}):""]})}export{ee as CustomerDashboard,ee as default};
