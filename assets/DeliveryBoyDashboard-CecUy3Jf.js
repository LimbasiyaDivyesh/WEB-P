var S=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(l,e,i)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,D=(l,e)=>{for(var i in e||(e={}))T.call(e,i)&&_(l,i,e[i]);if(u)for(var i of u(e))k.call(e,i)&&_(l,i,e[i]);return l},E=(l,e)=>j(l,B(e));var g=(l,e,i)=>new Promise((t,n)=>{var d=o=>{try{r(i.next(o))}catch(c){n(c)}},m=o=>{try{r(i.throw(o))}catch(c){n(c)}},r=o=>o.done?t(o.value):Promise.resolve(o.value).then(d,m);r((i=i.apply(l,e)).next())});import{j as a}from"./pdfVendor-DdAo4azW.js";import{f as C,a as y}from"./reactVendor-BrBFq9LG.js";import{u as P,a as L,c as Y,A as f,h as M}from"./index-BtTUl-qJ.js";import{D as I}from"./DashboardHeader-BQyTEJlh.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-jE8dGr1d.js";import"./PlatformClassProvider-B0Q0W-gD.js";function K(){var v;const l=C(),{t:e}=P(),{appSelector:i,dispatch:t}=L(),{loginData:n={}}=i(s=>s.app),d=(n==null?void 0:n.admins)||[],{userData:m}=Y(),{selectedAdmin:r}=i(s=>s.app),o=y.useCallback(s=>g(null,null,function*(){t(yield f({apiUrl:`auth/admin?userAdminId=${s}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[t]),c=y.useCallback(s=>{t({type:"APP_SET_SELECTED_ADMIN",payload:s,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[t]),w=y.useCallback(s=>g(null,null,function*(){t(yield f({apiUrl:`deliveryBoy/access/${s}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[t]);y.useEffect(()=>{r||(c(d[0]),o(d[0]._id))},[d,r]),y.useEffect(()=>{g(null,null,function*(){yield t(yield f({apiUrl:"auth/deliveryBoy/session",loader:!1,apiSuccessCallBack:s=>{const{user:p}=s,h=E(D({},n),{role:p.role,user:p,admins:p.admins||[]});if(t({type:"APP_SET_LOGIN_DATA",payload:h,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),r!=null&&r._id){const x=((p==null?void 0:p.admins)||[]).find(N=>N._id===r._id);o(r._id),x&&c(x)}}}))})},[]);const b=()=>{(m==null?void 0:m.role)==="admin-delivery-boy"&&(t({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1,showBillColumn:!1,allowPastDateEdit:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),t({type:"APP_UPDATE_DAILY_SALE_DATE",payload:M().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),l(`/deliveryBoy/register/${r.deliveryBoy._id}`))};y.useEffect(()=>{r&&w(r.deliveryBoy._id)},[r]);const A=y.useMemo(()=>[{icon:"fa-bottle-water",label:e("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:b}],[e,r]);return a.jsxs(a.Fragment,{children:[a.jsx(I,{roleLabel:e("dashboard.header.roleDeliveryBoy"),identityName:((v=r==null?void 0:r.deliveryBoy)==null?void 0:v.name)||e("dashboard.header.roleDeliveryBoy"),identityRole:e("dashboard.header.roleDeliveryBoy"),menuItems:A}),a.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(d==null?void 0:d.length)>1&&a.jsx("div",{className:"px-3 sm:px-4",children:a.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:d.map((s,p)=>{var x;const h=(r==null?void 0:r._id)===s._id;return a.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:a.jsx("div",{onClick:()=>{c(s),o(s._id)},className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${h?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:a.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${h?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:a.jsxs("div",{className:"space-y-1 w-full",children:[a.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:s.name}),a.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((x=s.company)==null?void 0:x.companyName)||e("dashboard.deliveryBoyDashboard.noCompany")}),a.jsx("p",{className:"text-xs text-gray-900 truncate",children:s.phone||e("dashboard.deliveryBoyDashboard.noPhone")})]})})})},s._id)})})}),r&&a.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:a.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            lg:grid-cols-4\r
            gap-4 sm:gap-6\r
        `,children:a.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:a.jsx("div",{onClick:()=>b(),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600\r
                    shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all duration-500`,children:a.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[a.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-pink-400 opacity-20 blur-3xl rounded-full"}),a.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-pink-500 to-pink-600\r
                            text-white shadow-lg\r
                        `,children:a.jsx("i",{className:"fa-solid fa-bottle-water text-xl sm:text-2xl"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:e("dashboard.deliveryBoyDashboard.dailySaleTitle")}),a.jsx("p",{className:"text-xs text-gray-900",children:e("dashboard.deliveryBoyDashboard.dailySaleDesc")})]})]})})})})})]})]})}export{K as DeliveryBoyDashboard,K as default};
