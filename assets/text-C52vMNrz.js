import{s as r,x as c}from"./index-C2z3vZ9k.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */const e={textMatch:"text-match"};function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n({text:t,pattern:s}){if(!s||!t)return t;const a=t.split(s);return a.length>1&&(a[1]=c`<mark class=${r(e.textMatch)}>${a[1]}</mark>`),a}export{h as c,n as h};
