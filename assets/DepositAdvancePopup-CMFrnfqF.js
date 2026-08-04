import{j as e,W as u,m as b}from"./uiVendor-4SpGOz5-.js";import{a as c}from"./reactVendor-BrBFq9LG.js";import{u as g,r as s}from"./index-sLeMQNfE.js";import{F as h}from"./ProductListCard-CMJ8LlVy.js";import"./pdfVendor-BS7Ig1QC.js";import"./reduxVendor-C8DwjTzm.js";import"./UserConfirmationDialog-D_UquqU2.js";import"./ReportDetail-Cwsd-Wul.js";import"./DefaultDashboardNavbar-rCtb8yuV.js";import"./CustomerMilkPreferencesForm-C__skMQd.js";import"./useApiLoading-CXm5EhQv.js";import"./EllipsisVerticalIcon-D7GsYx2z.js";import"./ClockIcon-CCcvREjO.js";import"./TableCellsIcon-k5pcQsNi.js";const B=({open:o,setOpen:l,type:m="invoicePayment",initialAmount:d="",onSubmit:p})=>{const{t}=g(),[i,n]=c.useState("");c.useEffect(()=>{o&&n(d||"")},[o,d]);const x=()=>{p(Number(i)),l(!1)},r=m==="deposit";return e.jsx(s.Dialog,{open:o,handler:()=>l(!1),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[460px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(s.DialogHeader,{className:"flex items-center gap-3 pb-4 border-b border-gray-200",children:[e.jsx("div",{className:`
                            flex items-center justify-center
                            w-11 h-11 rounded-xl
                            ${r?"bg-purple-100":"bg-green-100"}
                            `,children:r?e.jsx(u,{className:"w-6 h-6 text-purple-600"}):e.jsx(h,{className:"w-6 h-6 text-green-600"})}),e.jsxs("div",{children:[e.jsx(s.Typography,{className:"text-lg font-bold text-gray-900",children:t(r?"customer.depositAdvance.deposit.title":"customer.depositAdvance.advance.title")}),e.jsx(s.Typography,{className:"text-xs text-gray-900",children:t(r?"customer.depositAdvance.deposit.subtitle":"customer.depositAdvance.advance.subtitle")})]})]}),e.jsx(s.DialogBody,{className:"pt-6",children:e.jsxs(b.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.2},children:[e.jsxs("div",{className:"relative w-full max-w-[260px] mx-auto",children:[e.jsx("label",{className:"text-[12px] text-gray-900",children:t("customer.depositAdvance.amountLabel")}),e.jsxs("div",{className:`
                                    flex items-center
                                    mt-1
                                    px-4 py-3
                                    rounded-lg
                                    bg-white
                                    border
                                    shadow-sm
                                    transition-all
                                    ${r?"focus-within:border-purple-500":"focus-within:border-green-500"}
                                    `,children:[e.jsx("span",{className:"text-lg font-semibold text-gray-700 mr-2",children:"₹"}),e.jsx("input",{type:"number",value:i,onChange:a=>n(a.target.value),placeholder:t("customer.depositAdvance.amountPlaceholder"),className:"w-full outline-none text-lg font-semibold bg-transparent"})]})]}),e.jsx("div",{className:"flex justify-center gap-3 mt-6",children:[100,500,1e3].map(a=>e.jsxs("button",{onClick:()=>n(Number(i||0)+a),className:`
                                        px-3 py-1.5
                                        rounded-lg
                                        text-xs
                                        font-semibold
                                        border
                                        transition
                                        ${r?"border-purple-300 text-purple-700 hover:bg-purple-50":"border-green-300 text-green-700 hover:bg-green-50"}
                                        `,children:["+",a]},a))})]})}),e.jsxs(s.DialogFooter,{className:"border-t border-gray-200 flex justify-end gap-3",children:[e.jsx(s.Button,{variant:"text",onClick:()=>l(!1),children:t("common.buttons.cancel")}),e.jsx(s.Button,{className:`
                            flex items-center gap-2
                            shadow-lg
                            hover:shadow-xl
                            transition
                            ${r?"bg-gradient-to-r from-purple-600 to-purple-700":"bg-gradient-to-r from-green-600 to-green-700"}
                            `,onClick:x,children:t(r?"customer.depositAdvance.addDeposit":"customer.depositAdvance.recordPayment")})]})]})]})})};export{B as default};
