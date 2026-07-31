var N=(o,m,t)=>new Promise((r,p)=>{var n=l=>{try{c(t.next(l))}catch(i){p(i)}},d=l=>{try{c(t.throw(l))}catch(i){p(i)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(n,d);c((t=t.apply(o,m)).next())});import{j as e,m as S}from"./uiVendor-4SpGOz5-.js";import{f as $,a as y}from"./reactVendor-BrBFq9LG.js";import{a as T,u as C,A as w,r as a,g as E,e as F,F as I,d as P}from"./index-gMWptaun.js";import M from"./DefaultDashboardNavbar-rCtb8yuV.js";import{F as R}from"./FloatingActionButton-BVyEgQpr.js";import{F as B}from"./FormInput-D938C3ly.js";import{F as O}from"./EllipsisVerticalIcon-D7GsYx2z.js";import{F as z}from"./PencilSquareIcon-CgKgskzZ.js";import{F as A}from"./TrashIcon-7A1c-6S-.js";import"./pdfVendor-BS7Ig1QC.js";import"./reduxVendor-C8DwjTzm.js";const v=(o=0)=>new Intl.NumberFormat("en-IN").format(o),H=({open:o,onClose:m,book:t,onSaved:r})=>{const{dispatch:p}=T(),{t:n}=C(),d=!!(t!=null&&t._id),c=E().shape({name:F().trim().required(n("khata.bookForm.validation.nameRequired")),description:F()}),l=i=>N(null,null,function*(){yield p(yield w({method:d?"PUT":"POST",apiUrl:d?`khataBook/${t._id}`:"khataBook/create",data:{name:i.name.trim(),description:i.description.trim()||void 0},loader:!0,apiSuccessCallBack:x=>{r(x),m()}}))});return e.jsxs(a.Dialog,{open:o,handler:m,size:"xs",className:"relative overflow-hidden rounded-[32px] border border-white/30 bg-white/75 backdrop-blur-3xl shadow-[0_25px_80px_rgba(15,23,42,0.18)]",children:[e.jsx("div",{className:"pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"}),e.jsx("div",{className:"pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"}),e.jsxs(a.DialogHeader,{className:"relative flex items-center gap-4 border-b border-white/30 px-6 py-5",children:[e.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl",children:e.jsx("i",{className:`fa-solid ${d?"fa-pen":"fa-book"} text-xl text-white`})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-lg font-bold text-gray-900",children:n(d?"khata.bookForm.edit.title":"khata.bookForm.create.title")}),e.jsx(a.Typography,{className:"mt-1 text-sm font-normal text-gray-900",children:n(d?"khata.bookForm.edit.subtitle":"khata.bookForm.create.subtitle")})]})]}),e.jsx(a.DialogBody,{className:"relative px-6 py-6",children:e.jsx(I,{initialValues:{name:(t==null?void 0:t.name)||"",description:(t==null?void 0:t.description)||""},validationSchema:c,onSubmit:l,validateOnMount:!0,children:({handleChange:i,handleBlur:x,values:f,errors:h,touched:u,isValid:g,isSubmitting:b})=>e.jsxs(P,{className:"flex flex-col gap-5",children:[e.jsx(B,{name:"name",label:n("khata.bookForm.form.name.label"),value:f.name,onChange:i,onBlur:x,error:u.name&&h.name,touched:u.name,autoFocus:!0}),e.jsx(B,{name:"description",label:n("khata.bookForm.form.description.label"),value:f.description,onChange:i,onBlur:x,error:u.description&&h.description,touched:u.description,required:!1}),e.jsxs("div",{className:"flex gap-4 pt-2",children:[e.jsx(a.Button,{type:"button",onClick:m,className:`\r
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
                            `,children:e.jsx("div",{className:"flex items-center justify-center gap-2",children:n("common.buttons.cancel")})}),e.jsx(a.Button,{type:"submit",disabled:!g||b,className:`
                                flex-1
                                rounded-lg
                                py-3
                                normal-case
                                shadow-[0_15px_35px_rgba(37,99,235,0.35)]
                                transition-all
                                duration-300
                                active:scale-[0.98]
                                ${!g||b?"cursor-not-allowed bg-blue-300":"bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"}
                            `,children:e.jsx("div",{className:"flex items-center justify-center gap-2",children:b?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner animate-spin"}),n("khata.bookForm.saving")]}):e.jsx(e.Fragment,{children:n(d?"khata.bookForm.update":"khata.bookForm.create.action")})})})]})]})},`${(t==null?void 0:t._id)||"new"}-${o}`)})]})},ee=()=>{const{dispatch:o,appSelector:m}=T(),t=$(),{t:r}=C(),[p,n]=y.useState(!1),[d,c]=y.useState(null),[l,i]=y.useState(null),{khataBookList:x={}}=m(s=>s.app),f=(x==null?void 0:x.data)||[],h=y.useCallback(()=>N(null,null,function*(){yield o(yield w({method:"GET",apiUrl:"khataBook",loader:!0,storeActionType:"FETCH_BOOK_LIST",storeKey:"khataBookList"}))}),[o]);y.useEffect(()=>{h()},[h]);const u=s=>N(null,null,function*(){yield o(yield w({method:"DELETE",apiUrl:`khataBook/${s._id}`,loader:!0,apiSuccessCallBack:()=>{h(),i(null)}}))}),g=()=>{c(null),n(!0)},b=s=>{c(s),n(!0)},_=s=>{h()};return e.jsxs("div",{className:"",children:[e.jsx(M,{headerTitle:r("khata.list.headerTitle"),back:!0,onBack:()=>t("/dashboard")}),e.jsx(R,{onClick:g}),e.jsx("div",{className:"relative bg-[#f3f4f6] px-2 py-4 h-safe overflow-y-auto",children:f.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 gap-4",children:[e.jsx("div",{className:"w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center",children:e.jsx("i",{className:"fa-solid fa-book-open text-blue-400 text-3xl"})}),e.jsxs("div",{className:"text-center",children:[e.jsx(a.Typography,{className:"text-gray-900 font-semibold text-[15px]",children:r("khata.list.emptyTitle")}),e.jsx(a.Typography,{className:"text-gray-900 text-[13px] mt-1",children:r("khata.list.emptyDesc")})]}),e.jsxs(a.Button,{onClick:g,className:"rounded-xl bg-blue-600 normal-case px-6 shadow-md",children:[e.jsx("i",{className:"fa-solid fa-plus mr-2"})," ",r("khata.list.createBook")]})]}):e.jsx("div",{className:"flex flex-col gap-3",children:f.map((s,D)=>{const k=s.balance>=0;return e.jsxs(S.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:D*.04},className:"bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden active:scale-[0.98] transition-transform cursor-pointer",onClick:()=>t(`/khata/${s._id}`,{state:{bookName:s.name}}),children:[e.jsxs("div",{className:"flex items-start gap-3 p-4",children:[e.jsx("div",{className:"w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0",children:e.jsx("i",{className:"fa-solid fa-book text-blue-600 text-[17px]"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(a.Typography,{className:"truncate text-[16px] font-extrabold tracking-tight text-slate-800",children:s.name}),s.description?e.jsx(a.Typography,{className:"mt-1 line-clamp-2 text-[12px] leading-5 text-slate-500",children:s.description}):e.jsx(a.Typography,{className:"mt-1 text-[12px] italic text-slate-400",children:r("khata.list.noDescription")})]}),e.jsxs(a.Menu,{placement:"bottom-end",children:[e.jsx(a.MenuHandler,{children:e.jsx(a.IconButton,{variant:"text",size:"sm",onClick:j=>j.stopPropagation(),className:`\r
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
                `,children:e.jsx(O,{className:"h-5 w-5 text-slate-600 transition-transform duration-300"})})}),e.jsxs(a.MenuList,{className:`\r
                min-w-[230px]\r
                rounded-3xl\r
                border\r
                border-white/30\r
                bg-white/80\r
                backdrop-blur-3xl\r
                p-2\r
                shadow-[0_25px_60px_rgba(15,23,42,0.18)]\r
            `,children:[e.jsxs(a.MenuItem,{onClick:j=>{j.stopPropagation(),b(s)},className:`\r
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
                    `,children:e.jsx(z,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-sm font-bold text-gray-900",children:r("khata.list.menu.editBook")}),e.jsx(a.Typography,{className:"text-xs text-gray-900",children:r("khata.list.menu.editBookDesc")})]})]}),e.jsxs(a.MenuItem,{onClick:j=>{j.stopPropagation(),i(s)},className:`\r
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
                    `,children:e.jsx(A,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx(a.Typography,{className:"text-sm font-bold text-gray-900",children:r("khata.list.menu.deleteBook")}),e.jsx(a.Typography,{className:"text-xs text-gray-900",children:r("khata.list.menu.deleteBookDesc")})]})]})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx("div",{className:`\r
            rounded-full\r
            border\r
            border-slate-200\r
            bg-slate-50\r
            px-3\r
            py-1.5\r
            shadow-sm\r
        `,children:e.jsxs(a.Typography,{className:"text-[11px] font-semibold text-slate-600",children:[e.jsx("i",{className:"fa-solid fa-book-open mr-1.5 text-blue-500"}),s.entryCount||0," ",r("khata.list.entriesSuffix")]})}),e.jsx("div",{className:`
            rounded-full
            px-4
            py-1.5
            shadow-lg
            border

            ${k?"border-green-200 bg-green-50 text-green-700":"border-red-200 bg-red-50 text-red-600"}
        `,children:e.jsxs(a.Typography,{className:"text-[13px] font-extrabold tracking-wide",children:[k?"+":"-"," ₹",v(Math.abs(s.balance))]})})]})]})]}),e.jsxs("div",{className:"relative flex border-t border-white/30 bg-white/40 backdrop-blur-2xl",children:[e.jsxs("div",{className:"flex-1 px-5 py-4 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-6 -left-6 h-16 w-16 rounded-full bg-green-400/20 blur-2xl"}),e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[2px] text-green-600/70",children:r("khata.list.youGot")}),e.jsxs("p",{className:"mt-1 text-[15px] font-extrabold text-green-600",children:["₹",v(s.totalCredit)]}),e.jsx("div",{className:"mx-auto mt-2 h-[2px] w-10 rounded-full bg-green-500/40"})]}),e.jsx("div",{className:"w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"}),e.jsxs("div",{className:"flex-1 px-5 py-4 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-6 -right-6 h-16 w-16 rounded-full bg-red-400/20 blur-2xl"}),e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[2px] text-red-500/70",children:r("khata.list.youGave")}),e.jsxs("p",{className:"mt-1 text-[15px] font-extrabold text-red-500",children:["₹",v(s.totalDebit)]}),e.jsx("div",{className:"mx-auto mt-2 h-[2px] w-10 rounded-full bg-red-500/40"})]})]})]},s._id)})})}),e.jsx(H,{open:p,onClose:()=>n(!1),book:d,onSaved:_}),e.jsxs(a.Dialog,{open:!!l,handler:()=>i(null),size:"xs",className:"rounded-2xl",children:[e.jsx(a.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:r("khata.list.deleteConfirm.title")}),e.jsxs(a.DialogBody,{className:"pt-0",children:[e.jsxs(a.Typography,{className:"text-gray-500 text-[13px] mb-4",children:[r("khata.list.deleteConfirm.messagePrefix")," ",e.jsxs("span",{className:"font-semibold text-gray-700",children:['"',l==null?void 0:l.name,'"']})," ",r("khata.list.deleteConfirm.messageSuffix")]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a.Button,{variant:"outlined",size:"sm",onClick:()=>i(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:r("common.buttons.cancel")}),e.jsx(a.Button,{size:"sm",onClick:()=>u(l),className:"flex-1 rounded-xl bg-red-600 normal-case",children:r("khata.list.deleteConfirm.delete")})]})]})]})]})};export{ee as default};
