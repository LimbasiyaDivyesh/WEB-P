var j=Object.defineProperty,B=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(l,e,i)=>e in l?j(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,D=(l,e)=>{for(var i in e||(e={}))k.call(e,i)&&_(l,i,e[i]);if(v)for(var i of v(e))C.call(e,i)&&_(l,i,e[i]);return l},E=(l,e)=>B(l,T(e));var g=(l,e,i)=>new Promise((t,c)=>{var n=o=>{try{s(i.next(o))}catch(y){c(y)}},m=o=>{try{s(i.throw(o))}catch(y){c(y)}},s=o=>o.done?t(o.value):Promise.resolve(o.value).then(n,m);s((i=i.apply(l,e)).next())});import{j as a,m as w}from"./uiVendor-BVpC3d0N.js";import{f as P,a as p}from"./reactVendor-BrBFq9LG.js";import{u as L,a as Y,b as M,A as b,h as I}from"./index-BPvpaf7A.js";import{D as R}from"./DashboardHeader-CNny7cJY.js";import"./pdfVendor-K_pbeCMi.js";import"./reduxVendor-C8DwjTzm.js";function K(){var u;const l=P(),{t:e}=L(),{appSelector:i,dispatch:t}=Y(),{loginData:c={}}=i(r=>r.app),n=(c==null?void 0:c.admins)||[],{userData:m}=M(),{selectedAdmin:s}=i(r=>r.app),o=p.useCallback(r=>g(null,null,function*(){t(yield b({apiUrl:`auth/admin?userAdminId=${r}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[t]),y=p.useCallback(r=>{t({type:"APP_SET_SELECTED_ADMIN",payload:r,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[t]),A=p.useCallback(r=>g(null,null,function*(){t(yield b({apiUrl:`deliveryBoy/access/${r}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[t]);p.useEffect(()=>{s||(y(n[0]),o(n[0]._id))},[n,s]),p.useEffect(()=>{g(null,null,function*(){yield t(yield b({apiUrl:"auth/deliveryBoy/session",loader:!1,apiSuccessCallBack:r=>{const{user:d}=r,h=E(D({},c),{role:d.role,user:d,admins:d.admins||[]});if(t({type:"APP_SET_LOGIN_DATA",payload:h,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),s!=null&&s._id){const x=((d==null?void 0:d.admins)||[]).find(S=>S._id===s._id);o(s._id),x&&y(x)}}}))})},[]);const f=()=>{(m==null?void 0:m.role)==="admin-delivery-boy"&&(t({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1,showBillColumn:!1,allowPastDateEdit:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),t({type:"APP_UPDATE_DAILY_SALE_DATE",payload:I().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),l(`/deliveryBoy/register/${s.deliveryBoy._id}`))};p.useEffect(()=>{s&&A(s.deliveryBoy._id)},[s]);const N=p.useMemo(()=>[{icon:"fa-bottle-water",label:e("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:f}],[e,s]);return a.jsxs(a.Fragment,{children:[a.jsx(R,{roleLabel:e("dashboard.header.roleDeliveryBoy"),identityName:((u=s==null?void 0:s.deliveryBoy)==null?void 0:u.name)||e("dashboard.header.roleDeliveryBoy"),identityRole:e("dashboard.header.roleDeliveryBoy"),menuItems:N}),a.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(n==null?void 0:n.length)>1&&a.jsx("div",{className:"px-3 sm:px-4",children:a.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:n.map((r,d)=>{var x;const h=(s==null?void 0:s._id)===r._id;return a.jsx(w.div,{layout:!0,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:d*.04},className:"min-w-[160px] sm:min-w-0",children:a.jsx("div",{onClick:()=>{y(r),o(r._id)},className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${h?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:a.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${h?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:a.jsxs("div",{className:"space-y-1 w-full",children:[a.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:r.name}),a.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((x=r.company)==null?void 0:x.companyName)||e("dashboard.deliveryBoyDashboard.noCompany")}),a.jsx("p",{className:"text-xs text-gray-900 truncate",children:r.phone||e("dashboard.deliveryBoyDashboard.noPhone")})]})})})},r._id)})})}),s&&a.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:a.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            lg:grid-cols-4\r
            gap-4 sm:gap-6\r
        `,children:a.jsx(w.div,{whileHover:{y:-6,scale:1.02},whileTap:{scale:.97},initial:{opacity:0,y:40},animate:{opacity:1,y:0},className:"min-w-[260px] sm:min-w-0",children:a.jsx("div",{onClick:()=>f(),className:`relative cursor-pointer rounded-lg p-[1px]\r
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
