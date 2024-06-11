class c{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const j=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:j()},h=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},L=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=h(e);s.publicKey=r.publicKey,s.blockHeadless=r.blockHeadless,s.storageProvider=r.storageProvider,s.blockList=r.blockList,s.limitRate=r.limitRate,s.origin=r.origin||t},f=async(e,t,r={})=>{const o=await fetch(s.origin+e,{method:"POST",headers:r,body:t}),i=await o.text(),a=new c(o.status,i);if(o.ok)return a;throw a},g=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},T=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},p=e=>e.webdriver||!e.languages||e.languages.length===0,w=()=>new c(451,"Unavailable For Headless Browser"),R=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},H=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},S=(e,t)=>e instanceof FormData?e.get(t):e[t],y=(e,t)=>{if(H(e))return!1;R(e.list,e.watchVariable);const r=S(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},v=()=>new c(403,"Forbidden"),V=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},F=async(e,t,r)=>{const o=Number(await r.get(e)||0);return t-Date.now()+o},k=async(e,t,r)=>{if(!t.throttle||!r)return!1;V(t.throttle,t.id);const o=t.id||e;return await F(o,t.throttle,r)>0?!0:(await r.set(o,Date.now().toString()),!1)},P=()=>new c(429,"Too Many Requests"),_=async(e,t,r,o)=>{const i=h(o),a=i.publicKey||s.publicKey,l=i.blockHeadless||s.blockHeadless,d=s.storageProvider||i.storageProvider,m={...s.blockList,...i.blockList},u={...s.limitRate,...i.limitRate};return l&&p(navigator)?Promise.reject(w()):(g(a,e,t),T(r),r&&y(m,r)?Promise.reject(v()):await k(location.pathname,u,d)?Promise.reject(P()):f("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},K=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},B=e=>typeof e=="string"?document.querySelector(e):e,E=async(e,t,r,o)=>{const i=h(o),a=i.publicKey||s.publicKey,l=i.blockHeadless||s.blockHeadless,d=s.storageProvider||i.storageProvider,m={...s.blockList,...i.blockList},u={...s.limitRate,...i.limitRate};if(l&&p(navigator))return Promise.reject(w());const b=B(r);g(a,e,t),K(b);const n=new FormData(b);return y(m,n)?Promise.reject(v()):await k(location.pathname,u,d)?Promise.reject(P()):(n.append("lib_version","4.3.3"),n.append("service_id",e),n.append("template_id",t),n.append("user_id",a),f("/api/v1.0/email/send-form",n))},O={init:L,send:_,sendForm:E,EmailJSResponseStatus:c};export{O as e};
