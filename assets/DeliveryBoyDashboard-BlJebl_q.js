var j=Object.defineProperty,B=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var E=(l,e,i)=>e in l?j(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,f=(l,e)=>{for(var i in e||(e={}))k.call(e,i)&&E(l,i,e[i]);if(D)for(var i of D(e))C.call(e,i)&&E(l,i,e[i]);return l},b=(l,e)=>B(l,T(e));var u=(l,e,i)=>new Promise((t,o)=>{var n=d=>{try{r(i.next(d))}catch(c){o(c)}},m=d=>{try{r(i.throw(d))}catch(c){o(c)}},r=d=>d.done?t(d.value):Promise.resolve(d.value).then(n,m);r((i=i.apply(l,e)).next())});import{j as a,m as w}from"./uiVendor-CQWyHtf0.js";import{f as P,a as y}from"./reactVendor-BrBFq9LG.js";import{u as L,a as Y,b as I,A as g,h as M}from"./index-0eC_Ucq-.js";import{D as R}from"./DashboardHeader-FAO90zqd.js";import"./pdfVendor-Dbth1RHn.js";import"./reduxVendor-C8DwjTzm.js";function K(){var _;const l=P(),{t:e}=L(),{appSelector:i,dispatch:t}=Y(),{loginData:o={}}=i(s=>s.app),n=(o==null?void 0:o.admins)||[],{userData:m}=I(),{selectedAdmin:r}=i(s=>s.app),d=y.useCallback(s=>u(null,null,function*(){t(yield g({apiUrl:`auth/admin?userAdminId=${s}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[t]),c=y.useCallback(s=>{t({type:"APP_SET_SELECTED_ADMIN",payload:s,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[t]),A=y.useCallback(s=>u(null,null,function*(){t(yield g({apiUrl:`deliveryBoy/access/${s}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[t]);y.useEffect(()=>{r||(c(n[0]),d(n[0]._id))},[n,r]),y.useEffect(()=>{u(null,null,function*(){yield t(yield g({apiUrl:"auth/deliveryBoy/session",loader:!1,apiSuccessCallBack:s=>{var h;const p=((h=s==null?void 0:s.user)==null?void 0:h.admins)||[];if(p.length&&(t({type:"APP_SET_LOGIN_DATA",payload:b(f({},o),{user:b(f({},o==null?void 0:o.user),{admins:p})}),name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),r!=null&&r._id)){const x=p.find(S=>S._id===r._id);x&&c(x)}}}))})},[]);const v=()=>{(m==null?void 0:m.role)==="admin-delivery-boy"&&(t({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1,showBillColumn:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),t({type:"APP_UPDATE_DAILY_SALE_DATE",payload:M().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),l(`/deliveryBoy/register/${r.deliveryBoy._id}`))};y.useEffect(()=>{r&&A(r.deliveryBoy._id)},[r]);const N=y.useMemo(()=>[{icon:"fa-bottle-water",label:e("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:v}],[e,r]);return a.jsxs(a.Fragment,{children:[a.jsx(R,{roleLabel:e("dashboard.header.roleDeliveryBoy"),identityName:((_=r==null?void 0:r.deliveryBoy)==null?void 0:_.name)||e("dashboard.header.roleDeliveryBoy"),identityRole:e("dashboard.header.roleDeliveryBoy"),menuItems:N}),a.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(n==null?void 0:n.length)>1&&a.jsx("div",{className:"px-3 sm:px-4",children:a.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:n.map((s,p)=>{var x;const h=(r==null?void 0:r._id)===s._id;return a.jsx(w.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:p*.04},className:"min-w-[160px] sm:min-w-0",children:a.jsx("div",{onClick:()=>c(s),className:`
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
        `,children:a.jsx(w.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:a.jsx("div",{onClick:()=>v(),className:`relative cursor-pointer rounded-lg p-[1px]\r
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
