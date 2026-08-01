var p=(m,s,o)=>new Promise((i,n)=>{var t=l=>{try{a(o.next(l))}catch(d){n(d)}},y=l=>{try{a(o.throw(l))}catch(d){n(d)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(t,y);a((o=o.apply(m,s)).next())});import{j as e,m as v}from"./uiVendor-4SpGOz5-.js";import{f as E,a as c}from"./reactVendor-BrBFq9LG.js";import{u as w,a as A,b as N,A as u,h as j}from"./index-Y5tS__34.js";import{D as S}from"./DashboardHeader-T4GO2Tf3.js";import"./pdfVendor-BS7Ig1QC.js";import"./reduxVendor-C8DwjTzm.js";function M(){var h;const m=E(),{t:s}=w(),{appSelector:o,dispatch:i}=A(),{loginData:n={}}=o(r=>r.app),t=(n==null?void 0:n.admins)||[],{userData:y}=N(),{selectedAdmin:a}=o(r=>r.app),l=c.useCallback(r=>p(null,null,function*(){i(yield u({apiUrl:`auth/admin?userAdminId=${r}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[i]),d=c.useCallback(r=>{i({type:"APP_SET_SELECTED_ADMIN",payload:r,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[i]),f=c.useCallback(r=>p(null,null,function*(){i(yield u({apiUrl:`deliveryBoy/access/${r}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[i]);c.useEffect(()=>{a||(d(t[0]),l(t[0]._id))},[t,a]);const x=()=>{(y==null?void 0:y.role)==="admin-delivery-boy"&&(i({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),i({type:"APP_UPDATE_DAILY_SALE_DATE",payload:j().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),m(`/deliveryBoy/register/${a.deliveryBoy._id}`))};c.useEffect(()=>{a&&f(a.deliveryBoy._id)},[a]);const D=c.useMemo(()=>[{icon:"fa-bottle-water",label:s("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:x}],[s,a]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{roleLabel:s("dashboard.header.roleDeliveryBoy"),identityName:((h=a==null?void 0:a.deliveryBoy)==null?void 0:h.name)||s("dashboard.header.roleDeliveryBoy"),identityRole:s("dashboard.header.roleDeliveryBoy"),menuItems:D}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(t==null?void 0:t.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:t.map((r,_)=>{var g;const b=(a==null?void 0:a._id)===r._id;return e.jsx(v.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:_*.04},className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>d(r),className:`
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
        `,children:e.jsx(v.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>x(),className:`relative cursor-pointer rounded-lg p-[1px]\r
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
