var y=(p,s,o)=>new Promise((l,d)=>{var i=t=>{try{a(o.next(t))}catch(n){d(n)}},m=t=>{try{a(o.throw(t))}catch(n){d(n)}},a=t=>t.done?l(t.value):Promise.resolve(t.value).then(i,m);a((o=o.apply(p,s)).next())});import{j as e}from"./pdfVendor-DdAo4azW.js";import{f as D,a as c}from"./reactVendor-BrBFq9LG.js";import{u as _,a as E,b as A,A as v,h as N}from"./index-sNOuYGfr.js";import{D as w}from"./DashboardHeader-Dh6bddah.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-BUq2TC0A.js";import"./PlatformClassProvider-cyPdldJ7.js";function M(){var h;const p=D(),{t:s}=_(),{appSelector:o,dispatch:l}=E(),{loginData:d={}}=o(r=>r.app),i=(d==null?void 0:d.admins)||[],{userData:m}=A(),{selectedAdmin:a}=o(r=>r.app),t=c.useCallback(r=>y(null,null,function*(){l(yield v({apiUrl:`auth/admin?userAdminId=${r}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[l]),n=c.useCallback(r=>{l({type:"APP_SET_SELECTED_ADMIN",payload:r,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[l]),u=c.useCallback(r=>y(null,null,function*(){l(yield v({apiUrl:`deliveryBoy/access/${r}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[l]);c.useEffect(()=>{a||(n(i[0]),t(i[0]._id))},[i,a]);const x=()=>{(m==null?void 0:m.role)==="admin-delivery-boy"&&(l({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),l({type:"APP_UPDATE_DAILY_SALE_DATE",payload:N().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),p(`/deliveryBoy/register/${a.deliveryBoy._id}`))};c.useEffect(()=>{a&&u(a.deliveryBoy._id)},[a]);const f=c.useMemo(()=>[{icon:"fa-bottle-water",label:s("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:x}],[s,a]);return e.jsxs(e.Fragment,{children:[e.jsx(w,{roleLabel:s("dashboard.header.roleDeliveryBoy"),identityName:((h=a==null?void 0:a.deliveryBoy)==null?void 0:h.name)||s("dashboard.header.roleDeliveryBoy"),identityRole:s("dashboard.header.roleDeliveryBoy"),menuItems:f}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(i==null?void 0:i.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:i.map((r,j)=>{var g;const b=(a==null?void 0:a._id)===r._id;return e.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>n(r),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${b?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${b?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:r.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((g=r.company)==null?void 0:g.companyName)||s("dashboard.deliveryBoyDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:r.phone||s("dashboard.deliveryBoyDashboard.noPhone")})]})})})},r._id)})})}),a&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            lg:grid-cols-4\r
            gap-4 sm:gap-6\r
        `,children:e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>x(),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600\r
                    shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-pink-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-pink-500 to-pink-600\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-bottle-water text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:s("dashboard.deliveryBoyDashboard.dailySaleTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:s("dashboard.deliveryBoyDashboard.dailySaleDesc")})]})]})})})})})]})]})}export{M as DeliveryBoyDashboard,M as default};
