import{j as d,p as ce,l as le,d as he,m as ot,e as et,i as ue,f as st,g as de,h as fe}from"./Tracker.D8RLd5HO.js";import{r as S,c as ct}from"./index.L6MpOGeh.js";/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bt=(...t)=>t.filter((e,s,r)=>!!e&&r.indexOf(e)===s).join(" ");/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ge={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:i,...u},m)=>S.createElement("svg",{ref:m,...ge,width:e,height:e,stroke:t,strokeWidth:r?Number(s)*24/Number(e):s,className:bt("lucide",a),...u},[...i.map(([f,y])=>S.createElement(f,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(t,e)=>{const s=S.forwardRef(({className:r,...a},o)=>S.createElement(me,{ref:o,iconNode:e,className:bt(`lucide-${pe(t)}`,r),...a}));return s.displayName=`${t}`,s};/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=Y("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=Y("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var B={},p={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.output=k.exists=k.hash=k.bytes=k.bool=k.number=k.isBytes=void 0;function W(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}k.number=W;function vt(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}k.bool=vt;function St(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}k.isBytes=St;function at(t,...e){if(!St(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}k.bytes=at;function kt(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");W(t.outputLen),W(t.blockLen)}k.hash=kt;function xt(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}k.exists=xt;function Ct(t,e){at(t);const s=e.outputLen;if(t.length<s)throw new Error(`digestInto() expects output buffer of length at least ${s}`)}k.output=Ct;const ve={number:W,bool:vt,bytes:at,hash:kt,exists:xt,output:Ct};k.default=ve;var l={};Object.defineProperty(l,"__esModule",{value:!0});l.add5L=l.add5H=l.add4H=l.add4L=l.add3H=l.add3L=l.add=l.rotlBL=l.rotlBH=l.rotlSL=l.rotlSH=l.rotr32L=l.rotr32H=l.rotrBL=l.rotrBH=l.rotrSL=l.rotrSH=l.shrSL=l.shrSH=l.toBig=l.split=l.fromBig=void 0;const Q=BigInt(2**32-1),nt=BigInt(32);function it(t,e=!1){return e?{h:Number(t&Q),l:Number(t>>nt&Q)}:{h:Number(t>>nt&Q)|0,l:Number(t&Q)|0}}l.fromBig=it;function Lt(t,e=!1){let s=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let a=0;a<t.length;a++){const{h:o,l:i}=it(t[a],e);[s[a],r[a]]=[o,i]}return[s,r]}l.split=Lt;const _t=(t,e)=>BigInt(t>>>0)<<nt|BigInt(e>>>0);l.toBig=_t;const It=(t,e,s)=>t>>>s;l.shrSH=It;const jt=(t,e,s)=>t<<32-s|e>>>s;l.shrSL=jt;const Bt=(t,e,s)=>t>>>s|e<<32-s;l.rotrSH=Bt;const At=(t,e,s)=>t<<32-s|e>>>s;l.rotrSL=At;const Tt=(t,e,s)=>t<<64-s|e>>>s-32;l.rotrBH=Tt;const Ot=(t,e,s)=>t>>>s-32|e<<64-s;l.rotrBL=Ot;const Et=(t,e)=>e;l.rotr32H=Et;const Ht=(t,e)=>t;l.rotr32L=Ht;const Pt=(t,e,s)=>t<<s|e>>>32-s;l.rotlSH=Pt;const $t=(t,e,s)=>e<<s|t>>>32-s;l.rotlSL=$t;const Dt=(t,e,s)=>e<<s-32|t>>>64-s;l.rotlBH=Dt;const Mt=(t,e,s)=>t<<s-32|e>>>64-s;l.rotlBL=Mt;function Nt(t,e,s,r){const a=(e>>>0)+(r>>>0);return{h:t+s+(a/2**32|0)|0,l:a|0}}l.add=Nt;const Ut=(t,e,s)=>(t>>>0)+(e>>>0)+(s>>>0);l.add3L=Ut;const Rt=(t,e,s,r)=>e+s+r+(t/2**32|0)|0;l.add3H=Rt;const qt=(t,e,s,r)=>(t>>>0)+(e>>>0)+(s>>>0)+(r>>>0);l.add4L=qt;const Ft=(t,e,s,r,a)=>e+s+r+a+(t/2**32|0)|0;l.add4H=Ft;const Jt=(t,e,s,r,a)=>(t>>>0)+(e>>>0)+(s>>>0)+(r>>>0)+(a>>>0);l.add5L=Jt;const zt=(t,e,s,r,a,o)=>e+s+r+a+o+(t/2**32|0)|0;l.add5H=zt;const Se={fromBig:it,split:Lt,toBig:_t,shrSH:It,shrSL:jt,rotrSH:Bt,rotrSL:At,rotrBH:Tt,rotrBL:Ot,rotr32H:Et,rotr32L:Ht,rotlSH:Pt,rotlSL:$t,rotlBH:Dt,rotlBL:Mt,add:Nt,add3L:Ut,add3H:Rt,add4L:qt,add4H:Ft,add5H:zt,add5L:Jt};l.default=Se;var Vt={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.crypto=void 0;Z.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const e=Z,s=k;function r(n){return n instanceof Uint8Array||n!=null&&typeof n=="object"&&n.constructor.name==="Uint8Array"}t.isBytes=r;const a=n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength);t.u8=a;const o=n=>new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4));t.u32=o;const i=n=>new DataView(n.buffer,n.byteOffset,n.byteLength);t.createView=i;const u=(n,c)=>n<<32-c|n>>>c;t.rotr=u;const m=(n,c)=>n<<c|n>>>32-c>>>0;t.rotl=m,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;const f=n=>n<<24&4278190080|n<<8&16711680|n>>>8&65280|n>>>24&255;t.byteSwap=f,t.byteSwapIfBE=t.isLE?n=>n:n=>(0,t.byteSwap)(n);function y(n){for(let c=0;c<n.length;c++)n[c]=(0,t.byteSwap)(n[c])}t.byteSwap32=y;const C=Array.from({length:256},(n,c)=>c.toString(16).padStart(2,"0"));function _(n){(0,s.bytes)(n);let c="";for(let w=0;w<n.length;w++)c+=C[n[w]];return c}t.bytesToHex=_;const v={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function I(n){if(n>=v._0&&n<=v._9)return n-v._0;if(n>=v._A&&n<=v._F)return n-(v._A-10);if(n>=v._a&&n<=v._f)return n-(v._a-10)}function x(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);const c=n.length,w=c/2;if(c%2)throw new Error("padded hex string expected, got unpadded hex of length "+c);const g=new Uint8Array(w);for(let h=0,b=0;h<w;h++,b+=2){const T=I(n.charCodeAt(b)),$=I(n.charCodeAt(b+1));if(T===void 0||$===void 0){const D=n[b]+n[b+1];throw new Error('hex string expected, got non-hex character "'+D+'" at index '+b)}g[h]=T*16+$}return g}t.hexToBytes=x;const tt=async()=>{};t.nextTick=tt;async function E(n,c,w){let g=Date.now();for(let h=0;h<n;h++){w(h);const b=Date.now()-g;b>=0&&b<c||(await(0,t.nextTick)(),g+=b)}}t.asyncLoop=E;function q(n){if(typeof n!="string")throw new Error(`utf8ToBytes expected string, got ${typeof n}`);return new Uint8Array(new TextEncoder().encode(n))}t.utf8ToBytes=q;function L(n){return typeof n=="string"&&(n=q(n)),(0,s.bytes)(n),n}t.toBytes=L;function H(...n){let c=0;for(let g=0;g<n.length;g++){const h=n[g];(0,s.bytes)(h),c+=h.length}const w=new Uint8Array(c);for(let g=0,h=0;g<n.length;g++){const b=n[g];w.set(b,h),h+=b.length}return w}t.concatBytes=H;class F{clone(){return this._cloneInto()}}t.Hash=F;const J={}.toString;function P(n,c){if(c!==void 0&&J.call(c)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(n,c)}t.checkOpts=P;function z(n){const c=g=>n().update(L(g)).digest(),w=n();return c.outputLen=w.outputLen,c.blockLen=w.blockLen,c.create=()=>n(),c}t.wrapConstructor=z;function V(n){const c=(g,h)=>n(h).update(L(g)).digest(),w=n({});return c.outputLen=w.outputLen,c.blockLen=w.blockLen,c.create=g=>n(g),c}t.wrapConstructorWithOpts=V;function K(n){const c=(g,h)=>n(h).update(L(g)).digest(),w=n({});return c.outputLen=w.outputLen,c.blockLen=w.blockLen,c.create=g=>n(g),c}t.wrapXOFConstructorWithOpts=K;function X(n=32){if(e.crypto&&typeof e.crypto.getRandomValues=="function")return e.crypto.getRandomValues(new Uint8Array(n));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=X})(Vt);Object.defineProperty(p,"__esModule",{value:!0});p.shake256=p.shake128=p.keccak_512=p.keccak_384=p.keccak_256=p.keccak_224=p.sha3_512=p.sha3_384=p.sha3_256=p.sha3_224=p.Keccak=p.keccakP=void 0;const O=k,U=l,j=Vt,Kt=[],Xt=[],Qt=[],ke=BigInt(0),M=BigInt(1),xe=BigInt(2),Ce=BigInt(7),Le=BigInt(256),_e=BigInt(113);for(let t=0,e=M,s=1,r=0;t<24;t++){[s,r]=[r,(2*s+3*r)%5],Kt.push(2*(5*r+s)),Xt.push((t+1)*(t+2)/2%64);let a=ke;for(let o=0;o<7;o++)e=(e<<M^(e>>Ce)*_e)%Le,e&xe&&(a^=M<<(M<<BigInt(o))-M);Qt.push(a)}const[Ie,je]=(0,U.split)(Qt,!0),ht=(t,e,s)=>s>32?(0,U.rotlBH)(t,e,s):(0,U.rotlSH)(t,e,s),ut=(t,e,s)=>s>32?(0,U.rotlBL)(t,e,s):(0,U.rotlSL)(t,e,s);function Wt(t,e=24){const s=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let i=0;i<10;i++)s[i]=t[i]^t[i+10]^t[i+20]^t[i+30]^t[i+40];for(let i=0;i<10;i+=2){const u=(i+8)%10,m=(i+2)%10,f=s[m],y=s[m+1],C=ht(f,y,1)^s[u],_=ut(f,y,1)^s[u+1];for(let v=0;v<50;v+=10)t[i+v]^=C,t[i+v+1]^=_}let a=t[2],o=t[3];for(let i=0;i<24;i++){const u=Xt[i],m=ht(a,o,u),f=ut(a,o,u),y=Kt[i];a=t[y],o=t[y+1],t[y]=m,t[y+1]=f}for(let i=0;i<50;i+=10){for(let u=0;u<10;u++)s[u]=t[i+u];for(let u=0;u<10;u++)t[i+u]^=~s[(u+2)%10]&s[(u+4)%10]}t[0]^=Ie[r],t[1]^=je[r]}s.fill(0)}p.keccakP=Wt;class R extends j.Hash{constructor(e,s,r,a=!1,o=24){if(super(),this.blockLen=e,this.suffix=s,this.outputLen=r,this.enableXOF=a,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,O.number)(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,j.u32)(this.state)}keccak(){j.isLE||(0,j.byteSwap32)(this.state32),Wt(this.state32,this.rounds),j.isLE||(0,j.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,O.exists)(this);const{blockLen:s,state:r}=this;e=(0,j.toBytes)(e);const a=e.length;for(let o=0;o<a;){const i=Math.min(s-this.pos,a-o);for(let u=0;u<i;u++)r[this.pos++]^=e[o++];this.pos===s&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:s,pos:r,blockLen:a}=this;e[r]^=s,s&128&&r===a-1&&this.keccak(),e[a-1]^=128,this.keccak()}writeInto(e){(0,O.exists)(this,!1),(0,O.bytes)(e),this.finish();const s=this.state,{blockLen:r}=this;for(let a=0,o=e.length;a<o;){this.posOut>=r&&this.keccak();const i=Math.min(r-this.posOut,o-a);e.set(s.subarray(this.posOut,this.posOut+i),a),this.posOut+=i,a+=i}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,O.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,O.output)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:s,suffix:r,outputLen:a,rounds:o,enableXOF:i}=this;return e||(e=new R(s,r,a,i,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=a,e.enableXOF=i,e.destroyed=this.destroyed,e}}p.Keccak=R;const A=(t,e,s)=>(0,j.wrapConstructor)(()=>new R(e,t,s));p.sha3_224=A(6,144,224/8);p.sha3_256=A(6,136,256/8);p.sha3_384=A(6,104,384/8);p.sha3_512=A(6,72,512/8);p.keccak_224=A(1,144,224/8);p.keccak_256=A(1,136,256/8);p.keccak_384=A(1,104,384/8);p.keccak_512=A(1,72,512/8);const Gt=(t,e,s)=>(0,j.wrapXOFConstructorWithOpts)((r={})=>new R(e,t,r.dkLen===void 0?s:r.dkLen,!0));p.shake128=Gt(31,168,128/8);p.shake256=Gt(31,136,256/8);const{sha3_512:Be}=p,Yt=24,N=32,rt=(t=4,e=Math.random)=>{let s="";for(;s.length<t;)s=s+Math.floor(e()*36).toString(36);return s};function Zt(t){let e=8n,s=0n;for(const r of t.values()){const a=BigInt(r);s=(s<<e)+a}return s}const te=(t="")=>Zt(Be(t)).toString(36).slice(1),dt=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),Ae=t=>dt[Math.floor(t()*dt.length)],ee=({globalObj:t=typeof ct<"u"?ct:typeof window<"u"?window:{},random:e=Math.random}={})=>{const s=Object.keys(t).toString(),r=s.length?s+rt(N,e):rt(N,e);return te(r).substring(0,N)},se=t=>()=>t++,Te=476782367,ne=({random:t=Math.random,counter:e=se(Math.floor(t()*Te)),length:s=Yt,fingerprint:r=ee({random:t})}={})=>function(){const o=Ae(t),i=Date.now().toString(36),u=e().toString(36),m=rt(s,t),f=`${i+m+u+r}`;return`${o+te(f).substring(1,s)}`},Oe=ne(),Ee=(t,{minLength:e=2,maxLength:s=N}={})=>{const r=t.length,a=/^[0-9a-z]+$/;try{if(typeof t=="string"&&r>=e&&r<=s&&a.test(t))return!0}finally{}return!1};B.getConstants=()=>({defaultLength:Yt,bigLength:N});B.init=ne;B.createId=Oe;B.bufToBigInt=Zt;B.createCounter=se;B.createFingerprint=ee;B.isCuid=Ee;const{createId:He,init:Ve,getConstants:Ke,isCuid:Xe}=B;var G=He;Date.now().toString().slice(5);var ft=BigInt(1e3),pt=BigInt(1e6),gt=BigInt(1e9);async function Pe(t){return typeof t=="number"&&(t=BigInt(t)),t<ft?`${t}ns`:t<pt?`${t/ft}μs`:t<gt?`${t/pt}ms`:`${t/gt}s`}async function mt(t){return{raw:Number(t),formatted:await Pe(t)}}var $e="https://answer.api.orama.com",yt="orama_user_id",De="server-side-session",re="1.3.9",Me={name:"@oramacloud/client",version:re,description:"Orama SDK for Node.js, Deno, and Browsers",type:"module",sideEffects:!1,main:"./dist/index.cjs",module:"./dist/index.js",types:"./dist/index.d.ts",runkitExampleFilename:"./example/runkit.js",exports:{".":{require:"./dist/index.cjs",import:"./dist/index.js",types:"./dist/index.d.ts",browser:"./dist/index.global.js"},"./react":{require:"./dist/react/index.cjs",import:"./dist/react/index.js",types:"./dist/react/index.d.ts"},"./vue":{require:"./dist/vue/index.cjs",import:"./dist/vue/index.js",types:"./dist/vue/index.d.ts"}},scripts:{format:"bunx @biomejs/biome format src --write",build:"npm run build:lib && npm run build:react && npm run build:vue",dev:"run-p watch:lib watch:react watch:vue","watch:lib":"tsup --config tsup.lib.js --watch","watch:react":"tsup --config tsup.react.js --watch","watch:vue":"tsup --config tsup.vue.js --watch","build:lib":"tsup --config tsup.lib.js","build:react":"tsup --config tsup.react.js","build:vue":"tsup --config tsup.vue.js",test:"node --no-warnings --loader tsx --test **/*.test.ts","serve:example":"esbuild src/index.ts --bundle --outfile=example/out.js --format=esm --watch --servedir=example",prepare:"husky install"},keywords:["orama","search engine","sdk"],files:["dist","example/runkit.js"],author:{name:"Michele Riva",email:"michele.riva@oramasearch.com",url:"https://github.com/MicheleRiva"},license:"ISC",dependencies:{"@orama/orama":"^2.0.16","@paralleldrive/cuid2":"^2.2.1",lodash:"^4.17.21",openai:"^4.24.1",react:"^18.2.0",vue:"^3.4.25"},devDependencies:{"@biomejs/biome":"^1.4.1","@fastify/formbody":"^7.4.0","@types/lodash":"^4.14.202","@types/node":"^20.3.1","@types/react":"^18.2.14",dotenv:"^16.3.1",esbuild:"0.18.5",fastify:"^4.19.2",husky:"^8.0.3","npm-run-all":"^4.1.5","ts-standard":"^12.0.2",tsup:"^7.1.0",tsx:"^3.12.7",typescript:"^5.1.3"},"ts-standard":{ignore:["dist","node_modules"]}};function ae(t,e){if(typeof navigator<"u"){typeof navigator.sendBeacon<"u"&&navigator.sendBeacon(t,e);return}fetch(t,{method:"POST",body:e,headers:{"Content-Type":"application/json"}}).then(()=>{},s=>console.log(s))}var ie=class oe{data;params;config;constructor(e){this.data=[],this.config=e}setParams(e){this.params=e}static create(e){let s=new oe(e);return s.start(),s}add(e){this.data.push({rawSearchString:e.rawSearchString,query:e.query,resultsCount:e.resultsCount,roundTripTime:e.roundTripTime,searchedAt:e.searchedAt,referer:typeof location<"u"?location.toString():void 0}),this.params!=null&&this.data.length>=this.config.flushSize&&this.flush()}flush(){if(this.params==null||this.data.length===0)return;let e=this.data;this.data=[];let s={source:"fe",deploymentID:this.params.deploymentID,index:this.params.index,oramaId:this.config.id,oramaVersion:Me.version,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,events:e};ae(this.params.endpoint+`?api-key=${this.config.api_key}`,JSON.stringify(s))?.catch(r=>console.log(r))}static getUserID(){if(typeof localStorage>"u")return De;let e=localStorage.getItem(yt);if(e)return e;let s=G();return localStorage.setItem(yt,s),s}start(){let e=setInterval(this.flush.bind(this),this.config.flushInterval);e.unref!=null&&e.unref()}};function Ne(t){let[e,...s]=t.split(`
`),r=s.join(`
`).replace("data: ","");return{event:e.replace("event: ",""),data:r}}function wt(t){return typeof t=="object"?JSON.stringify(t):`${t}`}var Ue=class{messages;inferenceType;oramaClient;endpoint;abortController;events;userContext;conversationID;userID;lastInteractionParams;state=[];constructor(t){let e=t.oramaClient.answersApiBaseURL||$e;this.messages=t.initialMessages||[],this.inferenceType=t.inferenceType,this.oramaClient=t.oramaClient,this.endpoint=`${e}/v1/answer?api-key=${this.oramaClient.api_key}`,this.events=t.events,this.conversationID=G(),this.userID=ie.getUserID(),this.userContext=t.userContext}async askStream(t){return this.messages.push({role:"user",content:t.term??""}),this.fetchAnswer(t)}async ask(t){let e=await this.askStream(t),s="";for await(let r of e)s=r;return this.events?.onMessageChange&&this.events.onMessageChange(this.messages),s}getMessages(){return this.messages}clearSession(){this.messages=[]}abortAnswer(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.state[this.state.length-1].aborted=!0)}async regenerateLast({stream:t=!0}={}){if(this.state.length===0||this.messages.length===0)throw new Error("No messages to regenerate");if(this.messages.at(-1)?.role!=="assistant")throw new Error("Last message is not an assistant message");return this.messages.pop(),this.state.pop(),t?this.askStream(this.lastInteractionParams):this.ask(this.lastInteractionParams)}addNewEmptyAssistantMessage(){this.messages.push({role:"assistant",content:""})}async*fetchAnswer(t){this.abortController=new AbortController,this.lastInteractionParams=t;let e=G();this.state.push({interactionId:e,query:t.term??"",response:"",relatedQueries:null,sources:null,translatedQuery:null,aborted:!1,loading:!0});let s=this.state.findIndex(y=>y.interactionId===e);this.events?.onNewInteractionStarted&&this.events.onNewInteractionStarted(e),this.events?.onStateChange&&this.events.onStateChange(this.state);let r=new URLSearchParams;if(r.append("type",this.inferenceType),r.append("messages",JSON.stringify(this.messages)),r.append("query",t.term??""),r.append("conversationId",this.conversationID),r.append("userId",this.userID),r.append("endpoint",this.oramaClient.endpoint),r.append("searchParams",JSON.stringify(t)),r.append("interactionId",e),this.userContext&&r.append("userContext",wt(this.userContext)),t.userData&&r.append("userData",wt(t.userData)),t.related){if(t.related?.howMany&&t.related?.howMany>5)throw new Error("Can generate at most 5 related queries");r.append("related",JSON.stringify({enabled:!0,howMany:t.related.howMany??3,format:t.related.format??"question"}))}let a=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r.toString(),signal:this.abortController.signal});if(!a.ok||!a.body)throw new Error(a.statusText);let o=a.body.getReader(),i=new TextDecoder,u=[],m="";this.events?.onMessageLoading&&this.events.onMessageLoading(!0),this.addNewEmptyAssistantMessage();let f=this.messages.at(-1);try{for(;;){let{value:y,done:C}=await o.read();if(C)break;m+=i.decode(y,{stream:!0});let _;for(;(_=m.indexOf(`

`))!==-1;){let v=m.slice(0,_);m=m.slice(_+2);try{let I=Ne(v),x=JSON.parse(I.data);if(x.type==="sources")this.state[s].sources=x.message,this.events?.onSourceChange&&this.events.onSourceChange(x.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(x.type==="query-translated")this.state[s].translatedQuery=x.message,this.events?.onQueryTranslated&&this.events.onQueryTranslated(x.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(x.type==="related-queries")this.state[s].relatedQueries=x.message,this.events?.onRelatedQueries&&this.events.onRelatedQueries(x.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(x.type==="text")for(u.push(x.message);u.length>0;)f.content+=u.shift(),this.state[s].response=f.content,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageChange&&this.events.onMessageChange(this.messages),yield f.content}catch(I){console.error("Error parsing SSE event:",I),console.error("Raw message:",v)}}}}catch(y){if(y.name==="AbortError")this.state[s].aborted=!0,this.state[s].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onAnswerAborted&&this.events.onAnswerAborted(!0);else throw y}finally{o.releaseLock()}this.state[s].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageLoading&&this.events.onMessageLoading(!1)}},Re=class{cache;config;constructor(t){this.cache=new Map,this.config=t}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){return this.cache.delete(t)}clear(){this.cache.clear()}size(){return this.cache.size}},qe=class{constructor(t){this.params=t}intervalId;start(){this.stop(),this.intervalId=setInterval(this.beat.bind(this),this.params.frequency)}stop(){this.intervalId!==void 0&&clearInterval(this.intervalId)}beat(){ae(this.params.endpoint)?.catch(t=>console.log(t))}},Fe=class{id=G();api_key;endpoint;answersApiBaseURL;collector;cache;searchDebounceTimer;searchRequestCounter=0;heartbeat;initPromise;constructor(t){if(this.api_key=t.api_key,this.endpoint=t.endpoint,this.answersApiBaseURL=t.answersApiBaseURL,t.telemetry!==!1){let e={id:this.id,api_key:this.api_key,flushInterval:t.telemetry?.flushInterval??5e3,flushSize:t.telemetry?.flushSize??25};this.collector=ie.create(e)}if(t.cache!==!1){let e={};this.cache=new Re(e)}this.init()}async search(t,e){await this.initPromise;let s=++this.searchRequestCounter,r=`search-${JSON.stringify(t)}`,a=null,o,i=!1,u=e?.fresh!==!0&&this.cache?.has(r),m=async()=>{try{let f=Date.now();a=await this.fetch("search","POST",{q:t},e?.abortController);let y=Date.now();a.elapsed=await mt(BigInt(y*1e6-f*1e6)),o=y-f,this.cache?.set(r,a)}catch(f){if(f.name!=="AbortError")throw console.error("Search request failed",f),f}return this.collector&&this.collector.add({rawSearchString:t.term,resultsCount:a?.hits?.length??0,roundTripTime:o,query:t,cached:i,searchedAt:new Date}),a};if(u&&this.cache)o=0,a=this.cache.get(r),i=!0,this.collector&&this.collector.add({rawSearchString:t.term,resultsCount:a?.hits?.length??0,roundTripTime:o,query:t,cached:i,searchedAt:new Date});else return e?.debounce?new Promise((f,y)=>{clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=setTimeout(async()=>{try{await m(),f(a)}catch(C){C.name!=="AbortError"&&(console.error("Search request failed",C),y(C))}},e?.debounce||300)}):m();return s===this.searchRequestCounter?a:null}async vectorSearch(t,e){await this.initPromise;let s=`vectorSearch-${JSON.stringify(t)}`,r,a,o=!1;if((e?.fresh!==!0&&this.cache?.has(s))===!0&&this.cache!=null)r=0,a=this.cache.get(s),o=!0;else{let i=Date.now();a=await this.fetch("vector-search2","POST",{q:t},e?.abortController);let u=Date.now();a.elapsed=await mt(BigInt(u*1e6-i*1e6)),r=u-i,this.cache?.set(s,a)}return this.collector!=null&&this.collector.add({rawSearchString:t.term,resultsCount:a.hits?.length??0,roundTripTime:r,query:t,cached:o,searchedAt:new Date}),a}createAnswerSession(t){return new Ue({inferenceType:t?.inferenceType||"documentation",initialMessages:t?.initialMessages||[],oramaClient:this,events:t?.events,userContext:t?.userContext})}startHeartBeat(t){this.heartbeat?.stop(),this.heartbeat=new qe({...t,endpoint:this.endpoint+`/health?api-key=${this.api_key}`}),this.heartbeat.start()}stopHeartBeat(){this.heartbeat?.stop()}async getPop(){return(await this.initPromise)?.pop??""}init(){this.initPromise=this.fetch("init","GET").then(t=>(this.collector?.setParams({endpoint:t.collectUrl,deploymentID:t.deploymentID,index:t.index}),t)).catch(t=>(console.log(t),null))}async fetch(t,e,s,r){if(r?.signal.aborted===!0)throw new Error("Request aborted");let a={method:e,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:r?.signal};if(e==="POST"&&s!==void 0){let i=s;i.version=re,i.id=this.id,a.body=Object.entries(i).map(([u,m])=>`${u}=${encodeURIComponent(JSON.stringify(m))}`).join("&")}let o=await fetch(`${this.endpoint}/${t}?api-key=${this.api_key}`,a);if(!o.ok){let i=new Error;throw i.httpResponse=o,i}return await o.json()}};const Qe=({year:t})=>{const[e,s]=S.useState("totalPublic"),[r,a]=S.useState("desc"),[o,i]=S.useState(""),[u,m]=S.useState(""),[f,y]=S.useState("all"),[C,_]=S.useState([]),[v,I]=S.useState(!1),[x,tt]=S.useState(null),[E,q]=S.useState({}),[L,H]=S.useState(1),[F,J]=S.useState(0),P=50,z=new Fe({endpoint:"https://cloud.orama.run/v1/indexes/nomika2023-qtw735",api_key:"iHhGT92IYaCRjJ7ibbmK8xJYOJ0AtHPY"}),V=()=>d.jsxs("div",{className:"flex items-center justify-between mt-4 mb-4 flex-wrap gap-4",children:[d.jsxs(de,{icon:be,color:"emerald",children:[d.jsx(fe,{children:F})," συνολικά αποτελέσματα"]}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("button",{type:"button",onClick:w,disabled:L===1,className:"p-2 border rounded-full disabled:opacity-50",children:d.jsx(ye,{size:20})}),d.jsxs("span",{children:["Σελίδα ",L," από ",c]}),d.jsx("button",{type:"button",onClick:g,disabled:L===c,className:"p-2 border rounded-full disabled:opacity-50",children:d.jsx(we,{size:20})})]})]});S.useEffect(()=>{const h=setTimeout(()=>{o.length>=2?m(o):m("")},300);return()=>clearTimeout(h)},[o]);const K=S.useCallback(async()=>{const h=`${u}-${f}-${e}-${r}-${L}`;if(E[h]){_(E[h].companies),J(E[h].count);return}I(!0);try{const b={term:u,limit:P,offset:(L-1)*P,sortBy:{property:e,order:r.toUpperCase()},mode:"fulltext"};f!=="all"&&(b.where={totalPublic:f==="high"?{gt:1e9}:f==="medium"?{gt:5e8,lte:1e9}:{lte:5e8}});const T=await z.search(b),$=T.hits.map(D=>D.document);_($),J(T.count),q(D=>({...D,[h]:{companies:$,count:T.count}}))}catch(b){console.error("Error fetching data:",b),tt(b.message||"An error occurred while fetching data")}finally{I(!1)}},[u,f,e,r,L,z]);S.useEffect(()=>{K()},[K]);const X=h=>{const b=h;return new Intl.NumberFormat("el-GR",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:0}).format(b)},n=h=>{h===e?a(r==="asc"?"desc":"asc"):(s(h),a("asc")),H(1)},c=Math.ceil(F/P),w=()=>{H(h=>Math.max(h-1,1))},g=()=>{H(h=>Math.min(h+1,c))};return x?d.jsxs("div",{children:["Error: ",x]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"flex justify-between items-center mt-4 mb-4",children:d.jsx(ce,{placeholder:"Αναζήτηση (με Επωνυμία ή ΑΦΜ)...",value:o,onChange:h=>i(h.target.value.toUpperCase())})}),d.jsx(V,{}),d.jsxs(le,{children:[d.jsx(he,{children:d.jsxs(ot,{children:[d.jsx(et,{className:"w-1/2",children:"Επωνυμία"}),d.jsxs(et,{className:"cursor-pointer w-1/4",onClick:()=>n("totalPublic"),children:["Σύν. Οφειλών Δημοσίου",d.jsx(lt,{className:"inline",size:16})]}),d.jsxs(et,{className:"cursor-pointer w-1/4",onClick:()=>n("totalEFKA"),children:["Σύν. Οφειλών ΕΦΚΑ ",d.jsx(lt,{className:"inline",size:16})]})]})}),d.jsx(ue,{children:C.map(h=>d.jsxs(ot,{children:[d.jsx(st,{className:"max-w-72",children:d.jsx("a",{href:`/company/${h.afm}`,className:"text-blue-500 hover:underline truncate block max-w-full",title:h.name,children:h.name})}),d.jsx(st,{children:X(h.totalPublic)}),d.jsx(st,{children:X(h.totalEFKA)})]},h.id))})]}),v&&d.jsx("div",{className:"mt-4 text-center",children:"Loading more results..."}),d.jsx(V,{})]})};export{Qe as default};
