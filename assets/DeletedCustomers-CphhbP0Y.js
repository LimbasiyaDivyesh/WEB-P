var p=(s,m,o)=>new Promise((i,x)=>{var u=a=>{try{r(o.next(a))}catch(d){x(d)}},f=a=>{try{r(o.throw(a))}catch(d){x(d)}},r=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,f);r((o=o.apply(s,m)).next())});import{u as R,r as n,d as _,A as b,j as e,D as A,b as c,R as P,F as $}from"./index-zbwninuO.js";const z=12,M=()=>{const{dispatch:s,appSelector:m}=R(),o=m(t=>t.app),{customerList:i={}}=o,{deletedCustomers:x=[]}=i,[u,f]=n.useState(""),[r,a]=n.useState(""),[d,O]=n.useState(1),[l,g]=n.useState({open:!1,type:null,customer:null}),T=_(),y=n.useCallback(()=>p(null,null,function*(){s(yield b({method:"POST",apiUrl:"customer/getListOfDeleteCustomers",storeActionType:"FETCH_ALL_DELETED_CUSTOMER_LIST",storeKey:"customerList"}))}),[s]),j=n.useMemo(()=>{let t=x;return r&&(t=t.filter(h=>{var w,v,C,S;return((w=h.name)==null?void 0:w.toLowerCase().includes(r))||((v=h.phone)==null?void 0:v.toLowerCase().includes(r))||((C=h.address)==null?void 0:C.toLowerCase().includes(r))||((S=h.cardNumber)==null?void 0:S.toString().includes(r))})),t},[x,r]),N=n.useMemo(()=>j.slice(0,d*z),[j,d]),k=t=>p(null,null,function*(){s(yield b({method:"POST",apiUrl:`customer/restore/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),D=t=>p(null,null,function*(){s(yield b({method:"DELETE",apiUrl:`customer/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),E=t=>{g({open:!0,type:"restore",customer:t})},L=t=>{g({open:!0,type:"delete",customer:t})};return n.useEffect(()=>{const t=setTimeout(()=>{a(u.trim().toLowerCase())},300);return()=>clearTimeout(t)},[u]),n.useEffect(()=>{y()},[]),e.jsxs(e.Fragment,{children:[e.jsx(A,{back:!0,onBack:()=>T("/manage")}),e.jsxs("div",{className:"bg-[#f3f4f6] px-2 py-4 h-safe overflow-y-auto",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:"Search deleted customers...",value:u,onChange:t=>f(t.target.value),className:`\r
                w-full pl-10 pr-4 py-2.5\r
                rounded-lg border border-gray-300\r
                bg-white shadow-sm\r
                focus:outline-none focus:ring-2 focus:ring-blue-400\r
                text-sm\r
            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),N.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:N.map(t=>e.jsx(F,{item:t,onRestore:E,onDelete:L},t._id))}):e.jsx(I,{})]}),l.open&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),e.jsxs("div",{className:`\r
            relative z-10\r
            w-[320px]\r
            rounded-2xl\r
            bg-white/80 backdrop-blur-xl\r
            shadow-2xl\r
            p-5\r
            animate-[fadeIn_.2s_ease]\r
        `,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-full ${l.type==="restore"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:e.jsx("i",{className:`fa-solid ${l.type==="restore"?"fa-rotate-left":"fa-trash"}`})}),e.jsx(c.Typography,{className:"font-semibold text-[15px]",children:l.type==="restore"?"Restore Customer":"Permanent Delete"})]}),e.jsx(c.Typography,{className:"text-sm text-gray-900 mb-5",children:l.type==="restore"?"Customer will be restored back to customer list.":"This action is irreversible. Customer data will be permanently deleted."}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>g({open:!1}),className:"px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200",children:"Cancel"}),e.jsx("button",{onClick:()=>p(null,null,function*(){l.type==="restore"?yield k(l.customer):yield D(l.customer),g({open:!1})}),className:`px-3 py-1.5 text-sm text-white rounded-lg ${l.type==="restore"?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:"Confirm"})]})]})]})]})},F=P.memo(({item:s,onRestore:m,onDelete:o})=>{const{data:i}=s;return e.jsxs(c.Card,{className:`\r
            group relative overflow-hidden\r
            flex flex-col justify-between\r
            p-4 rounded-2xl\r
            bg-white/70 backdrop-blur-xl\r
            border border-white/40\r
            shadow-md hover:shadow-xl\r
            transition-all duration-300\r
            hover:-translate-y-1\r
        `,children:[e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-purple-100/40"}),e.jsxs("div",{className:"flex items-start gap-3 relative z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md",children:e.jsx($,{className:"w-6 h-6"})}),e.jsx("span",{className:"absolute -top-2 -left-2 px-1.5 py-[2px] text-[10px] rounded-full bg-black text-white shadow",children:i.cardNumber})]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx(c.Typography,{className:"font-semibold text-[15px] text-gray-900 truncate",children:i.name}),e.jsx(c.Typography,{className:"text-[12px] text-gray-900",children:i.phone}),e.jsx(c.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[180px]",children:i.address})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-4 relative z-10",children:[e.jsxs("button",{onClick:()=>m(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-green-50 text-green-700\r
                    hover:bg-green-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-rotate-left text-[10px]"}),"Restore"]}),e.jsxs("button",{onClick:()=>o(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-red-50 text-red-600\r
                    hover:bg-red-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-trash text-[10px]"}),"Delete"]})]})]})}),I=()=>e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[e.jsx("div",{className:"w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner mb-4",children:e.jsx("i",{className:"fa-solid fa-trash text-2xl text-gray-500"})}),e.jsx(c.Typography,{className:"font-semibold text-gray-900 text-lg",children:"No Deleted Customers"}),e.jsx(c.Typography,{className:"text-sm text-gray-900 mt-1 max-w-xs",children:"Customers you delete will appear here. You can restore or remove them permanently."})]});export{M as default};
