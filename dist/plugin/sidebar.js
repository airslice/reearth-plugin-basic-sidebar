(function(){"use strict";const i=`<title></title><link href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.2/antd.variable.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.2/antd.min.js"><\/script>
<script type="module" crossorigin>
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();var s={};const p=ReactDOM;var f=p;s.createRoot=f.createRoot,s.hydrateRoot=f.hydrateRoot;var d={exports:{}},l={};const y=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=y,_=Symbol.for("react.element"),R=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function u(n,e,i){var r,t={},o=null,a=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)h.call(e,r)&&!b.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:_,type:n,key:o,ref:a,props:t,_owner:g.current}}l.Fragment=R;l.jsx=u;l.jsxs=u;(function(n){n.exports=l})(d);const v=d.exports.Fragment,c=d.exports.jsx;antd.ConfigProvider.config({theme:{primaryColor:"#25b864"}});const O=()=>{const n=React.useMemo(()=>({}),[]);return React.useEffect(()=>{globalThis.addEventListener("message",e=>{var i;e.source!==globalThis.parent||!e.data.act||(i=n[e.data.act])==null||i.call(n,e.data.payload)})},[]),c(v,{children:c(antd.Tabs,{defaultActiveKey:"1",centered:!0,items:new Array(3).fill(null).map((e,i)=>{const r=String(i+1);return{label:\`Tab \${r}\`,key:r,children:\`Content of Tab Pane \${r}\`}})})})};(async()=>s.createRoot(document.getElementById("root")).render(c(React.StrictMode,{children:c(O,{})})))();

<\/script>

<body>
  <div id="root"></div>
</body>


`;globalThis.reearth.ui.show(i,{width:370,extended:!0});const o=()=>{var e,t,n;globalThis.reearth.ui.postMessage({act:"setTheme",payload:{theme:(e=globalThis.reearth.widget.property.customize)==null?void 0:e.theme,overriddenTheme:{colors:{background:(t=globalThis.reearth.widget.property.customize)==null?void 0:t.backgroundColor,primary:(n=globalThis.reearth.widget.property.customize)==null?void 0:n.primaryColor}}}})},r={resize:e=>{globalThis.reearth.ui.resize(...e)},getTheme:()=>{o()}};globalThis.reearth.on("message",e=>{var t;e!=null&&e.act&&((t=r[e.act])==null||t.call(r,e.payload))}),globalThis.reearth.on("update",()=>{o()})})();
