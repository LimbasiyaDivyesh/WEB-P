var m=(s,p,i)=>new Promise((c,x)=>{var u=a=>{try{r(i.next(a))}catch(d){x(d)}},h=a=>{try{r(i.throw(a))}catch(d){x(d)}},r=a=>a.done?c(a.value):Promise.resolve(a.value).then(u,h);r((i=i.apply(s,p)).next())});import{j as e}from"./editorVendor-D_Lx4EXd.js";import{a as n,h as R,e as _}from"./reactVendor-CE1rFsL2.js";import{u as A,A as b,D as P,a as o}from"./index-BI1LNwWf.js";import"./reduxVendor-D5txF5S3.js";import"./uiVendor-ZYlIWZ6Q.js";import"./pdfVendor-Dow4k7Ok.js";const $=12,Y=()=>{const{dispatch:s,appSelector:p}=A(),i=p(t=>t.app),{supplierList:c={}}=i,{deletedSuppliers:x=[]}=c,[u,h]=n.useState(""),[r,a]=n.useState(""),[d,U]=n.useState(1),[l,g]=n.useState({open:!1,type:null,supplier:null}),k=R(),y=n.useCallback(()=>m(null,null,function*(){s(yield b({apiUrl:"supplier/getListOfDeleteSuppliers",storeActionType:"FETCH_ALL_DELETED_SUPPLIER_LIST",storeKey:"supplierList"}))}),[s]),j=n.useMemo(()=>{let t=x;return r&&(t=t.filter(f=>{var N,w,S,C;return((N=f.name)==null?void 0:N.toLowerCase().includes(r))||((w=f.phone)==null?void 0:w.toLowerCase().includes(r))||((S=f.address)==null?void 0:S.toLowerCase().includes(r))||((C=f.cardNumber)==null?void 0:C.toString().includes(r))})),t},[x,r]),v=n.useMemo(()=>j.slice(0,d*$),[j,d]),D=t=>m(null,null,function*(){s(yield b({method:"POST",apiUrl:`supplier/restore/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),E=t=>m(null,null,function*(){s(yield b({method:"DELETE",apiUrl:`supplier/${t._id}`,loader:!0,apiSuccessCallBack:()=>{y()}}))}),T=t=>{g({open:!0,type:"restore",supplier:t})},L=t=>{g({open:!0,type:"delete",supplier:t})};return n.useEffect(()=>{const t=setTimeout(()=>{a(u.trim().toLowerCase())},300);return()=>clearTimeout(t)},[u]),n.useEffect(()=>{y()},[]),e.jsxs(e.Fragment,{children:[e.jsx(P,{back:!0,onBack:()=>k("/manage")}),e.jsxs("div",{className:"bg-[#f3f4f6] px-2 py-4 h-safe overflow-y-auto",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:"Search deleted suppliers...",value:u,onChange:t=>h(t.target.value),className:`\r
                w-full pl-10 pr-4 py-2.5\r
                rounded-lg border border-gray-300\r
                bg-white shadow-sm\r
                focus:outline-none focus:ring-2 focus:ring-blue-400\r
                text-sm\r
            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),v.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:v.map(t=>e.jsx(I,{item:t,onRestore:T,onDelete:L},t._id))}):e.jsx(z,{})]}),l.open&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),e.jsxs("div",{className:`\r
            relative z-10\r
            w-[320px]\r
            rounded-2xl\r
            bg-white/80 backdrop-blur-xl\r
            shadow-2xl\r
            p-5\r
            animate-[fadeIn_.2s_ease]\r
        `,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-full ${l.type==="restore"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:e.jsx("i",{className:`fa-solid ${l.type==="restore"?"fa-rotate-left":"fa-trash"}`})}),e.jsx(o.Typography,{className:"font-semibold text-[15px]",children:l.type==="restore"?"Restore Supplier":"Permanent Delete"})]}),e.jsx(o.Typography,{className:"text-sm text-gray-900 mb-5",children:l.type==="restore"?"Supplier will be restored back to supplier list.":"This action is irreversible. Supplier data will be permanently deleted."}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>g({open:!1}),className:"px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200",children:"Cancel"}),e.jsx("button",{onClick:()=>m(null,null,function*(){l.type==="restore"?yield D(l.supplier):yield E(l.supplier),g({open:!1})}),className:`px-3 py-1.5 text-sm text-white rounded-lg ${l.type==="restore"?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:"Confirm"})]})]})]})]})},I=_.memo(({item:s,onRestore:p,onDelete:i})=>{const{data:c}=s;return e.jsxs(o.Card,{className:`\r
            group relative overflow-hidden\r
            flex flex-col justify-between\r
            p-4 rounded-2xl\r
            bg-white/70 backdrop-blur-xl\r
            border border-white/40\r
            shadow-md hover:shadow-xl\r
            transition-all duration-300\r
            hover:-translate-y-1\r
        `,children:[e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-purple-100/40"}),e.jsxs("div",{className:"flex items-start gap-3 relative z-10",children:[e.jsx("div",{className:"relative",children:e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-600 text-white shadow-md",children:e.jsx("i",{className:"fa-solid fa-truck text-lg"})})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx(o.Typography,{className:"font-semibold text-[15px] text-gray-900 truncate",children:c.name}),e.jsx(o.Typography,{className:"text-[12px] text-gray-900",children:c.phone}),e.jsx(o.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[180px]",children:c.address})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-4 relative z-10",children:[e.jsxs("button",{onClick:()=>p(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-green-50 text-green-700\r
                    hover:bg-green-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-rotate-left text-[10px]"}),"Restore"]}),e.jsxs("button",{onClick:()=>i(s),className:`\r
                    flex items-center gap-1\r
                    px-3 py-1.5 text-xs font-medium\r
                    rounded-lg\r
                    bg-red-50 text-red-600\r
                    hover:bg-red-100\r
                    transition-all\r
                `,children:[e.jsx("i",{className:"fa-solid fa-trash text-[10px]"}),"Delete"]})]})]})}),z=()=>e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[e.jsx("div",{className:"w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner mb-4",children:e.jsx("i",{className:"fa-solid fa-trash text-2xl text-gray-500"})}),e.jsx(o.Typography,{className:"font-semibold text-gray-900 text-lg",children:"No Deleted Suppliers"}),e.jsx(o.Typography,{className:"text-sm text-gray-900 mt-1 max-w-xs",children:"Suppliers you delete will appear here. You can restore or remove them permanently."})]});export{Y as default};
