import{aP as k,z as h,G,r as I,ak as ye,j as be,h as z,ae as tt,ap as re,B as w,T as Se,b as m,aQ as j,aa as X,K as g,ac as L,R as _,P as _e,U as q,S as we,Q as R,a4 as nt,W as Ce,Y as ae,Z as st,F as xe,$ as it,V as x,aR as V,am as $e,aS as oe,aT as rt,aU as at,aV as ot,u as le,aW as lt,D as ut,X as ct,A as dt,C as ft,aX as mt,E as Ee,aY as gt,aZ as vt,a_ as ht,a$ as ue,al as pt,b0 as yt,b1 as ce,b2 as bt,ab as St}from"./entry.7f812811.js";const Re=["top","bottom"],_t=["start","end","left","right"];function wt(e,t){let[n,s]=e.split(" ");return s||(s=k(Re,n)?"start":k(_t,n)?"top":"center"),{side:de(n,t),align:de(s,t)}}function de(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function sn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function rn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function an(e){return{side:e.align,align:e.side}}function on(e){return k(Re,e.side)?"y":"x"}class B{constructor(t){let{x:n,y:s,width:r,height:i}=t;this.x=n,this.y=s,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ln(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function un(e){return Array.isArray(e)?new B({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function cn(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),s=n.transform;if(s){let r,i,a,o,l;if(s.startsWith("matrix3d("))r=s.slice(9,-1).split(/, /),i=+r[0],a=+r[5],o=+r[12],l=+r[13];else if(s.startsWith("matrix("))r=s.slice(7,-1).split(/, /),i=+r[0],a=+r[3],o=+r[4],l=+r[5];else return new B(t);const u=n.transformOrigin,c=t.x-o-(1-i)*parseFloat(u),d=t.y-l-(1-a)*parseFloat(u.slice(u.indexOf(" ")+1)),v=i?t.width/i:e.offsetWidth+1,p=a?t.height/a:e.offsetHeight+1;return new B({x:c,y:d,width:v,height:p})}else return new B(t)}function dn(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let s;try{s=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(r=>{s.onfinish=()=>{r(s)}})),s}const $=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),fn="cubic-bezier(0.4, 0, 0.2, 1)",mn="cubic-bezier(0.0, 0, 0.2, 1)",gn="cubic-bezier(0.4, 0, 1, 1)";function A(e){const t=G("useRender");t.render=e}function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=I(),s=I();if(ye){const r=new ResizeObserver(i=>{e==null||e(i,r),i.length&&(t==="content"?s.value=i[0].contentRect:s.value=i[0].target.getBoundingClientRect())});be(()=>{r.disconnect()}),z(n,(i,a)=>{a&&(r.unobserve(re(a)),s.value=void 0),i&&r.observe(re(i))},{flush:"post"})}return{resizeRef:n,contentRect:tt(s)}}const W=h({tag:{type:String,default:"div"}},"tag"),Ct=h({fluid:{type:Boolean,default:!1},...$(),...W()},"VContainer"),hn=w()({name:"VContainer",props:Ct(),setup(e,t){let{slots:n}=t;const{rtlClasses:s}=Se();return A(()=>m(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},n)),{}}}),Pe=(()=>j.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),Te=(()=>j.reduce((e,t)=>{const n="offset"+X(t);return e[n]={type:[String,Number],default:null},e},{}))(),Le=(()=>j.reduce((e,t)=>{const n="order"+X(t);return e[n]={type:[String,Number],default:null},e},{}))(),fe={col:Object.keys(Pe),offset:Object.keys(Te),order:Object.keys(Le)};function xt(e,t,n){let s=e;if(!(n==null||n===!1)){if(t){const r=t.replace(e,"");s+=`-${r}`}return e==="col"&&(s="v-"+s),e==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const $t=["auto","start","end","center","baseline","stretch"],Et=h({cols:{type:[Boolean,String,Number],default:!1},...Pe,offset:{type:[String,Number],default:null},...Te,order:{type:[String,Number],default:null},...Le,alignSelf:{type:String,default:null,validator:e=>$t.includes(e)},...$(),...W()},"VCol"),pn=w()({name:"VCol",props:Et(),setup(e,t){let{slots:n}=t;const s=g(()=>{const r=[];let i;for(i in fe)fe[i].forEach(o=>{const l=e[o],u=xt(i,o,l);u&&r.push(u)});const a=r.some(o=>o.startsWith("v-col-"));return r.push({"v-col":!a||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return L(e.tag,{class:[s.value,e.class],style:e.style},(r=n.default)==null?void 0:r.call(n))}}}),K=["start","end","center"],Ve=["space-between","space-around","space-evenly"];function J(e,t){return j.reduce((n,s)=>{const r=e+X(s);return n[r]=t(),n},{})}const Rt=[...K,"baseline","stretch"],Ne=e=>Rt.includes(e),ze=J("align",()=>({type:String,default:null,validator:Ne})),Pt=[...K,...Ve],Be=e=>Pt.includes(e),ke=J("justify",()=>({type:String,default:null,validator:Be})),Tt=[...K,...Ve,"stretch"],Ie=e=>Tt.includes(e),Oe=J("alignContent",()=>({type:String,default:null,validator:Ie})),me={align:Object.keys(ze),justify:Object.keys(ke),alignContent:Object.keys(Oe)},Lt={align:"align",justify:"justify",alignContent:"align-content"};function Vt(e,t,n){let s=Lt[e];if(n!=null){if(t){const r=t.replace(e,"");s+=`-${r}`}return s+=`-${n}`,s.toLowerCase()}}const Nt=h({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ne},...ze,justify:{type:String,default:null,validator:Be},...ke,alignContent:{type:String,default:null,validator:Ie},...Oe,...$(),...W()},"VRow"),yn=w()({name:"VRow",props:Nt(),setup(e,t){let{slots:n}=t;const s=g(()=>{const r=[];let i;for(i in me)me[i].forEach(a=>{const o=e[a],l=Vt(i,a,o);l&&r.push(l)});return r.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),r});return()=>{var r;return L(e.tag,{class:["v-row",s.value,e.class],style:e.style},(r=n.default)==null?void 0:r.call(n))}}});const zt=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Bt(e){return{dimensionStyles:g(()=>({height:_(e.height),maxHeight:_(e.maxHeight),maxWidth:_(e.maxWidth),minHeight:_(e.minHeight),minWidth:_(e.minWidth),width:_(e.width)}))}}function kt(e){return{aspectStyles:g(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const je=h({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...zt()},"VResponsive"),ge=w()({name:"VResponsive",props:je(),setup(e,t){let{slots:n}=t;const{aspectStyles:s}=kt(e),{dimensionStyles:r}=Bt(e);return A(()=>{var i;return m("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[m("div",{class:"v-responsive__sizer",style:s.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&m("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),It=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),N=(e,t)=>{let{slots:n}=t;const{transition:s,disabled:r,...i}=e,{component:a=q,...o}=typeof s=="object"?s:{};return L(a,_e(typeof s=="string"?{name:r?"":s}:o,i,{disabled:r}),n)};function Ot(e,t){if(!we)return;const n=t.modifiers||{},s=t.value,{handler:r,options:i}=typeof s=="object"?s:{handler:s,options:{}},a=new IntersectionObserver(function(){var d;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const u=(d=e._observe)==null?void 0:d[t.instance.$.uid];if(!u)return;const c=o.some(v=>v.isIntersecting);r&&(!n.quiet||u.init)&&(!n.once||c||u.init)&&r(c,o,l),c&&n.once?Ae(e,t):u.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:a},a.observe(e)}function Ae(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const jt={mounted:Ot,unmounted:Ae},At=jt,Wt=h({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...je(),...$(),...It()},"VImg"),bn=w()({name:"VImg",directives:{intersect:At},props:Wt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:s}=t;const r=G("VImg"),i=R(""),a=I(),o=R(e.eager?"loading":"idle"),l=R(),u=R(),c=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=g(()=>c.value.aspect||l.value/u.value||0);z(()=>e.src,()=>{v(o.value!=="idle")}),z(d,(f,y)=>{!f&&y&&a.value&&E(a.value)}),nt(()=>v());function v(f){if(!(e.eager&&f)&&!(we&&!f&&!e.eager)){if(o.value="loading",c.value.lazySrc){const y=new Image;y.src=c.value.lazySrc,E(y,null)}c.value.src&&Ce(()=>{var y;n("loadstart",((y=a.value)==null?void 0:y.currentSrc)||c.value.src),setTimeout(()=>{var C;if(!r.isUnmounted)if((C=a.value)!=null&&C.complete){if(a.value.naturalWidth||Z(),o.value==="error")return;d.value||E(a.value,null),o.value==="loading"&&p()}else d.value||E(a.value),ee()})})}}function p(){var f;r.isUnmounted||(ee(),E(a.value),o.value="loaded",n("load",((f=a.value)==null?void 0:f.currentSrc)||c.value.src))}function Z(){var f;r.isUnmounted||(o.value="error",n("error",((f=a.value)==null?void 0:f.currentSrc)||c.value.src))}function ee(){const f=a.value;f&&(i.value=f.currentSrc||f.src)}let D=-1;be(()=>{clearTimeout(D)});function E(f){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{if(clearTimeout(D),r.isUnmounted)return;const{naturalHeight:se,naturalWidth:ie}=f;se||ie?(l.value=ie,u.value=se):!f.complete&&o.value==="loading"&&y!=null?D=window.setTimeout(C,y):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,u.value=1)};C()}const te=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Ke=()=>{var C;if(!c.value.src||o.value==="idle")return null;const f=m("img",{class:["v-img__img",te.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:a,onLoad:p,onError:Z},null),y=(C=s.sources)==null?void 0:C.call(s);return m(N,{transition:e.transition,appear:!0},{default:()=>[ae(y?m("picture",{class:"v-img__picture"},[y,f]):f,[[it,o.value==="loaded"]])]})},Je=()=>m(N,{transition:e.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&m("img",{class:["v-img__img","v-img__img--preload",te.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Qe=()=>s.placeholder?m(N,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&m("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,Ze=()=>s.error?m(N,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&m("div",{class:"v-img__error"},[s.error()])]}):null,et=()=>e.gradient?m("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,ne=R(!1);{const f=z(d,y=>{y&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{ne.value=!0})}),f())})}return A(()=>{const f=ge.filterProps(e);return ae(m(ge,_e({class:["v-img",{"v-img--booting":!ne.value},e.class],style:[{width:_(e.width==="auto"?l.value:e.width)},e.style]},f,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>m(xe,null,[m(Ke,null,null),m(Je,null,null),m(et,null,null),m(Qe,null,null),m(Ze,null,null)]),default:s.default}),[[st("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:a,state:o,naturalWidth:l,naturalHeight:u}}}),Sn=h({border:[Boolean,Number,String]},"border");function _n(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{borderClasses:g(()=>{const s=V(e)?e.value:e.border,r=[];if(s===!0||s==="")r.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`border-${i}`);return r})}}const Dt=[null,"default","comfortable","compact"],wn=h({density:{type:String,default:"default",validator:e=>Dt.includes(e)}},"density");function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{densityClasses:g(()=>`${t}--density-${e.density}`)}}const xn=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function $n(e){return{elevationClasses:g(()=>{const n=V(e)?e.value:e.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const En=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{roundedClasses:g(()=>{const s=V(e)?e.value:e.rounded,r=[];if(s===!0||s==="")r.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`rounded-${i}`);return r})}}function Q(e){return $e(()=>{const t=[],n={};if(e.value.background)if(oe(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&rt(e.value.background)){const s=at(e.value.background);if(s.a==null||s.a===1){const r=ot(s);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(oe(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ht(e,t){const n=g(()=>({text:V(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:r}=Q(n);return{textColorClasses:s,textColorStyles:r}}function Pn(e,t){const n=g(()=>({background:V(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:r}=Q(n);return{backgroundColorClasses:s,backgroundColorStyles:r}}const Ft=["elevated","flat","tonal","outlined","text","plain"];function Tn(e,t){return m(xe,null,[e&&m("span",{key:"overlay",class:`${t}__overlay`},null),m("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ln=h({color:String,variant:{type:String,default:"elevated",validator:e=>Ft.includes(e)}},"variant");function Vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();const n=g(()=>{const{variant:i}=le(e);return`${t}--variant-${i}`}),{colorClasses:s,colorStyles:r}=Q(g(()=>{const{variant:i,color:a}=le(e);return{[["elevated","flat"].includes(i)?"background":"text"]:a}}));return{colorClasses:s,colorStyles:r,variantClasses:n}}const Mt=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Nn=w(!1)({name:"VDefaultsProvider",props:Mt(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:r,reset:i,root:a,scoped:o}=lt(e);return ut(s,{reset:i,root:a,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const Ut=["x-small","small","default","large","x-large"],Yt=h({size:{type:[String,Number],default:"default"}},"size");function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return $e(()=>{let n,s;return k(Ut,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:_(e.size),height:_(e.size)}),{sizeClasses:n,sizeStyles:s}})}const Xt=h({color:String,start:Boolean,end:Boolean,icon:ct,...$(),...Yt(),...W({tag:"i"}),...dt()},"VIcon"),zn=w()({name:"VIcon",props:Xt(),setup(e,t){let{attrs:n,slots:s}=t;const r=I(),{themeClasses:i}=ft(e),{iconData:a}=mt(g(()=>r.value||e.icon)),{sizeClasses:o}=Gt(e),{textColorClasses:l,textColorStyles:u}=Ht(Ee(e,"color"));return A(()=>{var d,v;const c=(d=s.default)==null?void 0:d.call(s);return c&&(r.value=(v=gt(c).filter(p=>p.type===vt&&p.children&&typeof p.children=="string")[0])==null?void 0:v.children),m(a.value.component,{tag:e.tag,icon:a.value.icon,class:["v-icon","notranslate",i.value,o.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},u.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[c]})}),{}}}),ve={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Bn=h({location:String},"location");function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Se();return{locationStyles:g(()=>{if(!e.location)return{};const{side:i,align:a}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function o(u){return n?n(u):0}const l={};return i!=="center"&&(t?l[ve[i]]=`calc(100% - ${o(i)}px)`:l[i]=0),a!=="center"?t?l[ve[a]]=`calc(100% - ${o(a)}px)`:l[a]=0:(i==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),l})}}const qt=["static","relative","fixed","absolute","sticky"],In=h({position:{type:String,validator:e=>qt.includes(e)}},"position");function On(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{positionClasses:g(()=>e.position?`${t}--${e.position}`:void 0)}}function jn(){var e,t;return(t=(e=G("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function An(e,t){const n=ht("RouterLink"),s=g(()=>!!(e.href||e.to)),r=g(()=>(s==null?void 0:s.value)||ue(t,"click")||ue(e,"click"));if(typeof n=="string")return{isLink:s,isClickable:r,href:Ee(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:s,isClickable:r,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&g(()=>{var a,o;return e.exact?(a=i.isExactActive)==null?void 0:a.value:(o=i.isActive)==null?void 0:o.value}),href:g(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Wn=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let H=!1;function Dn(e,t){let n=!1,s,r;ye&&(Ce(()=>{window.addEventListener("popstate",i),s=e==null?void 0:e.beforeEach((a,o,l)=>{H?n?t(l):l():setTimeout(()=>n?t(l):l()),H=!0}),r=e==null?void 0:e.afterEach(()=>{H=!1})}),pt(()=>{window.removeEventListener("popstate",i),s==null||s(),r==null||r()}));function i(a){var o;(o=a.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const U=Symbol("rippleStop"),Kt=80;function he(e,t){e.style.transform=t,e.style.webkitTransform=t}function Y(e){return e.constructor.name==="TouchEvent"}function We(e){return e.constructor.name==="KeyboardEvent"}const Jt=function(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,r=0;if(!We(e)){const v=t.getBoundingClientRect(),p=Y(e)?e.touches[e.touches.length-1]:e;s=p.clientX-v.left,r=p.clientY-v.top}let i=0,a=.3;(d=t._ripple)!=null&&d.circle?(a=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((s-i)**2+(r-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-i*2)/2}px`,l=`${(t.clientHeight-i*2)/2}px`,u=n.center?o:`${s-i}px`,c=n.center?l:`${r-i}px`;return{radius:i,scale:a,x:u,y:c,centerX:o,centerY:l}},O={show(e,t){var p;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((p=t==null?void 0:t._ripple)!=null&&p.enabled))return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:i,scale:a,x:o,y:l,centerX:u,centerY:c}=Jt(e,t,n),d=`${i*2}px`;r.className="v-ripple__animation",r.style.width=d,r.style.height=d,t.appendChild(s);const v=window.getComputedStyle(t);v&&v.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),he(r,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),he(r,`translate(${u}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),r=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function De(e){return typeof e>"u"||!!e}function P(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[U])){if(e[U]=!0,Y(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||We(e),n._ripple.class&&(t.class=n._ripple.class),Y(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{O.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Kt)}else O.show(e,n,t)}}function pe(e){e[U]=!0}function b(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{b(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),O.hide(t)}}function He(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let T=!1;function Fe(e){!T&&(e.keyCode===ce.enter||e.keyCode===ce.space)&&(T=!0,P(e))}function Me(e){T=!1,b(e)}function Ue(e){T&&(T=!1,b(e))}function Ye(e,t,n){const{value:s,modifiers:r}=t,i=De(s);if(i||O.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=r.center,e._ripple.circle=r.circle,yt(s)&&s.class&&(e._ripple.class=s.class),i&&!n){if(r.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",P,{passive:!0}),e.addEventListener("touchend",b,{passive:!0}),e.addEventListener("touchmove",He,{passive:!0}),e.addEventListener("touchcancel",b),e.addEventListener("mousedown",P),e.addEventListener("mouseup",b),e.addEventListener("mouseleave",b),e.addEventListener("keydown",Fe),e.addEventListener("keyup",Me),e.addEventListener("blur",Ue),e.addEventListener("dragstart",b,{passive:!0})}else!i&&n&&Ge(e)}function Ge(e){e.removeEventListener("mousedown",P),e.removeEventListener("touchstart",P),e.removeEventListener("touchend",b),e.removeEventListener("touchmove",He),e.removeEventListener("touchcancel",b),e.removeEventListener("mouseup",b),e.removeEventListener("mouseleave",b),e.removeEventListener("keydown",Fe),e.removeEventListener("keyup",Me),e.removeEventListener("dragstart",b),e.removeEventListener("blur",Ue)}function Qt(e,t){Ye(e,t,!1)}function Zt(e){delete e._ripple,Ge(e)}function en(e,t){if(t.value===t.oldValue)return;const n=De(t.oldValue);Ye(e,t,n)}const Hn={mounted:Qt,unmounted:Zt,updated:en},tn=h({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function S(e,t,n){return w()({name:e,props:tn({mode:n,origin:t}),setup(s,r){let{slots:i}=r;const a={onBeforeEnter(o){s.origin&&(o.style.transformOrigin=s.origin)},onLeave(o){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:u,offsetWidth:c,offsetHeight:d}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${u}px`,o.style.width=`${c}px`,o.style.height=`${d}px`}s.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(s.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:u,left:c,width:d,height:v}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=u||"",o.style.left=c||"",o.style.width=d||"",o.style.height=v||""}}};return()=>{const o=s.group?bt:q;return L(o,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:a},i.default)}}})}function Xe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return w()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,r){let{slots:i}=r;return()=>L(q,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:t},i.default)}})}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=St(`offset-${n}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[n]:a.style[n]}},onEnter(a){const o=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const l=`${a[s]}px`;a.style[n]="0",a.offsetHeight,a.style.transition=o.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[n]=l})},onAfterEnter:i,onEnterCancelled:i,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[n]:a.style[n]},a.style.overflow="hidden",a.style[n]=`${a[s]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(a){e&&a._parent&&a._parent.classList.remove(e),i(a)}function i(a){const o=a._initialStyle[n];a.style.overflow=a._initialStyle.overflow,o!=null&&(a.style[n]=o),delete a._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");const Fn=S("slide-y-transition");S("slide-y-reverse-transition");const Mn=Xe("expand-transition",qe()),Un=Xe("expand-x-transition",qe("",!0)),F=Symbol("Forwarded refs");function M(e,t){let n=e;for(;n;){const s=Reflect.getOwnPropertyDescriptor(n,t);if(s)return s;n=Object.getPrototypeOf(n)}}function Yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return e[F]=n,new Proxy(e,{get(r,i){if(Reflect.has(r,i))return Reflect.get(r,i);if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const a of n)if(a.value&&Reflect.has(a.value,i)){const o=Reflect.get(a.value,i);return typeof o=="function"?o.bind(a.value):o}}},has(r,i){if(Reflect.has(r,i))return!0;if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,i))return!0;return!1},set(r,i,a){if(Reflect.has(r,i))return Reflect.set(r,i,a);if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,i))return Reflect.set(o.value,i,a);return!1},getOwnPropertyDescriptor(r,i){var o;const a=Reflect.getOwnPropertyDescriptor(r,i);if(a)return a;if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const l of n){if(!l.value)continue;const u=M(l.value,i)??("_"in l.value?M((o=l.value._)==null?void 0:o.setupState,i):void 0);if(u)return u}for(const l of n){const u=l.value&&l.value[F];if(!u)continue;const c=u.slice();for(;c.length;){const d=c.shift(),v=M(d.value,i);if(v)return v;const p=d.value&&d.value[F];p&&c.push(...p)}}}}})}export{ln as $,Bt as A,On as B,An as C,Tn as D,zn as E,Nn as F,It as G,Fn as H,cn as I,dn as J,Un as K,fn as L,N as M,At as N,Yn as O,mn as P,gn as Q,Hn as R,un as S,Mn as T,wt as U,yn as V,sn as W,rn as X,an as Y,B as Z,on as _,pn as a,jn as a0,Dn as a1,bn as b,hn as c,$ as d,wn as e,xn as f,En as g,W as h,Ln as i,_n as j,$n as k,Rn as l,Sn as m,A as n,Yt as o,Gt as p,Ht as q,vn as r,Bn as s,kn as t,Cn as u,Pn as v,zt as w,In as x,Wn as y,Vn as z};
