!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,s=c||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,m=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(O,t),m?p(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=b();if(h(e))return w(e);u=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,d&&r?p(e):(r=i=void 0,f)}function L(){var e=b(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(s)return u=setTimeout(O,t),p(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=E(t)||0,y(n)&&(m=!!n.leading,a=(s="maxWait"in n)?v(E(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),L.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},L.flush=function(){return void 0===u?f:w(b())},L}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}function j(e,t){localStorage.setItem(e,JSON.stringify(t))}function h(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var O,w={formELem:document.querySelector(".feedback-form")};w.formELem.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value,r=h("feedback-form-state")||{};r[t]=n,j("feedback-form-state",r)}),500)),w.formELem.addEventListener("submit",(function(e){e.preventDefault();var t=w.formELem.elements.email.value,n=w.formELem.elements.message.value,r={email:t,massage:n};console.log(r),e.target.reset(),localStorage.removeItem("feedback-form-state")})),O=h("feedback-form-state"),w.formELem.elements.email.value=O.email,w.formELem.elements.message.value=O.message}();
//# sourceMappingURL=03-feedback.0b5ad70f.js.map