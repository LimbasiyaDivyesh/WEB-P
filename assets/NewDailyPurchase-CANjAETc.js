var je=Object.defineProperty,Ne=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var se=(u,n,i)=>n in u?je(u,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[n]=i,I=(u,n)=>{for(var i in n||(n={}))we.call(n,i)&&se(u,i,n[i]);if(te)for(var i of te(n))ke.call(n,i)&&se(u,i,n[i]);return u},P=(u,n)=>Ne(u,ve(n));var E=(u,n,i)=>new Promise((m,v)=>{var f=g=>{try{T(i.next(g))}catch(w){v(w)}},h=g=>{try{T(i.throw(g))}catch(w){v(w)}},T=g=>g.done?m(g.value):Promise.resolve(g.value).then(f,h);T((i=i.apply(u,n)).next())});import{j as e}from"./editorVendor-D_Lx4EXd.js";import{e as oe,h as de,j as ye,a as o,u as Te}from"./reactVendor-CE1rFsL2.js";import{u as Z,t as Ie,d as _e,e as De,a as b,A as H,i as ie,v as Me,k as X,I as Pe,b as Ce,l as Q,p as le,z as ne,J as Se,K as Ee,M as Le,y as $e,D as Ue,w as Ae,x as Re}from"./index-BBJFAAa9.js";import{I as Ye}from"./uiVendor-ZYlIWZ6Q.js";import"./reduxVendor-D5txF5S3.js";import"./pdfVendor-Dow4k7Ok.js";const Be=ie().shape({milkTypeEntries:Me().of(ie().shape({selected:Pe(),morning:X().min(0).nullable(),evening:X().min(0).nullable(),pricePerUnit:X().min(0).required("Price required")})).test("at-least-one-selected","Please select at least one product",u=>u==null?void 0:u.some(n=>n.selected))}),Fe=u=>{const n=[];return u.forEach(i=>{const m=Number(i.morning),v=Number(i.evening),f=m>0,h=v>0;f&&h?(n.push(P(I({},i),{originalHadBoth:!0,dailyMilkQuantityInLiters:v,timePreference:"evening"})),n.push(P(I({},i),{originalHadBoth:!0,dailyMilkQuantityInLiters:m,timePreference:"morning"}))):!f&&h?n.push(P(I({},i),{originalHadBoth:!1,dailyMilkQuantityInLiters:v,timePreference:"evening"})):f&&!h&&n.push(P(I({},i),{originalHadBoth:!1,dailyMilkQuantityInLiters:m,timePreference:"morning"}))}),n},He=u=>{const{_id:n,milkTypeEntries:i,handleSaveAndCloseProductPopup:m}=u,v=n||u.purchaseId,{dispatch:f}=Z(),{isLoading:h}=Ie(),T=w=>E(null,[w],function*({milkTypeEntries:g}){f(yield H({method:"PUT",apiUrl:`party/${v}/milk-preferences`,data:{milkPreferences:Fe(g.filter(d=>d.selected)).map(d=>{const L=d.originalHadBoth;return I({milkTypeId:d.milkTypeId,dailyMilkQuantityInLiters:1,timePreference:d.timePreference,pricePerUnit:d.pricePerUnit},v&&!L&&{_id:d._id})})},loader:!0,apiSuccessCallBack:()=>{m()}}))});return e.jsx(_e,{initialValues:{milkTypeEntries:i},validationSchema:Be,enableReinitialize:!0,onSubmit:T,children:({values:g,handleChange:w,handleBlur:d,errors:L,touched:j})=>e.jsxs(De,{className:"flex flex-col h-[70vh] mb-0",children:[e.jsx("div",{className:"flex-1 pr-1 overflow-hidden",children:e.jsx("div",{className:"w-full h-full overflow-auto custom-scroll hide-scrollbar rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/60",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-50 to-purple-50/60 shadow-sm",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-1 sticky left-0 bg-indigo-50/70 backdrop-blur-md"}),e.jsx("th",{className:"py-4 px-1 text-left text-gray-700 font-semibold",children:"Product"}),e.jsx("th",{className:"py-4 px-1 text-center text-gray-700 font-semibold",children:e.jsx(Ye,{size:16,className:"mx-auto text-gray-900 font-extrabold"})})]})}),e.jsx("tbody",{children:((g==null?void 0:g.milkTypeEntries)||[]).map(($,A)=>{var M,R;return e.jsxs("tr",{className:`border-b border-gray-200\r
                    transition-all duration-200\r
                    hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-purple-50/40\r
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    hover:-translate-y-[1px]`,children:[e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(b.Checkbox,{color:"blue",ripple:!0,className:"p-0 hover:scale-105 transition-transform duration-150 outline-none",containerProps:{className:"px-1 m-0"},name:`milkTypeEntries[${A}].selected`,checked:((R=(M=g.milkTypeEntries)==null?void 0:M[A])==null?void 0:R.selected)||!1,onChange:w})})}),e.jsx("td",{className:"py-4 px-1 text-gray-900 font-medium tracking-wide break-after-all w-[30%]",children:$.name}),e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"number",placeholder:"",className:`w-[60px] px-0 py-2 text-center rounded-lg border border-gray-300\r
                                bg-gray-50 focus:bg-white\r
                                focus:ring-2 focus:ring-indigo-500\r
                                outline-none shadow-sm transition-all`,name:`milkTypeEntries[${A}].pricePerUnit`,min:1,step:"0.01",value:g.milkTypeEntries[A].pricePerUnit,onChange:w,onBlur:d,onWheel:C=>C.target.blur()})})})]},$._id||`milkType-${A}`)})})]})})}),L.milkTypeEntries&&j.milkTypeEntries&&e.jsx("p",{className:"text-red-500 text-sm mt-2 font-bold text-center",children:L.milkTypeEntries}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-md p-5 pt-7",children:e.jsx(b.Button,{type:"submit",className:"w-full bg-[#005ec4] hover:bg-[#004aa0] py-3 rounded-lg shadow-lg",disabled:h,children:"Update Product"})})]})})},Oe=oe.memo(He),qe=u=>{var ee;const{appSelector:n,dispatch:i}=Z(),m=de(),{deliveryBoyId:v}=ye(),{userData:f}=Ce(),{dailyRegisterData:h,deliveryBoyAccess:T,adminData:g,dailySaleDate:w}=n(r=>r.app),d=(ee=g==null?void 0:g.data)==null?void 0:ee.moduleSettings,{entries:L=[],timePreference:j,handleUpdateCustomerMilkEntry:$,showDragColumn:A=!0,fetchRegister:M,estimate:R}=u,C=(T==null?void 0:T.data)||{},[U,z]=o.useState([]),[O,y]=o.useState({}),[G,K]=o.useState(!1),S=o.useRef({}),s=o.useMemo(()=>j==="morning"?"bg-teal-50":"bg-blue-50",[j]),x=o.useMemo(()=>j==="morning"?"bg-teal-600":"bg-blue-600",[j]),t=o.useMemo(()=>j==="morning"?"border border-teal-600":"border border-blue-600",[j]);o.useEffect(()=>{z(L||[]),y({}),S.current={}},[L,j]);const k=o.useCallback(r=>`${r.purchaseId}_${r.milkTypeId}_${j}_${r.milkTimePreferenceId}`,[j]),V=o.useCallback((r,a)=>{const l=a,c=k(r);if(!/^\d*\.?\d*$/.test(l))return;let p=l;if(p.length>1&&p.startsWith("0")&&!p.startsWith("0.")&&(p=p.replace(/^0+/,"")),y(D=>P(I({},D),{[c]:p})),S.current[c]=p,a==="")return;const _=Number(p);Number.isNaN(_)||_<0},[k,j]),B=o.useCallback(r=>{var l;const a=k(r);return O[a]!==void 0?O[a]:S.current[a]!==void 0?S.current[a]:R?["alternate"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:d!=null&&d.bulkSale?["alternate"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:["auto-fill","alternate"].includes(r==null?void 0:r.entryMode)?"":(l=r==null?void 0:r.quantityInLiters)!=null?l:""},[k,O,R,d==null?void 0:d.bulkSale]),J=o.useMemo(()=>{let r=0;return U.forEach(a=>{var p,_,D;const l=k(a),c=(D=(_=(p=O[l])!=null?p:S.current[l])!=null?_:a.quantityInLiters)!=null?D:0;(a.entryMode!=="auto-fill"||R&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1)||d!=null&&d.bulkSale&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1))&&(r+=Number(c)||0)}),r},[U,O,k,R,d==null?void 0:d.bulkSale]),ce=o.useCallback(r=>{i({type:"APP_SET_CURRENT_MONTH",payload:Q(),name:"currentMonth",meta:{type:"SET_CURRENT_MONTH"}});const a=[...new Set(U.map(l=>l.purchaseId))];i({type:"APP_SET_CUSTOMER_LIST_IN_BILL_CARD",payload:{customers:a.map(l=>({_id:l}))},name:"customerListInBillCard",meta:{type:"SET_CUSTOMER_LIST_IN_BILL_CARD"}}),m(`/party/bill/${r}`,{state:{navigate:window.location.pathname,purchaseId:r}})},[m,U,i]),F=(f==null?void 0:f.role)==="admin",q=o.useCallback(r=>{const a=B(r);if(a===""&&(r!=null&&r._id))$({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:0,milkTimePreference:j,pricePerUnit:r.pricePerUnit,mode:"delete"}),y({}),S.current={};else{if(Number.isNaN(+a)||+a<0||a===""||a===null||a===void 0)return;$({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:a,milkTimePreference:j,pricePerUnit:r.pricePerUnit}),y({}),S.current={}}},[j,B,$]),ue=o.useCallback(()=>E(null,null,function*(){i(yield H({method:"POST",apiUrl:"party/register",data:{deliveryDate:w},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER",apiSuccessCallBack:()=>{K(!1)}}))}),[w]),me=(r,a)=>r.map(l=>{const c=a.filter(N=>{var W;return N.milkTypeId===l._id||((W=N.milkType)==null?void 0:W._id)===l._id}),p=c.find(N=>N.timePreference==="morning"),_=c.find(N=>N.timePreference==="evening"),D=(p==null?void 0:p._id)||(_==null?void 0:_._id)||null;return P(I({},l),{_id:D,milkTypeId:l._id,selected:c.length>0,morning:p?p.dailyMilkQuantityInLiters:1,evening:_?_.dailyMilkQuantityInLiters:1,pricePerUnit:c.length>0&&c[0].pricePerUnit||l.pricePerUnit})}),xe=o.useCallback((r,a)=>E(null,null,function*(){i(yield H({apiUrl:"milkType",loader:!0,apiSuccessCallBack:c=>E(null,[c],function*({milkTypes:l}){if(a){r.milkTypeEntries=yield me(l,r.milkPreferences);const p=P(I({},r),{entries:void 0});K(p)}})}))}),[i]),pe=o.useCallback(r=>E(null,null,function*(){i(yield H({apiUrl:`party/${r.purchaseId}`,loader:!0,apiSuccessCallBack:a=>E(null,null,function*(){yield xe(a.customer,r.purchaseId)})}))}),[i]);o.useCallback(r=>E(null,null,function*(){i(yield H({method:"POST",apiUrl:"payment/customer/outstanding",loader:!0,data:{purchaseId:r.purchaseId},apiSuccessCallBack:a=>{const l=a==null?void 0:a.customer;l&&(i({type:"APP_SET_SELECTED_CUSTOMER_PAYMENT",payload:l,name:"selectedCustomerPayment",meta:{type:"SET_SELECTED_CUSTOMER_PAYMENT"}}),m(`/add/payment/bill/${l==null?void 0:l.purchaseId._id}/sales`,{state:{navigate:window.location.pathname}}))}}))}),[i]);const he=o.useCallback(r=>E(null,null,function*(){if(!r.destination)return;const a=[...U],[l]=a.splice(r.source.index,1);a.splice(r.destination.index,0,l),z(a),i(yield H({method:"POST",apiUrl:"dailyRegisterOrder/purchase",data:{customers:a.map((c,p)=>({purchaseId:c.purchaseId,milkTypeId:c.milkTypeId,milkTimePreferenceId:c.milkTimePreferenceId,registerIndex:p+1}))},loader:!0,apiSuccessCallBack:()=>M()}))}),[U,i,v,M]),ge=o.useCallback(()=>{const r=[];if(U.forEach(a=>{var N;const l=B(a),c=new Date(w),p=new Date;if(c.setHours(p.getHours(),p.getMinutes(),p.getSeconds(),p.getMilliseconds()),(l===""||l===null)&&(a!=null&&a._id)){r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:0,milkTimePreference:j.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:c,deliveryDateIST:le(new Date(c)),mode:"delete"});return}if(l===""||l===null||l===void 0||Number.isNaN(+l)||+l<0)return;const _=+l,D=Number((N=a==null?void 0:a.quantityInLiters)!=null?N:0);a!=null&&a._id&&_===D||r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:_,milkTimePreference:j.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:c,deliveryDateIST:le(new Date(c)),mode:a!=null&&a._id?"update":"create"})}),r.length===0){ne.error("No valid entries to update");return}$({milkEntries:r,isBulkSell:!0}),y({}),S.current={}},[U,B,j,$,w]),Y=A&&(C==null?void 0:C.canDragDrop);return j?e.jsxs("div",{className:"rounded-xl shadow-lg border border-gray-300 mb-6",children:[e.jsx("div",{className:`${x} text-white px-6 py-1 font-bold text-lg rounded-t-xl flex justify-between items-center gap-1`}),e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsx("thead",{className:`${x} text-white`,children:e.jsxs("tr",{className:t,children:[Y&&e.jsx("th",{className:`px-1 py-1 border border-l-4 notranslate w-10 ${t}`,children:"⇅"}),e.jsx("th",{className:`px-2 py-3 w-5 border-l-4 ${t}`,children:"#"}),e.jsx("th",{className:`px-2 py-3 ${t}`,children:"Customer"}),F&&e.jsx("th",{className:`px-2 py-3 ${t} w-5`,children:"#"}),e.jsx("th",{className:`px-1 py-1 ${t} w-10 sm:w-20 lg:w-20`,children:"Liter"})]})}),e.jsx(Se,{onDragEnd:Y?he:void 0,children:e.jsx(Ee,{droppableId:"table-body",isDropDisabled:!Y,children:r=>e.jsxs("tbody",P(I({ref:r.innerRef},r.droppableProps),{children:[U.map((a,l)=>{let c=l%2===0?s:"bg-white";if(!["auto-fill","auto","alternate","manual","update","auto-register"].includes(a.entryMode))c="bg-[#ffaeaee6]";else{const D=Number(a.quantityInLiters)||0,N=Number(a.customerQuantityInLiters)||0;D===0?c="bg-red-200 border-l-4 border-red-500":D<N?c="bg-yellow-400 border-l-4 border-yellow-800":D>N?c="bg-green-200 border-l-4 border-green-500":a.entryMode==="manual"?c="bg-blue-200 border-l-4 border-blue-600":a.entryMode==="update"&&(c="bg-purple-100 border-l-4 border-purple-600")}const _=`${a.purchaseId}_${a.milkTypeId}`;return e.jsx(Le,{draggableId:_,index:l,isDragDisabled:!Y,children:D=>e.jsxs("tr",P(I({ref:D.innerRef},Y?D.draggableProps:{}),{className:`border ${c} relative`,children:[Y&&e.jsx("td",P(I({className:`px-1 py-1 text-center font-semibold border cursor-grab active:cursor-grabbing select-none ${t}`},Y?D.dragHandleProps:{}),{children:"⋮⋮"})),e.jsx("td",{className:`px-1 py-1 text-center notranslate ${t}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{children:l+1}),f.role==="admin"&&e.jsx("div",{children:e.jsxs(b.Menu,{placement:"bottom-end",children:[e.jsx(b.MenuHandler,{className:"max-w-[30px] max-h-[30px] bg-gray-400",children:e.jsx(b.IconButton,{variant:"text",className:"rounded-lg",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-black font-extrabold text-sm"})})}),e.jsxs(b.MenuList,{className:"p-2",children:[e.jsxs(b.MenuItem,{onClick:()=>pe(a),className:"flex items-center gap-2 hover:bg-orange-50 text-black",children:[e.jsx("div",{className:"w-[15px] h-[15px] flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-box-open text-gray-600 text-sm"})}),"Update Product"]}),e.jsxs(b.MenuItem,{onClick:()=>{m(`/party/update/${a.purchaseId}`,{state:{navigate:window.location.pathname}})},className:"flex items-center gap-2 hover:bg-orange-50 text-black",children:[e.jsx("div",{className:"w-[15px] h-[15px] flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-user text-gray-600 text-sm"})}),"Edit Party"]})]})]})})]})}),e.jsxs("td",{className:`px-1 py-1 notranslate cursor-pointer break-all ${t}`,children:[e.jsxs("span",{children:[e.jsx("b",{children:a.name})," - ",e.jsx("span",{className:"text-red-900 font-bold",children:a.milkType}),C.canViewMilkPrice?` ( ${a.pricePerUnit} )`:""]}),e.jsx("br",{}),(C.showPhone||(a==null?void 0:a.isShowPhoneToDeliveryBoy))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"break-all",children:a.phone}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(a.phone),ne.success("Phone copied.")},className:"ml-2 text-blue-600 hover:text-blue-800",title:"Copy Phone",children:e.jsx("i",{className:"fa-solid fa-copy"})}),e.jsx("br",{})]})]}),F&&e.jsx("td",{className:`px-1 py-1 cursor-pointer ${t}`,onClick:()=>ce(a.purchaseId),children:e.jsx("div",{className:"flex justify-center",children:e.jsx($e,{className:"w-5 text-blue-600"})})}),e.jsxs("td",{className:`px-1 py-1 text-center ${t} relative`,children:[e.jsx("input",{"data-daily-sale-key":k(a),type:"number",min:0,inputMode:"decimal",enterKeyHint:"next",disabled:!C.canEditList||(a==null?void 0:a.vacationMode),value:B(a),onChange:N=>V(a,N.target.value),onBlur:()=>{d!=null&&d.bulkSale||q(a)},onKeyDown:N=>{if(N.key==="Enter"){N.preventDefault();const W=N.target,ae=document.querySelectorAll("input[data-daily-sale-key]"),be=Array.from(ae).findIndex(fe=>fe===W),re=ae[be+1];W.blur(),setTimeout(()=>{re&&re.focus()},0)}},onWheel:N=>N.target.blur(),className:"w-10 sm:w-20 lg:w-20 font-extrabold text-center border rounded-md py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"}),(a==null?void 0:a.vacationMode)&&e.jsx("div",{className:"absolute z-10 top-0 right-0 overflow-hidden w-[96px] h-[48px] pointer-events-none",children:e.jsx("div",{className:`\r
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
                `})})]})]}),`${a.purchaseId}-${l}`)},`${a.purchaseId}-${l}`)}),r.placeholder]}))})}),e.jsx("tfoot",{className:"bg-gray-100 font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:Y?F?4:3:Y?2:F?3:2,className:`px-2 py-2 text-center ${t}`,children:"Total Milk"}),e.jsxs("td",{className:`px-2 py-2 text-center border notranslate ${t}`,children:[J.toFixed(2)," L"]})]})})]}),(d==null?void 0:d.bulkSale)&&C.canEditList&&e.jsx("div",{className:"flex justify-center gap-2 my-2",children:e.jsx(b.Button,{variant:"gradient",color:"pink",onClick:()=>ge(),children:"Add Bulk Sell"})}),e.jsx(b.Dialog,{open:G,handler:()=>K(!1),className:"bg-transparent shadow-none border-none outline-none rounded-2xl w-[96%] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[500px]",size:"xl",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(b.DialogHeader,{className:"flex flex-col items-start gap-1 pb-4 border-b border-gray-200",children:[e.jsx(b.Typography,{className:"text-xl font-bold text-gray-900",children:"Select Product"}),e.jsx(b.Typography,{className:"text-sm text-gray-900 font-normal",children:"Customize purchase product selection"})]}),e.jsx(b.DialogBody,{className:"pt-5 px-0 overflow-y-auto",children:e.jsx(Oe,P(I(I({},u),G),{handleSaveAndCloseProductPopup:ue}))})]})]})})]}):null},Qe=oe.memo(qe),ze=u=>{const n=u instanceof Date?u:new Date(u);if(isNaN(n))return null;const i=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),m=5.5*60*60*1e3,v=new Date(i+m),f=v.getUTCFullYear(),h=String(v.getUTCMonth()+1).padStart(2,"0"),T=String(v.getUTCDate()).padStart(2,"0");let g=v.getUTCHours();const w=String(v.getUTCMinutes()).padStart(2,"0"),d=g>=12?"PM":"AM";return g=g%12||12,`${f}-${h}-${T} ${g}:${w} ${d}`},ea=()=>{const u=o.useRef(null),n=de(),i=Te(),{dispatch:m,appSelector:v}=Z(),{dailyPurchaseRegisterData:f,dailySaleDate:h}=v(s=>s.app),[T,g]=o.useState("Morning"),[w,d]=o.useState(!0),[L,j]=o.useState(""),[$,A]=o.useState(""),[M,R]=o.useState({showDragColumn:!1,estimate:!1}),C=({deliveryDate:s})=>x=>E(null,null,function*(){x(yield H({method:"POST",apiUrl:"party/register",data:{deliveryDate:s},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER"}))}),U=o.useCallback(()=>{h&&m(C({deliveryDate:h}))},[m,h]),z=o.useCallback(s=>E(null,null,function*(){const x=s==="prev"?Q(h).subtract(1,"day").format("YYYY-MM-DD"):Q(h).add(1,"day").format("YYYY-MM-DD");m({type:"APP_UPDATE_DAILY_SALE_DATE",payload:x,name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}})}),[m,h]),O=o.useCallback(s=>{const x=s.target.value;if(!x)return;const t=Q(x,"YYYY-MM-DD");m({type:"APP_SET_DAILY_SALE_DATE",payload:t.format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}})},[m]),y=T==="Morning"?f==null?void 0:f.morning:f==null?void 0:f.evening;o.useEffect(()=>{const s=setTimeout(()=>{A(L)},300);return()=>clearTimeout(s)},[L]);const G=o.useMemo(()=>{if(!y)return[];const s=$.toLowerCase().trim();return s?y.filter(x=>{var k;return(((k=x.name)==null?void 0:k.toLowerCase())||"").includes(s)}):y},[y,$]),K=o.useCallback(ce=>E(null,[ce],function*({_id:s,purchaseId:x,milkTypeId:t,quantityInLiters:k,milkTimePreference:V,mode:B="",pricePerUnit:J}){const F=new Date(h),q=new Date;F.setHours(q.getHours(),q.getMinutes(),q.getSeconds(),q.getMilliseconds()),m(yield H({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:[P(I(I({},s&&{_id:s}),B&&{mode:B}),{purchaseId:x,milkTypeId:t,quantityInLiters:k,pricePerUnit:J,deliveryDate:F,deliveryDateIST:ze(new Date(F)),milkTimePreference:V.toLowerCase()})]},loader:!0,apiSuccessCallBack:()=>{m(C({deliveryDate:h}))}}))}),[m,h]),S=o.useMemo(()=>{if(!(y!=null&&y.length))return[];let s;M!=null&&M.estimate?s=y:s=y.filter(t=>["auto","manual","update"].includes(t==null?void 0:t.entryMode));const x={};return s.forEach(t=>{const k=w?`${(t==null?void 0:t.milkType)||"Milk"}`:`${(t==null?void 0:t.milkType)||"Milk"}_${(t==null?void 0:t.pricePerUnit)||0}`;x[k]||(x[k]={animalName:(t==null?void 0:t.milkType)||"Milk",totalLiter:0,pricePerUnit:(t==null?void 0:t.pricePerUnit)||0}),x[k].totalLiter+=Number((t==null?void 0:t.quantityInLiters)||0)}),Object.values(x)},[y,w,M==null?void 0:M.estimate]);return o.useEffect(()=>(h||m({type:"APP_SET_DAILY_SALE_DATE",payload:Q().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}}),()=>{m({type:"APP_UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY",payload:void 0,name:"dailyPurchaseRegisterData",meta:{type:"UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY"}})}),[]),o.useEffect(()=>{h&&m(C({deliveryDate:h}))},[h]),e.jsxs(e.Fragment,{children:[e.jsx(Ue,{back:!0,headerTitle:e.jsx("div",{className:"text-gray-900 font-bold text-sm flex items-center",children:"Daily Purchase"}),onBack:()=>{var s;return n(((s=i==null?void 0:i.state)==null?void 0:s.navigate)||"/dashboard")},menu:e.jsx(e.Fragment,{children:e.jsxs(b.Menu,{placement:"bottom-end",children:[e.jsx(b.MenuHandler,{children:e.jsx(b.IconButton,{className:`\r
                        w-[42px] h-[42px]\r
                        rounded-2xl\r
                        bg-gradient-to-br from-slate-700 to-slate-900\r
                        shadow-[0_10px_25px_-10px_rgba(0,0,0,0.45)]\r
                        border border-white/10\r
                        transition-all duration-300\r
                        hover:scale-105\r
                        active:scale-95\r
                        flex items-center justify-center\r
                    `,children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-white text-[16px]"})})}),e.jsxs(b.MenuList,{className:`\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-sliders text-white text-lg"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-white font-bold text-[15px] tracking-wide",children:"Quick Actions"}),e.jsx("div",{className:"text-white/80 text-[11px]",children:"Manage purchase register settings"})]})]})]}),e.jsxs("div",{className:"p-3 flex flex-col gap-2",children:[e.jsxs(b.MenuItem,{onClick:()=>n("/party/add"),className:`\r
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
                    `,children:"Preferences"}),e.jsxs(b.MenuItem,{onClick:()=>R(s=>P(I({},s),{showDragColumn:!s.showDragColumn})),className:`\r
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
                            `,children:e.jsx("i",{className:"fa-solid fa-grip-vertical text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:"Enable Drag"}),e.jsx("div",{className:"text-[11px] text-gray-900",children:"Reorder purchase entries"})]})]}),e.jsx(b.Checkbox,{checked:M.showDragColumn,onChange:()=>{},ripple:!1,className:"rounded-md",color:"indigo"})]})]})]})]})})}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-1 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex mb-4 justify-between items-center px-4 py-3 bg-white/70 backdrop-blur-lg rounded-xl shadow-md border border-gray-200",children:[e.jsx("button",{onClick:()=>z("prev"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[15px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-800 tracking-wide",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:Q(h).format("DD MMMM, YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:u,type:"date",className:"absolute inset-0 opacity-0 cursor-pointer",value:h||"",onChange:O})]}),e.jsx("button",{onClick:()=>z("next"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[15px]"})})]}),e.jsx("div",{className:"w-full pb-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{label:"Morning",icon:Ae,gradient:"from-yellow-900/40 to-yellow-300/10",border:"border-yellow-800",glow:"shadow-yellow-800",text:"text-yellow-900"},{label:"Evening",icon:Re,gradient:"from-indigo-500/20 to-indigo-300/10",border:"border-indigo-400",glow:"shadow-indigo-400",text:"text-indigo-700"}].map(s=>{const x=T===s.label,t=s.icon;return e.jsxs("div",{onClick:()=>g(s.label),className:`
                    relative cursor-pointer rounded-lg p-[1px]
                    transition-all duration-300 group

                `,children:[e.jsx("div",{className:`
                        absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${s.glow}
                    `}),e.jsxs("div",{className:`flex gap-2 items-center justify-center
                        relative rounded-lg px-2 py-2 backdrop-blur-xl
                        border transition-all duration-300

                        ${x?`${s.border} bg-gradient-to-br ${s.gradient} shadow-lg ${s.glow}`:"border-gray-200 bg-white/70"}
                    `,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:`
                                p-2 rounded-lg transition-all duration-300
                                ${x?"bg-white/70 shadow-sm":"bg-gray-100"}
                            `,children:e.jsx(t,{className:`
                                    w-[15px] h-[15px]
                                    ${x?s.text:"text-gray-400"}
                                `})})}),e.jsx("div",{className:`
                            text-sm font-semibold tracking-wide
                            ${x?s.text:"text-gray-600"}
                        `,children:s.label})]})]},s.label)})})}),e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:"Search by name...",value:L,onChange:s=>j(s.target.value),className:`\r
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
                            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),y&&y.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Qe,{timePreference:T==null?void 0:T.toLowerCase(),entries:[...G].sort((s,x)=>{var t,k;return((t=s.registerIndex)!=null?t:-1/0)-((k=x.registerIndex)!=null?k:-1/0)}),handleUpdateCustomerMilkEntry:K,fetchRegister:U,estimate:M.estimate,showDragColumn:M.showDragColumn},"daily-register"),S.length>0&&e.jsx("div",{className:"flex justify-center mb-6",children:e.jsxs("label",{className:`\r
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
        `}),e.jsx(b.Switch,{id:"autoMilkEntry",name:"autoMilkEntry",checked:w,onChange:()=>d(!w),className:`\r
                peer scale-110\r
                checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-600\r
                checked:ring-4 checked:ring-purple-300/40\r
                transition-all duration-500\r
            `,label:""}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-800 tracking-wide",children:"Combine By Product"}),e.jsx("span",{className:"text-[11px] text-black italic",children:"Groups same product types & merges their totals"})]})]})}),S.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    bg-gradient-to-br from-indigo-600 to-blue-600\r
                    flex items-center justify-center shadow-lg\r
                `,children:e.jsx("i",{className:"fa-solid fa-cubes text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-bold text-gray-900",children:"Purchase Milk Summary"}),e.jsx("div",{className:"text-[12px] text-gray-900",children:"Today’s total milk purchase breakdown"})]})]})}),e.jsx("div",{className:`\r
            grid grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            xl:grid-cols-4\r
            gap-5\r
        `,children:S.map(({animalName:s,totalLiter:x,pricePerUnit:t})=>e.jsxs("div",{className:`\r
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
                            `,children:s}),!w&&e.jsxs("div",{className:"text-[12px] text-indigo-600 font-bold mt-1",children:["₹ ",t," / Liter"]})]}),e.jsx("div",{className:"mt-2 flex items-end justify-between",children:e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("span",{className:`\r
                                    text-[25px]\r
                                    font-extrabold\r
                                    text-gray-900\r
                                    leading-none\r
                                    notranslate\r
                                `,children:Number(x).toFixed(2)}),e.jsx("span",{className:`\r
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
                        `,children:[e.jsx("i",{className:"fa-solid fa-chart-line text-indigo-500"}),"Total milk purchased"]})]})]},`${s}_${t||"merge"}`))})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-2",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx("i",{className:"fa-solid fa-users-slash text-red-400 text-3xl"})}),e.jsx("h3",{className:"text-gray-800 font-semibold text-base",children:"No Purchase Entries Found"}),e.jsx("p",{className:"text-sm text-gray-500",children:"No data available for selected date."})]})]})]})};export{ze as convertToIST_AMPM,ea as default};
