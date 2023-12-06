var oe=Object.defineProperty;var ie=(e,t,s)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var j=(e,t,s)=>(ie(e,typeof t!="symbol"?t+"":t,s),s);import{r as d,v as G,g as J,h as ne,i as W,k as C,m as le,n as ce,b as de,o as me,s as ue,A as _,p as R,j as m,C as X,q as K,L as T,t as ge,w as pe,x as fe,y as he,z as be,D as ye,B as H}from"./index-f43806fb.js";import{B as xe,v as ve,S as we}from"./shadow-a13d6f45.js";let Ne={data:""},Ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ne,je=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Se=/\/\*[^]*?\*\/|  +/g,Q=/\n+/g,N=(e,t)=>{let s="",a="",i="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?s=r+" "+o+";":a+=r[1]=="f"?N(o,r):r+"{"+N(o,r[1]=="k"?"":t)+"}":typeof o=="object"?a+=N(o,t?t.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=N.p?N.p(r,o):r+":"+o+";")}return s+(t&&i?t+"{"+i+"}":i)+a},v={},ee=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+ee(e[s]);return t}return e},ke=(e,t,s,a,i)=>{let r=ee(e),o=v[r]||(v[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!v[o]){let l=r!==e?e:(c=>{let u,p,f=[{}];for(;u=je.exec(c.replace(Se,""));)u[4]?f.shift():u[3]?(p=u[3].replace(Q," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][u[1]]=u[2].replace(Q," ").trim();return f[0]})(e);v[o]=N(i?{["@keyframes "+o]:l}:l,s?"":"."+o)}let n=s&&v.g?v.g:null;return s&&(v.g=v[o]),((l,c,u,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(v[o],t,a,n),o},_e=(e,t,s)=>e.reduce((a,i,r)=>{let o=t[r];if(o&&o.call){let n=o(s),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=l?"."+l:n&&typeof n=="object"?n.props?"":N(n,""):n===!1?"":n}return a+i+(o??"")},"");function P(e){let t=this||{},s=e.call?e(t.p):e;return ke(s.unshift?s.raw?_e(s,[].slice.call(arguments,1),t.p):s.reduce((a,i)=>Object.assign(a,i&&i.call?i(t.p):i),{}):s,Ee(t.target),t.g,t.o,t.k)}let te,V,z;P.bind({g:1});let w=P.bind({k:1});function Me(e,t,s,a){N.p=t,te=e,V=s,z=a}function E(e,t){let s=this||{};return function(){let a=arguments;function i(r,o){let n=Object.assign({},r),l=n.className||i.className;s.p=Object.assign({theme:V&&V()},n),s.o=/ *go\d+/.test(l),n.className=P.apply(s,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),z&&c[0]&&z(n),te(c,n)}return t?t(i):i}}var $e=e=>typeof e=="function",F=(e,t)=>$e(e)?e(t):e,Ce=(()=>{let e=0;return()=>(++e).toString()})(),se=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Le=20,I=new Map,Ae=1e3,q=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),S({type:4,toastId:e})},Ae);I.set(e,t)},De=e=>{let t=I.get(e);t&&clearTimeout(t)},B=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Le)};case 1:return t.toast.id&&De(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return e.toasts.find(r=>r.id===s.id)?B(e,{type:1,toast:s}):B(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?q(a):e.toasts.forEach(r=>{q(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===a||a===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},O=[],U={toasts:[],pausedAt:void 0},S=e=>{U=B(U,e),O.forEach(t=>{t(U)})},Ie={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Oe=(e={})=>{let[t,s]=d.useState(U);d.useEffect(()=>(O.push(s),()=>{let i=O.indexOf(s);i>-1&&O.splice(i,1)}),[t]);let a=t.toasts.map(i=>{var r,o;return{...e,...e[i.type],...i,duration:i.duration||((r=e[i.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Ie[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:a}},Ue=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Ce()}),L=e=>(t,s)=>{let a=Ue(t,e,s);return S({type:2,toast:a}),a.id},x=(e,t)=>L("blank")(e,t);x.error=L("error");x.success=L("success");x.loading=L("loading");x.custom=L("custom");x.dismiss=e=>{S({type:3,toastId:e})};x.remove=e=>S({type:4,toastId:e});x.promise=(e,t,s)=>{let a=x.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(i=>(x.success(F(t.success,i),{id:a,...s,...s==null?void 0:s.success}),i)).catch(i=>{x.error(F(t.error,i),{id:a,...s,...s==null?void 0:s.error})}),e};var Fe=(e,t)=>{S({type:1,toast:{id:e,height:t}})},Pe=()=>{S({type:5,time:Date.now()})},Re=e=>{let{toasts:t,pausedAt:s}=Oe(e);d.useEffect(()=>{if(s)return;let r=Date.now(),o=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(l<0){n.visible&&x.dismiss(n.id);return}return setTimeout(()=>x.dismiss(n.id),l)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[t,s]);let a=d.useCallback(()=>{s&&S({type:6,time:Date.now()})},[s]),i=d.useCallback((r,o)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=o||{},u=t.filter(h=>(h.position||c)===(r.position||c)&&h.height),p=u.findIndex(h=>h.id===r.id),f=u.filter((h,k)=>k<p&&h.visible).length;return u.filter(h=>h.visible).slice(...n?[f+1]:[0,f]).reduce((h,k)=>h+(k.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Fe,startPause:Pe,endPause:a,calculateOffset:i}}},Ve=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ze=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Be=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Te=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ze} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Be} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,He=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Qe=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${He} 1s linear infinite;
`,qe=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ye=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ze=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ye} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ge=E("div")`
  position: absolute;
`,Je=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,We=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Xe=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${We} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ke=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return t!==void 0?typeof t=="string"?d.createElement(Xe,null,t):t:s==="blank"?null:d.createElement(Je,null,d.createElement(Qe,{...a}),s!=="loading"&&d.createElement(Ge,null,s==="error"?d.createElement(Te,{...a}):d.createElement(Ze,{...a})))},et=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,tt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,st="0%{opacity:0;} 100%{opacity:1;}",at="0%{opacity:1;} 100%{opacity:0;}",rt=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ot=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,it=(e,t)=>{let s=e.includes("top")?1:-1,[a,i]=se()?[st,at]:[et(s),tt(s)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},nt=d.memo(({toast:e,position:t,style:s,children:a})=>{let i=e.height?it(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(Ke,{toast:e}),o=d.createElement(ot,{...e.ariaProps},F(e.message,e));return d.createElement(rt,{className:e.className,style:{...i,...s,...e.style}},typeof a=="function"?a({icon:r,message:o}):d.createElement(d.Fragment,null,r,o))});Me(d.createElement);var lt=({id:e,className:t,style:s,onHeightUpdate:a,children:i})=>{let r=d.useCallback(o=>{if(o){let n=()=>{let l=o.getBoundingClientRect().height;a(e,l)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return d.createElement("div",{ref:r,className:t,style:s},i)},ct=(e,t)=>{let s=e.includes("top"),a=s?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:se()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...a,...i}},dt=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=16,mt=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:i,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:l}=Re(s);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none",...r},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let u=c.position||t,p=l.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),f=ct(u,p);return d.createElement(lt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?dt:"",style:f},c.type==="custom"?F(c.message,c):i?i(c):d.createElement(nt,{toast:c,position:u}))}))},ut=x;const Y=(e,t)=>{const s=J(e),a=G(t);return[{email:{error:s.error,message:s.message},password:{error:a.error,message:a.message}}]},$=ne.create({baseURL:"http://localhost:3000/api/v1/auth"});class gt{constructor(t){j(this,"endpoint");j(this,"getAll",t=>$.get(this.endpoint+t).then(s=>s.data));j(this,"get",()=>$.get(this.endpoint).then(t=>t.data));j(this,"post",t=>$.post(this.endpoint,t).then(s=>s.data));j(this,"put",(t,s)=>$.put(`${this.endpoint}/${t}`,s).then(a=>a.data));j(this,"delete",t=>$.delete(`${this.endpoint}/${t}`).then(s=>s.data));this.endpoint=t}}const ae=new gt("/register"),pt=()=>{const e=W(),t=C();return{mutationFn:s=>ae.post(s),onError:s=>{console.log(s)},onSuccess:s=>{e.setQueryData(["users",s.saveUser],s),e.invalidateQueries(["users"],{exact:!0}),t("/verifyEmail")}}},ft=()=>{const e=W(),t=C();return{mutationFn:s=>ae.post(s),onError:s=>{console.log(s),ut.error(s.response.data.message)},onSuccess:s=>{e.setQueryData(["login-users",s.saveUser],s),e.invalidateQueries(["login-users"],{exact:!0}),localStorage.setItem("token",s.data.token),le.set("token",s.data.token,{httpOnly:!0}),t("/")}}},re=e=>ce(e),ht=()=>{const e=C(),t=de(),[s,a]=d.useState(!1),[i,r]=d.useState({email:"",password:""}),[o,n]=d.useState({email:{error:!1,message:""},password:{error:!1,message:""}}),[l,{data:c,isSuccess:u,isError:p,error:f}]=me(),h=g=>{const{name:b,value:y}=g.target;r({...i,[b]:y});const A=Y(i.email,i.password);n({...o,email:{error:A[0].email.error,message:A[0].email.message},password:{error:A[0].password.error,message:A[0].password.message}})},k=g=>{g.preventDefault(),a(!0);const b=Y(i.email,i.password);n({...o,email:{error:b[0].email.error,message:b[0].email.message},password:{error:b[0].password.error,message:b[0].password.message}}),(!b[0].email.error||!b[0].password.error)&&l(i)};return d.useEffect(()=>{u&&(t(ue(c)),e("/dashboard"))},[u]),{loginUserMutation:re(ft()),submet:s,login:i,loginStatus:o,handleLoginChange:h,handleSubmit:k}},bt=[{icon:_,type:"text",name:"email",id:"email",placeholder:"Enter your Email",onchange:()=>{},className:"bg-gray-900 border-solid text-white",className2:"w-full",submit:!1,validate:!1,errorMessage:"",key:2},{icon:R,type:"password",name:"password",id:"password",placeholder:"●●●●●●●●●●",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",className2:"w-full",key:3}],yt=()=>{const e=ht(),{submet:t,handleSubmit:s,handleLoginChange:a,loginUserMutation:i,loginStatus:r}=e;return m.jsxs("form",{onSubmit:s,className:" my-4 flex flex-col gap-4",children:[bt.map((o,n)=>m.jsx(X,{icon:m.jsx(o.icon,{}),type:o.type,name:o.name,id:o.id,placeholder:o.placeholder,onChange:a,className:`${o.className}`,submit:t,validate:r[o.name].error,errorMessage:r[o.name].message},n)),m.jsx(mt,{position:"top-right",reverseOrder:!1}),m.jsx(K,{disabled:i.isLoading,className:"w-full",children:i.isLoading?"Login...":"Login"}),m.jsx("div",{className:" text-white w-[80%] mx-auto hover:underline transition text-sm",children:m.jsx(T,{to:"/forgotPassword",children:"Forgot password"})}),m.jsxs("div",{className:" flex items-center gap-2 w-[80%] mx-auto",children:[m.jsx("span",{className:" h-[1px] w-[49%] bg-white mt-1"}),m.jsx("span",{className:" text-white",children:"or"}),m.jsx("span",{className:" h-[1px] w-[49%] bg-white mt-1"})]}),m.jsx("div",{className:" text-white w-[80%] mx-auto hover:underline transition text-sm",children:m.jsx(T,{to:"/",children:"Back home"})})]})},Z=(e,t,s,a,i,r)=>{const o=J(s),n=G(i),l=ge(r),c=pe(e),u=fe(t),p=he(a);return[{first_name:{error:c.error,message:c.message},last_name:{error:u.error,message:u.message},mobile:{error:p.error,message:p.message},email:{error:o.error,message:o.message},password:{error:n.error,message:n.message},username:{error:l.error,message:l.message}}]},xt=e=>{C();const[t,s]=d.useState(!1),[a,i]=d.useState({first_name:"",last_name:"",username:"",email:"",mobile:"",password:"",password_confirmation:""}),[r,o]=d.useState({first_name:{error:!1,message:""},last_name:{error:!1,message:""},username:{error:!1,message:""},email:{error:!1,message:""},mobile:{error:!1,message:""},password:{error:!1,message:""},password_confirmation:{error:!1,message:""}}),[n,{data:l,isSuccess:c,isError:u,error:p}]=be(),f=M=>{M.preventDefault(),s(!0);const g=Z(a.first_name,a.last_name,a.email,a.mobile,a.password,a.username);o({...r,first_name:{error:g[0].first_name.error,message:g[0].first_name.message},last_name:{error:g[0].last_name.error,message:g[0].last_name.message},email:{error:g[0].email.error,message:g[0].email.message},mobile:{error:g[0].mobile.error,message:g[0].mobile.message},password:{error:g[0].password.error,message:g[0].password.message},username:{error:g[0].username.error,message:g[0].username.message}});const b=ye(a.password_confirmation,a.password);g&&!(b!=null&&b.error)&&n(a)},h=M=>{const{name:g,value:b}=M.target;i({...a,[g]:b});const y=Z(a.first_name,a.last_name,a.email,a.mobile,a.password,a.username);o({...r,first_name:{error:y[0].first_name.error,message:y[0].first_name.message},last_name:{error:y[0].last_name.error,message:y[0].last_name.message},email:{error:y[0].email.error,message:y[0].email.message},mobile:{error:y[0].mobile.error,message:y[0].mobile.message},password:{error:y[0].password.error,message:y[0].password.message},username:{error:y[0].username.error,message:y[0].username.message}})};return d.useEffect(()=>{c&&e.emit("user_registration",a.first_name)},[c]),{createUserMutation:re(pt()),submet:t,register:a,registerStatus:r,handleSubmit:f,handleRegisterChange:h}};const vt=[{icon:_,type:"text",name:"first_name",id:"first_name",placeholder:"Enter your First Name",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:0},{icon:_,type:"text",name:"last_name",id:"last_name",placeholder:"Enter your Last Name",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:1},{icon:_,type:"text",name:"username",id:"username",placeholder:"Enter your Name",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:2},{icon:_,type:"text",name:"email",id:"email",placeholder:"Enter your Email",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:3},{icon:_,type:"text",name:"mobile",id:"mobile",placeholder:"Enter your Mobile",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:4},{icon:R,type:"password",name:"password",id:"password",placeholder:"●●●●●●●●●●",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:5},{icon:R,type:"password",name:"password_confirmation",id:"password_confirmation",placeholder:"●●●●●●●●●●",onchange:()=>{},className:"bg-gray-900 border-solid text-white",submit:!1,validate:!1,errorMessage:"",key:6}],wt=({socket:e})=>{const t=xt(e),{submet:s,registerStatus:a,handleSubmit:i,handleRegisterChange:r}=t;return m.jsx(m.Fragment,{children:m.jsxs("form",{onSubmit:i,className:"my-4 flex flex-col gap-4 ",children:[vt.map((o,n)=>m.jsx(X,{icon:m.jsx(o.icon,{}),type:o.type,name:o.name,id:o.id,placeholder:o.placeholder,onChange:r,className:`${o.className}`,submit:s,validate:a[o.name].error,errorMessage:a[o.name].message},n)),m.jsx(K,{className:"w-full",disabled:t.createUserMutation.isLoading,children:t.createUserMutation.isLoading?"Registering...":"Register"})]})})},St=({socket:e})=>{C();const[t,s]=d.useState(!0),[a,i]=d.useState(!1);d.useState(null);const r=()=>{s(!0),i(!1)},o=()=>{i(!0),s(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(xe,{src:ve,className:"w-full h-screen"}),m.jsxs("div",{className:"modal-inscreption   px-14",children:[m.jsx("h3",{className:" w-full text-white text-center inline-block text-5xl",children:"AlloMedia"}),m.jsxs("div",{className:"flex gap-[3%] my-3 p-1 w-[65%] mx-auto bg-gray-900 rounded-md",children:[m.jsx(H,{onClick:r,className:`${t?"  opacity-100 border border-white":"opacity-50"}`,children:"login"}),m.jsx(H,{onClick:o,className:`${a?"opacity-100 border border-white":"opacity-50"}`,children:"signup"})]}),t?m.jsx(yt,{}):m.jsx(wt,{socket:e})]}),m.jsx(we,{className:"opacity-80"})]})};export{St as default};
