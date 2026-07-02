var j=(l,x,r)=>new Promise((h,c)=>{var i=s=>{try{n(r.next(s))}catch(o){c(o)}},m=s=>{try{n(r.throw(s))}catch(o){c(o)}},n=s=>s.done?h(s.value):Promise.resolve(s.value).then(i,m);n((r=r.apply(l,x)).next())});import{j as e}from"./pdfVendor-Cl44_PGD.js";import{f as F,a as f}from"./reactVendor-DmREe6Et.js";import{u as k,A as N,D,a,d as E,e as $,i as S,f as w}from"./index-DCQwySDX.js";import{F as I}from"./FloatingActionButton-Cu9umPO3.js";import{F as B}from"./FormInput-DiDIkVDF.js";import{m as P}from"./uiVendor-Cts7Z6eD.js";import{F as M}from"./EllipsisVerticalIcon-DMa5uqjD.js";import{F as U}from"./PencilSquareIcon-CI1Ba9Kj.js";import{F as K}from"./TrashIcon-B4GaGUAa.js";import"./reduxVendor-BngeJYhw.js";import"./editorVendor-Czr6LD_x.js";const y=(l=0)=>new Intl.NumberFormat("en-IN").format(l),O=S().shape({name:w().trim().required("Book name is required"),description:w()}),R=({open:l,onClose:x,book:r,onSaved:h})=>{const{dispatch:c}=k(),i=!!(r!=null&&r._id),m=n=>j(null,null,function*(){yield c(yield N({method:i?"PUT":"POST",apiUrl:i?`khataBook/${r._id}`:"khataBook/create",data:{name:n.name.trim(),description:n.description.trim()||void 0},loader:!0,apiSuccessCallBack:s=>{h(s),x()}}))});return e.jsxs(a.Dialog,{open:l,handler:x,size:"xs",className:"relative overflow-hidden rounded-[32px] border border-white/30 bg-white/75 backdrop-blur-3xl shadow-[0_25px_80px_rgba(15,23,42,0.18)]",children:[e.jsx("div",{className:"pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"}),e.jsx("div",{className:"pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"}),e.jsxs(a.DialogHeader,{className:"relative flex items-center gap-4 border-b border-white/30 px-6 py-5",children:[e.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl",children:e.jsx("i",{className:`fa-solid ${i?"fa-pen":"fa-book"} text-xl text-white`})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-lg font-bold text-gray-900",children:i?"Edit Book":"New Khata Book"}),e.jsx(a.Typography,{className:"mt-1 text-sm font-normal text-gray-900",children:i?"Update your khata book information.":"Create a new khata book for managing transactions."})]})]}),e.jsx(a.DialogBody,{className:"relative px-6 py-6",children:e.jsx(E,{initialValues:{name:(r==null?void 0:r.name)||"",description:(r==null?void 0:r.description)||""},validationSchema:O,onSubmit:m,validateOnMount:!0,children:({handleChange:n,handleBlur:s,values:o,errors:u,touched:d,isValid:b,isSubmitting:p})=>e.jsxs($,{className:"flex flex-col gap-5",children:[e.jsx(B,{name:"name",label:"Book Name",value:o.name,onChange:n,onBlur:s,error:d.name&&u.name,touched:d.name,autoFocus:!0}),e.jsx(B,{name:"description",label:"Description (optional)",value:o.description,onChange:n,onBlur:s,error:d.description&&u.description,touched:d.description,required:!1}),e.jsxs("div",{className:"flex gap-4 pt-2",children:[e.jsx(a.Button,{type:"button",onClick:x,className:`\r
                                flex-1\r
                                rounded-lg\r
                                border\r
                                border-white/40\r
                                bg-white/60\r
                                py-3\r
                                text-gray-700\r
                                normal-case\r
                                shadow-lg\r
                                backdrop-blur-xl\r
                                transition-all\r
                                duration-300\r
                                hover:-translate-y-0.5\r
                                hover:bg-white/80\r
                                active:scale-[0.98]\r
                            `,children:e.jsx("div",{className:"flex items-center justify-center gap-2",children:"Cancel"})}),e.jsx(a.Button,{type:"submit",disabled:!b||p,className:`
                                flex-1
                                rounded-lg
                                py-3
                                normal-case
                                shadow-[0_15px_35px_rgba(37,99,235,0.35)]
                                transition-all
                                duration-300
                                active:scale-[0.98]
                                ${!b||p?"cursor-not-allowed bg-blue-300":"bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"}
                            `,children:e.jsx("div",{className:"flex items-center justify-center gap-2",children:p?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner animate-spin"}),"Saving..."]}):e.jsx(e.Fragment,{children:i?"Update Book":"Create Book"})})})]})]})},`${(r==null?void 0:r._id)||"new"}-${l}`)})]})},Z=()=>{const{dispatch:l,appSelector:x}=k(),r=F(),[h,c]=f.useState(!1),[i,m]=f.useState(null),[n,s]=f.useState(null),{khataBookList:o={}}=x(t=>t.app),u=(o==null?void 0:o.data)||[],d=f.useCallback(()=>j(null,null,function*(){yield l(yield N({method:"GET",apiUrl:"khataBook",loader:!0,storeActionType:"FETCH_BOOK_LIST",storeKey:"khataBookList"}))}),[l]);f.useEffect(()=>{d()},[d]);const b=t=>j(null,null,function*(){yield l(yield N({method:"DELETE",apiUrl:`khataBook/${t._id}`,loader:!0,apiSuccessCallBack:()=>{d(),s(null)}}))}),p=()=>{m(null),c(!0)},T=t=>{m(t),c(!0)},C=t=>{d()};return e.jsxs("div",{className:"",children:[e.jsx(D,{headerTitle:"Khata Books",back:!0,onBack:()=>r("/dashboard")}),e.jsx(I,{onClick:p}),e.jsx("div",{className:"relative bg-[#f3f4f6] px-2 py-4 h-safe overflow-y-auto",children:u.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 gap-4",children:[e.jsx("div",{className:"w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-book-open text-blue-400 text-3xl"})}),e.jsxs("div",{className:"text-center",children:[e.jsx(a.Typography,{className:"text-gray-900 font-semibold text-[15px]",children:"No Khata Books Yet"}),e.jsx(a.Typography,{className:"text-gray-900 text-[13px] mt-1",children:"Create your first book to start tracking"})]}),e.jsxs(a.Button,{onClick:p,className:"rounded-xl bg-blue-600 normal-case px-6 shadow-md",children:[e.jsx("i",{className:"fa-solid fa-plus mr-2"})," Create Book"]})]}):e.jsx("div",{className:"flex flex-col gap-3",children:u.map((t,_)=>{const v=t.balance>=0;return e.jsxs(P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:_*.04},className:"bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden active:scale-[0.98] transition-transform cursor-pointer",onClick:()=>r(`/khata/${t._id}`,{state:{bookName:t.name}}),children:[e.jsxs("div",{className:"flex items-start gap-3 p-4",children:[e.jsx("div",{className:"w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0",children:e.jsx("i",{className:"fa-solid fa-book text-blue-600 text-[17px]"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(a.Typography,{className:"truncate text-[16px] font-extrabold tracking-tight text-slate-800",children:t.name}),t.description?e.jsx(a.Typography,{className:"mt-1 line-clamp-2 text-[12px] leading-5 text-slate-500",children:t.description}):e.jsx(a.Typography,{className:"mt-1 text-[12px] italic text-slate-400",children:"No description available"})]}),e.jsxs(a.Menu,{placement:"bottom-end",children:[e.jsx(a.MenuHandler,{children:e.jsx(a.IconButton,{variant:"text",size:"sm",onClick:g=>g.stopPropagation(),className:`\r
                    group\r
                    h-14\r
                    w-14\r
                    rounded-lg\r
                    border\r
                    border-black\r
                    bg-white/60\r
                    backdrop-blur-xl\r
                    shadow-lg\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-0.5\r
                    hover:bg-white\r
                    hover:shadow-xl\r
                    active:scale-95\r
                `,children:e.jsx(M,{className:"h-5 w-5 text-slate-600 transition-transform duration-300"})})}),e.jsxs(a.MenuList,{className:`\r
                min-w-[230px]\r
                rounded-3xl\r
                border\r
                border-white/30\r
                bg-white/80\r
                backdrop-blur-3xl\r
                p-2\r
                shadow-[0_25px_60px_rgba(15,23,42,0.18)]\r
            `,children:[e.jsxs(a.MenuItem,{onClick:g=>{g.stopPropagation(),T(t)},className:`\r
                    group\r
                    flex\r
                    items-center\r
                    gap-3\r
                    rounded-2xl\r
                    p-3\r
                    transition-all\r
                    hover:bg-blue-50\r
                `,children:[e.jsx("div",{className:`\r
                        flex\r
                        h-11\r
                        w-11\r
                        items-center\r
                        justify-center\r
                        rounded-2xl\r
                        bg-gradient-to-br\r
                        from-blue-500\r
                        to-indigo-600\r
                        shadow-lg\r
                    `,children:e.jsx(U,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-sm font-bold text-gray-900",children:"Edit Book"}),e.jsx(a.Typography,{className:"text-xs text-gray-900",children:"Update details"})]})]}),e.jsxs(a.MenuItem,{onClick:g=>{g.stopPropagation(),s(t)},className:`\r
                    group\r
                    mt-2\r
                    flex\r
                    items-center\r
                    gap-3\r
                    rounded-2xl\r
                    p-3\r
                    transition-all\r
                    hover:bg-red-50\r
                `,children:[e.jsx("div",{className:`\r
                        flex\r
                        h-11\r
                        w-11\r
                        items-center\r
                        justify-center\r
                        rounded-2xl\r
                        bg-gradient-to-br\r
                        from-red-500\r
                        to-red-600\r
                        shadow-lg\r
                    `,children:e.jsx(K,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-sm font-bold text-gray-900",children:"Delete Book"}),e.jsx(a.Typography,{className:"text-xs text-gray-900",children:"Permanently remove"})]})]})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx("div",{className:`\r
            rounded-full\r
            border\r
            border-slate-200\r
            bg-slate-50\r
            px-3\r
            py-1.5\r
            shadow-sm\r
        `,children:e.jsxs(a.Typography,{className:"text-[11px] font-semibold text-slate-600",children:[e.jsx("i",{className:"fa-solid fa-book-open mr-1.5 text-blue-500"}),t.entryCount||0," Entries"]})}),e.jsx("div",{className:`
            rounded-full
            px-4
            py-1.5
            shadow-lg
            border

            ${v?"border-green-200 bg-green-50 text-green-700":"border-red-200 bg-red-50 text-red-600"}
        `,children:e.jsxs(a.Typography,{className:"text-[13px] font-extrabold tracking-wide",children:[v?"+":"-"," ₹",y(Math.abs(t.balance))]})})]})]})]}),e.jsxs("div",{className:"relative flex border-t border-white/30 bg-white/40 backdrop-blur-2xl",children:[e.jsxs("div",{className:"flex-1 px-5 py-4 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-6 -left-6 h-16 w-16 rounded-full bg-green-400/20 blur-2xl"}),e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[2px] text-green-600/70",children:"You Got"}),e.jsxs("p",{className:"mt-1 text-[15px] font-extrabold text-green-600",children:["₹",y(t.totalCredit)]}),e.jsx("div",{className:"mx-auto mt-2 h-[2px] w-10 rounded-full bg-green-500/40"})]}),e.jsx("div",{className:"w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"}),e.jsxs("div",{className:"flex-1 px-5 py-4 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-6 -right-6 h-16 w-16 rounded-full bg-red-400/20 blur-2xl"}),e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[2px] text-red-500/70",children:"You Gave"}),e.jsxs("p",{className:"mt-1 text-[15px] font-extrabold text-red-500",children:["₹",y(t.totalDebit)]}),e.jsx("div",{className:"mx-auto mt-2 h-[2px] w-10 rounded-full bg-red-500/40"})]})]})]},t._id)})})}),e.jsx(R,{open:h,onClose:()=>c(!1),book:i,onSaved:C}),e.jsxs(a.Dialog,{open:!!n,handler:()=>s(null),size:"xs",className:"rounded-2xl",children:[e.jsx(a.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:"Delete Book?"}),e.jsxs(a.DialogBody,{className:"pt-0",children:[e.jsxs(a.Typography,{className:"text-gray-500 text-[13px] mb-4",children:["This will permanently delete ",e.jsxs("span",{className:"font-semibold text-gray-700",children:['"',n==null?void 0:n.name,'"']})," and all its entries."]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a.Button,{variant:"outlined",size:"sm",onClick:()=>s(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:"Cancel"}),e.jsx(a.Button,{size:"sm",onClick:()=>b(n),className:"flex-1 rounded-xl bg-red-600 normal-case",children:"Delete"})]})]})]})]})};export{Z as default};
