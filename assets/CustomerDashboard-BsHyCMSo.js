var j=(x,t,o)=>new Promise((c,n)=>{var m=a=>{try{r(o.next(a))}catch(i){n(i)}},d=a=>{try{r(o.throw(a))}catch(i){n(i)}},r=a=>a.done?c(a.value):Promise.resolve(a.value).then(m,d);r((o=o.apply(x,t)).next())});import{j as e,m as p}from"./uiVendor-4SpGOz5-.js";import{f as D,a as l}from"./reactVendor-BrBFq9LG.js";import{u as P,a as C,L as E}from"./index-gMWptaun.js";import{F as T}from"./index-BPCAtHCB.js";import k from"./PaymentHistory-eP38Yhwf.js";import{D as S}from"./DashboardHeader-CPTvHYRw.js";import"./pdfVendor-BS7Ig1QC.js";import"./reduxVendor-C8DwjTzm.js";import"./useApiLoading-UJK-JJXo.js";import"./ClockIcon-CCcvREjO.js";function G(){var b,g,y;const x=D(),{t}=P(),{appSelector:o,dispatch:c}=C(),[n,m]=l.useState(!1),{loginData:d,selectedAdmin:r}=o(s=>s.app),a=(d==null?void 0:d.admins)||[],i=l.useCallback(s=>{c({type:"APP_SET_SELECTED_ADMIN",payload:s,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[c]),h=l.useCallback(()=>{m(!0)},[]);l.useEffect(()=>{!r&&a.length>0&&i(a[0])},[a,r,i]),l.useEffect(()=>{E.requestPermissions(),N()},[]);const u=()=>{var s;(s=r==null?void 0:r.customer)!=null&&s._id&&x(`/customerBill/${r.customer._id}`)},N=()=>j(null,null,function*(){try{return(yield T.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(s){return console.error("Permission error:",(s==null?void 0:s.message)||s),!1}}),_=l.useMemo(()=>[{icon:"fa-file-invoice",label:t("dashboard.customerDashboard.viewBillTitle"),onClick:u},{icon:"fa-indian-rupee-sign",label:t("dashboard.customerDashboard.paymentsTitle"),onClick:h}],[t,r]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{roleLabel:t("dashboard.header.roleCustomer"),identityName:((b=r==null?void 0:r.customer)==null?void 0:b.name)||t("dashboard.header.roleCustomer"),identityRole:t("dashboard.header.roleCustomer"),menuItems:_}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(a==null?void 0:a.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:a.map((s,f)=>{var w;const v=(r==null?void 0:r._id)===s._id;return e.jsx(p.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:f*.04},className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>i(s),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${v?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${v?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:s.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((w=s.company)==null?void 0:w.companyName)||t("dashboard.customerDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:s.phone||t("dashboard.customerDashboard.noPhone")})]})})})},s._id)})})}),r&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[e.jsx(p.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:u,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:t("dashboard.customerDashboard.viewBillTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:t("dashboard.customerDashboard.viewBillDesc")})]})]})})}),e.jsx(p.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.05},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:h,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:t("dashboard.customerDashboard.paymentsTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:t("dashboard.customerDashboard.paymentsDesc")})]})]})})})]})})]}),n&&((g=r==null?void 0:r.customer)!=null&&g._id)?e.jsx(k,{open:n,onClose:()=>m(!1),customerId:(y=r==null?void 0:r.customer)==null?void 0:y._id,userAdminId:r==null?void 0:r._id}):""]})}export{G as CustomerDashboard,G as default};
