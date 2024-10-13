(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"5ZrT":function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("lFyj");function o(e,t){return d(e)||m(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),s=i[0],u=i[1],m=Object(a["useState"])(!1),d=o(m,2),E=d[0],h=d[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){u(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":s||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},Tbbe:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("G08k"),c=n("Il19"),o=n("zJrY"),i=n("5ZrT"),s=l.a.memo((e=>{var t=e.demos,n=t["usesessionstate-demo1"].component,a=t["usesessionstate-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usesessionstate"},l.a.createElement(r["AnchorLink"],{to:"#usesessionstate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useSessionState"),l.a.createElement("p",null,"\u4fdd\u5b58\u5230sessionStorage\u91cc\u7684\u72b6\u6001"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u672c\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u6548\u679c")),l.a.createElement(c["default"],t["usesessionstate-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u4f20\u5165\u51fd\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u4f20\u5165\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f20\u5165\u51fd\u6570")),l.a.createElement(c["default"],t["usesessionstate-demo2"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"type State = string | undefined;\n\ntype SetState = (\n  value: State\n) => void;\nconst [state, setState]: [State, SetState] = useSessionState(\n  key: string,\n)",lang:"typescript"}),l.a.createElement("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u60f3\u4ece document.cookie \u4e2d\u5220\u9664\u8fd9\u6761\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"setState()")," \u6216 ",l.a.createElement("code",null,"setState(undefined)"),"\u3002"),l.a.createElement("h2",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"key"),l.a.createElement("td",null,"cookie \u7684 key"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")))),l.a.createElement("h2",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"state"),l.a.createElement("td",null,"\u672c\u5730 Cookie \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"string")," | ",l.a.createElement("code",null,"undefined"))),l.a.createElement("tr",null,l.a.createElement("td",null,"setState"),l.a.createElement("td",null,"\u8bbe\u7f6e Cookie \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"SetState"))))),l.a.createElement("p",null,"setState \u53ef\u4ee5\u66f4\u65b0 cookie options\uff0c\u4f1a\u4e0e ",l.a.createElement("code",null,"useCookieState")," \u8bbe\u7f6e\u7684 options \u8fdb\u884c merge \u64cd\u4f5c\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:n})}},lFyj:function(e,t,n){}}]);