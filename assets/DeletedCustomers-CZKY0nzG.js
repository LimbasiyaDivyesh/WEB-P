var p=(s,l,i)=>new Promise((c,a)=>{var g=r=>{try{u(i.next(r))}catch(x){a(x)}},m=r=>{try{u(i.throw(r))}catch(x){a(x)}},u=r=>r.done?c(r.value):Promise.resolve(r.value).then(g,m);u((i=i.apply(s,l)).next())});import{j as e}from"./uiVendor-4SpGOz5-.js";import{a as n,f as R,d as A}from"./reactVendor-BrBFq9LG.js";import{u as P,a as $,A as b,r as d}from"./index-sLeMQNfE.js";import B from"./DefaultDashboardNavbar-rCtb8yuV.js";import{F as M}from"./UserIcon-DES20Eof.js";import"./pdfVendor-BS7Ig1QC.js";import"./reduxVendor-C8DwjTzm.js";const z=12,V=()=>{const{t:s}=P(),{dispatch:l,appSelector:i}=$(),c=i(t=>t.app),{customerList:a={}}=c,{deletedCustomers:g=[]}=a,[m,u]=n.useState(""),[r,x]=n.useState(""),[j,O]=n.useState(1),[o,f]=n.useState({open:!1,type:null,customer:null}),k=R(),y=n.useCallback(()=>p(null,null,function*(){l(yield b({method:"POST",apiUrl:"customer/getListOfDeleteCustomers",storeActionType:"FETCH_ALL_DELETED_CUSTOMER_LIST",storeKey:"customerList"}))}),[l]),N=n.useMemo(()=>{let t=g;return r&&(t=t.filter(h=>{var w,C,T,S;return((w=h.name)==null?void 0:w.toLowerCase().includes(r))||((C=h.phone)==null?void 0:C.toLowerCase().includes(r))||((T=h.address)==null?void 0:T.toLowerCase().includes(r))||((S=h.cardNumber)==null?void 0:S.toString().includes(r))})),t},[g,r]),v=n.useMemo(()=>N.slice(0,j*z),[N,j]),E=t=>p(null,null,function*(){l(yield b({method:"POST",apiUrl:`customer/restore/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),D=t=>p(null,null,function*(){l(yield b({method:"DELETE",apiUrl:`customer/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),L=t=>{f({open:!0,type:"restore",customer:t})},_=t=>{f({open:!0,type:"delete",customer:t})};return n.useEffect(()=>{const t=setTimeout(()=>{x(m.trim().toLowerCase())},300);return()=>clearTimeout(t)},[m]),n.useEffect(()=>{y()},[]),e.jsxs(e.Fragment,{children:[e.jsx(B,{back:!0,onBack:()=>k("/manage")}),e.jsxs("div",{className:"bg-[#f3f4f6] px-2 py-4 h-safe overflow-y-auto",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:s("manage.deletedCustomers.searchPlaceholder"),value:m,onChange:t=>u(t.target.value),className:`\r
                w-full pl-10 pr-4 py-2.5\r
                rounded-lg border border-gray-300\r
                bg-white shadow-sm\r
                focus:outline-none focus:ring-2 focus:ring-blue-400\r
                text-sm\r
            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),v.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:v.map(t=>e.jsx(F,{item:t,onRestore:L,onDelete:_,t:s},t._id))}):e.jsx(I,{t:s})]}),o.open&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),e.jsxs("div",{className:`\r
            relative z-10\r
            w-[320px]\r
            rounded-2xl\r
            bg-white/80 backdrop-blur-xl\r
            shadow-2xl\r
            p-5\r
            animate-[fadeIn_.2s_ease]\r
        `,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-full ${o.type==="restore"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:e.jsx("i",{className:`fa-solid ${o.type==="restore"?"fa-rotate-left":"fa-trash"}`})}),e.jsx(d.Typography,{className:"font-semibold text-[15px]",children:o.type==="restore"?s("manage.deletedCustomers.dialog.restoreTitle"):s("manage.deletedCustomers.dialog.permanentDeleteTitle")})]}),e.jsx(d.Typography,{className:"text-sm text-gray-900 mb-5",children:o.type==="restore"?s("manage.deletedCustomers.dialog.restoreMessage"):s("manage.deletedCustomers.dialog.deleteMessage")}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>f({open:!1}),className:"px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200",children:s("common.buttons.cancel")}),e.jsx("button",{onClick:()=>p(null,null,function*(){o.type==="restore"?yield E(o.customer):yield D(o.customer),f({open:!1})}),className:`px-3 py-1.5 text-sm text-white rounded-lg ${o.type==="restore"?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:s("common.buttons.confirm")})]})]})]})]})},F=A.memo(({item:s,onRestore:l,onDelete:i,t:c})=>{const{data:a}=s;return e.jsxs(d.Card,{className:`\r
            group relative overflow-hidden\r
            flex flex-col justify-between\r
            p-4 rounded-2xl\r
            bg-white/70 backdrop-blur-xl\r
            border border-white/40\r
            shadow-md hover:shadow-xl\r
            transition-all duration-300\r
            hover:-translate-y-1\r
        `,children:[e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-purple-100/40"}),e.jsxs("div",{className:"flex items-start gap-3 relative z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md",children:e.jsx(M,{className:"w-6 h-6"})}),e.jsx("span",{className:"absolute -top-2 -left-2 px-1.5 py-[2px] text-[10px] rounded-full bg-black text-white shadow",children:a.cardNumber})]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx(d.Typography,{className:"font-semibold text-[15px] text-gray-900 truncate",children:a.name}),e.jsx(d.Typography,{className:"text-[12px] text-gray-900",children:a.phone}),e.jsx(d.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[180px]",children:a.address})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-4 relative z-10",children:[e.jsxs("button",{onClick:()=>l(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-green-50 text-green-700\r
                    hover:bg-green-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-rotate-left text-[10px]"}),c("manage.deletedCustomers.restoreButton")]}),e.jsxs("button",{onClick:()=>i(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-red-50 text-red-600\r
                    hover:bg-red-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-trash text-[10px]"}),c("manage.deletedCustomers.deleteButton")]})]})]})}),I=({t:s})=>e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[e.jsx("div",{className:"w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner mb-4",children:e.jsx("i",{className:"fa-solid fa-trash text-2xl text-gray-500"})}),e.jsx(d.Typography,{className:"font-semibold text-gray-900 text-lg",children:s("manage.deletedCustomers.emptyTitle")}),e.jsx(d.Typography,{className:"text-sm text-gray-900 mt-1 max-w-xs",children:s("manage.deletedCustomers.emptyDesc")})]});export{V as default};
