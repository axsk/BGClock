(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const V of l.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&s(V)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();function U(){}function Me(e){return e()}function me(){return Object.create(null)}function T(e){e.forEach(Me)}function fe(e){return typeof e=="function"}function Ve(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ee;function ge(e,t){return ee||(ee=document.createElement("a")),ee.href=t,e===ee.href}function Oe(e){return Object.keys(e).length===0}function Le(e,...t){if(e==null)return U;const i=e.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}function We(e){let t;return Le(e,i=>t=i)(),t}function Re(e,t,i){e.$$.on_destroy.push(Le(t,i))}function _e(e){return e==null?"":e}function P(e,t,i){return e.set(i),t}function Be(e){return e&&fe(e.destroy)?e.destroy:U}function a(e,t){e.appendChild(t)}function M(e,t,i){e.insertBefore(t,i||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Qe(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function b(e){return document.createElement(e)}function Ye(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function K(e){return document.createTextNode(e)}function O(){return K(" ")}function j(e,t,i,s){return e.addEventListener(t,i,s),()=>e.removeEventListener(t,i,s)}function p(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function J(e){return e===""?null:+e}function je(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function N(e,t){e.value=t==null?"":t}function S(e,t,i,s){i===null?e.style.removeProperty(t):e.style.setProperty(t,i,s?"important":"")}class Ke{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,i,s=null){this.e||(this.is_svg?this.e=Ye(i.nodeName):this.e=b(i.nodeName),this.t=i,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let i=0;i<this.n.length;i+=1)M(this.t,this.n[i],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(E)}}let Ae;function $(e){Ae=e}function be(e,t){const i=e.$$.callbacks[t.type];i&&i.slice().forEach(s=>s.call(this,t))}const F=[],x=[],ne=[],ye=[],Ne=Promise.resolve();let ue=!1;function Ue(){ue||(ue=!0,Ne.then(qe))}function ce(e){ne.push(e)}const le=new Set;let te=0;function qe(){const e=Ae;do{for(;te<F.length;){const t=F[te];te++,$(t),He(t.$$)}for($(null),F.length=0,te=0;x.length;)x.pop()();for(let t=0;t<ne.length;t+=1){const i=ne[t];le.has(i)||(le.add(i),i())}ne.length=0}while(F.length);for(;ye.length;)ye.pop()();ue=!1,le.clear(),$(e)}function He(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ce)}}const ie=new Set;let G;function Je(){G={r:0,c:[],p:G}}function Te(){G.r||T(G.c),G=G.p}function X(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function se(e,t,i,s){if(e&&e.o){if(ie.has(e))return;ie.add(e),G.c.push(()=>{ie.delete(e),s&&(i&&e.d(1),s())}),e.o(t)}else s&&s()}function Ce(e){e&&e.c()}function ae(e,t,i,s){const{fragment:n,after_update:l}=e.$$;n&&n.m(t,i),s||ce(()=>{const V=e.$$.on_mount.map(Me).filter(fe);e.$$.on_destroy?e.$$.on_destroy.push(...V):T(V),e.$$.on_mount=[]}),l.forEach(ce)}function de(e,t){const i=e.$$;i.fragment!==null&&(T(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,i,s,n,l,V,o=[-1]){const g=Ae;$(e);const r=e.$$={fragment:null,ctx:[],props:l,update:U,not_equal:n,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:me(),dirty:o,skip_bound:!1,root:t.target||g.$$.root};V&&V(r.root);let u=!1;if(r.ctx=i?i(e,t.props||{},(c,_,...y)=>{const w=y.length?y[0]:_;return r.ctx&&n(r.ctx[c],r.ctx[c]=w)&&(!r.skip_bound&&r.bound[c]&&r.bound[c](w),u&&Ge(e,c)),_}):[],r.update(),u=!0,T(r.before_update),r.fragment=s?s(r.ctx):!1,t.target){if(t.hydrate){const c=je(t.target);r.fragment&&r.fragment.l(c),c.forEach(E)}else r.fragment&&r.fragment.c();t.intro&&X(e.$$.fragment),ae(e,t.target,t.anchor,t.customElement),qe()}$(g)}class he{$destroy(){de(this,1),this.$destroy=U}$on(t,i){if(!fe(i))return U;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(i),()=>{const n=s.indexOf(i);n!==-1&&s.splice(n,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ze="modulepreload",ze=function(e){return"/BGClock/"+e},ve={},Xe=function(t,i,s){if(!i||i.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(i.map(l=>{if(l=ze(l),l in ve)return;ve[l]=!0;const V=l.endsWith(".css"),o=V?'[rel="stylesheet"]':"";if(!!s)for(let u=n.length-1;u>=0;u--){const c=n[u];if(c.href===l&&(!V||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const r=document.createElement("link");if(r.rel=V?"stylesheet":Ze,V||(r.as="script",r.crossOrigin=""),r.href=l,document.head.appendChild(r),V)return new Promise((u,c)=>{r.addEventListener("load",u),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function Pe(e,t){let i=()=>{},s=()=>{},n=()=>{};async function l(V){const{Howl:o}=await Xe(()=>import("./howler.core.4ed3ff3e.0c7f6f04.js"),[]).then(y=>y.h),{src:g,events:r,loop:u,volume:c}=V,_=new o({src:g,loop:u||!1,volume:c||1,...V});i=()=>_.play(),s=()=>_.stop(),n=()=>_.unload(),e.addEventListener(r[0],i),e.addEventListener(r[1],s)}return l(t),{play:i,stop:s,update(V){n(),l(V)},destroy(){s(),n()}}}function Fe(e,t,i){return(s,n)=>Pe(s,{src:e,events:t,...i,...n})}const $e="/BGClock/assets/pause.c03a1376.mp3",z=[];function xe(e,t=U){let i;const s=new Set;function n(o){if(Ve(e,o)&&(e=o,i)){const g=!z.length;for(const r of s)r[1](),z.push(r,e);if(g){for(let r=0;r<z.length;r+=2)z[r][0](z[r+1]);z.length=0}}}function l(o){n(o(e))}function V(o,g=U){const r=[o,g];return s.add(r),s.size===1&&(i=t(n)||U),o(e),()=>{s.delete(r),s.size===0&&(i(),i=null)}}return{set:n,update:l,subscribe:V}}var re={};function De(e,t,i){const s=typeof localStorage<"u"&&typeof window<"u",n=(i==null?void 0:i.serializer)||JSON;function l(V,o){!s||localStorage.setItem(V,n.stringify(o))}if(!re[e]){const V=xe(t,r=>{const u=s?localStorage.getItem(e):null;if(u&&r(n.parse(u)),s){const c=_=>{_.key===e&&r(_.newValue?n.parse(_.newValue):null)};return window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)}}),{subscribe:o,set:g}=V;re[e]={set(r){l(e,r),g(r)},update(r){const u=r(We(V));l(e,u),g(u)},subscribe:o}}return re[e]}const et="data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAIAAANWQBHR0dHR0dHR0dHR0d8fHx8fHx8fHx8fHyXl5eXl5eXl5eXl5eXsrKysrKysrKysrKyyMjIyMjIyMjIyMjIyN7e3t7e3t7e3t7e3vT09PT09PT09PT09PT///////////////8AAABQTEFNRTMuMTAwBLkAAAAAAAAAABUgJARgQQAB4AAADVkFMGywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vQxAAABogBR7QAACPysqu/NYAJTbzaEcrRJMwYWD4fDxQ4tQPwQiQ5KHJd8SO+XD5d/B/lHf/h/J8EHBj//4P8plHEInP/B+9eZokYYRaV8r3oFulJ12w7zw4CY6D4crARCZQSqAyDKkBKIIMGkSgwEECDHvAIRM6nArQteoOShMxac0UDHq8hs42Z8gOOpIH6wdekBuOS/EIgUYEHShYDFEVpM+7L1cNYWCXVPMyMal8vJaaSXopI8uxpjE2vs6lLWWc67TYx2M8quvIX/ftiDkSx3Y81qRu1FoacytGqFYWmq5Uljsoljvv/F/1KpTS0tK7MZ5+WONLhQV1cSz8MPww+pSS51mtR2lpcq1NZ6+2HOZVscq2tRRx5fblblv25D+Sy/SWJfbrRt+YBjVM5Uq3Pbq3rl2C7cxT5xm9Vwpt3cBSpPac1EVIDCZOyRiV2lsEg1rswAJz7ZvDjeefIAhAhlopmiw0CgSYaQCUph9OGIg+FwyPHAzKHiJHGYSQ7hnuAlI5xDAHBzoQmyziKgRSnW/IXSDOlIBUaDwoWreHBvwMBkQKgIGHlaS0rjtMASm5Q/ON3KxC8yfUAp0lAyeqdA0ql8PIvMgsouwdEqSwAvAv6iI6z80cPoC1gmcs+Sifhv0wYAjKvkF2jsRRuUyhhULiNPYfHn1YIvFYUsuqoriPSWNLYZSKAsSb9I6ml78N0V81WLZuhJWa3/t35JXw7DEfkj9ZRrkq7Z7yfidWzKK+G+36Cb/9Wey3t7XM/7c/LKtv8MseY7/mNPb5nTU1JKqtrut548x/uW//XP///////////8v///9fr+///////////la3B7FcMNI1UQhMTWiRSrDjTTJhITA4E1A4kKMAFTBzs22SMlIjDh0z0XM7CzrIw1cmAoCZiOKoEQuZIgGsFSXIoBEQnAoaLmWGCJi42gmICagocahg4YmHiwEVgDT2WtoAgIt+11C8w4GEYMGAocHvxGIbR8pGJu88TLL5iAkAhySzjkO87DcIAzexk6xXgXutdiK9IGZQ9kGMQimoFxgKU24ZfuNRpu8CT0mLYIaQIkI5lu3fqy/ODIOfmpcjGDzwBDk1zK9BSmv/7sMT+gCciDzn5zIBM6kPpfzeyQSl6lal7NIbn4dgegpa2Nui3n9Wf7umjDv5Uk0/juWYfbSZh+9vjsMM5//+H//8//+KR5xMLGGt5asV+/tSwKAgKEG0chyLDEIS19o6g7z5P5/f/////////////////8///5//////////////hclnLG7fO4W5K38pgAkNannnlgHEUHmAeZTJhDoTAagZpSEpCS6IoudAadLLV0uTDILhcBEAUGoqqirSoqHIrRQsvDMzNIPABhYQn/86yRWajn/72/+GZhzcB0DYOhYWNiBYWFmb/9mu1VVJFRUVVmFhYWO5hahmtjmVV4vtv///+GYWFlX//Vfhm1YWZr/VihYWFhZuWZmZihYWBWqWgAEURtNoucZIghWJBoaDDghEPZXOoI3U1Lz8VeCGHPp3YfLPOhEs21waOLMU01KZRHNmml4M8irlf8//hSPau9jVpCdQgWsxJhaNwXJHBSzPk37jv/tP/c+CsjDN2pNUso5GS0L0o+fltP3W/+9s/n+4mUscoCdAchBY0AyzflJPdzWezv1aupLWklqWkR4OmLopKyGATRWsljU3KE3i5ZZEqgQcReCCpOOTQJ1pgMdhLDG2lwajgiBonQtk7TcF3lo9qC2oaWZhrLawb5qOf/D5aG8DqLDpxwpTjKa2UYXNQNqToaRrd/w1zaWLZA+7H6TD1QOpjIih+PrSJp+4q+v+4e38bGMuRRBYqu4HpO1fWvNTMLezlY4812BTq7UQNVbOSRXYobHgEdA4hKjoshMFe5IR62OrkeSRMRkEMhEhVEYnWWXF2SAmH2keLl0e2//twxPMAEmmfX/2UAApSMWj9lJo16fzY4PiRklJWf//VZnpLKpyah1KLUops50w6UewjxK8amUrf8f0tpD2lyywSPHiI5yyjsMZ1hCLSepse7fUPj4HLCQwOHVRxR0oEzEOm1RLscuuUTSq5cQJDSxRNSwnLVPJEihHlBOykrA1cRGYElQsR87C/49EgpBM1aOBrByJ6dFjCkywMLF0SeYKLWBngz5n/jy5R9pF9anW3pfivrr4fVo5NXkaXp0xOR/6zLKnomJ73nqAyOLIujbZdy7QRz+secZ7nPd5SEXmooAJPHRY7UafVqZv6jeVIQEiWIpMtAXNUGIjS9KhB4vIo/QlQDhkJS3iP8VaDJp8kFY6NxQFJgIpcKJCdhpyXUcpSsJm10nkE8/+fPacWryKDZFUc2k4s7//7cMTxABE5g0nsJQ9iI6oovYSh/Iq2Si5LjSIygf4F7Tuvu1/dSzI1W3GrZhUiUkRvkdVKlGcLtlVX9/pjOzxxHBK+VY39kDdpj7e+bA8rYSPKAXgAIqGeEcKqmDJV0OqmCYVFDzzuxuAbMueZSuikxljCQNGnLsrxmKpyyw5AQPMWf45iUs1mhrHHEk8dj+LZy7EURzGPJGFcwTVf9+qvHfNjY0ZRYUOhhLKsPgq/PuBX/denZX0wG8mW6yCBHV/bZHaAn9YxpooOovQyWzbs2NKN9gglKOIStqj/0sYdmLP8ROVkbROaoUwot1bjLYMyV0nCLRdp9f7kYSsgZlQIKcBqVxKdO5qJLZ4dMqudsLyXYlpawEx5CiBAZjzNcyJx1ag4/QPRlJeBaG/AxCo7uXQEV3/u2ur/+2DE+YAQaVM/7DDOIe0f5v2cJDUDnQ+YAAI4iOMlfgeMylAi7CP66pDPMxl1twaW7aXPLROsNZNObFQNO8USCKU3hlIZfLfvfHs3NXVthIwiBEJdI583dNJG35RPfEx0M0trfGzYcDH40+Ta+aPRDTSxupMJMX5q6Pj37FUSCQLvGUq8cQV3bWSVuMDLERA7IShGEwsOAQwSaqmkq6S0mctBtOvxvn2mH4jUjiMdpcBKUd2IvcKQQNop8IAxIcjtP8k/zrEVGHJRRBAhb5voMOUDD2CRISp0on7peF4MrWEQKlR5JlLgWNLGmiBYXBsi5YFBhEC0O2oi9XJ1JXlSVUIQk27/+2DE8gAOyQtF7BkSqdCiJ72UjiVAEJqGpd0BBATUfU6UvZCjKialaxAuEms8LOVMQ0KhU1aqFCrNqqqqs30KJVWAm+r/9VVVWY/Uvq/VVV/qqpfqqqpf6qAiQXI6KCsP6CgoUc7/igopTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+2DE9IAO4PM/7CTRKeWd5z2TDlxVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE9APLmNUp7CRuSAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",tt="/BGClock/assets/warn.81f83b2c.mp3",nt="/BGClock/assets/over.3d23b39a.mp3";function it(e){let t,i,s;return{c(){t=b("input"),p(t,"class","w3-input svelte-1r002gk"),S(t,"color","black"),S(t,"pointer-events","none")},m(n,l){M(n,t,l),N(t,e[1].name),i||(s=j(t,"input",e[22]),i=!0)},p(n,l){l&2&&t.value!==n[1].name&&N(t,n[1].name)},d(n){n&&E(t),i=!1,s()}}}function st(e){let t,i,s;return{c(){t=b("input"),p(t,"class","w3-input svelte-1r002gk"),S(t,"color","black")},m(n,l){M(n,t,l),N(t,e[1].name),i||(s=j(t,"input",e[21]),i=!0)},p(n,l){l&2&&t.value!==n[1].name&&N(t,n[1].name)},d(n){n&&E(t),i=!1,s()}}}function we(e){let t=Z(e[1].bronstein)+"",i;return{c(){i=K(t)},m(s,n){M(s,i,n)},p(s,n){n&2&&t!==(t=Z(s[1].bronstein)+"")&&oe(i,t)},d(s){s&&E(i)}}}function ke(e){let t,i,s;return{c(){t=K("("),i=new Ke(!1),s=K(")"),i.a=s},m(n,l){M(n,t,l),i.m(e[4],n,l),M(n,s,l)},p(n,l){l&16&&i.p(n[4])},d(n){n&&E(t),n&&i.d(),n&&E(s)}}}function Vt(e){let t,i,s,n,l,V,o,g,r,u,c=Z(e[1].seconds)+"",_,y,w,B,R,q=e[1].moves+"",h,C,W,I,D=Z(e[1].totaltime)+"",v,H,A;function f(k,Y){return k[0]?st:it}let d=f(e),m=d(e),L=e[1].bronstein>0&&we(e),Q=e[1].moves>0&&ke(e);return{c(){t=b("audio"),s=O(),n=b("audio"),V=O(),o=b("div"),m.c(),g=O(),r=b("div"),u=b("div"),_=K(c),y=O(),w=b("div"),L&&L.c(),B=O(),R=b("div"),h=K(q),C=O(),Q&&Q.c(),W=O(),I=b("div"),ge(t.src,i=tt)||p(t,"src",i),p(t,"preload","auto"),ge(n.src,l=nt)||p(n,"src",l),p(n,"preload","auto"),S(w,"color","gray"),p(u,"class",""),S(u,"position","absolute"),S(u,"left","50%"),S(u,"transform","translate(-50%)"),S(u,"text-align","right"),p(r,"class","time svelte-1r002gk"),p(R,"class","w3-display-bottomleft w3-padding"),p(I,"class","w3-display-bottomright w3-padding"),p(o,"id","square"),p(o,"class",v=_e(e[1].running?"running":"")+" svelte-1r002gk")},m(k,Y){M(k,t,Y),e[19](t),M(k,s,Y),M(k,n,Y),e[20](n),M(k,V,Y),M(k,o,Y),m.m(o,null),a(o,g),a(o,r),a(r,u),a(u,_),a(u,y),a(u,w),L&&L.m(w,null),a(o,B),a(o,R),a(R,h),a(R,C),Q&&Q.m(R,null),a(o,W),a(o,I),I.innerHTML=D,H||(A=[j(o,"click",e[17]),j(o,"keydown",e[18]),Be(e[5].call(null,o))],H=!0)},p(k,[Y]){d===(d=f(k))&&m?m.p(k,Y):(m.d(1),m=d(k),m&&(m.c(),m.m(o,g))),Y&2&&c!==(c=Z(k[1].seconds)+"")&&oe(_,c),k[1].bronstein>0?L?L.p(k,Y):(L=we(k),L.c(),L.m(w,null)):L&&(L.d(1),L=null),Y&2&&q!==(q=k[1].moves+"")&&oe(h,q),k[1].moves>0?Q?Q.p(k,Y):(Q=ke(k),Q.c(),Q.m(R,null)):Q&&(Q.d(1),Q=null),Y&2&&D!==(D=Z(k[1].totaltime)+"")&&(I.innerHTML=D),Y&2&&v!==(v=_e(k[1].running?"running":"")+" svelte-1r002gk")&&p(o,"class",v)},i:U,o:U,d(k){k&&E(t),e[19](null),k&&E(s),k&&E(n),e[20](null),k&&E(V),k&&E(o),m.d(),L&&L.d(),Q&&Q.d(),H=!1,T(A)}}}function Z(e){let t="";e<0&&(t+="-"),e=Math.abs(e);let i=Math.floor(e/(60*60)),s=Math.floor(e/60%60),n=Math.floor(e%60);return i>0&&(t+=i+":",s<10&&(t+="0")),s>0&&(t+=s+":",n<10&&(t+="0")),t+=n,t}function lt(e,t,i){let s,n;const l=Fe(et,["click"]);let{id:V=0}=t,{config:o={basetime:5,fischer:5,bronstein:5}}=t,{editable:g=!1}=t;const r={seconds:o.basetime,running:!1,bronstein:o.bronstein,checkpoint:0,moves:0,totaltime:0,name:"Player"};let u=De("clockstate-"+V,r);Re(e,u,m=>i(1,n=m)),setInterval(w,100);function c(){return n.running}function _(){return n}function y(m){P(u,n=m,n)}function w(){if(n.running){let m=Date.now(),L=(m-n.checkpoint)/1e3;P(u,n.checkpoint=m,n),P(u,n.totaltime+=L,n),n.bronstein-L>0?P(u,n.bronstein-=L,n):(n.seconds>0&&n.seconds-L-n.bronstein<0&&I.play(),P(u,n.seconds-=L-n.bronstein,n),n.bronstein>0&&W.play(),P(u,n.bronstein=0,n))}}function B(){h(),P(u,n.bronstein=o.bronstein,n)}function R(){q(),P(u,n.seconds+=o.fischer,n),P(u,n.moves+=1,n)}function q(){w(),P(u,n.running=!1,n)}function h(){P(u,n.checkpoint=Date.now(),n),P(u,n.running=!0,n)}function C(){P(u,n.seconds=o.basetime,n),P(u,n.running=!1,n),P(u,n.bronstein=o.bronstein,n),P(u,n.moves=0,n),P(u,n.totaltime=0,n)}let W,I;function D(m){be.call(this,e,m)}function v(m){be.call(this,e,m)}function H(m){x[m?"unshift":"push"](()=>{W=m,i(2,W)})}function A(m){x[m?"unshift":"push"](()=>{I=m,i(3,I)})}function f(){n.name=this.value,u.set(n)}function d(){n.name=this.value,u.set(n)}return e.$$set=m=>{"id"in m&&i(7,V=m.id),"config"in m&&i(8,o=m.config),"editable"in m&&i(0,g=m.editable)},e.$$.update=()=>{e.$$.dirty&2&&i(4,s=Z(n.totaltime/n.moves))},[g,n,W,I,s,l,u,V,o,c,_,y,B,R,q,h,C,D,v,H,A,f,d]}class rt extends he{constructor(t){super(),pe(this,t,lt,Vt,Ve,{id:7,config:8,editable:0,isrunning:9,getstate:10,setstate:11,start:12,stop:13,pause:14,unpause:15,reset:16})}get isrunning(){return this.$$.ctx[9]}get getstate(){return this.$$.ctx[10]}get setstate(){return this.$$.ctx[11]}get start(){return this.$$.ctx[12]}get stop(){return this.$$.ctx[13]}get pause(){return this.$$.ctx[14]}get unpause(){return this.$$.ctx[15]}get reset(){return this.$$.ctx[16]}}function Se(e,t,i){const s=e.slice();return s[23]=t[i],s[24]=t,s[25]=i,s}function Ee(e){let t,i,s,n,l,V,o,g,r,u,c,_,y,w,B,R,q;return{c(){t=b("div"),i=K("Players "),s=b("input"),n=K(`
            Basis `),l=b("input"),V=K(`
            Bronstein `),o=b("input"),g=K(`
            Fischer `),r=b("input"),u=O(),c=b("label"),c.textContent="Clockwise",_=b("br"),y=b("input"),w=O(),B=b("button"),B.textContent="RESET",p(s,"type","number"),p(s,"class","svelte-14sxoso"),p(l,"type","number"),p(l,"class","svelte-14sxoso"),p(o,"type","number"),p(o,"class","svelte-14sxoso"),p(r,"type","number"),p(r,"class","svelte-14sxoso"),p(c,"for","order"),p(y,"id","order"),p(y,"type","checkbox"),p(y,"class","svelte-14sxoso"),p(B,"class","w3-button w3-padding-small w3-light-grey w3-medium"),S(t,"display","flex"),S(t,"flex-direction","column"),S(t,"width","20%"),S(t,"margin","auto"),S(t,"padding","20px")},m(h,C){M(h,t,C),a(t,i),a(t,s),N(s,e[0].players),a(t,n),a(t,l),N(l,e[0].basetime),a(t,V),a(t,o),N(o,e[0].bronstein),a(t,g),a(t,r),N(r,e[0].fischer),a(t,u),a(t,c),a(t,_),a(t,y),y.checked=e[0].ordered,a(t,w),a(t,B),R||(q=[j(s,"input",e[11]),j(l,"input",e[12]),j(o,"input",e[13]),j(r,"input",e[14]),j(y,"change",e[15]),j(B,"click",e[9])],R=!0)},p(h,C){C&1&&J(s.value)!==h[0].players&&N(s,h[0].players),C&1&&J(l.value)!==h[0].basetime&&N(l,h[0].basetime),C&1&&J(o.value)!==h[0].bronstein&&N(o,h[0].bronstein),C&1&&J(r.value)!==h[0].fischer&&N(r,h[0].fischer),C&1&&(y.checked=h[0].ordered)},d(h){h&&E(t),R=!1,T(q)}}}function ot(e){let t;return{c(){t=K("\u23F8\uFE0E")},m(i,s){M(i,t,s)},d(i){i&&E(t)}}}function ut(e){let t;return{c(){t=K("\u23F5\uFE0E")},m(i,s){M(i,t,s)},d(i){i&&E(t)}}}function Ie(e){let t,i,s,n=e[23],l,V;const o=()=>e[16](s,n),g=()=>e[16](null,n);function r(){return e[17](e[23])}let u={id:e[23],config:e[0],editable:e[2]};return s=new rt({props:u}),o(),s.$on("click",r),{c(){t=b("div"),i=b("div"),Ce(s.$$.fragment),l=O(),p(i,"class","w3-sand w3-border w3-padding w3-margin w3-round-large"),p(t,"class","watch svelte-14sxoso")},m(c,_){M(c,t,_),a(t,i),ae(s,i,null),a(t,l),V=!0},p(c,_){e=c,n!==e[23]&&(g(),n=e[23],o());const y={};_&16&&(y.id=e[23]),_&1&&(y.config=e[0]),_&4&&(y.editable=e[2]),s.$set(y)},i(c){V||(X(s.$$.fragment,c),V=!0)},o(c){se(s.$$.fragment,c),V=!1},d(c){c&&E(t),g(),de(s)}}}function ct(e){let t,i,s,n,l,V,o,g,r,u,c,_,y,w,B,R,q,h=e[2]&&Ee(e);function C(A,f){return A[1]?ut:ot}let W=C(e),I=W(e),D=e[4],v=[];for(let A=0;A<D.length;A+=1)v[A]=Ie(Se(e,D,A));const H=A=>se(v[A],1,1,()=>{v[A]=null});return{c(){t=b("link"),i=O(),s=b("div"),n=b("div"),l=K("Settings "),V=b("input"),o=b("br"),g=O(),h&&h.c(),r=O(),u=b("button"),u.textContent="\u23EA\uFE0E",c=O(),_=b("button"),I.c(),y=O(),w=b("div");for(let A=0;A<v.length;A+=1)v[A].c();p(t,"rel","stylesheet"),p(t,"href","https://www.w3schools.com/w3css/4/w3.css"),p(V,"type","checkbox"),p(V,"class","svelte-14sxoso"),p(u,"class","w3-button w3-padding-large w3-light-grey w3-xxlarge"),p(_,"class","w3-button w3-padding-large w3-light-grey w3-xxlarge"),p(_,"style",""),p(n,"class",""),S(w,"position","absolute"),S(w,"width","100%"),S(w,"left","0"),S(w,"display","flex"),S(w,"flex-flow","row wrap"),S(w,"justify-content","center"),S(s,"position","absolute"),S(s,"width","100%"),S(s,"height","100%"),S(s,"left","0"),S(s,"top","0")},m(A,f){M(A,t,f),M(A,i,f),M(A,s,f),a(s,n),a(n,l),a(n,V),V.checked=e[2],a(n,o),a(n,g),h&&h.m(n,null),a(n,r),a(n,u),a(n,c),a(n,_),I.m(_,null),a(s,y),a(s,w);for(let d=0;d<v.length;d+=1)v[d].m(w,null);B=!0,R||(q=[j(V,"change",e[10]),j(u,"click",e[6]),j(_,"click",e[8]),Be(Pe.call(null,_,{src:$e,events:["click"]}))],R=!0)},p(A,[f]){if(f&4&&(V.checked=A[2]),A[2]?h?h.p(A,f):(h=Ee(A),h.c(),h.m(n,r)):h&&(h.d(1),h=null),W!==(W=C(A))&&(I.d(1),I=W(A),I&&(I.c(),I.m(_,null))),f&157){D=A[4];let d;for(d=0;d<D.length;d+=1){const m=Se(A,D,d);v[d]?(v[d].p(m,f),X(v[d],1)):(v[d]=Ie(m),v[d].c(),X(v[d],1),v[d].m(w,null))}for(Je(),d=D.length;d<v.length;d+=1)H(d);Te()}},i(A){if(!B){for(let f=0;f<D.length;f+=1)X(v[f]);B=!0}},o(A){v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)se(v[f]);B=!1},d(A){A&&E(t),A&&E(i),A&&E(s),h&&h.d(),I.d(),Qe(v,A),R=!1,T(q)}}}function ft(e,t,i){let s,n,l=!1,V=[],o=[],g=[0,1,4,2,3];const r=[[0],[1,0],[1,2,0],[1,3,0,2],[1,3,0,4,2],[1,3,0,5,2,4],[1,3,0,5,2,6,4],[1,3,0,5,2,7,4,6]];let c=De("config",{players:4,bronstein:5,fischer:5,basetime:10,ordered:!0});Re(e,c,f=>i(0,s=f));function _(){if(o.length==0)return;let f=o.pop();for(let d in f)V[d].setstate(f[d])}function y(){return V.slice(0,s.players)}function w(f){if(!l)if(q(),y().every(d=>d.isrunning()==!1))V[f].start(),i(1,n=void 0);else if(s.ordered&&V[f].isrunning()){V[f].stop();let d=r[s.players-1][f];V[d].start()}else if(!s.ordered&&!V[f].isrunning()){for(let d in g)V[d].isrunning()&&V[d].stop();V[f].start()}else!s.ordered&&V[f].isrunning()&&V[f].stop()}function B(){if(q(),n===void 0)for(let f in g)V[f].isrunning()&&i(1,n=f),V[f].pause();else y().every(f=>!f.isrunning())&&V[n].unpause(),i(1,n=void 0)}function R(){q();for(let f in g)V[f].reset();i(1,n=void 0)}function q(){o.push(structuredClone(y().map(f=>f.getstate())))}function h(){l=this.checked,i(2,l)}function C(){s.players=J(this.value),c.set(s)}function W(){s.basetime=J(this.value),c.set(s)}function I(){s.bronstein=J(this.value),c.set(s)}function D(){s.fischer=J(this.value),c.set(s)}function v(){s.ordered=this.checked,c.set(s)}function H(f,d){x[f?"unshift":"push"](()=>{V[d]=f,i(3,V)})}const A=f=>w(f);return e.$$.update=()=>{e.$$.dirty&1&&i(4,g=[...Array(s.players).keys()])},[s,n,l,V,g,c,_,w,B,R,h,C,W,I,D,v,H,A]}class At extends he{constructor(t){super(),pe(this,t,ft,ct,Ve,{})}}function at(e){let t,i,s,n,l;return n=new At({}),{c(){t=b("meta"),i=O(),s=b("main"),Ce(n.$$.fragment),p(t,"name","viewport"),p(t,"content","width=device-width, initial-scale=1")},m(V,o){M(V,t,o),M(V,i,o),M(V,s,o),ae(n,s,null),l=!0},p:U,i(V){l||(X(n.$$.fragment,V),l=!0)},o(V){se(n.$$.fragment,V),l=!1},d(V){V&&E(t),V&&E(i),V&&E(s),de(n)}}}class dt extends he{constructor(t){super(),pe(this,t,null,at,Ve,{})}}new dt({target:document.getElementById("app")});
