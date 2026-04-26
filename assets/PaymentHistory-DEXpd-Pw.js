var h=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var b=(s,o)=>{var a={};for(var t in s)p.call(s,t)&&o.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&h)for(var t of h(s))o.indexOf(t)<0&&f.call(s,t)&&(a[t]=s[t]);return a};var g=(s,o,a)=>new Promise((t,d)=>{var i=n=>{try{l(a.next(n))}catch(c){d(c)}},m=n=>{try{l(a.throw(n))}catch(c){d(c)}},l=n=>n.done?t(n.value):Promise.resolve(n.value).then(i,m);l((a=a.apply(s,o)).next())});import{c as x,a as j,j as e,r as u,h as N,A as v}from"./index-UZ0PSaye.js";import{u as w}from"./useApiLoading-C8gqfP4u.js";function A(d,t){var i=d,{title:s,titleId:o}=i,a=b(i,["title","titleId"]);return x.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},a),s?x.createElement("title",{id:o},s):null,x.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const E=x.forwardRef(A),_=({open:s,onClose:o,customerId:a,userAdminId:t})=>{const{dispatch:d,appSelector:i}=j(),{isLoading:m}=w(),{paymentLog:l}=i(r=>r.app),n=(l==null?void 0:l.customerPaymentLog)||[],c=()=>g(null,null,function*(){d(yield v({method:"POST",url:"payment/customer/log",data:{customerId:a,userAdminId:t},reduxKeyName:"paymentLog",actionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return x.useEffect(()=>(s&&a&&c(),()=>{d({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[s]),n.reduce((r,y)=>r+(y.amount||0),0),e.jsx(u.Dialog,{open:s,handler:()=>o(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(u.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(E,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:"Payment History"}),e.jsx("p",{className:"text-xs text-gray-900",children:"Customer payment records"})]})]})}),e.jsxs(u.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[m&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:"Loading payments..."}),!m&&n.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:"No payment history found"}),e.jsx("div",{className:"space-y-3",children:n.map(r=>e.jsxs("div",{className:`\r
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
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:["₹",r.amount,(r==null?void 0:r.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",r.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:N(r.createdAt).format("DD MMM YYYY • hh:mm A")})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`\r
                text-green-600\r
                text-xs\r
                font-medium\r
                bg-green-50\r
                px-3\r
                py-1\r
                rounded-full\r
                `,children:"Received"}),(r==null?void 0:r.source)&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${r.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(r==null?void 0:r.source)==="ADVANCE"?"Advance Payment":"Bill Pay"})]})]},r._id))})]})]})]})})};export{E as F,_ as P};
