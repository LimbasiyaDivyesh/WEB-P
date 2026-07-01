var je=Object.defineProperty,Ne=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var de=(m,n,s)=>n in m?je(m,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[n]=s,I=(m,n)=>{for(var s in n||(n={}))we.call(n,s)&&de(m,s,n[s]);if(oe)for(var s of oe(n))ke.call(n,s)&&de(m,s,n[s]);return m},M=(m,n)=>Ne(m,ve(n));var E=(m,n,s)=>new Promise((p,k)=>{var j=x=>{try{P(s.next(x))}catch(v){k(v)}},h=x=>{try{P(s.throw(x))}catch(v){k(v)}},P=x=>x.done?p(x.value):Promise.resolve(x.value).then(j,h);P((s=s.apply(m,n)).next())});import{j as e}from"./pdfVendor-Cl44_PGD.js";import{R as pe,f as xe,i as ye,a as o,u as Te}from"./reactVendor-DmREe6Et.js";import{u as se,G as Ie,d as _e,e as De,a as f,A as B,i as ce,H as Pe,k as re,U as Me,b as Ce,l as Q,m as ue,z as me,V as Ee,X as Se,Y as Le,K as Ue,D as $e,I as Ae,J as Re}from"./index-BzUzUQgY.js";import{I as Ye}from"./uiVendor-Cts7Z6eD.js";import"./reduxVendor-BngeJYhw.js";import"./editorVendor-Czr6LD_x.js";const Be=ce().shape({milkTypeEntries:Pe().of(ce().shape({selected:Me(),morning:re().min(0).nullable(),evening:re().min(0).nullable(),pricePerUnit:re().min(0).required("Price required")})).test("at-least-one-selected","Please select at least one product",m=>m==null?void 0:m.some(n=>n.selected))}),Fe=m=>{const n=[];return m.forEach(s=>{const p=Number(s.morning),k=Number(s.evening),j=p>0,h=k>0;j&&h?(n.push(M(I({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:k,timePreference:"evening"})),n.push(M(I({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:p,timePreference:"morning"}))):!j&&h?n.push(M(I({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:k,timePreference:"evening"})):j&&!h&&n.push(M(I({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:p,timePreference:"morning"}))}),n},He=m=>{const{_id:n,milkTypeEntries:s,handleSaveAndCloseProductPopup:p}=m,k=n||m.purchaseId,{dispatch:j}=se(),{isLoading:h}=Ie(),P=v=>E(null,[v],function*({milkTypeEntries:x}){j(yield B({method:"PUT",apiUrl:`party/${k}/milk-preferences`,data:{milkPreferences:Fe(x.filter(d=>d.selected)).map(d=>{const U=d.originalHadBoth;return I({milkTypeId:d.milkTypeId,dailyMilkQuantityInLiters:1,timePreference:d.timePreference,pricePerUnit:d.pricePerUnit},k&&!U&&{_id:d._id})})},loader:!0,apiSuccessCallBack:()=>{p()}}))});return e.jsx(_e,{initialValues:{milkTypeEntries:s},validationSchema:Be,enableReinitialize:!0,onSubmit:P,children:({values:x,handleChange:v,handleBlur:d,errors:U,touched:b})=>e.jsxs(De,{className:"flex flex-col h-[70vh] mb-0",children:[e.jsx("div",{className:"flex-1 pr-1 overflow-hidden",children:e.jsx("div",{className:"w-full h-full overflow-auto custom-scroll hide-scrollbar rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/60",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-50 to-purple-50/60 shadow-sm",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-1 sticky left-0 bg-indigo-50/70 backdrop-blur-md"}),e.jsx("th",{className:"py-4 px-1 text-left text-gray-700 font-semibold",children:"Product"}),e.jsx("th",{className:"py-4 px-1 text-center text-gray-700 font-semibold",children:e.jsx(Ye,{size:16,className:"mx-auto text-gray-900 font-extrabold"})})]})}),e.jsx("tbody",{children:((x==null?void 0:x.milkTypeEntries)||[]).map(($,S)=>{var F,A;return e.jsxs("tr",{className:`border-b border-gray-200\r
                    transition-all duration-200\r
                    hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-purple-50/40\r
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    hover:-translate-y-[1px]`,children:[e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(f.Checkbox,{color:"blue",ripple:!0,className:"p-0 hover:scale-105 transition-transform duration-150 outline-none",containerProps:{className:"px-1 m-0"},name:`milkTypeEntries[${S}].selected`,checked:((A=(F=x.milkTypeEntries)==null?void 0:F[S])==null?void 0:A.selected)||!1,onChange:v})})}),e.jsx("td",{className:"py-4 px-1 text-gray-900 font-medium tracking-wide break-after-all w-[30%]",children:$.name}),e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"number",placeholder:"",className:`w-[60px] px-0 py-2 text-center rounded-lg border border-gray-300\r
                                bg-gray-50 focus:bg-white\r
                                focus:ring-2 focus:ring-indigo-500\r
                                outline-none shadow-sm transition-all`,name:`milkTypeEntries[${S}].pricePerUnit`,min:1,step:"0.01",value:x.milkTypeEntries[S].pricePerUnit,onChange:v,onBlur:d,onWheel:L=>L.target.blur()})})})]},$._id||`milkType-${S}`)})})]})})}),U.milkTypeEntries&&b.milkTypeEntries&&e.jsx("p",{className:"text-red-500 text-sm mt-2 font-bold text-center",children:U.milkTypeEntries}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-md p-5 pt-7",children:e.jsx(f.Button,{type:"submit",className:"w-full bg-[#005ec4] hover:bg-[#004aa0] py-3 rounded-lg shadow-lg",disabled:h,children:"Update Product"})})]})})},Oe=pe.memo(He),qe=m=>{var ie;const{appSelector:n,dispatch:s}=se(),p=xe(),{deliveryBoyId:k}=ye(),{userData:j}=Ce(),{dailyRegisterData:h,deliveryBoyAccess:P,adminData:x,dailySaleDate:v}=n(t=>t.app),d=(ie=x==null?void 0:x.data)==null?void 0:ie.moduleSettings,{entries:U=[],timePreference:b,handleUpdateCustomerMilkEntry:$,showDragColumn:S=!0,fetchRegister:F,estimate:A}=m,L=(P==null?void 0:P.data)||{},[y,V]=o.useState([]),[R,H]=o.useState({}),[z,K]=o.useState(!1),N=o.useRef({}),Z=o.useMemo(()=>b==="morning"?"bg-teal-50":"bg-blue-50",[b]),J=o.useMemo(()=>b==="morning"?"bg-teal-600":"bg-blue-600",[b]),T=o.useMemo(()=>b==="morning"?"border border-teal-600":"border border-blue-600",[b]);o.useEffect(()=>{V(U||[]),H({}),N.current={}},[U,b]);const r=o.useCallback(t=>`${t.purchaseId}_${t.milkTypeId}_${b}_${t.milkTimePreferenceId}`,[b]),c=o.useCallback((t,a)=>{const i=a,u=r(t);if(!/^\d*\.?\d*$/.test(i))return;let g=i;if(g.length>1&&g.startsWith("0")&&!g.startsWith("0.")&&(g=g.replace(/^0+/,"")),H(D=>M(I({},D),{[u]:g})),N.current[u]=g,a==="")return;const _=Number(g);Number.isNaN(_)||_<0},[r,b]),l=o.useCallback(t=>{var i;const a=r(t);return R[a]!==void 0?R[a]:N.current[a]!==void 0?N.current[a]:A?["alternate"].includes(t==null?void 0:t.entryMode)||t!=null&&t.vacationMode?"":t==null?void 0:t.quantityInLiters:d!=null&&d.bulkPurchase?["alternate","auto-fill"].includes(t==null?void 0:t.entryMode)||t!=null&&t.vacationMode?"":t==null?void 0:t.quantityInLiters:["auto-fill","alternate"].includes(t==null?void 0:t.entryMode)?"":(i=t==null?void 0:t.quantityInLiters)!=null?i:""},[r,R,A,d==null?void 0:d.bulkPurchase]),C=o.useMemo(()=>{let t=0;return y.forEach(a=>{var g,_,D;const i=r(a),u=(D=(_=(g=R[i])!=null?g:N.current[i])!=null?_:a.quantityInLiters)!=null?D:0;(a.entryMode!=="auto-fill"||A&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1)||d!=null&&d.bulkPurchase&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1))&&(t+=Number(u)||0)}),t},[y,R,r,A,d==null?void 0:d.bulkPurchase]),ee=o.useCallback(t=>{s({type:"APP_SET_CURRENT_MONTH",payload:Q(),name:"currentMonth",meta:{type:"SET_CURRENT_MONTH"}});const a=[...new Set(y.map(i=>i.purchaseId))];s({type:"APP_SET_CUSTOMER_LIST_IN_BILL_CARD",payload:{customers:a.map(i=>({_id:i}))},name:"customerListInBillCard",meta:{type:"SET_CUSTOMER_LIST_IN_BILL_CARD"}}),p(`/party/bill/${t}`,{state:{navigate:window.location.pathname,purchaseId:t}})},[p,y,s]),O=(j==null?void 0:j.role)==="admin",ae=o.useCallback(t=>{const a=l(t);if(a===""&&(t!=null&&t._id))$({_id:t==null?void 0:t._id,purchaseId:t.purchaseId,milkTypeId:t.milkTypeId,quantityInLiters:0,milkTimePreference:b,pricePerUnit:t.pricePerUnit,mode:"delete"}),H({}),N.current={};else{if(Number.isNaN(+a)||+a<0||a===""||a===null||a===void 0)return;$({_id:t==null?void 0:t._id,purchaseId:t.purchaseId,milkTypeId:t.milkTypeId,quantityInLiters:a,milkTimePreference:b,pricePerUnit:t.pricePerUnit}),H({}),N.current={}}},[b,l,$]),X=o.useCallback(()=>E(null,null,function*(){s(yield B({method:"POST",apiUrl:"party/register",data:{deliveryDate:v},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER",apiSuccessCallBack:()=>{K(!1)}}))}),[v]),te=(t,a)=>t.map(i=>{const u=a.filter(w=>{var G;return w.milkTypeId===i._id||((G=w.milkType)==null?void 0:G._id)===i._id}),g=u.find(w=>w.timePreference==="morning"),_=u.find(w=>w.timePreference==="evening"),D=(g==null?void 0:g._id)||(_==null?void 0:_._id)||null;return M(I({},i),{_id:D,milkTypeId:i._id,selected:u.length>0,morning:g?g.dailyMilkQuantityInLiters:1,evening:_?_.dailyMilkQuantityInLiters:1,pricePerUnit:u.length>0&&u[0].pricePerUnit||i.pricePerUnit})}),he=o.useCallback((t,a)=>E(null,null,function*(){s(yield B({apiUrl:"milkType",loader:!0,apiSuccessCallBack:u=>E(null,[u],function*({milkTypes:i}){if(a){t.milkTypeEntries=yield te(i,t.milkPreferences);const g=M(I({},t),{entries:void 0});K(g)}})}))}),[s]),W=o.useCallback(t=>E(null,null,function*(){s(yield B({apiUrl:`party/${t.purchaseId}`,loader:!0,apiSuccessCallBack:a=>E(null,null,function*(){yield he(a.customer,t.purchaseId)})}))}),[s]);o.useCallback(t=>E(null,null,function*(){s(yield B({method:"POST",apiUrl:"payment/customer/outstanding",loader:!0,data:{purchaseId:t.purchaseId},apiSuccessCallBack:a=>{const i=a==null?void 0:a.customer;i&&(s({type:"APP_SET_SELECTED_CUSTOMER_PAYMENT",payload:i,name:"selectedCustomerPayment",meta:{type:"SET_SELECTED_CUSTOMER_PAYMENT"}}),p(`/add/payment/bill/${i==null?void 0:i.purchaseId._id}/sales`,{state:{navigate:window.location.pathname}}))}}))}),[s]);const q=o.useCallback(t=>E(null,null,function*(){if(!t.destination)return;const a=[...y],[i]=a.splice(t.source.index,1);a.splice(t.destination.index,0,i),V(a),s(yield B({method:"POST",apiUrl:"dailyRegisterOrder/purchase",data:{customers:a.map((u,g)=>({purchaseId:u.purchaseId,milkTypeId:u.milkTypeId,milkTimePreferenceId:u.milkTimePreferenceId,registerIndex:g+1}))},loader:!0,apiSuccessCallBack:()=>F()}))}),[y,s,k,F]),ge=o.useCallback(()=>{const t=[];if(y.forEach(a=>{var w;const i=l(a),u=new Date(v),g=new Date;if(u.setHours(g.getHours(),g.getMinutes(),g.getSeconds(),g.getMilliseconds()),(i===""||i===null)&&(a!=null&&a._id)){t.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:0,milkTimePreference:b.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:u,deliveryDateIST:ue(new Date(u)),mode:"delete"});return}if(i===""||i===null||i===void 0||Number.isNaN(+i)||+i<0)return;const _=+i,D=Number((w=a==null?void 0:a.quantityInLiters)!=null?w:0);a!=null&&a._id&&_===D||t.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:_,milkTimePreference:b.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:u,deliveryDateIST:ue(new Date(u)),mode:a!=null&&a._id?"update":"create"})}),t.length===0){me.error("No valid entries to update");return}$({milkEntries:t,isBulkPurchase:!0}),H({}),N.current={}},[y,l,b,$,v]),Y=S&&(L==null?void 0:L.canDragDrop);return b?e.jsxs("div",{className:"rounded-xl shadow-lg border border-gray-300 mb-6",children:[e.jsx("div",{className:`${J} text-white px-6 py-1 font-bold text-lg rounded-t-xl flex justify-between items-center gap-1`}),e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsx("thead",{className:`${J} text-white`,children:e.jsxs("tr",{className:T,children:[Y&&e.jsx("th",{className:`px-1 py-1 border border-l-4 notranslate w-10 ${T}`,children:"⇅"}),e.jsx("th",{className:`px-2 py-3 w-5 border-l-4 ${T}`,children:"#"}),e.jsx("th",{className:`px-2 py-3 ${T}`,children:"Customer"}),O&&e.jsx("th",{className:`px-2 py-3 ${T} w-5`,children:"#"}),e.jsx("th",{className:`px-1 py-1 ${T} w-10 sm:w-20 lg:w-20`,children:"Liter"})]})}),e.jsx(Ee,{onDragEnd:Y?q:void 0,children:e.jsx(Se,{droppableId:"table-body",isDropDisabled:!Y,children:t=>e.jsxs("tbody",M(I({ref:t.innerRef},t.droppableProps),{children:[y.map((a,i)=>{let u=i%2===0?Z:"bg-white";if(!["auto-fill","auto","alternate","manual","update","auto-register"].includes(a.entryMode))u="bg-[#ffaeaee6]";else{const D=Number(a.quantityInLiters)||0,w=Number(a.customerQuantityInLiters)||0;D===0?u="bg-red-200 border-l-4 border-red-500":D<w?u="bg-yellow-400 border-l-4 border-yellow-800":D>w?u="bg-green-200 border-l-4 border-green-500":a.entryMode==="manual"?u="bg-blue-200 border-l-4 border-blue-600":a.entryMode==="update"&&(u="bg-purple-100 border-l-4 border-purple-600")}const _=`${a.purchaseId}_${a.milkTypeId}`;return e.jsx(Le,{draggableId:_,index:i,isDragDisabled:!Y,children:D=>e.jsxs("tr",M(I({ref:D.innerRef},Y?D.draggableProps:{}),{className:`border ${u} relative`,children:[Y&&e.jsx("td",M(I({className:`px-1 py-1 text-center font-semibold border cursor-grab active:cursor-grabbing select-none ${T}`},Y?D.dragHandleProps:{}),{children:"⋮⋮"})),e.jsx("td",{className:`px-1 py-1 text-center notranslate ${T}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{children:i+1}),j.role==="admin"&&e.jsx("div",{children:e.jsxs(f.Menu,{placement:"bottom-end",children:[e.jsx(f.MenuHandler,{className:"max-w-[30px] max-h-[30px] bg-gray-400",children:e.jsx(f.IconButton,{variant:"text",className:"rounded-lg",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-black font-extrabold text-sm"})})}),e.jsxs(f.MenuList,{className:"p-2",children:[e.jsxs(f.MenuItem,{onClick:()=>W(a),className:"flex items-center gap-2 hover:bg-orange-50 text-black",children:[e.jsx("div",{className:"w-[15px] h-[15px] flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-box-open text-gray-600 text-sm"})}),"Update Product"]}),e.jsxs(f.MenuItem,{onClick:()=>{p(`/party/update/${a.purchaseId}`,{state:{navigate:window.location.pathname}})},className:"flex items-center gap-2 hover:bg-orange-50 text-black",children:[e.jsx("div",{className:"w-[15px] h-[15px] flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-user text-gray-600 text-sm"})}),"Edit Party"]})]})]})})]})}),e.jsxs("td",{className:`px-1 py-1 notranslate cursor-pointer break-all ${T}`,children:[e.jsxs("span",{children:[e.jsx("b",{children:a.name})," - ",e.jsx("span",{className:"text-red-900 font-bold",children:a.milkType}),L.canViewMilkPrice?` ( ${a.pricePerUnit} )`:""]}),e.jsx("br",{}),(L.showPhone||(a==null?void 0:a.isShowPhoneToDeliveryBoy))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"break-all",children:a.phone}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(a.phone),me.success("Phone copied.")},className:"ml-2 text-blue-600 hover:text-blue-800",title:"Copy Phone",children:e.jsx("i",{className:"fa-solid fa-copy"})}),e.jsx("br",{})]})]}),O&&e.jsx("td",{className:`px-1 py-1 cursor-pointer ${T}`,onClick:()=>ee(a.purchaseId),children:e.jsx("div",{className:"flex justify-center",children:e.jsx(Ue,{className:"w-5 text-blue-600"})})}),e.jsxs("td",{className:`px-1 py-1 text-center ${T} relative`,children:[e.jsx("input",{"data-daily-sale-key":r(a),type:"number",min:0,inputMode:"decimal",enterKeyHint:"next",disabled:!L.canEditList||(a==null?void 0:a.vacationMode),value:l(a),onChange:w=>c(a,w.target.value),onBlur:()=>{d!=null&&d.bulkPurchase||ae(a)},onKeyDown:w=>{if(w.key==="Enter"){w.preventDefault();const G=w.target,le=document.querySelectorAll("input[data-daily-sale-key]"),be=Array.from(le).findIndex(fe=>fe===G),ne=le[be+1];G.blur(),setTimeout(()=>{ne&&ne.focus()},0)}},onWheel:w=>w.target.blur(),className:"w-10 sm:w-20 lg:w-20 font-extrabold text-center border rounded-md py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"}),(a==null?void 0:a.vacationMode)&&e.jsx("div",{className:"absolute z-10 top-0 right-0 overflow-hidden w-[96px] h-[48px] pointer-events-none",children:e.jsx("div",{className:`\r
                    absolute\r
                    top-[25px]\r
                    left-[20px]\r
                    rotate-[47deg]\r
                    w-[140%]\r
                    h-[10px]\r
                    text-center\r
                    bg-gradient-to-r from-pink-600 via-white to-pink-600\r
                    bg-[length:200%_100%]\r
                    animate-[shimmer_3s_linear_infinite]\r
                    text-white\r
                    text-[10px]\r
                    font-bold\r
                    tracking-wider\r
                    py-0.5\r
        border border-white/20 dark:border-white/10\r
                `})})]})]}),`${a.purchaseId}-${i}`)},`${a.purchaseId}-${i}`)}),t.placeholder]}))})}),e.jsx("tfoot",{className:"bg-gray-100 font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:Y?O?4:3:Y?2:O?3:2,className:`px-2 py-2 text-center ${T}`,children:"Total Milk"}),e.jsxs("td",{className:`px-2 py-2 text-center border notranslate ${T}`,children:[C.toFixed(2)," L"]})]})})]}),(d==null?void 0:d.bulkPurchase)&&L.canEditList&&e.jsx("div",{className:"flex justify-center gap-2 my-2",children:e.jsx(f.Button,{variant:"gradient",color:"pink",onClick:()=>ge(),children:"Add Bulk Purchase"})}),e.jsx(f.Dialog,{open:z,handler:()=>K(!1),className:"bg-transparent shadow-none border-none outline-none rounded-2xl w-[96%] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[500px]",size:"xl",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(f.DialogHeader,{className:"flex flex-col items-start gap-1 pb-4 border-b border-gray-200",children:[e.jsx(f.Typography,{className:"text-xl font-bold text-gray-900",children:"Select Product"}),e.jsx(f.Typography,{className:"text-sm text-gray-900 font-normal",children:"Customize purchase product selection"})]}),e.jsx(f.DialogBody,{className:"pt-5 px-0 overflow-y-auto",children:e.jsx(Oe,M(I(I({},m),z),{handleSaveAndCloseProductPopup:X}))})]})]})})]}):null},Qe=pe.memo(qe),ze=m=>{const n=m instanceof Date?m:new Date(m);if(isNaN(n))return null;const s=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),p=5.5*60*60*1e3,k=new Date(s+p),j=k.getUTCFullYear(),h=String(k.getUTCMonth()+1).padStart(2,"0"),P=String(k.getUTCDate()).padStart(2,"0");let x=k.getUTCHours();const v=String(k.getUTCMinutes()).padStart(2,"0"),d=x>=12?"PM":"AM";return x=x%12||12,`${j}-${h}-${P} ${x}:${v} ${d}`},ea=()=>{const m=o.useRef(null),n=xe(),s=Te(),{dispatch:p,appSelector:k}=se(),{dailyPurchaseRegisterData:j,dailySaleDate:h,adminData:P,dailySaleSettings:x}=k(r=>r.app),[v,d]=o.useState(void 0),U=r=>{const c=(r==null?void 0:r.toLowerCase())||"both";return c==="morning"?"Morning":c==="evening"?"Evening":new Date().getHours()<12?"Morning":"Evening"};o.useEffect(()=>{var r,c;(c=(r=P==null?void 0:P.data)==null?void 0:r.generalSettings)!=null&&c.autoSelectShift?d(U("both")):d((x==null?void 0:x.selectedShift)||U("both"))},[]);const[b,$]=o.useState(!0),[S,F]=o.useState(""),[A,L]=o.useState(""),[y,V]=o.useState({showDragColumn:!1,estimate:!1}),R=({deliveryDate:r})=>c=>E(null,null,function*(){c(yield B({method:"POST",apiUrl:"party/register",data:{deliveryDate:r},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER"}))}),H=o.useCallback(()=>{h&&p(R({deliveryDate:h}))},[p,h]),z=o.useCallback(r=>E(null,null,function*(){const c=r==="prev"?Q(h).subtract(1,"day").format("YYYY-MM-DD"):Q(h).add(1,"day").format("YYYY-MM-DD");p({type:"APP_UPDATE_DAILY_SALE_DATE",payload:c,name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}})}),[p,h]),K=o.useCallback(r=>{const c=r.target.value;if(!c)return;const l=Q(c,"YYYY-MM-DD");p({type:"APP_SET_DAILY_SALE_DATE",payload:l.format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}})},[p]),N=v==="Morning"?j==null?void 0:j.morning:j==null?void 0:j.evening;o.useEffect(()=>{const r=setTimeout(()=>{L(S)},300);return()=>clearTimeout(r)},[S]);const Z=o.useMemo(()=>{if(!N)return[];const r=A.toLowerCase().trim();return r?N.filter(c=>{var C;return(((C=c.name)==null?void 0:C.toLowerCase())||"").includes(r)}):N},[N,A]),J=o.useCallback(he=>E(null,[he],function*({_id:r,purchaseId:c,milkTypeId:l,quantityInLiters:C,milkTimePreference:ee,mode:O="",pricePerUnit:ae,isBulkPurchase:X=!1,milkEntries:te}){if(X){p(yield B({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:te,isBulkSell:X},loader:!0,apiSuccessCallBack:()=>{p(R({deliveryDate:h}))}}));return}const W=new Date(h),q=new Date;W.setHours(q.getHours(),q.getMinutes(),q.getSeconds(),q.getMilliseconds()),p(yield B({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:[M(I(I({},r&&{_id:r}),O&&{mode:O}),{purchaseId:c,milkTypeId:l,quantityInLiters:C,pricePerUnit:ae,deliveryDate:W,deliveryDateIST:ze(new Date(W)),milkTimePreference:ee.toLowerCase()})]},loader:!0,apiSuccessCallBack:()=>{p(R({deliveryDate:h}))}}))}),[p,h]),T=o.useMemo(()=>{if(!(N!=null&&N.length))return[];let r;y!=null&&y.estimate?r=N:r=N.filter(l=>["auto","manual","update"].includes(l==null?void 0:l.entryMode));const c={};return r.forEach(l=>{const C=b?`${(l==null?void 0:l.milkType)||"Milk"}`:`${(l==null?void 0:l.milkType)||"Milk"}_${(l==null?void 0:l.pricePerUnit)||0}`;c[C]||(c[C]={animalName:(l==null?void 0:l.milkType)||"Milk",totalLiter:0,pricePerUnit:(l==null?void 0:l.pricePerUnit)||0}),c[C].totalLiter+=Number((l==null?void 0:l.quantityInLiters)||0)}),Object.values(c)},[N,b,y==null?void 0:y.estimate]);if(o.useEffect(()=>(h||p({type:"APP_SET_DAILY_SALE_DATE",payload:Q().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}}),()=>{p({type:"APP_UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY",payload:void 0,name:"dailyPurchaseRegisterData",meta:{type:"UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY"}})}),[]),o.useEffect(()=>{h&&p(R({deliveryDate:h}))},[h]),!!v)return e.jsxs(e.Fragment,{children:[e.jsx($e,{back:!0,headerTitle:e.jsx("div",{className:"text-gray-900 font-bold text-sm flex items-center",children:"Daily Purchase"}),onBack:()=>{var r;return n(((r=s==null?void 0:s.state)==null?void 0:r.navigate)||"/dashboard")},menu:e.jsx(e.Fragment,{children:e.jsxs(f.Menu,{placement:"bottom-end",children:[e.jsx(f.MenuHandler,{children:e.jsx(f.IconButton,{className:"w-[40px] h-[40px] bg-gray-600 shadow-md rounded-lg p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-lg"})})}),e.jsxs(f.MenuList,{className:`\r
                    min-w-[270px]\r
                    p-0\r
                    overflow-hidden\r
                    rounded-3xl\r
                    border border-white/30\r
                    bg-white/80\r
                    backdrop-blur-2xl\r
                    shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]\r
                `,children:[e.jsxs("div",{className:`\r
                    relative overflow-hidden\r
                    px-5 py-4\r
                    bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500\r
                `,children:[e.jsx("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-xl"}),e.jsxs("div",{className:"relative flex items-center gap-3",children:[e.jsx("div",{className:`\r
                            w-11 h-11 rounded-2xl\r
                            bg-white/15\r
                            border border-white/20\r
                            flex items-center justify-center\r
                            shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-sliders text-white text-lg"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-white font-bold text-[15px] tracking-wide",children:"Quick Actions"}),e.jsx("div",{className:"text-white/80 text-[11px]",children:"Manage purchase register settings"})]})]})]}),e.jsxs("div",{className:"p-3 flex flex-col gap-2",children:[e.jsxs(f.MenuItem,{onClick:()=>n("/party/add"),className:`\r
                            rounded-2xl\r
                            px-4 py-3\r
                            transition-all duration-300\r
                            hover:bg-indigo-50\r
                            active:scale-[0.98]\r
                            flex items-center justify-between\r
                            border border-transparent\r
                            hover:border-indigo-100\r
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                                w-10 h-10 rounded-xl\r
                                bg-gradient-to-br from-indigo-500 to-blue-500\r
                                flex items-center justify-center\r
                                shadow-md\r
                            `,children:e.jsx("i",{className:"fa-solid fa-user-plus text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:"Add New Party"}),e.jsx("div",{className:"text-[11px] text-gray-900",children:"Create new purchase party"})]})]}),e.jsx("i",{className:"fa-solid fa-angle-right text-gray-900 text-xs"})]}),e.jsx("div",{className:`\r
                        px-2 pt-2 pb-1\r
                        text-[11px]\r
                        uppercase tracking-[0.18em]\r
                        font-bold text-gray-900\r
                    `,children:"Preferences"}),e.jsxs(f.MenuItem,{onClick:()=>V(r=>M(I({},r),{showDragColumn:!r.showDragColumn})),className:`\r
                            rounded-2xl\r
                            px-4 py-3\r
                            transition-all duration-300\r
                            hover:bg-slate-50\r
                            active:scale-[0.98]\r
                            flex items-center justify-between\r
                            border border-transparent\r
                            hover:border-slate-200\r
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                                w-10 h-10 rounded-xl\r
                                bg-gradient-to-br from-pink-700 to-pink-900\r
                                flex items-center justify-center\r
                                shadow-md\r
                            `,children:e.jsx("i",{className:"fa-solid fa-grip-vertical text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:"Enable Drag"}),e.jsx("div",{className:"text-[11px] text-gray-900",children:"Reorder purchase entries"})]})]}),e.jsx(f.Checkbox,{checked:y.showDragColumn,onChange:()=>{},ripple:!1,className:"rounded-md",color:"indigo"})]})]})]})]})})}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-1 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex mb-4 justify-between items-center px-4 py-3 bg-white/70 backdrop-blur-lg rounded-xl shadow-md border border-gray-200",children:[e.jsx("button",{onClick:()=>z("prev"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[15px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-800 tracking-wide",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:Q(h).format("DD MMMM, YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:m,type:"date",className:"absolute inset-0 opacity-0 cursor-pointer",value:h||"",onChange:K})]}),e.jsx("button",{onClick:()=>z("next"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[15px]"})})]}),e.jsx("div",{className:"w-full pb-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{label:"Morning",icon:Ae,gradient:"from-yellow-900/40 to-yellow-300/10",border:"border-yellow-800",glow:"shadow-yellow-800",text:"text-yellow-900"},{label:"Evening",icon:Re,gradient:"from-indigo-500/20 to-indigo-300/10",border:"border-indigo-400",glow:"shadow-indigo-400",text:"text-indigo-700"}].map(r=>{const c=v===r.label,l=r.icon;return e.jsxs("div",{onClick:()=>d(r.label),className:`
                    relative cursor-pointer rounded-lg p-[1px]
                    transition-all duration-300 group

                `,children:[e.jsx("div",{className:`
                        absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${r.glow}
                    `}),e.jsxs("div",{className:`flex gap-2 items-center justify-center
                        relative rounded-lg px-2 py-2 backdrop-blur-xl
                        border transition-all duration-300

                        ${c?`${r.border} bg-gradient-to-br ${r.gradient} shadow-lg ${r.glow}`:"border-gray-200 bg-white/70"}
                    `,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:`
                                p-2 rounded-lg transition-all duration-300
                                ${c?"bg-white/70 shadow-sm":"bg-gray-100"}
                            `,children:e.jsx(l,{className:`
                                    w-[15px] h-[15px]
                                    ${c?r.text:"text-gray-400"}
                                `})})}),e.jsx("div",{className:`
                            text-sm font-semibold tracking-wide
                            ${c?r.text:"text-gray-600"}
                        `,children:r.label})]})]},r.label)})})}),e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:"Search by name...",value:S,onChange:r=>F(r.target.value),className:`\r
                                w-full\r
                                pl-10\r
                                pr-4\r
                                py-2.5\r
                                rounded-lg\r
                                border border-gray-300\r
                                bg-white\r
                                shadow-sm\r
                                focus:outline-none\r
                                focus:ring-2\r
                                focus:ring-blue-400\r
                                text-sm\r
                            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),N&&N.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Qe,{timePreference:v==null?void 0:v.toLowerCase(),entries:[...Z].sort((r,c)=>{var l,C;return((l=r.registerIndex)!=null?l:-1/0)-((C=c.registerIndex)!=null?C:-1/0)}),handleUpdateCustomerMilkEntry:J,fetchRegister:H,estimate:y.estimate,showDragColumn:y.showDragColumn},"daily-register"),T.length>0&&e.jsx("div",{className:"flex justify-center mb-6",children:e.jsxs("label",{className:`\r
            group relative flex items-center gap-4 px-6 py-4\r
            bg-white/10 border border-white/20 backdrop-blur-xl\r
            shadow-xl shadow-purple-300/20\r
            rounded-3xl cursor-pointer select-none\r
            transition-all duration-500\r
\r
            hover:bg-white/20 hover:border-purple-300/40\r
            hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]\r
            hover:-translate-y-1\r
        `,children:[e.jsx("div",{className:`\r
            absolute inset-0 -z-10 rounded-3xl\r
            bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20\r
            blur-2xl opacity-40\r
            transition-all duration-700\r
            group-hover:opacity-60 group-hover:blur-[42px]\r
        `}),e.jsx(f.Switch,{id:"autoMilkEntry",name:"autoMilkEntry",checked:b,onChange:()=>$(!b),className:`\r
                peer scale-110\r
                checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-600\r
                checked:ring-4 checked:ring-purple-300/40\r
                transition-all duration-500\r
            `,label:""}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-800 tracking-wide",children:"Combine By Product"}),e.jsx("span",{className:"text-[11px] text-black italic",children:"Groups same product types & merges their totals"})]})]})}),T.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    bg-gradient-to-br from-indigo-600 to-blue-600\r
                    flex items-center justify-center shadow-lg\r
                `,children:e.jsx("i",{className:"fa-solid fa-cubes text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-bold text-gray-900",children:"Purchase Milk Summary"}),e.jsx("div",{className:"text-[12px] text-gray-900",children:"Today’s total milk purchase breakdown"})]})]})}),e.jsx("div",{className:`\r
            grid grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            xl:grid-cols-4\r
            gap-5\r
        `,children:T.map(({animalName:r,totalLiter:c,pricePerUnit:l})=>e.jsxs("div",{className:`\r
                        group relative overflow-hidden\r
                        rounded-lg border border-white/60\r
                        bg-white/70 backdrop-blur-xl\r
                        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]\r
                        transition-all duration-500\r
                    `,children:[e.jsx("div",{className:`\r
                        absolute -inset-1 opacity-0\r
                        bg-gradient-to-r\r
                        from-indigo-500\r
                        via-blue-500\r
                        to-cyan-400\r
                        blur-xl transition duration-700\r
                    `}),e.jsx("div",{className:`\r
                        relative h-1.5\r
                        bg-gradient-to-r\r
                        from-indigo-600\r
                        to-blue-600\r
                    `}),e.jsxs("div",{className:"relative p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`\r
                                text-[16px]\r
                                uppercase\r
                                tracking-widest\r
                                text-gray-900\r
                                font-semibold\r
                            `,children:r}),!b&&e.jsxs("div",{className:"text-[12px] text-indigo-600 font-bold mt-1",children:["₹ ",l," / Liter"]})]}),e.jsx("div",{className:"mt-2 flex items-end justify-between",children:e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("span",{className:`\r
                                    text-[25px]\r
                                    font-extrabold\r
                                    text-gray-900\r
                                    leading-none\r
                                    notranslate\r
                                `,children:Number(c).toFixed(2)}),e.jsx("span",{className:`\r
                                    text-[13px]\r
                                    text-gray-500\r
                                    mt-3\r
                                    font-semibold\r
                                `,children:"Liter"})]})}),e.jsx("div",{className:`\r
                            mt-2 h-px\r
                            bg-gradient-to-r\r
                            from-transparent\r
                            via-gray-300\r
                            to-transparent\r
                        `}),e.jsxs("div",{className:`\r
                            mt-2 text-[12px]\r
                            text-gray-900\r
                            flex items-center gap-1\r
                        `,children:[e.jsx("i",{className:"fa-solid fa-chart-line text-indigo-500"}),"Total milk purchased"]})]})]},`${r}_${l||"merge"}`))})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-2",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx("i",{className:"fa-solid fa-users-slash text-red-400 text-3xl"})}),e.jsx("h3",{className:"text-gray-800 font-semibold text-base",children:"No Purchase Entries Found"}),e.jsx("p",{className:"text-sm text-gray-500",children:"No data available for selected date."})]})]})]})};export{ze as convertToIST_AMPM,ea as default};
