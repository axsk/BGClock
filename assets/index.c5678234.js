(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function A(){}function me(e){return e()}function oe(){return Object.create(null)}function z(e){e.forEach(me)}function _e(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $e(e){return Object.keys(e).length===0}function ge(e,...t){if(e==null)return A;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ee(e){let t;return ge(e,n=>t=n)(),t}function be(e,t,n){e.$$.on_destroy.push(ge(t,n))}function S(e,t,n){return e.set(n),t}function p(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function Le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function Se(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function O(){return I(" ")}function Ne(){return I("")}function j(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return e===""?null:+e}function Me(e){return Array.from(e.childNodes)}function Ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t){e.value=t==null?"":t}function N(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}class we{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=Se(n.nodeName):this.e=y(n.nodeName),this.t=n,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)C(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(M)}}let ne;function K(e){ne=e}function ue(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const J=[],x=[],Q=[],ce=[],Te=Promise.resolve();let ee=!1;function Oe(){ee||(ee=!0,Te.then(ve))}function te(e){Q.push(e)}const Y=new Set;let G=0;function ve(){const e=ne;do{for(;G<J.length;){const t=J[G];G++,K(t),Ae(t.$$)}for(K(null),J.length=0,G=0;x.length;)x.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];Y.has(n)||(Y.add(n),n())}Q.length=0}while(J.length);for(;ce.length;)ce.pop()();ee=!1,Y.clear(),K(e)}function Ae(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const U=new Set;let B;function He(){B={r:0,c:[],p:B}}function je(){B.r||z(B.c),B=B.p}function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(U.has(e))return;U.add(e),B.c.push(()=>{U.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e){e&&e.c()}function ie(e,t,n,i){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),i||te(()=>{const c=e.$$.on_mount.map(me).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...c):z(c),e.$$.on_mount=[]}),r.forEach(te)}function se(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(J.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,i,l,r,c,s=[-1]){const m=ne;K(e);const o=e.$$={fragment:null,ctx:[],props:r,update:A,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:oe(),dirty:s,skip_bound:!1,root:t.target||m.$$.root};c&&c(o.root);let w=!1;if(o.ctx=n?n(e,t.props||{},(u,d,...v)=>{const T=v.length?v[0]:d;return o.ctx&&l(o.ctx[u],o.ctx[u]=T)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](T),w&&Ie(e,u)),d}):[],o.update(),w=!0,z(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=Me(t.target);o.fragment&&o.fragment.l(u),u.forEach(M)}else o.fragment&&o.fragment.c();t.intro&&V(e.$$.fragment),ie(e,t.target,t.anchor,t.customElement),ve()}K(m)}class re{$destroy(){se(this,1),this.$destroy=A}$on(t,n){if(!_e(n))return A;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const F=[];function Pe(e,t=A){let n;const i=new Set;function l(s){if(X(e,s)&&(e=s,n)){const m=!F.length;for(const o of i)o[1](),F.push(o,e);if(m){for(let o=0;o<F.length;o+=2)F[o][0](F[o+1]);F.length=0}}}function r(s){l(s(e))}function c(s,m=A){const o=[s,m];return i.add(o),i.size===1&&(n=t(l)||A),s(e),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:l,update:r,subscribe:c}}var Z={};function ke(e,t,n){const i=typeof localStorage<"u"&&typeof window<"u",l=(n==null?void 0:n.serializer)||JSON;function r(c,s){!i||localStorage.setItem(c,l.stringify(s))}if(!Z[e]){const c=Pe(t,o=>{const w=i?localStorage.getItem(e):null;if(w&&o(l.parse(w)),i){const u=d=>{d.key===e&&o(d.newValue?l.parse(d.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:s,set:m}=c;Z[e]={set(o){r(e,o),m(o)},update(o){const w=o(Ee(c));r(e,w),m(w)},subscribe:s}}return Z[e]}function fe(e){let t,n;return{c(){t=new we(!1),n=Ne(),t.a=n},m(i,l){t.m(e[2],i,l),C(i,n,l)},p(i,l){l&4&&t.p(i[2])},d(i){i&&M(n),i&&t.d()}}}function ae(e){let t,n,i;return{c(){t=I("("),n=new we(!1),i=I(")"),n.a=i},m(l,r){C(l,t,r),n.m(e[1],l,r),C(l,i,r)},p(l,r){r&2&&n.p(l[1])},d(l){l&&M(t),l&&n.d(),l&&M(i)}}}function qe(e){let t,n,i,l,r,c,s=q(e[0].seconds)+"",m,o,w,u,d=e[0].moves+"",v,T,k,E,h=q(e[0].totaltime)+"",H,f,g,a=e[0].bronstein>0&&fe(e),$=e[0].moves>0&&ae(e);return{c(){t=y("div"),n=y("input"),i=O(),l=y("div"),r=y("table"),c=y("tr"),m=O(),o=y("tr"),a&&a.c(),w=O(),u=y("div"),v=I(d),T=O(),$&&$.c(),k=O(),E=y("div"),b(n,"class","w3-input svelte-1wcoxwh"),N(n,"color","black"),N(o,"color","gray"),b(r,"class",""),N(r,"position","absolute"),N(r,"left","50%"),N(r,"transform","translate(-50%)"),N(r,"text-align","right"),b(l,"class","time svelte-1wcoxwh"),b(u,"class","w3-display-bottomleft w3-padding"),b(E,"class","w3-display-bottomright w3-padding"),b(t,"id","square"),b(t,"class",H="w3-display "+(e[0].running?"running":"")+" svelte-1wcoxwh")},m(L,_){C(L,t,_),p(t,n),P(n,e[0].name),p(t,i),p(t,l),p(l,r),p(r,c),c.innerHTML=s,p(r,m),p(r,o),a&&a.m(o,null),p(t,w),p(t,u),p(u,v),p(u,T),$&&$.m(u,null),p(t,k),p(t,E),E.innerHTML=h,f||(g=[j(n,"input",e[14]),j(t,"click",e[12]),j(t,"keydown",e[13])],f=!0)},p(L,[_]){_&1&&n.value!==L[0].name&&P(n,L[0].name),_&1&&s!==(s=q(L[0].seconds)+"")&&(c.innerHTML=s),L[0].bronstein>0?a?a.p(L,_):(a=fe(L),a.c(),a.m(o,null)):a&&(a.d(1),a=null),_&1&&d!==(d=L[0].moves+"")&&Ce(v,d),L[0].moves>0?$?$.p(L,_):($=ae(L),$.c(),$.m(u,null)):$&&($.d(1),$=null),_&1&&h!==(h=q(L[0].totaltime)+"")&&(E.innerHTML=h),_&1&&H!==(H="w3-display "+(L[0].running?"running":"")+" svelte-1wcoxwh")&&b(t,"class",H)},i:A,o:A,d(L){L&&M(t),a&&a.d(),$&&$.d(),f=!1,z(g)}}}function q(e){let t="";e<0&&(t+="-"),e=Math.abs(e);let n=Math.floor(e/(60*60)),i=Math.floor(e/60%60),l=Math.floor(e%60);return n>0&&(t+=n+":",i<10&&(t+="0")),i>0&&(t+=i+"<td>:</td>",l<10&&(t+="0")),t+=l,t}function ze(e){return e>0?"("+q(e)+") ":""}function Be(e,t,n){let i,l,r,c,s,{id:m=0}=t,{config:o={basetime:5,fischer:5,bronstein:5}}=t;const w={seconds:o.basetime,running:!1,bronstein:o.bronstein,checkpoint:0,moves:0,totaltime:0,name:""};let u=ke("clockstate-"+m,w);be(e,u,_=>n(0,s=_)),setInterval(v,100);function d(){return s.running}function v(){if(s.running){let _=Date.now(),R=(_-s.checkpoint)/1e3;S(u,s.checkpoint=_,s),S(u,s.totaltime+=R,s),s.bronstein-R>0?S(u,s.bronstein-=R,s):(S(u,s.seconds-=R-s.bronstein,s),S(u,s.bronstein=0,s))}}function T(){h(),S(u,s.bronstein=r,s)}function k(){E(),S(u,s.seconds+=l,s),S(u,s.moves+=1,s)}function E(){v(),S(u,s.running=!1,s)}function h(){S(u,s.checkpoint=Date.now(),s),S(u,s.running=!0,s)}function H(){let _=s.seconds.toFixed(1);return _=q(s.seconds),s.bronstein>0&&(_="("+s.bronstein.toFixed(1)+")+"+_),_}let f;function g(){S(u,s.seconds=o.basetime,s),S(u,s.running=!1,s),S(u,s.bronstein=o.bronstein,s),S(u,s.moves=0,s),S(u,s.totaltime=0,s),H()}function a(_){ue.call(this,e,_)}function $(_){ue.call(this,e,_)}function L(){s.name=this.value,u.set(s)}return e.$$set=_=>{"id"in _&&n(4,m=_.id),"config"in _&&n(5,o=_.config)},e.$$.update=()=>{e.$$.dirty&32&&({basetime:i,fischer:l,bronstein:r}=o),e.$$.dirty&1&&ze(s.bronstein),e.$$.dirty&1&&n(1,f=q(s.totaltime/s.moves)),e.$$.dirty&1&&n(2,c=q(s.bronstein))},[s,f,c,u,m,o,d,T,k,E,h,g,a,$,L]}class Fe extends re{constructor(t){super(),le(this,t,Be,qe,X,{id:4,config:5,isrunning:6,start:7,stop:8,pause:9,unpause:10,reset:11})}get isrunning(){return this.$$.ctx[6]}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get pause(){return this.$$.ctx[9]}get unpause(){return this.$$.ctx[10]}get reset(){return this.$$.ctx[11]}}function de(e,t,n){const i=e.slice();return i[16]=t[n],i[17]=t,i[18]=n,i}function he(e){let t,n,i,l,r,c,s,m,o,w,u;return{c(){t=y("div"),n=I("Basis "),i=y("input"),l=I(`
            bronstein `),r=y("input"),c=I(`
            fischer `),s=y("input"),m=O(),o=y("button"),o.textContent="RESET",b(i,"type","number"),b(i,"class","svelte-t9u2ev"),b(r,"type","number"),b(r,"class","svelte-t9u2ev"),b(s,"type","number"),b(s,"class","svelte-t9u2ev"),b(o,"class","w3-button"),b(t,"class","")},m(d,v){C(d,t,v),p(t,n),p(t,i),P(i,e[2].basetime),p(t,l),p(t,r),P(r,e[2].bronstein),p(t,c),p(t,s),P(s,e[2].fischer),p(t,m),p(t,o),w||(u=[j(i,"input",e[9]),j(r,"input",e[10]),j(s,"input",e[11]),j(o,"click",e[7])],w=!0)},p(d,v){v&4&&D(i.value)!==d[2].basetime&&P(i,d[2].basetime),v&4&&D(r.value)!==d[2].bronstein&&P(r,d[2].bronstein),v&4&&D(s.value)!==d[2].fischer&&P(s,d[2].fischer)},d(d){d&&M(t),w=!1,z(u)}}}function pe(e){let t,n,i,l=e[16],r,c;const s=()=>e[12](i,l),m=()=>e[12](null,l);function o(){return e[13](e[16])}let w={id:e[16],config:e[2]};return i=new Fe({props:w}),s(),i.$on("click",o),{c(){t=y("div"),n=y("div"),ye(i.$$.fragment),r=O(),b(n,"class","w3-sand w3-border w3-margin w3-round-large"),b(t,"class","watches svelte-t9u2ev")},m(u,d){C(u,t,d),p(t,n),ie(i,n,null),p(t,r),c=!0},p(u,d){e=u,l!==e[16]&&(m(),l=e[16],s());const v={};d&4&&(v.config=e[2]),i.$set(v)},i(u){c||(V(i.$$.fragment,u),c=!0)},o(u){W(i.$$.fragment,u),c=!1},d(u){u&&M(t),m(),se(i)}}}function De(e){let t,n,i,l,r,c,s,m,o,w,u,d,v,T,k=e[1]&&he(e),E=e[3],h=[];for(let f=0;f<E.length;f+=1)h[f]=pe(de(e,E,f));const H=f=>W(h[f],1,1,()=>{h[f]=null});return{c(){t=y("link"),n=O(),i=y("div"),l=y("div"),r=I("Settings "),c=y("input"),s=O(),k&&k.c(),m=O(),o=y("button"),o.textContent="||",w=O(),u=y("div");for(let f=0;f<h.length;f+=1)h[f].c();b(t,"rel","stylesheet"),b(t,"href","https://www.w3schools.com/w3css/4/w3.css"),b(c,"type","checkbox"),b(c,"class","svelte-t9u2ev"),b(l,"class",""),b(o,"class","w3-button w3-padding-large w3-light-grey w3-xxlarge"),b(o,"style",""),N(u,"position","absolute"),N(u,"width","100%"),N(u,"left","0"),N(i,"position","absolute"),N(i,"width","100%"),N(i,"height","100%"),N(i,"left","0"),N(i,"top","0")},m(f,g){C(f,t,g),C(f,n,g),C(f,i,g),p(i,l),p(l,r),p(l,c),c.checked=e[1],p(l,s),k&&k.m(l,null),p(i,m),p(i,o),p(i,w),p(i,u);for(let a=0;a<h.length;a+=1)h[a].m(u,null);d=!0,v||(T=[j(c,"change",e[8]),j(o,"click",e[6])],v=!0)},p(f,[g]){if(g&2&&(c.checked=f[1]),f[1]?k?k.p(f,g):(k=he(f),k.c(),k.m(l,null)):k&&(k.d(1),k=null),g&45){E=f[3];let a;for(a=0;a<E.length;a+=1){const $=de(f,E,a);h[a]?(h[a].p($,g),V(h[a],1)):(h[a]=pe($),h[a].c(),V(h[a],1),h[a].m(u,null))}for(He(),a=E.length;a<h.length;a+=1)H(a);je()}},i(f){if(!d){for(let g=0;g<E.length;g+=1)V(h[g]);d=!0}},o(f){h=h.filter(Boolean);for(let g=0;g<h.length;g+=1)W(h[g]);d=!1},d(f){f&&M(t),f&&M(n),f&&M(i),k&&k.d(),Le(h,f),v=!1,z(T)}}}function Ve(e,t,n){let i,l=[0,1,4,2,3],r=[],c,s=!1,o=ke("config",{bronstein:0,fischer:0,basetime:10});be(e,o,f=>n(2,i=f));function w(f){if(r.every(g=>g.isrunning()==!1))r[f].start(),c=void 0;else if(r[f].isrunning()){r[f].stop();let g=(f+1)%l.length;r[g].start()}}function u(){if(c===void 0)for(let f in l)r[f].isrunning()&&(c=f),r[f].pause();else r[c].unpause(),c=void 0}function d(){for(let f in l)r[f].reset();c=void 0}function v(){s=this.checked,n(1,s)}function T(){i.basetime=D(this.value),o.set(i)}function k(){i.bronstein=D(this.value),o.set(i)}function E(){i.fischer=D(this.value),o.set(i)}function h(f,g){x[f?"unshift":"push"](()=>{r[g]=f,n(0,r)})}return[r,s,i,l,o,w,u,d,v,T,k,E,h,f=>w(f)]}class Je extends re{constructor(t){super(),le(this,t,Ve,De,X,{})}}function Ke(e){let t,n,i,l,r;return l=new Je({}),{c(){t=y("meta"),n=O(),i=y("main"),ye(l.$$.fragment),b(t,"name","viewport"),b(t,"content","width=device-width, initial-scale=1")},m(c,s){C(c,t,s),C(c,n,s),C(c,i,s),ie(l,i,null),r=!0},p:A,i(c){r||(V(l.$$.fragment,c),r=!0)},o(c){W(l.$$.fragment,c),r=!1},d(c){c&&M(t),c&&M(n),c&&M(i),se(l)}}}class Re extends re{constructor(t){super(),le(this,t,null,Ke,X,{})}}new Re({target:document.getElementById("app")});
