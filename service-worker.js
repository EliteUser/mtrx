if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/0752623d20ad79db7b136d556e766434.svg",revision:null},{url:"assets/0f40476e3098bf5edf788daebc70e9ad.svg",revision:null},{url:"assets/0fd90bf811f87d6212b07b06caee7d59.svg",revision:null},{url:"assets/19197556d779d873b8af3be978ffa8fe.svg",revision:null},{url:"assets/311605bbb17248ac1699be6dcd01f45a.svg",revision:null},{url:"assets/480d90019a5a09659f39bbc1681838b8.svg",revision:null},{url:"assets/5e815980c6338cc002f958425bea5e45.svg",revision:null},{url:"assets/6894eb9ecbc314cc4166db196fff0c2d.svg",revision:null},{url:"assets/6c55a7dc1e2be930e58b94f7133f8a9e.svg",revision:null},{url:"assets/7329a2a91ad91993ff249fb1eb834d2c.svg",revision:null},{url:"assets/8c990f21a968ac7f03eee8df58909552.svg",revision:null},{url:"assets/947bbc7ab7f31d56178f2666ff84dbe6.svg",revision:null},{url:"assets/95a6351a8ddea2e212509987095eff46.svg",revision:null},{url:"assets/a272896ad9a762c8221fa51bf08eec98.svg",revision:null},{url:"assets/android-chrome-192x192.png",revision:"002ef2602e5164ad0bb35d0cca7ae5f7"},{url:"assets/android-chrome-512x512.png",revision:"4833e7af924d4b3eae7fa4f2814cd0d3"},{url:"assets/apple-touch-icon.png",revision:"1ebe2f3576ffe1431360d082a164900a"},{url:"assets/bb6acc4ee1c6b52f0a81af49c91e8615.svg",revision:null},{url:"assets/bf750019a946372f7e698f3c6033d885.svg",revision:null},{url:"assets/c64479aaa1826a19a81df0c8f682ba05.svg",revision:null},{url:"assets/e94c58209d2cc85697d7b7bf8b3a883e.svg",revision:null},{url:"assets/favicon-16x16.png",revision:"90507d9294e0f4f96ff702bd8b204403"},{url:"assets/favicon-32x32.png",revision:"47488f3b0d07761eec7a814ed56ddf89"},{url:"assets/favicon.ico",revision:"68f58b0489a8b1494dd2b630bf7c4f0b"},{url:"assets/fb001fb48deb4efd2ee5579526129d7b.svg",revision:null},{url:"assets/mstile-144x144.png",revision:"1fc716514e785b617a7b6bcdc372329d"},{url:"assets/mstile-150x150.png",revision:"b99d471dfdc1662ea8f29871937ce1e0"},{url:"assets/mstile-310x150.png",revision:"b10000ef82db896fe3d61dde51adde6d"},{url:"assets/mstile-310x310.png",revision:"45d92f161655109a9d9215a174503aa2"},{url:"assets/mstile-70x70.png",revision:"6c6592d0805c09382c7a3994ba62f9f2"},{url:"css/main.f91d5d2a.css",revision:null},{url:"fonts/Quicksand-Regular.woff2",revision:"1c7f31a58c710241fb04750d453cf882"},{url:"index.html",revision:"8dd7c48617bedb06864707a63f995dfe"},{url:"js/bundle.js",revision:"2a32bfdebf9971ea29b2bc491f824047"},{url:"js/bundle.js.LICENSE.txt",revision:"6b51f72d4a18ab224bd767b370a8ddd2"},{url:"manifest.json",revision:"ee6f22025088cd750b415bd3958ed2e2"}],{})}));
