"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-icons/fa");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(e);const r={default:{className:"",icon:React.createElement(t.FaInfo,{className:"text--md"}),alertTitle:"default alert title"},light:{className:"bg--light text--dark",icon:React.createElement(t.FaInfo,{className:"text--md"}),alertTitle:"light alert"},error:{className:"bg--danger text--light",icon:React.createElement(t.FaExclamationCircle,{className:"text--md"}),alertTitle:"Error"},warning:{className:"bg--warning text--dark",icon:React.createElement(t.FaExclamationTriangle,{className:"text--md"}),alertTitle:"Warning"},info:{className:"bg--info text--light",icon:React.createElement(t.FaInfo,{className:"text--md"}),alertTitle:"Info"},success:{className:"bg--success text--light",icon:React.createElement(t.FaCheckCircle,{className:"text--md"}),alertTitle:"Success"},primary:{className:"bg--primary text--light",icon:React.createElement(t.FaInfo,{className:"text--md"}),alertTitle:"Primary"},secondary:{className:"bg--secondary text--dark",icon:React.createElement(t.FaInfo,{className:"text--md"}),alertTitle:"Secondary"}};!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".alert{position:relative;margin-bottom:var(--space-md);padding:var(--space-md) var(--space-lg);border:1px solid transparent;border-radius:var(--default-border-radius);background-color:#212529;color:#fff}");exports.Alert=({children:e,classNameProp:t,styleProp:a,alertIcon:s,severity:c="default",alertTitleProp:i})=>l.default.createElement("div",{className:[`alert ${r[c].className}`,`${t}`].join(" "),style:{styleProp:a}},l.default.createElement("div",{className:"flex align-items-fs gap"},l.default.createElement("div",{className:"pt--xxs"},s||r[c].icon),l.default.createElement("div",{className:"flex flex--column align-self--fs align-items--fs gap--sm text--md font-weight--500"},i||r[c].alertTitle,e&&l.default.createElement("div",{className:"text--sm"},e))));