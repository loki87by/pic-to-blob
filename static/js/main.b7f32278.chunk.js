(this["webpackJsonppic-to-blob"]=this["webpackJsonppic-to-blob"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(3),l=n.n(s),i=(n(9),n(4)),a=n(1);var r=function(){const[e,t]=Object(c.useState)(""),[n,o]=Object(c.useState)(""),[s,l]=Object(c.useState)(!1),[r,u]=Object(c.useState)([]),b=Object(i.useClipboard)({onError(){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}),j=Object(c.useCallback)((()=>{b.copy("".concat(n,".").concat(e))}),[b,e,n]),p=Object(c.useCallback)((e=>{b.copy(r[e])}),[r,b]);return Object(a.jsxs)("section",{children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{className:"Popup-label",htmlFor:"input_file",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(a.jsx)("input",{className:"Popup-input",type:"file",id:"input_file",name:"input_file",required:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onChange:e=>function(e){const n=e.files[0],c=new Image;c.setAttribute("crossOrigin","anonymous"),c.src=window.URL.createObjectURL(n),c.onload=function(){const e=n.type;t(e);const c=Math.floor(n.size/1e6);var s=[];s.push(n);const i=new Blob(s,{type:e});let a=new FileReader;a.readAsDataURL(i),a.onload=function(){const e=a.result;if(c<=1)u([e]),l(!0);else{const t=e.length,n=[];for(let o=0;o<c;o++){const s=e.slice(o*Math.ceil(t/c),(o+1)*Math.ceil(t/c)-1);n.push(s)}u(n),l(!0)}},o(n.name)}}(e.target)}),n]}),s?Object(a.jsxs)("article",{children:[Object(a.jsx)("button",{onClick:j,children:n}),r.map(((e,t)=>Object(a.jsx)("button",{onClick:()=>{p(t)},children:e.length},t)))]}):""]})};var u=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((t=>{let{getCLS:n,getFID:c,getFCP:o,getLCP:s,getTTFB:l}=t;n(e),c(e),o(e),s(e),l(e)}))};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.b7f32278.chunk.js.map