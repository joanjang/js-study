(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;t(this,n),this.name=e,this.title=r,this.render()}var r,o;return r=n,(o=[{key:"render",value:function(){var t=document.querySelector(".wrapper"),e=t.querySelector(".header-title"),n=t.querySelector("main"),r=t.classList[t.classList.length-1];r.includes("-")?t.classList.replace(r,"".concat(this.name,"-wrapper")):t.classList.add("".concat(this.name,"-wrapper")),e.innerText=this.title,n.classList="".concat(this.name,"-container"),n.innerHTML=this.template()}},{key:"template",value:function(){return""}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(l,t);var e,n,r,o,f=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=a(r);if(o){var n=a(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function l(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(r=f.call(this,t,e)).Router=n,r}return e=l,(n=[{key:"template",value:function(){var t=this;return this.className="".concat(this.target,"-menu"),"<ul>\n      ".concat(this.items.map((function(e){return"<li class=".concat(t.className," title=").concat(e.name,">").concat(e.name,"</li>")})).join(""),"\n    </ul>")}},{key:"setEvent",value:function(){var t=this;this.$target.querySelectorAll(".".concat(this.className)).forEach((function(e){e.addEventListener("click",(function(e){var n=e.target.innerText;t.Router.goToPage(n.toLowerCase(),t.Router)}))}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.target=e,this.items=n,this.$target=document.querySelector(".".concat(e,"-container")),this.render()}var e,n;return e=t,(n=[{key:"render",value:function(){this.$target.innerHTML=this.template(),this.setEvent()}},{key:"template",value:function(){return""}},{key:"setEvent",value:function(){}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function p(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var b="home",h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(n);if(r){var o=y(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return p(this,t)});function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=o.call(this,b,"development note"),new f(b,Object.values(t).slice(1),e),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(n);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}const g={"/":h,"/generator":function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,"generator")}return e=c,(n=[{key:"template",value:function(){return""}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(n)};var j="/js-study",P=location.origin.includes("github");function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=g}var e,n;return e=t,n=[{key:"initialRoute",value:function(){var t=this;this.router(this.routes["/"],this.routes),window.addEventListener("popstate",(function(){t.router(t.routes["/"],t.routes)}))}},{key:"goToPage",value:function(t,e){var n=location.origin;t.startsWith("/")||(t="/"+t),history.pushState({},"","".concat(n).concat(P?j:"").concat(t)),e.router(e.routes["".concat(t)])}},{key:"router",value:function(t,e){e?new t(e,this):new t}}],n&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.addEventListener("load",(function(){var t=new _,e=location.pathname;e=e.replace(j,""),console.log(e),"/"===e||e.includes("index.html")?(console.log("initial"),t.initialRoute()):(console.log("goToPage"),t.goToPage(e,t))}))})();