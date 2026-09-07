var T=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var P=(s,d)=>{var r={};for(var o in s)I.call(s,o)&&d.indexOf(o)<0&&(r[o]=s[o]);if(s!=null&&T)for(var o of T(s))d.indexOf(o)<0&&F.call(s,o)&&(r[o]=s[o]);return r};var j=(s,d,r)=>new Promise((o,u)=>{var c=m=>{try{i(r.next(m))}catch(v){u(v)}},f=m=>{try{i(r.throw(m))}catch(v){u(v)}},i=m=>m.done?o(m.value):Promise.resolve(m.value).then(c,f);i((r=r.apply(s,d)).next())});import{j as e}from"./pdfVendor-DdAo4azW.js";import{a as l,f as R}from"./reactVendor-BrBFq9LG.js";import{a as k,u as A,A as E,r as t}from"./index-BtTUl-qJ.js";import Y from"./DefaultDashboardNavbar-DGRGEe_H.js";import{F as M}from"./FloatingActionButton-Bs-nuw_T.js";import{F as O,a as V}from"./formik.esm-Cybfx873.js";import{c as z}from"./validationConfiguration-CYNSQshj.js";import{u as $}from"./useApiLoading-0lW1cajJ.js";import{u as H,M as U}from"./MessageSendDialog-OugWtaVa.js";import{F as W}from"./EllipsisVerticalIcon-D7GsYx2z.js";import{F as q,a as G}from"./TrashIcon-DWJrSFeB.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-jE8dGr1d.js";import"./PlatformClassProvider-B0Q0W-gD.js";import"./index-C-mNAADe.js";import"./whatsappShare-BdSpWYOV.js";function K(u,o){var c=u,{title:s,titleId:d}=c,r=P(c,["title","titleId"]);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":d},r),s?l.createElement("title",{id:d},s):null,l.createElement("path",{fillRule:"evenodd",d:"M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",clipRule:"evenodd"}))}const Q=l.forwardRef(K);function J(u,o){var c=u,{title:s,titleId:d}=c,r=P(c,["title","titleId"]);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":d},r),s?l.createElement("title",{id:d},s):null,l.createElement("path",{d:"M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"}))}const X=l.forwardRef(J),Z=({open:s,setOpen:d})=>{const{dispatch:r,appSelector:o}=k(),{phone:u}=s,c=o(x=>{var a;return(a=x.app)==null?void 0:a.selectedLanguage}),{isLoading:f}=$(),{t:i}=A(),[m,v]=l.useState(""),[h,g]=l.useState(""),{sendMessage:N,dialogState:b,closeDialog:p,share:_,sendOnWhatsapp:L,canSendOnWhatsapp:C}=H(),B=l.useCallback(()=>j(null,null,function*(){r(yield E({method:"GET",apiUrl:"deliveryBoy",loader:!0,storeActionType:"FETCH_ALL_DELIVERY_BOY_LIST",storeKey:"deliveryBoyList"}))}),[r]),S=l.useCallback(x=>j(null,null,function*(){if(x){if(!(s!=null&&s._id))return;r(yield E({method:"PUT",apiUrl:"deliveryBoy/update/phone",data:{deliveryBoyId:s._id,phone:x,preferredLanguage:c||"en"},apiFailedCallBack:a=>{g(a==null?void 0:a.message)},apiSuccessCallBack:y=>j(null,[y],function*({whatsappMessage:a}){const n=()=>{d(!1),B()};a?N(x,a,n):n()})}))}}),[r,s,B,m,N,c]),w=z.phoneNo;return e.jsxs(e.Fragment,{children:[e.jsx(t.Dialog,{open:s,className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[460px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-orange-400/20 blur-2xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500/20 blur-2xl rounded-full"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(t.DialogHeader,{className:"flex items-center gap-3 pb-4 border-b border-gray-200",children:[e.jsx("div",{className:"flex items-center justify-center w-11 h-11 rounded-xl bg-rose-100",children:e.jsx("i",{className:"fa-solid fa-phone text-rose-600 text-lg"})}),e.jsxs("div",{children:[e.jsx(t.Typography,{className:"text-lg font-bold text-gray-900",children:i("deliveryBoy.changePhone.title")}),e.jsx(t.Typography,{className:"text-xs text-gray-900",children:i("deliveryBoy.changePhone.subtitle")})]})]}),e.jsx(O,{initialValues:{phone:m||""},enableReinitialize:!0,validate:x=>{const a={};return x.phone?w&&!new RegExp(w).test(x.phone)&&(a.phone=i("deliveryBoy.changePhone.validation.invalid")):a.phone=i("deliveryBoy.changePhone.validation.required"),a},onSubmit:x=>{g(""),S(x.phone)},children:({values:x,handleChange:a,errors:y,touched:n})=>e.jsxs(V,{children:[e.jsx(t.DialogBody,{className:"pt-6",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"w-full max-w-[280px] mx-auto",children:[e.jsx("label",{className:"text-[12px] text-gray-900 font-medium",children:i("deliveryBoy.changePhone.currentLabel")}),e.jsxs("div",{className:"flex items-center mt-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 shadow-sm",children:[e.jsx("span",{className:"text-sm text-gray-500 mr-2",children:"+91"}),e.jsx("input",{value:u,disabled:!0,className:"w-full bg-transparent outline-none text-sm font-semibold text-gray-600"})]})]}),e.jsxs("div",{className:"w-full max-w-[280px] mx-auto",children:[e.jsx("label",{className:"text-[12px] text-gray-900 font-medium",children:i("deliveryBoy.changePhone.newLabel")}),e.jsxs("div",{className:`
                            flex items-center mt-1 px-4 py-3 rounded-lg bg-white border shadow-sm transition-all
                            ${y.phone&&n.phone?"border-red-400":"focus-within:border-rose-500"}
                        `,children:[e.jsx("span",{className:"text-sm text-gray-500 mr-2",children:"+91"}),e.jsx("input",{name:"phone",value:x.phone,onChange:D=>{a(D),g("")},type:"number",placeholder:i("deliveryBoy.changePhone.placeholder"),className:"w-full outline-none text-sm font-semibold bg-transparent"})]}),y.phone&&n.phone&&e.jsx("p",{className:"text-xs text-red-500 mt-1",children:y.phone})]}),h&&e.jsxs("div",{className:"mt-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500"}),h]})]})}),e.jsxs(t.DialogFooter,{className:"border-t border-gray-200 flex justify-end gap-3 pt-4",children:[e.jsx(t.Button,{variant:"outlined",onClick:()=>d(!1),children:i("common.buttons.cancel")}),e.jsxs(t.Button,{type:"submit",disabled:f,children:[e.jsx("span",{className:`\r
        absolute inset-0\r
        bg-gradient-to-r from-white/10 to-transparent\r
        opacity-0 hover:opacity-100\r
        transition duration-300\r
    `}),e.jsx("span",{className:"relative flex items-center gap-2",children:i(f?"deliveryBoy.changePhone.updating":"deliveryBoy.changePhone.update")})]})]})]})})]})]})}),e.jsx(U,{open:b.open,message:b.message,phone:b.phone,onShare:_,onWhatsapp:L,canSendOnWhatsapp:C,onCancel:p})]})},ye=()=>{const{dispatch:s,appSelector:d}=k(),{t:r}=A(),o=d(a=>a.app),{deliveryBoyList:u={}}=o,{deliveryBoys:c=[]}=u,[f,i]=l.useState(!1),[m,v]=l.useState(""),[h,g]=l.useState(null),[N,b]=l.useState(!1),p=R(),_=l.useCallback(()=>j(null,null,function*(){s(yield E({method:"GET",apiUrl:"deliveryBoy",loader:!(u!=null&&u.deliveryBoys),storeActionType:"FETCH_ALL_DELIVERY_BOY_LIST",storeKey:"deliveryBoyList"}))}),[s,u,c]),L=l.useCallback(a=>{p(`/dailySale/register/${a._id}`,{state:{deliveryBoy:a}})},[p]),C=l.useCallback(a=>{s({type:"APP_SET_DELIVERY_BOY_DETAILS",payload:{name:"",phone:"",address:"",timePreference:{label:"",value:""}},name:"deliveryBoyDetails",meta:{type:"SET_DELIVERY_BOY_DETAILS"}}),p(`/deliveryBoy/update/${a}`)},[p]),B=l.useCallback(a=>{p(`/deliveryBoy/assignCustomers/${a}`)},[p]),S=l.useCallback(()=>j(null,null,function*(){if(h!=null&&h._id){b(!0);try{yield s(yield E({method:"DELETE",apiUrl:`deliveryBoy/${h._id}`,loader:!0,apiSuccessCallBack:()=>{s({type:"APP_FETCH_ALL_DELIVERY_BOY_LIST",payload:{deliveryBoys:c.filter(a=>a._id!==h._id)},name:"deliveryBoyList",meta:{type:"FETCH_ALL_DELIVERY_BOY_LIST"}}),g(null)}}))}finally{b(!1)}}}),[s,h,c]),w=c.filter(a=>{var n,D;const y=m.trim().toLowerCase();return((n=a.name)==null?void 0:n.toLowerCase().includes(y))||((D=a.phone)==null?void 0:D.toString().toLowerCase().includes(y))}),x=()=>{s({type:"APP_SET_DELIVERY_BOY_DETAILS",payload:{name:"",phone:"",address:"",timePreference:{label:"",value:""}},name:"deliveryBoyDetails",meta:{type:"SET_DELIVERY_BOY_DETAILS"}}),p("/deliveryBoy/create")};return l.useEffect(()=>{_()},[]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{headerTitle:e.jsx("div",{className:"text-[#111827] font-semibold text-[15px] tracking-tight",children:r("deliveryBoy.list.headerTitle")}),back:!0,onBack:()=>p("/dashboard")}),e.jsxs("div",{className:"px-3 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-5",children:[e.jsx(t.Input,{label:r("deliveryBoy.list.searchPlaceholder"),value:m,onChange:a=>v(a.target.value),className:"bg-white"}),e.jsx(M,{onClick:x})]}),w.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:w.map((a,y)=>e.jsx("div",{children:e.jsx(t.Card,{className:"group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden",children:e.jsxs("div",{onClick:()=>L(a),className:"p-4 flex items-center gap-4 cursor-pointer",children:[e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition",children:e.jsx("i",{className:"fa-solid fa-motorcycle text-lg"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx(t.Typography,{className:"font-semibold text-gray-900 truncate",children:a.name}),e.jsx(t.Typography,{className:"text-sm text-gray-500 truncate",children:a.phone})]}),e.jsxs(t.Menu,{placement:"bottom-end",allowHover:!1,children:[e.jsx(t.MenuHandler,{children:e.jsx(t.IconButton,{variant:"text",className:`\r
                w-9 h-9 rounded-xl border border-gray-500\r
                bg-gray-50 hover:bg-gray-100\r
                active:scale-95\r
                transition-all duration-200\r
                shadow-sm hover:shadow-md\r
            `,children:e.jsx(W,{className:"w-5 h-5 text-gray-700"})})}),e.jsxs(t.MenuList,{className:`\r
            min-w-[180px]\r
            rounded-2xl\r
            border border-white/20\r
            bg-white/90\r
            backdrop-blur-xl\r
            shadow-[0_10px_40px_rgba(0,0,0,0.12)]\r
            p-2\r
            overflow-hidden\r
        `,children:[e.jsxs(t.MenuItem,{onClick:n=>{n.preventDefault(),n.stopPropagation(),i(a)},className:`\r
                flex items-center gap-3\r
                rounded-xl\r
                px-3 py-3\r
                transition-all duration-200\r
                hover:bg-gradient-to-r\r
                hover:from-blue-50\r
                hover:to-indigo-50\r
                active:scale-[0.98]\r
                group\r
            `,children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    flex items-center justify-center\r
                    bg-blue-100\r
                    group-hover:bg-blue-200\r
                    transition-all duration-200\r
                `,children:e.jsx(Q,{className:"w-5 h-5 text-blue-600"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:r("deliveryBoy.list.menu.changePhone")}),e.jsx("span",{className:"text-[11px] text-gray-900",children:r("deliveryBoy.list.menu.changePhoneDesc")})]})]}),e.jsxs(t.MenuItem,{onClick:n=>{n.preventDefault(),n.stopPropagation(),C(a._id)},className:`\r
                flex items-center gap-3\r
                rounded-xl\r
                px-3 py-3\r
                transition-all duration-200\r
                hover:bg-gradient-to-r\r
                hover:from-blue-50\r
                hover:to-indigo-50\r
                active:scale-[0.98]\r
                group\r
                mt-1\r
            `,children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    flex items-center justify-center\r
                    bg-blue-100\r
                    group-hover:bg-blue-200\r
                    transition-all duration-200\r
                `,children:e.jsx(q,{className:"w-5 h-5 text-blue-600"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:r("deliveryBoy.list.menu.edit")}),e.jsx("span",{className:"text-[11px] text-gray-900",children:r("deliveryBoy.list.menu.editDesc")})]})]}),e.jsxs(t.MenuItem,{onClick:n=>{n.preventDefault(),n.stopPropagation(),B(a._id)},className:`\r
                flex items-center gap-3\r
                rounded-xl\r
                px-3 py-3\r
                transition-all duration-200\r
                hover:bg-gradient-to-r\r
                hover:from-blue-50\r
                hover:to-indigo-50\r
                active:scale-[0.98]\r
                group\r
                mt-1\r
            `,children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    flex items-center justify-center\r
                    bg-blue-100\r
                    group-hover:bg-blue-200\r
                    transition-all duration-200\r
                `,children:e.jsx(X,{className:"w-5 h-5 text-blue-600"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:r("deliveryBoy.list.menu.assignCustomers")}),e.jsx("span",{className:"text-[11px] text-gray-900",children:r("deliveryBoy.list.menu.assignCustomersDesc")})]})]}),e.jsxs(t.MenuItem,{onClick:n=>{n.preventDefault(),n.stopPropagation(),g(a)},className:`\r
                flex items-center gap-3\r
                rounded-xl\r
                px-3 py-3\r
                transition-all duration-200\r
                hover:bg-red-50\r
                active:scale-[0.98]\r
                group\r
                mt-1\r
            `,children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    flex items-center justify-center\r
                    bg-red-100\r
                    group-hover:bg-red-200\r
                    transition-all duration-200\r
                `,children:e.jsx(G,{className:"w-5 h-5 text-red-600"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-semibold text-red-600",children:r("deliveryBoy.list.menu.delete")}),e.jsx("span",{className:"text-[11px] text-gray-900",children:r("deliveryBoy.list.menu.deleteDesc")})]})]})]})]})]})})},a._id||y))}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4",children:e.jsx("i",{className:"fa-solid fa-motorcycle text-blue-500 text-2xl"})}),e.jsx(t.Typography,{className:"text-gray-800 font-semibold",children:r("deliveryBoy.list.emptyTitle")}),e.jsx(t.Typography,{className:"text-sm text-gray-500 mt-1",children:r("deliveryBoy.list.emptyDesc")})]})]}),f&&e.jsx(Z,{open:f,setOpen:i}),e.jsxs(t.Dialog,{open:!!h,handler:()=>g(null),size:"xs",className:"rounded-2xl",children:[e.jsx(t.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:r("deliveryBoy.list.deleteDialog.title")}),e.jsxs(t.DialogBody,{className:"pt-0",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:r("deliveryBoy.list.deleteDialog.message",{name:h==null?void 0:h.name})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t.Button,{variant:"outlined",size:"sm",onClick:()=>g(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:r("common.buttons.cancel")}),e.jsx(t.Button,{size:"sm",disabled:N,onClick:S,className:"flex-1 rounded-xl bg-red-600 normal-case",children:r(N?"deliveryBoy.list.deleteDialog.deleting":"deliveryBoy.list.deleteDialog.confirm")})]})]})]})]})};export{ye as default};
