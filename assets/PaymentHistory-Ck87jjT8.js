var p=(n,d,a)=>new Promise((m,l)=>{var c=s=>{try{t(a.next(s))}catch(o){l(o)}},i=s=>{try{t(a.throw(s))}catch(o){l(o)}},t=s=>s.done?m(s.value):Promise.resolve(s.value).then(c,i);t((a=a.apply(n,d)).next())});import{j as e}from"./pdfVendor-DdAo4azW.js";import{a as h}from"./reactVendor-BrBFq9LG.js";import{a as b,u as g,r as x,h as f,A as j}from"./index-sNOuYGfr.js";import{u as N}from"./useApiLoading-Cus7mKNs.js";import{F as v}from"./ClockIcon-CCcvREjO.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-BUq2TC0A.js";const D=({open:n,onClose:d,customerId:a,userAdminId:m})=>{const{dispatch:l,appSelector:c}=b(),{isLoading:i}=N(),{t}=g(),s=c(r=>{var u;return(u=r.app)==null?void 0:u.paymentLog}),o=(s==null?void 0:s.customerPaymentLog)||[],y=()=>p(null,null,function*(){l(yield j({method:"POST",apiUrl:"payment/customer/log",data:{customerId:a,userAdminId:m},storeKey:"paymentLog",storeActionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return h.useEffect(()=>(n&&a&&y(),()=>{l({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[n]),e.jsx(x.Dialog,{open:n,handler:()=>d(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(x.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(v,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:t("customer.paymentHistory.title")}),e.jsx("p",{className:"text-xs text-gray-900",children:t("customer.paymentHistory.subtitle")})]})]})}),e.jsxs(x.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[i&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:t("customer.paymentHistory.loading")}),!i&&o.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:t("customer.paymentHistory.empty")}),e.jsx("div",{className:"space-y-3",children:o.map(r=>e.jsxs("div",{className:`\r
            group\r
            !mt-2\r
            p-4\r
            py-2\r
            rounded-xl\r
            bg-white/80\r
            backdrop-blur-md\r
            border border-gray-200\r
            hover:border-blue-400\r
            hover:shadow-lg\r
            transition\r
            flex\r
            justify-between\r
            items-center\r
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:["₹",r.amount,(r==null?void 0:r.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",r.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:f(r.createdAt).format("DD MMM YYYY • hh:mm A")})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`\r
                text-green-600\r
                text-xs\r
                font-medium\r
                bg-green-50\r
                px-3\r
                py-1\r
                rounded-full\r
                `,children:t("customer.paymentHistory.received")}),(r==null?void 0:r.source)&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${r.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(r==null?void 0:r.source)==="ADVANCE"?t("customer.paymentHistory.source.advance"):t("customer.paymentHistory.source.bill")})]})]},r._id))})]})]})]})})};export{D as default};
