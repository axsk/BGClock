(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();function L(){}function me(e){return e()}function ce(){return Object.create(null)}function P(e){e.forEach(me)}function ge(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function _e(e,...t){if(e==null)return L;const i=e.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}function ke(e){let t;return _e(e,i=>t=i)(),t}function be(e,t,i){e.$$.on_destroy.push(_e(t,i))}function fe(e){return e==null?"":e}function E(e,t,i){return e.set(i),t}function h(e,t){e.appendChild(t)}function q(e,t,i){e.insertBefore(t,i||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function Ee(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function y(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function A(){return F(" ")}function I(e,t,i,s){return e.addEventListener(t,i,s),()=>e.removeEventListener(t,i,s)}function m(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function T(e){return e===""?null:+e}function Se(e){return Array.from(e.childNodes)}function Y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=t==null?"":t}let ie;function G(e){ie=e}function ae(e,t){const i=e.$$.callbacks[t.type];i&&i.slice().forEach(s=>s.call(this,t))}const K=[],ee=[],R=[],de=[],Ce=Promise.resolve();let te=!1;function Le(){te||(te=!0,Ce.then(ve))}function ne(e){R.push(e)}const Z=new Set;let Q=0;function ve(){const e=ie;do{for(;Q<K.length;){const t=K[Q];Q++,G(t),Ne(t.$$)}for(G(null),K.length=0,Q=0;ee.length;)ee.pop()();for(let t=0;t<R.length;t+=1){const i=R[t];Z.has(i)||(Z.add(i),i())}R.length=0}while(K.length);for(;de.length;)de.pop()();te=!1,Z.clear(),G(e)}function Ne(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const U=new Set;let z;function Oe(){z={r:0,c:[],p:z}}function Ae(){z.r||P(z.c),z=z.p}function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function W(e,t,i,s){if(e&&e.o){if(U.has(e))return;U.add(e),z.c.push(()=>{U.delete(e),s&&(i&&e.d(1),s())}),e.o(t)}else s&&s()}function we(e){e&&e.c()}function se(e,t,i,s){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,i),s||ne(()=>{const n=e.$$.on_mount.map(me).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...n):P(n),e.$$.on_mount=[]}),o.forEach(ne)}function re(e,t){const i=e.$$;i.fragment!==null&&(P(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(K.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,i,s,r,o,n,f=[-1]){const d=ie;G(e);const u=e.$$={fragment:null,ctx:[],props:o,update:L,not_equal:r,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ce(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};n&&n(u.root);let c=!1;if(u.ctx=i?i(e,t.props||{},(l,g,...w)=>{const S=w.length?w[0]:g;return u.ctx&&r(u.ctx[l],u.ctx[l]=S)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](S),c&&Me(e,l)),g}):[],u.update(),c=!0,P(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const l=Se(t.target);u.fragment&&u.fragment.l(l),l.forEach(M)}else u.fragment&&u.fragment.c();t.intro&&V(e.$$.fragment),se(e,t.target,t.anchor,t.customElement),ve()}G(d)}class ue{$destroy(){re(this,1),this.$destroy=L}$on(t,i){if(!ge(i))return L;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(i),()=>{const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function je(e,t=L){let i;const s=new Set;function r(f){if(X(e,f)&&(e=f,i)){const d=!D.length;for(const u of s)u[1](),D.push(u,e);if(d){for(let u=0;u<D.length;u+=2)D[u][0](D[u+1]);D.length=0}}}function o(f){r(f(e))}function n(f,d=L){const u=[f,d];return s.add(u),s.size===1&&(i=t(r)||L),f(e),()=>{s.delete(u),s.size===0&&(i(),i=null)}}return{set:r,update:o,subscribe:n}}var x={};function $e(e,t,i){const s=typeof localStorage<"u"&&typeof window<"u",r=(i==null?void 0:i.serializer)||JSON;function o(n,f){!s||localStorage.setItem(n,r.stringify(f))}if(!x[e]){const n=je(t,u=>{const c=s?localStorage.getItem(e):null;if(c&&u(r.parse(c)),s){const l=g=>{g.key===e&&u(g.newValue?r.parse(g.newValue):null)};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)}}),{subscribe:f,set:d}=n;x[e]={set(u){o(e,u),d(u)},update(u){const c=u(ke(n));o(e,c),d(c)},subscribe:f}}return x[e]}function Ie(e){let t,i,s,r,o=B(e[0].seconds+e[0].bronstein)+"",n,f,d,u,c,l,g=B(e[0].totaltime)+"",w,S,C,N;return{c(){t=y("div"),i=y("input"),s=A(),r=y("div"),n=F(o),f=A(),d=y("div"),u=F(e[1]),c=A(),l=y("div"),w=F(g),m(i,"class","w3-input svelte-mb25ux"),m(r,"class","time svelte-mb25ux"),m(d,"class","moves svelte-mb25ux"),m(l,"class","total svelte-mb25ux"),m(t,"id","square"),m(t,"class",S=fe(e[0].running?"running":"")+" svelte-mb25ux")},m(a,b){q(a,t,b),h(t,i),j(i,e[0].name),h(t,s),h(t,r),h(r,n),h(t,f),h(t,d),h(d,u),h(t,c),h(t,l),h(l,w),C||(N=[I(i,"input",e[13]),I(t,"click",e[11]),I(t,"keydown",e[12])],C=!0)},p(a,[b]){b&1&&i.value!==a[0].name&&j(i,a[0].name),b&1&&o!==(o=B(a[0].seconds+a[0].bronstein)+"")&&Y(n,o),b&2&&Y(u,a[1]),b&1&&g!==(g=B(a[0].totaltime)+"")&&Y(w,g),b&1&&S!==(S=fe(a[0].running?"running":"")+" svelte-mb25ux")&&m(t,"class",S)},i:L,o:L,d(a){a&&M(t),C=!1,P(N)}}}function B(e){let t="";e<0&&(t+="-"),e=Math.abs(e);let i=Math.floor(e/(60*60)),s=Math.floor(e/60),r=Math.floor(e%60);return i>0&&(t+=i+":",s<10&&(t+="0")),s>0&&(t+=s+":",r<10&&(t+="0")),t+=r,t}function qe(e){return e>0?"("+B(e)+") ":""}function ze(e,t,i){let s,r,o,n,{id:f=0}=t,{config:d={basetime:5,fischer:5,bronstein:5}}=t;const u={seconds:d.basetime,running:!1,bronstein:d.bronstein,checkpoint:0,moves:0,totaltime:0,name:""};let c=$e("clockstate-"+f,u);be(e,c,v=>i(0,n=v)),setInterval(g,100);function l(){return n.running}function g(){if(n.running){let v=Date.now(),p=(v-n.checkpoint)/1e3;E(c,n.checkpoint=v,n),E(c,n.totaltime+=p,n),n.bronstein-p>0?E(c,n.bronstein-=p,n):(E(c,n.seconds-=p-n.bronstein,n),E(c,n.bronstein=0,n))}}function w(){N(),E(c,n.bronstein=o,n)}function S(){C(),E(c,n.seconds+=r,n),E(c,n.moves+=1,n)}function C(){g(),E(c,n.running=!1,n)}function N(){E(c,n.checkpoint=Date.now(),n),E(c,n.running=!0,n)}function a(){let v=n.seconds.toFixed(1);return v=B(n.seconds),n.bronstein>0&&(v="("+n.bronstein.toFixed(1)+")+"+v),v}let b;function J(){E(c,n.seconds=d.basetime,n),E(c,n.running=!1,n),E(c,n.bronstein=d.bronstein,n),E(c,n.moves=0,n),E(c,n.totaltime=0,n),a()}function H(v){ae.call(this,e,v)}function O(v){ae.call(this,e,v)}function _(){n.name=this.value,c.set(n)}return e.$$set=v=>{"id"in v&&i(3,f=v.id),"config"in v&&i(4,d=v.config)},e.$$.update=()=>{e.$$.dirty&16&&({basetime:s,fischer:r,bronstein:o}=d),e.$$.dirty&1&&qe(n.bronstein),e.$$.dirty&1&&i(1,b=B(n.totaltime/n.moves))},[n,b,c,f,d,l,w,S,C,N,J,H,O,_]}class Be extends ue{constructor(t){super(),oe(this,t,ze,Ie,X,{id:3,config:4,isrunning:5,start:6,stop:7,pause:8,unpause:9,reset:10})}get isrunning(){return this.$$.ctx[5]}get start(){return this.$$.ctx[6]}get stop(){return this.$$.ctx[7]}get pause(){return this.$$.ctx[8]}get unpause(){return this.$$.ctx[9]}get reset(){return this.$$.ctx[10]}}function pe(e,t,i){const s=e.slice();return s[14]=t[i],s[15]=t,s[16]=i,s}function he(e){let t,i,s,r=e[14],o,n;const f=()=>e[10](s,r),d=()=>e[10](null,r);function u(){return e[11](e[14])}let c={id:e[14],config:e[1]};return s=new Be({props:c}),f(),s.$on("click",u),{c(){t=y("div"),i=y("div"),we(s.$$.fragment),o=A(),m(i,"class","w3-sand w3-border w3-margin w3-round-large"),m(t,"class","watches svelte-t9u2ev")},m(l,g){q(l,t,g),h(t,i),se(s,i,null),h(t,o),n=!0},p(l,g){e=l,r!==e[14]&&(d(),r=e[14],f());const w={};g&2&&(w.config=e[1]),s.$set(w)},i(l){n||(V(s.$$.fragment,l),n=!0)},o(l){W(s.$$.fragment,l),n=!1},d(l){l&&M(t),d(),re(s)}}}function Fe(e){let t,i,s,r,o,n,f,d,u,c,l,g,w,S,C,N,a,b,J,H,O=e[2],_=[];for(let p=0;p<O.length;p+=1)_[p]=he(pe(e,O,p));const v=p=>W(_[p],1,1,()=>{_[p]=null});return{c(){t=y("link"),i=A(),s=y("div"),r=y("div"),o=y("div"),n=F("Basis "),f=y("input"),d=F(`
            bronstein `),u=y("input"),c=F(`
            fischer `),l=y("input"),g=A(),w=y("button"),w.textContent="||",S=A(),C=y("button"),C.textContent="0",N=A(),a=y("div");for(let p=0;p<_.length;p+=1)_[p].c();m(t,"rel","stylesheet"),m(t,"href","https://www.w3schools.com/w3css/4/w3.css"),m(f,"type","number"),m(f,"class","svelte-t9u2ev"),m(u,"type","number"),m(u,"class","svelte-t9u2ev"),m(l,"type","number"),m(l,"class","svelte-t9u2ev"),m(w,"class","w3-button"),m(C,"class","w3-button"),m(o,"class",""),m(r,"class",""),m(a,"class",""),m(s,"class","")},m(p,k){q(p,t,k),q(p,i,k),q(p,s,k),h(s,r),h(r,o),h(o,n),h(o,f),j(f,e[1].basetime),h(o,d),h(o,u),j(u,e[1].bronstein),h(o,c),h(o,l),j(l,e[1].fischer),h(o,g),h(o,w),h(o,S),h(o,C),h(s,N),h(s,a);for(let $=0;$<_.length;$+=1)_[$].m(a,null);b=!0,J||(H=[I(f,"input",e[7]),I(u,"input",e[8]),I(l,"input",e[9]),I(w,"click",e[5]),I(C,"click",e[6])],J=!0)},p(p,[k]){if(k&2&&T(f.value)!==p[1].basetime&&j(f,p[1].basetime),k&2&&T(u.value)!==p[1].bronstein&&j(u,p[1].bronstein),k&2&&T(l.value)!==p[1].fischer&&j(l,p[1].fischer),k&23){O=p[2];let $;for($=0;$<O.length;$+=1){const le=pe(p,O,$);_[$]?(_[$].p(le,k),V(_[$],1)):(_[$]=he(le),_[$].c(),V(_[$],1),_[$].m(a,null))}for(Oe(),$=O.length;$<_.length;$+=1)v($);Ae()}},i(p){if(!b){for(let k=0;k<O.length;k+=1)V(_[k]);b=!0}},o(p){_=_.filter(Boolean);for(let k=0;k<_.length;k+=1)W(_[k]);b=!1},d(p){p&&M(t),p&&M(i),p&&M(s),Ee(_,p),J=!1,P(H)}}}function Pe(e,t,i){let s,r=[0,1,4,2,3],o=[],n,d=$e("config",{bronstein:0,fischer:0,basetime:10});be(e,d,a=>i(1,s=a));function u(a){if(o.every(b=>b.isrunning()==!1))o[a].start(),n=void 0;else if(o[a].isrunning()){o[a].stop();let b=(a+1)%r.length;o[b].start()}}function c(){if(n===void 0)for(let a in r)o[a].isrunning()&&(n=a),o[a].pause();else o[n].unpause(),n=void 0}function l(){for(let a in r)o[a].reset();n=void 0}function g(){s.basetime=T(this.value),d.set(s)}function w(){s.bronstein=T(this.value),d.set(s)}function S(){s.fischer=T(this.value),d.set(s)}function C(a,b){ee[a?"unshift":"push"](()=>{o[b]=a,i(0,o)})}return[o,s,r,d,u,c,l,g,w,S,C,a=>u(a)]}class De extends ue{constructor(t){super(),oe(this,t,Pe,Fe,X,{})}}function Te(e){let t,i,s,r,o;return r=new De({}),{c(){t=y("meta"),i=A(),s=y("main"),we(r.$$.fragment),m(t,"name","viewport"),m(t,"content","width=device-width, initial-scale=1")},m(n,f){q(n,t,f),q(n,i,f),q(n,s,f),se(r,s,null),o=!0},p:L,i(n){o||(V(r.$$.fragment,n),o=!0)},o(n){W(r.$$.fragment,n),o=!1},d(n){n&&M(t),n&&M(i),n&&M(s),re(r)}}}class Ve extends ue{constructor(t){super(),oe(this,t,null,Te,X,{})}}new Ve({target:document.getElementById("app")});
