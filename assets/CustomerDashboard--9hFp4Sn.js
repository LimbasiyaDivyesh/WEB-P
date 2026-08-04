var S=Object.defineProperty,k=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var D=(o,r,t)=>r in o?S(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,b=(o,r)=>{for(var t in r||(r={}))B.call(r,t)&&D(o,t,r[t]);if(P)for(var t of P(r))L.call(r,t)&&D(o,t,r[t]);return o},g=(o,r)=>k(o,H(r));var f=(o,r,t)=>new Promise((d,x)=>{var h=i=>{try{s(t.next(i))}catch(l){x(l)}},n=i=>{try{s(t.throw(i))}catch(l){x(l)}},s=i=>i.done?d(i.value):Promise.resolve(i.value).then(h,n);s((t=t.apply(o,r)).next())});import{j as e,m as y}from"./uiVendor-CQWyHtf0.js";import{f as I,a as c}from"./reactVendor-BrBFq9LG.js";import{u as M,a as O,L as q,A as F}from"./index-0eC_Ucq-.js";import{F as R}from"./index-Bbo2-EVl.js";import $ from"./PaymentHistory-mbEJX2ga.js";import{D as A}from"./DashboardHeader-FAO90zqd.js";import"./pdfVendor-Dbth1RHn.js";import"./reduxVendor-C8DwjTzm.js";import"./useApiLoading-DMNacWgk.js";import"./ClockIcon-CCcvREjO.js";function ee(){var N,j,_;const o=I(),{t:r}=M(),{appSelector:t,dispatch:d}=O(),[x,h]=c.useState(!1),{loginData:n,selectedAdmin:s}=t(a=>a.app),i=(n==null?void 0:n.admins)||[],l=c.useCallback(a=>{d({type:"APP_SET_SELECTED_ADMIN",payload:a,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[d]),v=c.useCallback(()=>{h(!0)},[]);c.useEffect(()=>{!s&&i.length>0&&l(i[0])},[i,s,l]),c.useEffect(()=>{q.requestPermissions(),C()},[]),c.useEffect(()=>{f(null,null,function*(){yield d(yield F({apiUrl:"auth/customer/session",loader:!1,apiSuccessCallBack:a=>{var p;const m=((p=a==null?void 0:a.user)==null?void 0:p.admins)||[];if(m.length&&(d({type:"APP_SET_LOGIN_DATA",payload:g(b({},n),{user:g(b({},n==null?void 0:n.user),{admins:m})}),name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),s!=null&&s._id)){const u=m.find(E=>E._id===s._id);u&&l(u)}}}))})},[]);const w=()=>{var a;(a=s==null?void 0:s.customer)!=null&&a._id&&o(`/customerBill/${s.customer._id}`)},C=()=>f(null,null,function*(){try{return(yield R.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(a){return console.error("Permission error:",(a==null?void 0:a.message)||a),!1}}),T=c.useMemo(()=>[{icon:"fa-file-invoice",label:r("dashboard.customerDashboard.viewBillTitle"),onClick:w},{icon:"fa-indian-rupee-sign",label:r("dashboard.customerDashboard.paymentsTitle"),onClick:v}],[r,s]);return e.jsxs(e.Fragment,{children:[e.jsx(A,{roleLabel:r("dashboard.header.roleCustomer"),identityName:((N=s==null?void 0:s.customer)==null?void 0:N.name)||r("dashboard.header.roleCustomer"),identityRole:r("dashboard.header.roleCustomer"),menuItems:T}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(i==null?void 0:i.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:i.map((a,m)=>{var u;const p=(s==null?void 0:s._id)===a._id;return e.jsx(y.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:m*.04},className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>l(a),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${p?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${p?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:a.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((u=a.company)==null?void 0:u.companyName)||r("dashboard.customerDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:a.phone||r("dashboard.customerDashboard.noPhone")})]})})})},a._id)})})}),s&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[e.jsx(y.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:w,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.viewBillTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.viewBillDesc")})]})]})})}),e.jsx(y.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.05},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:v,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.paymentsTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.paymentsDesc")})]})]})})})]})})]}),x&&((j=s==null?void 0:s.customer)!=null&&j._id)?e.jsx($,{open:x,onClose:()=>h(!1),customerId:(_=s==null?void 0:s.customer)==null?void 0:_._id,userAdminId:s==null?void 0:s._id}):""]})}export{ee as CustomerDashboard,ee as default};
