var N=(a,p,n)=>new Promise((f,m)=>{var b=d=>{try{h(n.next(d))}catch(g){m(g)}},x=d=>{try{h(n.throw(d))}catch(g){m(g)}},h=d=>d.done?f(d.value):Promise.resolve(d.value).then(b,x);h((n=n.apply(a,p)).next())});import{c as l,u as te,a as ae,R as D,h as C,A as W,j as e,D as se,r}from"./index-UZ0PSaye.js";import{P as w,F as re}from"./OutstandingPaymentList-CMwZxyaB.js";import{triggerHaptic as le}from"./index-DFASifZ2.js";import{s as oe}from"./sharePdf-Dao0N57o.js";import"./UserIcon--EvSftes.js";const ne=()=>`
<div class="invoice-footer">
<p style="margin:0">
<b>info@universaltechsolution.com</b> | <b>Universal Future Tech</b>
</p>
</div>
`,ie=({month:a,paymentType:p,payments:n=[],adminData:f})=>{const m=p==="sales"?"Sales Payment Report":"Purchase Payment Report";let b=0,x=0,h=0,d=0;const g=n.map((o,T)=>{const v=o.customerId||o.supplierId||o.customerDetail||o.supplierDetail||{},P=o.totalBilled||o.totalPurchased||0,y=o.totalPaid||0,k=Math.max(P-y,0),j=o.previousRemainingAmount||0;return b+=j,x+=P,h+=y,d+=k,`
<tr>
<td class="center">${T+1}</td>
<td class="name">${v.name||"-"}</td>
<td class="amount">${j.toLocaleString("en-IN")}</td>
<td class="amount">${P.toLocaleString("en-IN")}</td>
<td class="amount received">${y.toLocaleString("en-IN")}</td>
<td class="amount due">${k.toLocaleString("en-IN")}</td>
<td class="center">${v.phone||"-"}</td>
</tr>
`}).join("");return`
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8" />

<style>

@page {
    size: A4;
    margin: 20px;
}

body{
    font-family:"Inter","Segoe UI",Roboto,Arial;
    margin:0;
    color:#1f2937;
}

/* Header */

.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    border-bottom:2px solid #e5e7eb;
    padding-bottom:10px;
}

.company{
    font-size:22px;
    font-weight:700;
    color:#111827;
}

.report-title{
    font-size:16px;
    font-weight:600;
    margin-top:3px;
    color:#374151;
}

.meta{
    font-size:12px;
    color:#6b7280;
}

/* Table */

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

thead{
    background:#111827;
    color:white;
}

th{
    padding:10px;
    font-size:12px;
    text-align:left;
    border:1px solid #374151;
}

td{
    padding:9px;
    font-size:12px;
    border:1px solid #d1d5db;
}

/* Alternate rows */

tbody tr:nth-child(even){
    background:#fafafa;
}

/* Alignment */

.center{
    text-align:center;
}

.amount{
    text-align:right;
    font-weight:600;
}

/* Column specific alignment */

th:nth-child(1),
td:nth-child(1){
    text-align:center;
}

th:nth-child(3),
th:nth-child(4),
th:nth-child(5),
th:nth-child(6),
td:nth-child(3),
td:nth-child(4),
td:nth-child(5),
td:nth-child(6){
    text-align:right;
}

/* Color coding */

.received{
    color:#059669;
}

.due{
    color:#dc2626;
}

.name{
    font-weight:600;
}

/* PREMIUM TOTAL BOX */

.total-wrapper{
    margin-top:18px;
    border:2px solid #111827;
    border-radius:8px;
    overflow:hidden;
}

.total-header{
    background:#111827;
    color:white;
    font-size:13px;
    font-weight:600;
    padding:8px 12px;
}

.total-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
}

.total-item{
    padding:12px 10px;
    border-right:1px solid #e5e7eb;
}

.total-item:last-child{
    border-right:none;
}

.total-label{
    font-size:11px;
    color:#6b7280;
}

.total-value{
    font-size:16px;
    font-weight:700;
    margin-top:4px;
}

.total-value.received{
    color:#059669;
}

.total-value.due{
    color:#dc2626;
}

/* Footer */

.invoice-footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
    font-size:11px;
    border-top:1px solid #ddd;
    padding:6px 0;
    background:white;
    color:#444;
}

</style>

</head>

<body>

<div class="header">

<div>
<div class="company">${f.companyId.companyName}</div>
<div class="report-title">${m}</div>
<div class="meta">Month : ${a}</div>
</div>

<div class="meta">
Generated : ${new Date().toLocaleString()}
</div>

</div>

<table>

<thead>
<tr>
<th>#</th>
<th>Account Name</th>
<th>Prev Total</th>
<th>Current Month</th>
<th>${p==="sales"?"Received":"Paid"}</th>
<th>Remaining</th>
<th>Mobile</th>
</tr>
</thead>

<tbody>
${g}
</tbody>

</table>

<div class="total-wrapper">

<div class="total-header">
Grand Summary
</div>

<div class="total-grid">

<div class="total-item">
<div class="total-label">Previous Balance</div>
<div class="total-value">₹ ${b.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Current Month</div>
<div class="total-value">₹ ${x.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Total Received</div>
<div class="total-value received">₹ ${h.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Remaining Due</div>
<div class="total-value due">₹ ${d.toLocaleString("en-IN")}</div>
</div>

</div>

</div>

${ne()}

</body>
</html>
`},de=12,q={[w.SALES]:{label:"Sales Payments",apiType:"sales",personKey:"customerId",deletedKey:"customerDetail",primaryColor:"green",dueLabel:"Amount To Collect"},[w.PURCHASE]:{label:"Purchase Payments",apiType:"purchase",personKey:"supplierId",deletedKey:"supplierDetail",primaryColor:"red",dueLabel:"Amount To Pay"}},fe=()=>{var U,z;const a=l.useRef(null),p=te(),{dispatch:n,appSelector:f}=ae(),[m,b]=l.useState(""),[x,h]=l.useState(""),[d,g]=l.useState(1),[o,T]=l.useState(w.SALES),[v,P]=l.useState(!1),[y,k]=l.useState(""),[j,_]=l.useState(null),L=D.useRef(null),{currentMonth:i,rawData:A,adminData:$}=f(t=>t.app),H=i==null?void 0:i.isSame(C(),"month"),F=l.useMemo(()=>q[o],[o]),X=l.useCallback(()=>N(null,null,function*(){n(yield W({method:"POST",url:"payment/fetch",data:{month:i.format("YYYY-MM")},loader:!0,positiveCallBack:t=>{const s={unpaid:1,partial:2,paid:3},c=(u=[])=>u.sort((I,R)=>(s[I.status]||5)-(s[R.status]||5));n({type:"APP_FETCH_PAYMENT_HISTORY",payload:{sales:c(t.payments.filter(u=>u.totalBilled>0)),purchase:c(t.purchasePayments.filter(u=>(u.totalBilled||(u==null?void 0:u.totalPurchased))>0))},name:"rawData",meta:{type:"FETCH_PAYMENT_HISTORY"}})}}))}),[n,i]),S=l.useMemo(()=>(A==null?void 0:A[o])||[],[A,o]),Y=l.useMemo(()=>{if(!x)return S;const t=x.trim().toLowerCase();return S.filter(s=>{var G,K;const c=s[F.personKey]||s[F.deletedKey];if(!c)return!1;const u=((G=c.name)==null?void 0:G.toLowerCase())||"",I=((K=c.address)==null?void 0:K.toLowerCase())||"",R=c.phone||"";return u.includes(t)||I.includes(t)||R.includes(t)})},[S,x,o]),E=l.useMemo(()=>Y.slice(0,d*de),[Y,d]),M=l.useMemo(()=>S.reduce((t,s)=>{t.totalBilled+=(s==null?void 0:s.totalBilled)||(s==null?void 0:s.totalPurchased)||0,t.totalPaid+=s.totalPaid||0;const c=Math.max(((s==null?void 0:s.totalBilled)||(s==null?void 0:s.totalPurchased)||0)-(s.totalPaid||0),0);return t.totalDue+=c,t.statusCount[s.status]=(t.statusCount[s.status]||0)+1,t},{totalBilled:0,totalPaid:0,totalDue:0,statusCount:{paid:0,partial:0,unpaid:0,overpaid:0}}),[S]),O=l.useCallback(t=>{n({type:"APP_CHANGE_CURRENT_MONTH",payload:t==="prev"?C(i).subtract(1,"month"):C(i).add(1,"month"),name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[i,C,n]),Z=l.useCallback(t=>{const s=t.target.value;if(!s)return;const c=C(s,"YYYY-MM");n({type:"APP_CHANGE_CURRENT_MONTH",payload:c,name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[n]),J=()=>N(null,null,function*(){const t=window.open("","_blank");let s=y;s+="<script>   window.onload = function() {   setTimeout(() => { window.print(); window.close(); }, 100);}; <\/script>",t?(t.document.write(s),t.document.close()):alert("Pop-up blocked! Please allow pop-ups for this website.")}),Q=()=>N(null,null,function*(){if(!j)return;const t=URL.createObjectURL(j),s=document.createElement("a");s.href=t,s.download=`${i.format("MMMM YYYY")} ${o==="sales"?"Sales Payment":"Purchase Payment"} Report.pdf`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(t)}),V=()=>N(null,null,function*(){j&&(yield oe(j,`${i.format("MMMM YYYY")} Milk Bill.pdf`))}),ee=l.useCallback(()=>N(null,null,function*(){if(!y)return;const t=new FormData;t.append("htmlFile",new Blob([y],{type:"text/html"}),"bill.html"),n(yield W({method:"POST",url:"milkEntry/downloadCard",responseType:"blob",data:t,loader:!0,positiveCallBack:s=>N(null,null,function*(){_(new Blob([s],{type:"application/pdf"}))})}))}),[y]);return l.useEffect(()=>{_(null),k(""),N(null,null,function*(){const s=ie({month:i.format("MMMM YYYY"),paymentType:o,payments:S,adminData:$.data});k(s)})},[S,i,o]),l.useEffect(()=>{i&&X()},[i]),l.useEffect(()=>{g(1)},[x]),l.useEffect(()=>{const t=setTimeout(()=>{h(m)},300);return()=>clearTimeout(t)},[m]),l.useEffect(()=>{if(!L.current)return;const t=new IntersectionObserver(([s])=>{s.isIntersecting&&E.length<Y.length&&g(c=>c+1)},{rootMargin:"120px"});return t.observe(L.current),()=>t.disconnect()},[E.length,Y.length]),e.jsxs(e.Fragment,{children:[e.jsx(se,{headerTitle:e.jsx("div",{className:"text-[#263238] font-semibold text-[14px] flex items-center",children:"Payment History"}),back:!0,onBack:()=>p("/dashboard"),menu:e.jsx("div",{className:"flex justify-center",onClick:()=>{j||ee()},children:e.jsxs(r.Popover,{placement:"top",children:[e.jsx(r.PopoverHandler,{children:e.jsx(r.Button,{className:"w-[40px] h-[40px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-full p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-download text-sm"})})}),e.jsxs(r.PopoverContent,{className:"flex flex-col gap-2 p-2 min-w-[180px]",children:[e.jsxs(r.Button,{variant:"text",onClick:t=>Q(),className:"flex items-center gap-3 justify-start text-blue-600 hover:bg-blue-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-download text-lg"}),"Download PDF"]}),e.jsxs(r.Button,{variant:"text",onClick:()=>J(),className:"flex items-center gap-3 justify-start text-purple-600 hover:bg-purple-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-print text-lg"}),"Print PDF"]}),e.jsxs(r.Button,{variant:"text",onClick:()=>V(),className:"flex items-center gap-3 justify-start text-green-600 hover:bg-green-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-brands fa-whatsapp text-lg"}),"Share on WhatsApp"]})]})]})})}),e.jsxs("div",{className:"py-4 px-1 relative bg-[#f3f4f6]",children:[e.jsxs("div",{className:`\r
        flex items-center justify-between gap-3\r
        w-full md:w-full\r
        px-4 py-2.5\r
        bg-white/80 backdrop-blur-md\r
        rounded-xl\r
        shadow-md\r
        border border-gray-200\r
        mb-4\r
    `,children:[e.jsx("button",{onClick:()=>O("prev"),className:`w-9 h-9 flex items-center justify-center rounded-full\r
            bg-gradient-to-br from-blue-100 to-blue-200\r
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300`,children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[14px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:`\r
      text-[14px] font-semibold text-gray-800\r
      tracking-wide select-none\r
      hover:text-blue-700 transition-colors duration-200\r
    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:i==null?void 0:i.format("MMM YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:a,type:"month",className:`\r
      absolute inset-0\r
      opacity-0\r
      cursor-pointer\r
    `,value:i?i.format("YYYY-MM"):"",onChange:Z,max:C().format("YYYY-MM")})]}),e.jsx("button",{onClick:()=>O("next"),disabled:H,className:`w-9 h-9 flex items-center justify-center rounded-full
            bg-gradient-to-br from-blue-100 to-blue-200
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300
            ${H?"opacity-40 cursor-not-allowed hover:scale-100":""}`,children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[14px]"})})]}),((z=(U=$==null?void 0:$.data)==null?void 0:U.moduleSettings)==null?void 0:z.milkPurchase)&&e.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:Object.values(w).map(t=>{const s=q[t],c=o===t,u=t===w.SALES?"border-green-600 bg-green-50 text-green-700":"border-red-600 bg-red-50 text-red-700",I=t===w.SALES?"bg-green-600 text-white":"bg-red-600 text-white",R=t===w.SALES?"bg-green-100 text-green-600":"bg-red-100 text-red-600";return e.jsxs("div",{onClick:()=>{le(),T(t)},className:`cursor-pointer rounded-lg border p-2 transition-all
                flex flex-col items-center gap-1 text-sm font-semibold hover:shadow-md
                ${c?u:"border-gray-200 bg-white text-gray-700 hover:border-gray-400"}`,children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-lg
                    ${c?I:R}`,children:e.jsx("i",{className:`fa-solid ${t===w.SALES?"fa-indian-rupee-sign":"fa-cart-shopping"}`})}),e.jsx(r.Typography,{className:"text-[13px] font-semibold",children:s.label}),e.jsx(r.Typography,{className:"text-[11px] font-medium opacity-80",children:s.dueLabel})]},t)})}),e.jsxs("div",{className:"grid grid-cols-3 md:grid-cols-4 gap-3 mb-4",children:[e.jsx(B,{title:"Total",value:`₹${M.totalBilled.toLocaleString("en-IN")}`,color:"indigo",className:"from-indigo-50 to-indigo-100 border-indigo-200",titleClass:"text-indigo-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-indigo-900"}),e.jsx(B,{title:o==="sales"?"Collected":"Paid",value:`₹${M.totalPaid.toLocaleString("en-IN")}`,className:"from-green-50 to-green-100 border-green-200",titleClass:"text-green-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-green-900"}),e.jsx(B,{title:"Due",value:`₹${M.totalDue.toLocaleString("en-IN")}`,color:"red",className:"from-red-50 to-red-100 border-red-200",titleClass:"text-red-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-red-900"})]}),e.jsx("div",{className:"md:hidden mb-3",children:e.jsxs("button",{onClick:()=>P(t=>!t),className:`w-full flex items-center justify-between px-4 py-2.5\r
        bg-white rounded-lg border border-gray-200 shadow-sm\r
        active:scale-[0.98] transition-all duration-200`,children:[e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"Payment Status Breakdown"}),e.jsx("i",{className:`fa-solid ${v?"fa-chevron-up":"fa-chevron-down"} text-gray-600 transition-transform duration-300`})]})}),e.jsx("div",{className:`
        overflow-hidden transition-all duration-300
        ${v?"max-h-[500px] opacity-100":"max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}
    `,children:e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-green-100 to-green-200 shadow border border-green-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-green-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-circle-check text-green-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-green-800 font-semibold",children:"Paid"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-green-900 tracking-tight notranslate",children:M.statusCount.paid})]})]}),e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-amber-100 to-amber-200 shadow border border-amber-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-amber-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-hourglass-half text-amber-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-amber-800 font-semibold",children:"Partial"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-amber-900 tracking-tight notranslate",children:M.statusCount.partial})]})]}),e.jsxs("div",{className:"relative flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-red-100 to-red-200 shadow border border-red-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsxs("div",{className:"relative flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-red-200 rounded-full",children:[e.jsx("i",{className:"fa-solid fa-xmark text-red-700 text-xs sm:text-lg"}),e.jsx("span",{className:"absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping"})]}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-red-800 font-semibold",children:"Unpaid"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-red-900 tracking-tight notranslate",children:M.statusCount.unpaid})]})]})]})}),e.jsx("div",{className:"sticky top-0 z-10 bg-[#f3f4f6] pb-4",children:e.jsx(r.Input,{label:"Search (Name / Whatsapp Number) / Address",value:m,onChange:t=>b(t.target.value),className:"bg-white shadow-none"})}),e.jsx("div",{className:"grid gap-2 mt-2",children:E.length?e.jsxs(e.Fragment,{children:[E.map(t=>e.jsx(ce,{p:t},t._id)),E.length<Y.length&&e.jsx("div",{ref:L,className:"flex justify-center my-10",children:e.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 rounded-lg\r
                        bg-white/70 backdrop-blur-xl border border-white/40 shadow-md`,children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-yellow-500 animate-pulse"}),e.jsx(r.Typography,{className:"text-sm font-medium text-gray-600",children:"Loading more payments history…"})]})})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-3",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx(re,{className:"w-10 h-10 text-red-400"})}),e.jsx(r.Typography,{className:"text-gray-800 font-semibold text-lg",children:"No Payments Found"}),e.jsx(r.Typography,{className:"text-sm text-gray-500 max-w-xs",children:"There are no payment records available at the moment."})]})})]})]})},B=D.memo(({title:a,value:p,className:n="",titleClass:f="",valueClass:m=""})=>e.jsxs("div",{className:`p-4 rounded-lg shadow-md border bg-gradient-to-br ${n}`,children:[e.jsx(r.Typography,{className:`text-xs font-medium ${f}`,children:a}),e.jsx(r.Typography,{className:`font-bold tracking-tight ${m} notranslate`,children:p})]})),ce=D.memo(({p:a})=>{var n,f,m,b,x,h,d,g,o,T,v;const p=l.useCallback(P=>{switch(P){case"paid":return"green";case"partial":return"amber";case"overpaid":return"blue";default:return"red"}},[]);return e.jsx(r.Card,{className:`px-4 py-2 bg-white/90 backdrop-blur-xl border border-gray-100 shadow\r
                        hover:shadow-xl rounded-lg cursor-pointer\r
                        transform hover:-translate-y-1\r
                        transition-all duration-300`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[a.customerId?e.jsx(r.Typography,{className:"font-semibold text-black text-[15px] notranslate",children:(n=a.customerId)==null?void 0:n.name}):a!=null&&a.supplierId?e.jsx(r.Typography,{className:"font-semibold text-black text-[15px] notranslate",children:(f=a.supplierId)==null?void 0:f.name}):e.jsxs(r.Typography,{className:"font-semibold ",children:[e.jsx("span",{className:"text-[15px] text-red-500",children:" Deleted "})," ",((m=a==null?void 0:a.customerDetail)==null?void 0:m.name)&&e.jsxs("span",{className:"text-[13px] text-black",children:[" ",(b=a==null?void 0:a.customerDetail)==null?void 0:b.name," "]})]}),e.jsxs(r.Typography,{className:"text-[12px] text-gray-900 notranslate",children:[((x=a.customerId)==null?void 0:x.phone)||((h=a==null?void 0:a.customerDetail)==null?void 0:h.phone)||((d=a.supplierId)==null?void 0:d.phone)||((g=a==null?void 0:a.supplierDetail)==null?void 0:g.phone)||""," • ",C(a.month).format("MMMM YYYY")]}),e.jsx(r.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[220px] text-wrap-auto notranslate",title:(o=a.customerId)==null?void 0:o.address,children:((T=a.customerId)==null?void 0:T.address)||((v=a==null?void 0:a.customerDetail)==null?void 0:v.address)||""})]}),e.jsxs("div",{className:"text-right flex flex-col items-end",children:[e.jsxs(r.Typography,{className:`font-bold text-[20px] whitespace-nowrap tracking-tight ${a.status==="paid"?"text-green-600":a.status==="partial"?"text-amber-500":a.status==="overpaid"?"text-blue-600":"text-red-500"}`,children:["₹",a.totalPaid.toLocaleString("en-IN"),e.jsxs("span",{className:"text-[14px] text-black font-medium notranslate",children:[" "," / ₹",((a==null?void 0:a.totalBilled)||(a==null?void 0:a.totalPurchased)).toLocaleString("en-IN")]})]}),e.jsx(r.Chip,{value:a.status,color:p(a.status),size:"sm",className:"mt-1 capitalize"})]})]})},a._id)});export{fe as default};
