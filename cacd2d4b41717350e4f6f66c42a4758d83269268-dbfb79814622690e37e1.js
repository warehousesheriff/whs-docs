(self.webpackChunkwhs_docs=self.webpackChunkwhs_docs||[]).push([[537],{4852:function(t){"use strict";t.exports=Object.assign},9859:function(t){function e(t,e){return("/"+t+"/"+e).replace(/\/\/+/g,"/")}function n(t){return/^((https?:)?\/\/)/i.test(t)}t.exports={resolveLink:function(t,r){return n(t)?t:e(r,t)},normalizeBasePath:e,isExternalUrl:n}},5094:function(t,e,n){"use strict";n.d(e,{Z:function(){return B}});var r=n(7294),o=n(917),i=n(9674),a=n(3347),u=n(2964);var c=n(4316);const l=(0,c.Z)("div",{target:"e10o0eax1"})({name:"106zi9a",styles:"position:sticky;top:0;order:2;padding-top:72px;max-height:calc(100vh - 72px);overflow-y:auto;overflow-x:hidden;width:100%;max-width:200px;@media (max-width: 1200px){position:relative;top:auto;order:0;max-width:100%;margin-left:0;padding-top:0;}"}),s=(0,c.Z)("div",{target:"e10o0eax0"})({name:"1gnn5iw",styles:"h2{text-transform:uppercase;font-size:14px;font-weight:bold;letter-spacing:0.142em;margin-top:0rem;border:none;margin:0 0 16px 0;}nav ul{padding-left:0;margin-bottom:0;list-style:none;li{margin-bottom:12px;line-height:1.1;a{font-size:14px;font-weight:400;text-decoration:none;transition:all 0.2s;overflow-wrap:break-word;&:hover{text-decoration:underline;}}}}@media (max-width: 1200px){margin:0 0 24px 0;padding-bottom:16px;border-bottom:1px solid rgba(120, 117, 122, 0.2);}"});function f(t){let{headings:e,disableTOC:n,contentRef:c}=t;const{y:f}=(0,a.Z)(),p=(0,i.u)(),{width:d,height:h}=(0,u.Z)(),{0:m,1:y}=(0,r.useState)([]),g=d<=1200;(0,r.useEffect)((()=>{if(!g||n){var t;const e=null===(t=c.current)||void 0===t?void 0:t.querySelectorAll("h2, h3");y(e&&Array.from(e).map((t=>{const e=t.querySelector("a");return e?{id:t.id,offset:t.offsetTop+e.offsetTop}:{}})).filter(Boolean))}}),[d,h,c,g,n]);const w=(0,r.useMemo)((()=>{if(!g||n){const t=f+h/2;if(m)for(let e=m.length-1;e>=0;e-=1){const{id:n,offset:r}=m[e];if(t>=r)return n}}return null}),[m,h,f,g,n]);return n?(0,o.tZ)(l,null):(0,o.tZ)(l,null,(0,o.tZ)(s,null,(0,o.tZ)("h2",null,"On this page"),(0,o.tZ)("nav",null,(0,o.tZ)("ul",null,e.filter((t=>2===t.depth||3===t.depth)).map((t=>{const e=t.value.toString().toLowerCase().trim().replace(/\s/g,"-").replace(/[^\w\-\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,"");return(0,o.tZ)("li",{key:t.value,style:{marginLeft:3===t.depth?"8px":null}},(0,o.tZ)("a",{href:"#"+e,style:{color:w===e?p.colors.primary:p.colors.text}},t.value))}))))))}f.defaultProps={headings:null};var p=n(4160),d=n(9859);const h=(0,c.Z)("aside",{target:"e1wh78ri5"})("width:100%;overflow-y:auto;display:flex;justify-content:space-between;align-items:center;flex-direction:column;position:sticky;top:0;padding-top:36px;transition:transform 0.5s;height:calc(100vh - 1px);nav{width:100%;padding-top:24px;align-self:flex-start;flex:1;}@media (max-width: 780px){max-width:75%;min-width:auto;z-index:1001;position:fixed;top:0;bottom:0;left:0;padding-top:32px;background:",(t=>{let{theme:e}=t;return e.colors.background}),";transform:translate3d(\n      ",(t=>{let{isMenuOpen:e}=t;return e?"0":"-100%"}),",\n      0,\n      0\n    );}"),m=(0,c.Z)("div",{target:"e1wh78ri4"})({name:"2yrou",styles:"width:100%;a{width:100%;padding-left:30px;display:flex;justify-content:flex-start;align-items:center;}"}),y=(0,c.Z)("ul",{target:"e1wh78ri3"})({name:"qmhqz9",styles:"list-style:none;width:100%;padding-left:0;display:flex;justify-content:flex-start;align-items:center;flex-direction:column"}),g=(0,c.Z)("li",{target:"e1wh78ri2"})("padding-left:30px;width:100%;text-transform:uppercase;font-size:14px;font-weight:bold;margin-top:20px;color:",(t=>{let{theme:e}=t;return e.colors.title}),";letter-spacing:0.142em;"),w=(0,c.Z)("li",{target:"e1wh78ri1"})("font-size:15px;width:100%;transition:all 200ms ease-in-out;padding:0 20px;cursor:pointer;a,span{display:block;font-size:15px;color:",(t=>{let{theme:e}=t;return e.colors.text}),";background-color:",(t=>{let{theme:e}=t;return e.colors.background}),";padding:4px 10px;margin:4px 0;border-radius:4px;font-weight:normal;text-decoration:none;width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;margin:0 auto;transition:all 0.2s ease;svg{width:20px;height:20px;margin-right:10px;}&:not(.active-link):hover{color:",(t=>{let{theme:e}=t;return e.colors.primary}),";}&.active-link{color:",(t=>{let{theme:e}=t;return e.colors.primary}),";background-color:",(t=>{let{theme:e}=t;return e.colors.shape}),";}@media (max-width: 780px){&.active-link{background:",(t=>{let{theme:e}=t;return e.colors.shape}),";}}}"),b=(0,c.Z)(y,{target:"e1wh78ri0"})({name:"6wyw1u",styles:"margin:5px 0 0 0"});var v=n(7076),x=n(4405);function O(t){return(0,x.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(t)}function T(t){let{link:e,label:n}=t;return(0,o.tZ)("a",{href:e,rel:"noopener noreferrer"},n,(0,o.tZ)(O,{style:{width:"16px",height:"16px",marginLeft:"10px"}}))}function S(t){let{link:e,label:n}=t;return(0,o.tZ)(p.Link,{to:e,activeClassName:"active-link"},n)}var _=n.p+"static/whs-logo-a46c3662b476c17f43e01638da0471bc.png";var E=()=>(0,o.tZ)("img",{src:_,alt:"Warehouse Sheriff",width:"100%"});function j(t){let{children:e,text:n}=t;return(0,o.tZ)(r.Fragment,null,(0,o.tZ)(g,null,n),(0,o.tZ)(b,null,e))}function A(t){let{isMenuOpen:e}=t;const{site:{siteMetadata:{basePath:n}}}=(0,p.useStaticQuery)("2328931024"),r=function(){const t=(0,p.useStaticQuery)("1954253342"),{basePath:e}=t.site.siteMetadata,{allSidebarItems:{edges:n}}=t;if(e){const t=n.map((t=>{let{node:{label:n,link:r,items:o,id:i}}=t;return Array.isArray(o)&&(o=o.map((t=>({label:t.label,link:(0,d.resolveLink)(t.link,e)})))),{node:{id:i,label:n,items:o,link:(0,d.resolveLink)(r,e)}}}));return t}return n}();function i(t,e){return(0,v.isExternalUrl)(t)?(0,o.tZ)(T,{link:t,label:e}):(0,o.tZ)(S,{link:t,label:e})}return(0,o.tZ)(h,{isMenuOpen:e},(0,o.tZ)(m,null,(0,o.tZ)(p.Link,{to:n,"aria-label":"Go to home page"},(0,o.tZ)(E,{"aria-hidden":"true"}))),(0,o.tZ)("nav",null,(0,o.tZ)(y,null,r.map((t=>{let{node:{label:e,link:n,items:r,id:a}}=t;if(Array.isArray(r)){const t=r.map((t=>(0,o.tZ)(w,{key:t.link},i(t.link,t.label))));return(0,o.tZ)(j,{key:a,text:e},t)}return(0,o.tZ)(w,{key:a},i(n,e))})))))}var C=n(2585);const k=(0,c.Z)("header",{target:"esnpb7p0"})({name:"1p24zom",styles:"display:flex;justify-content:flex-start;align-items:center;height:40px;margin-bottom:24px;h2{margin:0;border:none;padding:0;font-size:18px;@media (max-width: 359px){font-size:14px;}}button{border:none;background:none;cursor:pointer;margin-right:16px;display:flex;justify-content:flex-start;align-items:center;}@media (min-width: 780px){display:none;}"});function Z(t){let{handleMenuOpen:e}=t;const{site:n}=(0,p.useStaticQuery)("973074209"),{siteTitle:r}=n.siteMetadata;return(0,o.tZ)(k,null,(0,o.tZ)("button",{"aria-label":"Open sidebar",type:"button",onClick:e},(0,o.tZ)(C.vHB,{size:23,"aria-hidden":"true"})),(0,o.tZ)("h2",null,r))}var P=n(7462);function L(t){let{isMenuOpen:e,...n}=t;return(0,o.tZ)("div",(0,P.Z)({css:(0,o.iv)("::after{content:'';position:fixed;width:100%;height:100%;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);z-index:999;display:",e?"block":"none",";}",""),"aria-label":"Close menu"},n))}L.defaultProps={isMenuOpen:!1};const M=(0,c.Z)("div",{target:"eees1d52"})({name:"1kjnnqm",styles:"width:100%;max-width:1400px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:280px calc(100% - 320px);grid-auto-flow:row;grid-gap:40px;@media (max-width: 780px){padding:24px;grid-template-columns:100%;}"}),I=(0,c.Z)("main",{target:"eees1d51"})({name:"u8hwp7",styles:"height:100%;padding-top:36px;width:100%;display:flex;justify-content:flex-start;position:relative;@media (max-width: 1200px){flex-direction:column;}@media (max-width: 780px){padding-top:0;}"}),N=(0,c.Z)("div",{target:"eees1d50"})({name:"1h97cat",styles:"width:100%;max-width:calc(75% - 64px);padding-right:64px;@media (max-width: 1200px){max-width:100%;padding-right:0;order:3;}h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;}"});var R={name:"1fdmakl",styles:"@media (max-width: 1200px){display:none;}"},z={name:"1j7nlw4",styles:"display:none;@media (max-width: 1200px){display:block;}"};function B(t){let{children:e,disableTableOfContents:n,title:i,headings:a}=t;const u=(0,r.useRef)(null),{0:c,1:l}=(0,r.useState)(!1),s=!0===n||!a||0===a.length,p=()=>{l(!c)};return(0,o.tZ)(r.Fragment,null,(0,o.tZ)(L,{isMenuOpen:c,onClick:p}),(0,o.tZ)(M,null,(0,o.tZ)(A,{isMenuOpen:c}),(0,o.tZ)(I,null,(0,o.tZ)(Z,{handleMenuOpen:p}),i&&(0,o.tZ)("h1",{css:z},i),(0,o.tZ)(N,{ref:u},i&&(0,o.tZ)("h1",{css:R},i),e),(0,o.tZ)(f,{headings:a,disableTOC:s,contentRef:u}))))}B.defaultProps={disableTableOfContents:!1,title:"",headings:null}},9029:function(t,e,n){"use strict";n.d(e,{Z:function(){return bt}});var r,o,i,a,u=n(7294),c=n(5697),l=n.n(c),s=n(3524),f=n.n(s),p=n(9590),d=n.n(p),h=n(4852),m=n.n(h),y="bodyAttributes",g="htmlAttributes",w="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(t){return b[t]})),"charset"),x="cssText",O="href",T="http-equiv",S="innerHTML",_="itemprop",E="name",j="property",A="rel",C="src",k="target",Z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",M="encodeSpecialCharacters",I="onChangeClientState",N="titleTemplate",R=Object.keys(Z).reduce((function(t,e){return t[Z[e]]=e,t}),{}),z=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(t){var e=G(t,b.TITLE),n=G(t,N);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=G(t,P);return e||r||void 0},W=function(t){return G(t,I)||function(){}},$=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return q({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},V=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&et("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===A&&"canonical"===t[n].toLowerCase()||c===A&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==S&&u!==x&&u!==_||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=m()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},G=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),X=function(t){return clearTimeout(t)},J="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,et=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},nt=null,rt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,f=t.title,p=t.titleAttributes;at(b.BODY,r),at(b.HTML,o),it(f,p);var d={baseTag:ut(b.BASE,n),linkTags:ut(b.LINK,i),metaTags:ut(b.META,a),noscriptTags:ut(b.NOSCRIPT,u),scriptTags:ut(b.SCRIPT,l),styleTags:ut(b.STYLE,s)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),c(t,h,m)},ot=function(t){return Array.isArray(t)?t.join(""):t},it=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),at(b.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},ut=function(t,e){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(t+"["+B+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===S)n.innerHTML=e.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(B,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ct=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Z[n]||n]=t[n],e}),e)},st=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[B]=!0,o=lt(n,r),[u.createElement(b.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ct(n),i=ot(e);return o?"<"+t+" "+B+'="true" '+o+">"+U(i,r)+"</"+t+">":"<"+t+" "+B+'="true">'+U(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case y:case g:return{toComponent:function(){return lt(e)},toString:function(){return ct(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(e).forEach((function(t){var n=Z[t]||t;if(n===S||n===x){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),u.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===S||t===x)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+U(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(t);return e+"<"+t+" "+B+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ft=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,s=t.title,f=void 0===s?"":s,p=t.titleAttributes;return{base:st(b.BASE,e,r),bodyAttributes:st(y,n,r),htmlAttributes:st(g,o,r),link:st(b.LINK,i,r),meta:st(b.META,a,r),noscript:st(b.NOSCRIPT,u,r),script:st(b.SCRIPT,c,r),style:st(b.STYLE,l,r),title:st(b.TITLE,{title:f,titleAttributes:p},r)}},pt=f()((function(t){return{baseTag:K([O,k],t),bodyAttributes:$(y,t),defer:G(t,L),encode:G(t,M),htmlAttributes:$(g,t),linkTags:V(b.LINK,[A,O],t),metaTags:V(b.META,[E,v,T,j,_],t),noscriptTags:V(b.NOSCRIPT,[S],t),onChangeClientState:W(t),scriptTags:V(b.SCRIPT,[C,S],t),styleTags:V(b.STYLE,[x],t),title:Y(t),titleAttributes:$(w,t)}}),(function(t){nt&&tt(nt),t.defer?nt=J((function(){rt(t,(function(){nt=null}))})):(rt(t),nt=null)}),ft)((function(){return null})),dt=(o=pt,a=i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return q({},r,((e={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case b.TITLE:return q({},o,((e={})[r.type]=a,e.titleAttributes=q({},i),e));case b.BODY:return q({},o,{bodyAttributes:q({},i)});case b.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((n={})[r.type]=q({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=q({},e);return Object.keys(t).forEach((function(e){var r;n=q({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return u.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(H(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=H(t,["children"]),r=q({},n);return e&&(r=this.mapChildrenToProps(e,r)),u.createElement(o,r)},F(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(u.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=ft({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);dt.renderStatic=dt.rewind;var ht=dt,mt=n(4078),yt=n.n(mt),gt=n(4160),wt=n(917);function bt(t){let{description:e,title:n,slug:r,image:o,children:i}=t;const{site:a}=(0,gt.useStaticQuery)("2501019404"),{siteTitle:u,siteTitleShort:c,siteUrl:l,defaultTitle:s,siteImage:f,siteDescription:p,siteLanguage:d,siteAuthor:h,siteIcon:m}=a.siteMetadata,y=n?n+" | "+u:s,g=yt()(l,r),w=yt()(l,o||f),b=e||p,v=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:n,alternateName:c}];return(0,wt.tZ)(ht,{htmlAttributes:{lang:d},title:y},m&&(0,wt.tZ)("link",{rel:"icon",href:m}),(0,wt.tZ)("meta",{name:"description",content:b}),(0,wt.tZ)("meta",{name:"image",content:w}),(0,wt.tZ)("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge,chrome=1"}),(0,wt.tZ)("meta",{name:"MobileOptimized",content:"320"}),(0,wt.tZ)("meta",{name:"HandheldFriendly",content:"True"}),(0,wt.tZ)("meta",{name:"google",content:"notranslate"}),(0,wt.tZ)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,wt.tZ)("meta",{property:"og:url",content:g}),(0,wt.tZ)("meta",{property:"og:type",content:"website"}),(0,wt.tZ)("meta",{property:"og:title",content:y}),(0,wt.tZ)("meta",{property:"og:description",content:b}),(0,wt.tZ)("meta",{property:"og:locale",content:d}),(0,wt.tZ)("meta",{property:"og:site_name",content:u}),(0,wt.tZ)("meta",{property:"og:image",content:w}),(0,wt.tZ)("meta",{property:"og:image:secure_url",content:w}),(0,wt.tZ)("meta",{property:"og:image:alt",content:"Banner"}),(0,wt.tZ)("meta",{property:"og:image:type",content:"image/png"}),(0,wt.tZ)("meta",{property:"og:image:width",content:"1200"}),(0,wt.tZ)("meta",{property:"og:image:height",content:"630"}),(0,wt.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,wt.tZ)("meta",{name:"twitter:title",content:y}),(0,wt.tZ)("meta",{name:"twitter:site",content:h}),(0,wt.tZ)("meta",{name:"twitter:creator",content:h}),(0,wt.tZ)("meta",{name:"twitter:image",content:w}),(0,wt.tZ)("meta",{name:"twitter:image:src",content:w}),(0,wt.tZ)("meta",{name:"twitter:image:alt",content:"Banner"}),(0,wt.tZ)("meta",{name:"twitter:image:width",content:"1200"}),(0,wt.tZ)("meta",{name:"twitter:image:height",content:"630"}),(0,wt.tZ)("script",{type:"application/ld+json"},JSON.stringify(v)),i)}bt.defaultProps={title:"",description:"",slug:"",image:"",children:""}},7076:function(t){t.exports={isExternalUrl:function(t){return/^((https?:)?\/\/)/i.test(t)}}},9590:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,l,s;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof a.toString)return t.toString()===a.toString();if((u=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!i(t[l[c]],a[l[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4405:function(t,e,n){"use strict";n.d(e,{w_:function(){return l}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),c(t.child))}))}function l(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,c=t.title,l=u(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},3524:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=t(l.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},8387:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isNavigator=e.isBrowser=e.off=e.on=e.noop=void 0;e.noop=function(){},e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)},e.isBrowser="undefined"!=typeof window,e.isNavigator="undefined"!=typeof navigator},6713:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7294);e.default=function(t){r.useEffect(t,[])}},9050:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6258));e.default=function(t){var e=o.useRef(0),n=o.useState(t),r=n[0],a=n[1],u=o.useCallback((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){a(t)}))}),[]);return i.default((function(){cancelAnimationFrame(e.current)})),[r,u]}},6258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6713));e.default=function(t){var e=o.useRef(t);e.current=t,i.default((function(){return function(){return e.current()}}))}},3347:function(t,e,n){"use strict";var r=n(655),o=n(7294),i=n(8387),a=r.__importDefault(n(9050));e.Z=function(){var t=a.default((function(){return{x:i.isBrowser?window.pageXOffset:0,y:i.isBrowser?window.pageYOffset:0}})),e=t[0],n=t[1];return o.useEffect((function(){var t=function(){n((function(t){var e=window.pageXOffset,n=window.pageYOffset;return t.x!==e||t.y!==n?{x:e,y:n}:t}))};return t(),i.on(window,"scroll",t,{capture:!1,passive:!0}),function(){i.off(window,"scroll",t)}}),[]),e}},2964:function(t,e,n){"use strict";var r=n(655),o=n(7294),i=r.__importDefault(n(9050)),a=n(8387);e.Z=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=i.default({width:a.isBrowser?window.innerWidth:t,height:a.isBrowser?window.innerHeight:e}),r=n[0],u=n[1];return o.useEffect((function(){if(a.isBrowser){var t=function(){u({width:window.innerWidth,height:window.innerHeight})};return a.on(window,"resize",t),function(){a.off(window,"resize",t)}}}),[]),r}},655:function(t,e,n){"use strict";n.r(e),n.d(e,{__assign:function(){return i},__asyncDelegator:function(){return x},__asyncGenerator:function(){return v},__asyncValues:function(){return O},__await:function(){return b},__awaiter:function(){return s},__classPrivateFieldGet:function(){return j},__classPrivateFieldIn:function(){return C},__classPrivateFieldSet:function(){return A},__createBinding:function(){return p},__decorate:function(){return u},__exportStar:function(){return d},__extends:function(){return o},__generator:function(){return f},__importDefault:function(){return E},__importStar:function(){return _},__makeTemplateObject:function(){return T},__metadata:function(){return l},__param:function(){return c},__read:function(){return m},__rest:function(){return a},__spread:function(){return y},__spreadArray:function(){return w},__spreadArrays:function(){return g},__values:function(){return h}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function c(t,e){return function(n,r){e(n,r,t)}}function l(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function s(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function f(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=e.call(t,a)}catch(c){u=[6,c],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var p=Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function d(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||p(e,t,n)}function h(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m(arguments[e]));return t}function g(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function w(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function v(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof b?Promise.resolve(n.value.v).then(c,l):s(i[0][2],n)}catch(r){s(i[0][3],r)}var n}function c(t){u("next",t)}function l(t){u("throw",t)}function s(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function x(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:b(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function O(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function T(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var S=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function _(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&p(e,t,n);return S(e,t),e}function E(t){return t&&t.__esModule?t:{default:t}}function j(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function A(t,e,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}function C(t,e){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof t?e===t:t.has(e)}},4078:function(t,e,n){var r,o,i;i=function(){return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var o=t[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var i=e.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a.shift()+(a.length>0?"?":"")+a.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=i():void 0===(o="function"==typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o)}}]);
//# sourceMappingURL=cacd2d4b41717350e4f6f66c42a4758d83269268-dbfb79814622690e37e1.js.map