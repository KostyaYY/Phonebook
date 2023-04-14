"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[874],{8874:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,a,o,i,s,c,p,d,x,l,u,m,b,g,f=t(4270),h=t(9434),j=t(208),Z=t(168),v=t(6088),w=v.Z.form(r||(r=(0,Z.Z)(["\n    padding: 25px 15px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n    border: 1px solid black;\n    border-radius: 5px;\n    width: 340px;\n"]))),y=v.Z.label(a||(a=(0,Z.Z)(["\n    font-size: 18px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 300px;\n    text-align: start;\n    border-radius: 5px;\n    margin: 0 auto 15px auto;\n    font-weight: 500;\n"]))),k=v.Z.input(o||(o=(0,Z.Z)(["\n    padding: 8px 12px;\n    margin-top: 8px;\n    font-size: 16px;\n    border-radius: 5px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n\n    &:hover,\n    &:focus {\n        border-color: blue;\n        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n\n    } \n"]))),z=v.Z.button(i||(i=(0,Z.Z)(["\n    font-size: 16px;\n    padding: 5px 15px;\n    color: white;\n    background-color: blue;\n    cursor: pointer;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    outline: none;\n    transition: all 300ms ease-in-out;\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.15);\n        background-color: orange; \n    }\n"]))),C=t(184),A=function(){var n=(0,h.I0)();return(0,C.jsx)("div",{children:(0,C.jsxs)(w,{onSubmit:function(e){e.preventDefault();var t=e.target;n((0,j.uK)({name:t.elements.name.value,number:t.elements.number.value})),t.reset()},children:[(0,C.jsxs)(y,{children:[" Name",(0,C.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(y,{children:["Number",(0,C.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)(z,{type:"submit",children:"Add contact"})]})})},F=function(n){return n.contacts.items},N=function(n){return n.filters.status},I=function(n){return n.contacts.isLoading},_=t(2791),q=t(5067),L=(v.Z.ol(s||(s=(0,Z.Z)(["\n    padding: 20px 0;\n    font-size: 18px;\n    width: 300px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),v.Z.li(c||(c=(0,Z.Z)(["\n    margin-bottom: 10px;\n    display: flex;\n    gap: 5px;\n    justify-content: space-between;\n    align-items: center;\n"]))),v.Z.button(p||(p=(0,Z.Z)(["\n    display: flex;\n    justify-content: center;\n    padding: 5px 7px;\n    min-width: 70px;\n    color: white;\n    background-color: blue;\n    cursor: pointer;\n    border: 1px solid transparent;\n    border-radius: 5px; \n    outline: none;\n    transition: all 300ms ease-in-out;\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.1);\n        background-color: orange;\n     \n    }\n    /* &:active {\n        justify-content: space-between;\n        align-items: center;\n    } */\n"])))),B=function(n){var e=n.contact,t=(0,h.I0)(),r=(0,h.v9)(I);return(0,C.jsxs)(C.Fragment,{children:[e.name,": ",e.number,(0,C.jsxs)(L,{type:"button",onClick:function(){return t((0,j.GK)(e.id))},children:[r&&(0,C.jsx)(q.a,{size:5}),"Delete"]})]})},D=v.Z.div(d||(d=(0,Z.Z)(["\n    padding-top: 50px;\n    padding-bottom: 50px;\n    text-align: center;\n"]))),K=v.Z.h1(x||(x=(0,Z.Z)(["\n    margin-bottom: 20px;\n    font-size: 38px;\n    \n"]))),P=v.Z.h2(l||(l=(0,Z.Z)(["\n    margin-bottom: 20px;\n    font-size: 32px;\n"]))),S=v.Z.h3(u||(u=(0,Z.Z)(["\n    color: red;\n    animation: beat 1s infinite;\n    transition: all 300ms ease-in-out;\n   \n@keyframes beat {\n  0%\n  {\n    color: black;\n  }\n  50%\n  {\n    color: red;\n  }\n  50%\n  {\n    color: black;\n  }\n  100%\n  {\n    color: red;\n  }\n}\n"]))),E=v.Z.ol(m||(m=(0,Z.Z)(["\n    padding: 20px 0;\n    font-size: 18px;\n    width: 300px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),G=v.Z.li(b||(b=(0,Z.Z)(["\n    margin-bottom: 10px;\n    display: flex;\n    gap: 5px;\n    justify-content: space-between;\n    align-items: center;\n"]))),J=function(){var n=(0,h.v9)(F),e=(0,h.v9)(N),t=(0,h.I0)(),r=(0,h.v9)(I);(0,_.useEffect)((function(){t((0,j.yF)())}),[t]);var a=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,C.jsxs)(E,{children:[r&&(0,C.jsx)(q.a,{}),n.length>0?a.map((function(n){return(0,C.jsx)(G,{children:(0,C.jsx)(B,{contact:n})},n.id)})):(0,C.jsx)(S,{children:"Sorry! No contacts in phonebook!"})]})},M=v.Z.div(g||(g=(0,Z.Z)(["\n    padding: 20px 20px;\n"]))),T=t(8286),Y=function(){var n=(0,h.I0)();return(0,C.jsx)(M,{children:(0,C.jsxs)(y,{children:["Find Contacts By Name",(0,C.jsx)(k,{type:"text",onChange:function(e){var t=e.currentTarget.value;n((0,T.b)(t))}})]})})};function $(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f.q,{children:(0,C.jsx)("title",{children:"Your Contacts"})}),(0,C.jsxs)(D,{children:[(0,C.jsx)(K,{children:"Phonebook"}),(0,C.jsx)(A,{}),(0,C.jsx)(P,{children:" Contacts"}),(0,C.jsx)(Y,{}),(0,C.jsx)(J,{})]})]})}}}]);
//# sourceMappingURL=874.0882c0b1.chunk.js.map