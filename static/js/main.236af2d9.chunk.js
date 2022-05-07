(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{11:function(e,c,l){},12:function(e,c,l){},14:function(e,c,l){"use strict";l.r(c);var s=l(1),t=l.n(s),a=l(6),n=l.n(a),i=(l(11),l(3)),j=(l(12),l.p+"static/media/logo.fd853c4e.png"),o=l(0),r=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"header-cont",children:[Object(o.jsx)("img",{className:"logo",alt:"logo",src:j}),Object(o.jsx)("h1",{className:"main-h",children:"Composite Calculator"}),Object(o.jsxs)("h3",{className:"description",children:["You are here to calculate your composite, ",Object(o.jsx)("span",{children:"so let's dig in!"})]})]})})},b=l(4),m=l(2),d=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{value:0,children:"select Grade"}),Object(o.jsx)("option",{value:6,children:"A1"}),Object(o.jsx)("option",{value:5,children:"B2"}),Object(o.jsx)("option",{value:4,children:"B3"}),Object(o.jsx)("option",{value:3,children:"C4"}),Object(o.jsx)("option",{value:2,children:"C5"}),Object(o.jsx)("option",{value:1,children:"C6"}),Object(o.jsx)("option",{value:0,children:"D7"}),Object(o.jsx)("option",{value:0,children:"E8"}),Object(o.jsx)("option",{value:0,children:"F9"})]})},h=function(e){var c=e.setCategory,l=e.category,s=e.user,t=e.setUser,a=e.compositeContainer,n=s.name,j=s.examCategory,r=s.putmeValue,h=s.utmeValue,x=s.DETotal,O=s.DEValue,u=s.mathsValue,p=s.englishValue,f=s.biologyValue,v=s.physicsValue,N=s.chemValue,g=s.composite,C=s.showComposite,y=function(e){var c=e.target.value,l=e.target.name;t(Object(m.a)(Object(m.a)({},s),{},Object(b.a)({},l,c)))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{htmlFor:"userName",children:"Username"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("input",{placeholder:"Enter Username",name:"name",type:"text",id:"userName",value:n,onChange:y})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{htmlFor:"type",children:"Exam Type"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsxs)("select",{id:"type",onChange:y,name:"examCategory",value:j,children:[Object(o.jsx)("option",{children:"WAEC"}),Object(o.jsx)("option",{children:"NECO"})]})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"Mathematics"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("select",{onChange:y,name:"mathsValue",children:Object(o.jsx)(d,{})})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"English"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("select",{onChange:y,name:"englishValue",children:Object(o.jsx)(d,{})})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"Physics"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("select",{onChange:y,name:"physicsValue",children:Object(o.jsx)(d,{})})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"Biology"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("select",{onChange:y,name:"biologyValue",children:Object(o.jsx)(d,{})})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"Chemistry"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("select",{onChange:y,name:"chemValue",children:Object(o.jsx)(d,{})})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{children:"Post UTME score"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("input",{placeholder:0,type:"number",onChange:y,name:"putmeValue"})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{className:"selectLabel",children:"Select Category"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsxs)("select",{onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{children:"UTME/DE"}),Object(o.jsx)("option",{value:"UTME",children:"UTME"}),Object(o.jsx)("option",{value:"DE",children:"DE"})]})})]}),"UTME"===l?Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{children:"UTME Score"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("input",{placeholder:0,type:"number",onChange:y,name:"utmeValue"})})]}):"DE"===l?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{children:"Grade Total/Points obtainable"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("input",{placeholder:"e.g., 4.0",type:"number",onChange:y,name:"DETotal"})})]}),Object(o.jsxs)("div",{className:"form-flex",children:[Object(o.jsx)("div",{className:"form-col label",children:Object(o.jsx)("label",{children:"CGPA/Points Obtained"})}),Object(o.jsx)("div",{className:"form-col input",children:Object(o.jsx)("input",{type:"number",onChange:y,name:"DEValue"})})]})]}):Object(o.jsx)(o.Fragment,{}),l&&Object(o.jsxs)("div",{className:"submit",children:[Object(o.jsx)("button",{onClick:function(e){e.preventDefault();var c=[u,N,p,v,f,r,h,x,O].map((function(e){return Number(e)})),a=Object(i.a)(c,9),n=a[0],j=a[1],o=a[2],b=a[3],d=a[4],g=a[5],C=a[6],y=a[7],E=a[8],V=(n+j+o+b+d)/30*20,D=C/8,T=g/100*30;if("DE"===l){var F=(V+T+E/y*50).toFixed(2);t(Object(m.a)(Object(m.a)({},s),{},{composite:F,showComposite:!0}))}else if("UTME"===l){var U=(V+D+T).toFixed(2);t(Object(m.a)(Object(m.a)({},s),{},{composite:U,showComposite:!0}))}else t(Object(m.a)(Object(m.a)({},s),{},{composite:0,showComposite:!1}))},children:"Calculate Composite"}),C&&Object(o.jsxs)("h3",{className:"result",children:["Hello ",n,", your composite is"," ",Object(o.jsx)("span",{ref:a,children:g})," points."]})]})]})})},x=function(){var e=Object(s.useState)(""),c=Object(i.a)(e,2),l=c[0],t=c[1],a=Object(s.useRef)(null),n=Object(s.useState)({name:"",examCategory:"",mathsValue:0,englishValue:0,biologyValue:0,physicsValue:0,chemValue:0,putmeValue:0,utmeValue:0,DETotal:0,DEValue:0,composite:0,showComposite:!1}),j=Object(i.a)(n,2),b=j[0],m=j[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r,{}),Object(o.jsx)(h,{setCategory:t,category:l,user:b,setUser:m,compositeContainer:a})]})};n.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.236af2d9.chunk.js.map