webpackJsonp([0],{0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=i(1),r=n(o),a=i(2),s=n(a),c=i(3),l=n(c),u=i(9),h=n(u),p=i(137),d=n(p),f=i(142),v=n(f);r["default"].use(s["default"]);var m=window.router=new s["default"]({root:h["default"].config.ctx+"/dashboard",history:h["default"].config.vue.history});m.map(l["default"]),r["default"].config.debug=!0;var g=r["default"].extend({methods:{}});v["default"].props=["pageName","welcome","projectId"],d["default"].props=["reloadProject"],m.start({created:function(){this.loading=!1},data:function(){return{loading:!0,pageName:"",welcome:!1,showProject:!1,projectId:null,reloadProject:!1}},components:{App:g,ProjectLeft:d["default"],ProjectNav:v["default"]}},"#dashboard");var b=document.createEvent("Event");b.initEvent("route.click",!0,!1),m.afterEach(function(t){document.dispatchEvent(new CustomEvent("route.click",{detail:{path:t.to.path}}))})},2:function(t,e,i){/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
!function(e,i){t.exports=i()}(this,function(){"use strict";function t(t,e,i){this.path=t,this.matcher=e,this.delegate=i}function e(t){this.routes={},this.children={},this.target=t}function i(e,n,o){return function(r,a){var s=e+r;return a?void a(i(s,n,o)):new t(e+r,n,o)}}function n(t,e,i){for(var n=0,o=0,r=t.length;o<r;o++)n+=t[o].path.length;e=e.substr(n);var a={path:e,handler:i};t.push(a)}function o(t,e,i,r){var a=e.routes;for(var s in a)if(a.hasOwnProperty(s)){var c=t.slice();n(c,s,a[s]),e.children[s]?o(c,e.children[s],i,r):i.call(r,c)}}function r(t,n){var r=new e;t(i("",r,this.delegate)),o([],r,function(t){n?n(this,t):this.add(t)},this)}function a(t){L||"undefined"==typeof console||console.error("[vue-router] "+t)}function s(t,e){try{return e?decodeURIComponent(t):decodeURI(t)}catch(i){a("malformed URI"+(e?" component: ":": ")+t)}}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function l(t){this.string=t}function u(t){this.name=t}function h(t){this.name=t}function p(){}function d(t,e,i){"/"===t.charAt(0)&&(t=t.substr(1));var n=t.split("/"),o=[];i.val="";for(var r=0,a=n.length;r<a;r++){var s,c=n[r];(s=c.match(/^:([^\/]+)$/))?(o.push(new u(s[1])),e.push(s[1]),i.val+="3"):(s=c.match(/^\*([^\/]+)$/))?(o.push(new h(s[1])),i.val+="2",e.push(s[1])):""===c?(o.push(new p),i.val+="1"):(o.push(new l(c)),i.val+="4")}return i.val=+i.val,o}function f(t){this.charSpec=t,this.nextStates=[]}function v(t){return t.sort(function(t,e){return e.specificity.val-t.specificity.val})}function m(t,e){for(var i=[],n=0,o=t.length;n<o;n++){var r=t[n];i=i.concat(r.match(e))}return i}function g(t){this.queryParams=t||{}}function b(t,e,i){for(var n=t.handlers,o=t.regex,r=e.match(o),a=1,s=new g(i),c=0,l=n.length;c<l;c++){for(var u=n[c],h=u.names,p={},d=0,f=h.length;d<f;d++)p[h[d]]=r[a++];s.push({handler:u.handler,params:p,isDynamic:!!h.length})}return s}function y(t,e){return e.eachChar(function(e){t=t.put(e)}),t}function _(t){return t=t.replace(/\+/gm,"%20"),s(t,!0)}function w(t){"undefined"!=typeof console&&console.error("[vue-router] "+t)}function k(t,e,i){var n=t.match(/(\?.*)$/);if(n&&(n=n[1],t=t.slice(0,-n.length)),"?"===e.charAt(0))return t+e;var o=t.split("/");i&&o[o.length-1]||o.pop();for(var r=e.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var s=r[a];"."!==s&&(".."===s?o.pop():o.push(s))}return""!==o[0]&&o.unshift(""),o.join("/")}function C(t){return t&&"function"==typeof t.then}function x(t,e){var i=t&&(t.$options||t.options);return i&&i.route&&i.route[e]}function j(t,e){X?X.$options.components._=t.component:X={resolve:J.Vue.prototype._resolveComponent,$options:{components:{_:t.component}}},X.resolve("_",function(i){t.component=i,e(i)})}function A(t,e,i){return void 0===e&&(e={}),t=t.replace(/:([^\/]+)/g,function(i,n){var o=e[n];return o||w('param "'+n+'" not found when generating path for "'+t+'" with params '+JSON.stringify(e)),o||""}),i&&(t+=K(i)),t}function R(t,e,i){var n=t.childVM;if(!n||!e)return!1;if(t.Component!==e.component)return!1;var o=x(n,"canReuse");return"boolean"==typeof o?o:!o||o.call(n,{to:i.to,from:i.from})}function $(t,e,i){var n=t.childVM,o=x(n,"canDeactivate");o?e.callHook(o,n,i,{expectBoolean:!0}):i()}function E(t,e,i){j(t,function(t){if(!e.aborted){var n=x(t,"canActivate");n?e.callHook(n,null,i,{expectBoolean:!0}):i()}})}function P(t,e,i){var n=t.childVM,o=x(n,"deactivate");o?e.callHooks(o,n,i):i()}function V(t,e,i,n,o){var r=e.activateQueue[i];if(!r)return T(t),t._bound&&t.setComponent(null),void(n&&n());var a=t.Component=r.component,s=x(a,"activate"),c=x(a,"data"),l=x(a,"waitForData");t.depth=i,t.activated=!1;var u=void 0,h=!(!c||l);if(o=o&&t.childVM&&t.childVM.constructor===a)u=t.childVM,u.$loadingRouteData=h;else if(T(t),t.unbuild(!0),u=t.build({_meta:{$loadingRouteData:h},created:function(){this._routerView=t}}),t.keepAlive){u.$loadingRouteData=h;var p=u._keepAliveRouterView;p&&(t.childView=p,u._keepAliveRouterView=null)}var d=function(){u.$destroy()},f=function(){if(o)return void(n&&n());var i=e.router;i._rendered||i._transitionOnLoad?t.transition(u):(t.setCurrent?t.setCurrent(u):t.childVM=u,u.$before(t.anchor,null,!1)),n&&n()},v=function(){t.childView&&V(t.childView,e,i+1,null,o||t.keepAlive),f()},m=function(){t.activated=!0,c&&l?S(u,e,c,v,d):(c&&S(u,e,c),v())};s?e.callHooks(s,u,m,{cleanup:d,postActivate:!0}):m()}function O(t,e){var i=t.childVM,n=x(i,"data");n&&S(i,e,n)}function S(t,e,i,n,o){t.$loadingRouteData=!0,e.callHooks(i,t,function(){t.$loadingRouteData=!1,t.$emit("route-data-loaded",t),n&&n()},{cleanup:o,postActivate:!0,processData:function(e){var i=[];if(M(e)&&Object.keys(e).forEach(function(n){var o=e[n];C(o)?i.push(o.then(function(e){t.$set(n,e)})):t.$set(n,o)}),i.length)return i[0].constructor.all(i)}})}function T(t){t.keepAlive&&t.childVM&&t.childView&&(t.childVM._keepAliveRouterView=t.childView),t.childView=null}function M(t){return"[object Object]"===Object.prototype.toString.call(t)}function H(t){return"[object Object]"===Object.prototype.toString.call(t)}function I(t){return t?Array.prototype.slice.call(t):[]}function q(t){var e=t.util,i=e.extend,n=e.isArray,o=e.defineReactive,r=t.prototype._init;t.prototype._init=function(t){t=t||{};var e=t._parent||t.parent||this,i=e.$router,n=e.$route;i&&(this.$router=i,i._children.push(this),this._defineMeta?this._defineMeta("$route",n):o(this,"$route",n)),r.call(this,t)};var a=t.prototype._destroy;t.prototype._destroy=function(){!this._isBeingDestroyed&&this.$router&&this.$router._children.$remove(this),a.apply(this,arguments)};var s=t.config.optionMergeStrategies,c=/^(data|activate|deactivate)$/;s&&(s.route=function(t,e){if(!e)return t;if(!t)return e;var o={};i(o,t);for(var r in e){var a=o[r],s=e[r];a&&c.test(r)?o[r]=(n(a)?a:[a]).concat(s):o[r]=s}return o})}function D(t){var e=t.util,i=t.directive("_component")||t.internalDirectives.component,n=e.extend({},i);e.extend(n,{_isRouterView:!0,bind:function(){var t=this.vm.$route;if(!t)return void w("<router-view> can only be used inside a router-enabled app.");this._isDynamicLiteral=!0,i.bind.call(this);for(var e=void 0,n=this.vm;n;){if(n._routerView){e=n._routerView;break}n=n.$parent}if(e)this.parentView=e,e.childView=this;else{var o=t.router;o._rootView=this}var r=t.router._currentTransition;if(!e&&r.done||e&&e.activated){var a=e?e.depth+1:0;V(this,r,a)}},unbind:function(){this.parentView&&(this.parentView.childView=null),i.unbind.call(this)}}),t.elementDirective("router-view",n)}function N(t){function e(t){return t.protocol===location.protocol&&t.hostname===location.hostname&&t.port===location.port}function i(t,e,i){if(e=e.trim(),e.indexOf(" ")===-1)return void i(t,e);for(var n=e.split(/\s+/),o=0,r=n.length;o<r;o++)i(t,n[o])}var n=t.util,o=n.bind,r=n.isObject,a=n.addClass,s=n.removeClass,c=t.directive("on").priority,l="__vue-router-link-update__",u=0;t.directive("link-active",{priority:9999,bind:function(){for(var t=this,e=String(u++),i=this.el.querySelectorAll("[v-link]"),n=0,o=i.length;n<o;n++){var r=i[n],a=r.getAttribute(l),s=a?a+","+e:e;r.setAttribute(l,s)}this.vm.$on(l,this.cb=function(i,n){i.activeIds.indexOf(e)>-1&&i.updateClasses(n,t.el)})},unbind:function(){this.vm.$off(l,this.cb)}}),t.directive("link",{priority:c-2,bind:function(){var t=this.vm;if(!t.$route)return void w("v-link can only be used inside a router-enabled app.");this.router=t.$route.router,this.unwatch=t.$watch("$route",o(this.onRouteUpdate,this));var e=this.el.getAttribute(l);e&&(this.el.removeAttribute(l),this.activeIds=e.split(",")),"A"===this.el.tagName&&"_blank"===this.el.getAttribute("target")||(this.handler=o(this.onClick,this),this.el.addEventListener("click",this.handler))},update:function(t){this.target=t,r(t)&&(this.append=t.append,this.exact=t.exact,this.prevActiveClass=this.activeClass,this.activeClass=t.activeClass),this.onRouteUpdate(this.vm.$route)},onClick:function(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var i=this.target;if(i)t.preventDefault(),this.router.go(i);else{for(var n=t.target;"A"!==n.tagName&&n!==this.el;)n=n.parentNode;if("A"===n.tagName&&e(n)){t.preventDefault();var o=n.pathname;this.router.history.root&&(o=o.replace(this.router.history.rootRE,"")),this.router.go({path:o,replace:i&&i.replace,append:i&&i.append})}}}},onRouteUpdate:function(t){var e=this.router.stringifyPath(this.target);this.path!==e&&(this.path=e,this.updateActiveMatch(),this.updateHref()),this.activeIds?this.vm.$emit(l,this,t.path):this.updateClasses(t.path,this.el)},updateActiveMatch:function(){this.activeRE=this.path&&!this.exact?new RegExp("^"+this.path.replace(/\/$/,"").replace(at,"").replace(rt,"\\$&")+"(\\/|$)"):null},updateHref:function(){if("A"===this.el.tagName){var t=this.path,e=this.router,i="/"===t.charAt(0),n=t&&("hash"===e.mode||i)?e.history.formatPath(t,this.append):t;n?this.el.href=n:this.el.removeAttribute("href")}},updateClasses:function(t,e){var n=this.activeClass||this.router._linkActiveClass;this.prevActiveClass&&this.prevActiveClass!==n&&i(e,this.prevActiveClass,s);var o=this.path.replace(at,"");t=t.replace(at,""),this.exact?o===t||"/"!==o.charAt(o.length-1)&&o===t.replace(ot,"")?i(e,n,a):i(e,n,s):this.activeRE&&this.activeRE.test(t)?i(e,n,a):i(e,n,s)},unbind:function(){this.el.removeEventListener("click",this.handler),this.unwatch&&this.unwatch()}})}function z(t,e){var i=e.component;ct.util.isPlainObject(i)&&(i=e.component=ct.extend(i)),"function"!=typeof i&&(e.component=null,w('invalid component for route "'+t+'".'))}var Q={};Q.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.prototype={to:function(t,e){var i=this.delegate;if(i&&i.willAddRoute&&(t=i.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,t,e,this.delegate)}return this}},e.prototype={add:function(t,e){this.routes[t]=e},addChild:function(t,n,o,r){var a=new e(n);this.children[t]=a;var s=i(t,a,r);r&&r.contextEntered&&r.contextEntered(n,s),o(s)}};var F=["/",".","*","+","?","|","(",")","[","]","{","}","\\"],U=new RegExp("(\\"+F.join("|\\")+")","g"),L=!1;l.prototype={eachChar:function(t){for(var e,i=this.string,n=0,o=i.length;n<o;n++)e=i.charAt(n),t({validChars:e})},regex:function(){return this.string.replace(U,"\\$1")},generate:function(){return this.string}},u.prototype={eachChar:function(t){t({invalidChars:"/",repeat:!0})},regex:function(){return"([^/]+)"},generate:function(t){var e=t[this.name];return null==e?":"+this.name:e}},h.prototype={eachChar:function(t){t({invalidChars:"",repeat:!0})},regex:function(){return"(.+)"},generate:function(t){var e=t[this.name];return null==e?":"+this.name:e}},p.prototype={eachChar:function(){},regex:function(){return""},generate:function(){return""}},f.prototype={get:function(t){for(var e=this.nextStates,i=0,n=e.length;i<n;i++){var o=e[i],r=o.charSpec.validChars===t.validChars;if(r=r&&o.charSpec.invalidChars===t.invalidChars)return o}},put:function(t){var e;return(e=this.get(t))?e:(e=new f(t),this.nextStates.push(e),t.repeat&&e.nextStates.push(e),e)},match:function(t){for(var e,i,n,o=this.nextStates,r=[],a=0,s=o.length;a<s;a++)e=o[a],i=e.charSpec,"undefined"!=typeof(n=i.validChars)?n.indexOf(t)!==-1&&r.push(e):"undefined"!=typeof(n=i.invalidChars)&&n.indexOf(t)===-1&&r.push(e);return r}};var B=Object.create||function(t){function e(){}return e.prototype=t,new e};g.prototype=B({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var G=function(){this.rootState=new f,this.names={}};G.prototype={add:function(t,e){for(var i,n=this.rootState,o="^",r={},a=[],s=[],c=!0,l=0,u=t.length;l<u;l++){var h=t[l],f=[],v=d(h.path,f,r);s=s.concat(v);for(var m=0,g=v.length;m<g;m++){var b=v[m];b instanceof p||(c=!1,n=n.put({validChars:"/"}),o+="/",n=y(n,b),o+=b.regex())}var _={handler:h.handler,names:f};a.push(_)}c&&(n=n.put({validChars:"/"}),o+="/"),n.handlers=a,n.regex=new RegExp(o+"$"),n.specificity=r,(i=e&&e.as)&&(this.names[i]={segments:s,handlers:a})},handlersFor:function(t){var e=this.names[t],i=[];if(!e)throw new Error("There is no route named "+t);for(var n=0,o=e.handlers.length;n<o;n++)i.push(e.handlers[n]);return i},hasRoute:function(t){return!!this.names[t]},generate:function(t,e){var i=this.names[t],n="";if(!i)throw new Error("There is no route named "+t);for(var o=i.segments,r=0,a=o.length;r<a;r++){var s=o[r];s instanceof p||(n+="/",n+=s.generate(e))}return"/"!==n.charAt(0)&&(n="/"+n),e&&e.queryParams&&(n+=this.generateQueryString(e.queryParams)),n},generateQueryString:function(t){var e=[],i=[];for(var n in t)t.hasOwnProperty(n)&&i.push(n);i.sort();for(var o=0,r=i.length;o<r;o++){n=i[o];var a=t[n];if(null!=a){var s=encodeURIComponent(n);if(c(a))for(var l=0,u=a.length;l<u;l++){var h=n+"[]="+encodeURIComponent(a[l]);e.push(h)}else s+="="+encodeURIComponent(a),e.push(s)}}return 0===e.length?"":"?"+e.join("&")},parseQueryString:function(t){for(var e=t.split("&"),i={},n=0;n<e.length;n++){var o,r=e[n].split("="),a=_(r[0]),s=a.length,c=!1;1===r.length?o="true":(s>2&&"[]"===a.slice(s-2)&&(c=!0,a=a.slice(0,s-2),i[a]||(i[a]=[])),o=r[1]?_(r[1]):""),c?i[a].push(o):i[a]=o}return i},recognize:function(t,e){L=e;var i,n,o,r,a=[this.rootState],c={},l=!1;if(r=t.indexOf("?"),r!==-1){var u=t.substr(r+1,t.length);t=t.substr(0,r),u&&(c=this.parseQueryString(u))}if(t=s(t)){for("/"!==t.charAt(0)&&(t="/"+t),i=t.length,i>1&&"/"===t.charAt(i-1)&&(t=t.substr(0,i-1),l=!0),n=0,o=t.length;n<o&&(a=m(a,t.charAt(n)),a.length);n++);var h=[];for(n=0,o=a.length;n<o;n++)a[n].handlers&&h.push(a[n]);a=v(h);var p=h[0];return p&&p.handlers?(l&&"(.+)$"===p.regex.source.slice(-5)&&(t+="/"),b(p,t,c)):void 0}}},G.prototype.map=r;var K=G.prototype.generateQueryString,J={},X=void 0,Y=/#.*$/,W=function(){function t(e){var i=e.root,n=e.onChange;Q.classCallCheck(this,t),i&&"/"!==i?("/"!==i.charAt(0)&&(i="/"+i),this.root=i.replace(/\/$/,""),this.rootRE=new RegExp("^\\"+this.root)):this.root=null,this.onChange=n;var o=document.querySelector("base");this.base=o&&o.getAttribute("href")}return t.prototype.start=function(){var t=this;this.listener=function(e){var i=location.pathname+location.search;t.root&&(i=i.replace(t.rootRE,"")),t.onChange(i,e&&e.state,location.hash)},window.addEventListener("popstate",this.listener),this.listener()},t.prototype.stop=function(){window.removeEventListener("popstate",this.listener)},t.prototype.go=function(t,e,i){var n=this.formatPath(t,i);e?history.replaceState({},"",n):(history.replaceState({pos:{x:window.pageXOffset,y:window.pageYOffset}},"",location.href),history.pushState({},"",n));var o=t.match(Y),r=o&&o[0];t=n.replace(Y,"").replace(this.rootRE,""),this.onChange(t,null,r)},t.prototype.formatPath=function(t,e){return"/"===t.charAt(0)?this.root?this.root+"/"+t.replace(/^\//,""):t:k(this.base||location.pathname,t,e)},t}(),Z=function(){function t(e){var i=e.hashbang,n=e.onChange;Q.classCallCheck(this,t),this.hashbang=i,this.onChange=n}return t.prototype.start=function(){var t=this;this.listener=function(){var e=location.hash,i=e.replace(/^#!?/,"");"/"!==i.charAt(0)&&(i="/"+i);var n=t.formatPath(i);if(n!==e)return void location.replace(n);var o=location.search&&e.indexOf("?")>-1?"&"+location.search.slice(1):location.search;t.onChange(e.replace(/^#!?/,"")+o)},window.addEventListener("hashchange",this.listener),this.listener()},t.prototype.stop=function(){window.removeEventListener("hashchange",this.listener)},t.prototype.go=function(t,e,i){t=this.formatPath(t,i),e?location.replace(t):location.hash=t},t.prototype.formatPath=function(t,e){var i="/"===t.charAt(0),n="#"+(this.hashbang?"!":"");return i?n+t:n+k(location.hash.replace(/^#!?/,""),t,e)},t}(),tt=function(){function t(e){var i=e.onChange;Q.classCallCheck(this,t),this.onChange=i,this.currentPath="/"}return t.prototype.start=function(){this.onChange("/")},t.prototype.stop=function(){},t.prototype.go=function(t,e,i){t=this.currentPath=this.formatPath(t,i),this.onChange(t)},t.prototype.formatPath=function(t,e){return"/"===t.charAt(0)?t:k(this.currentPath,t,e)},t}(),et=function(){function t(e,i,n){Q.classCallCheck(this,t),this.router=e,this.to=i,this.from=n,this.next=null,this.aborted=!1,this.done=!1}return t.prototype.abort=function(){if(!this.aborted){this.aborted=!0;var t=!this.from.path&&"/"===this.to.path;t||this.router.replace(this.from.path||"/")}},t.prototype.redirect=function(t){this.aborted||(this.aborted=!0,"string"==typeof t?t=A(t,this.to.params,this.to.query):(t.params=t.params||this.to.params,t.query=t.query||this.to.query),this.router.replace(t))},t.prototype.start=function(t){for(var e=this,i=[],n=this.router._rootView;n;)i.unshift(n),n=n.childView;var o=i.slice().reverse(),r=this.activateQueue=I(this.to.matched).map(function(t){return t.handler}),a=void 0,s=void 0;for(a=0;a<o.length&&R(o[a],r[a],e);a++);a>0&&(s=o.slice(0,a),i=o.slice(a).reverse(),r=r.slice(a)),e.runQueue(i,$,function(){e.runQueue(r,E,function(){e.runQueue(i,P,function(){if(e.router._onTransitionValidated(e),s&&s.forEach(function(t){return O(t,e)}),i.length){var n=i[i.length-1],o=s?s.length:0;V(n,e,o,t)}else t()})})})},t.prototype.runQueue=function(t,e,i){function n(r){r>=t.length?i():e(t[r],o,function(){n(r+1)})}var o=this;n(0)},t.prototype.callHook=function(t,e,i){var n=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],o=n.expectBoolean,r=void 0!==o&&o,a=n.postActivate,s=void 0!==a&&a,c=n.processData,l=n.cleanup,u=this,h=!1,p=function(){l&&l(),u.abort()},d=function(t){if(s?v():p(),t&&!u.router._suppress)throw w("Uncaught error during transition: "),t instanceof Error?t:new Error(t)},f=function(t){try{d(t)}catch(e){setTimeout(function(){throw e},0)}},v=function(){return h?void w("transition.next() should be called only once."):(h=!0,u.aborted?void(l&&l()):void(i&&i()))},m=function(e){"boolean"==typeof e?e?v():p():C(e)?e.then(function(t){t?v():p()},f):t.length||v()},g=function(t){var e=void 0;try{e=c(t)}catch(i){return d(i)}C(e)?e.then(v,f):v()},b={to:u.to,from:u.from,abort:p,next:c?g:v,redirect:function(){u.redirect.apply(u,arguments)}},y=void 0;try{y=t.call(e,b)}catch(_){return d(_)}r?m(y):C(y)?c?y.then(g,f):y.then(v,f):c&&H(y)?g(y):t.length||v()},t.prototype.callHooks=function(t,e,i,n){var o=this;Array.isArray(t)?this.runQueue(t,function(t,i,r){o.aborted||o.callHook(t,e,r,n)},i):this.callHook(t,e,i,n)},t}(),it=/^(component|subRoutes|fullPath)$/,nt=function ut(t,e){var i=this;Q.classCallCheck(this,ut);var n=e._recognizer.recognize(t);n&&([].forEach.call(n,function(t){for(var e in t.handler)it.test(e)||(i[e]=t.handler[e])}),this.query=n.queryParams,this.params=[].reduce.call(n,function(t,e){if(e.params)for(var i in e.params)t[i]=e.params[i];return t},{})),this.path=t,this.matched=n||e._notFoundHandler,Object.defineProperty(this,"router",{enumerable:!1,value:e}),Object.freeze(this)},ot=/\/$/,rt=/[-.*+?^${}()|[\]\/\\]/g,at=/\?.*$/,st={"abstract":tt,hash:Z,html5:W},ct=void 0,lt=function(){function t(){var e=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.hashbang,o=void 0===n||n,r=i["abstract"],a=void 0!==r&&r,s=i.history,c=void 0!==s&&s,l=i.saveScrollPosition,u=void 0!==l&&l,h=i.transitionOnLoad,p=void 0!==h&&h,d=i.suppressTransitionError,f=void 0!==d&&d,v=i.root,m=void 0===v?null:v,g=i.linkActiveClass,b=void 0===g?"v-link-active":g;if(Q.classCallCheck(this,t),!t.installed)throw new Error("Please install the Router with Vue.use() before creating an instance.");this.app=null,this._children=[],this._recognizer=new G,this._guardRecognizer=new G,this._started=!1,this._startCb=null,this._currentRoute={},this._currentTransition=null,this._previousTransition=null,this._notFoundHandler=null,this._notFoundRedirect=null,this._beforeEachHooks=[],this._afterEachHooks=[],this._rendered=!1,this._transitionOnLoad=p,this._root=m,this._abstract=a,this._hashbang=o;var y="undefined"!=typeof window&&window.history&&window.history.pushState;this._history=c&&y,this._historyFallback=c&&!y;var _=ct.util.inBrowser;this.mode=!_||this._abstract?"abstract":this._history?"html5":"hash";var w=st[this.mode];this.history=new w({root:m,hashbang:this._hashbang,onChange:function(t,i,n){e._match(t,i,n)}}),this._saveScrollPosition=u,this._linkActiveClass=b,this._suppress=f}return t.prototype.map=function(t){for(var e in t)this.on(e,t[e]);return this},t.prototype.on=function(t,e){return"*"===t?this._notFound(e):this._addRoute(t,e,[]),this},t.prototype.redirect=function(t){for(var e in t)this._addRedirect(e,t[e]);return this},t.prototype.alias=function(t){for(var e in t)this._addAlias(e,t[e]);return this},t.prototype.beforeEach=function(t){return this._beforeEachHooks.push(t),this},t.prototype.afterEach=function(t){return this._afterEachHooks.push(t),this},t.prototype.go=function(t){var e=!1,i=!1;ct.util.isObject(t)&&(e=t.replace,i=t.append),t=this.stringifyPath(t),t&&this.history.go(t,e,i)},t.prototype.replace=function(t){"string"==typeof t&&(t={path:t}),t.replace=!0,this.go(t)},t.prototype.start=function(t,e,i){if(this._started)return void w("already started.");if(this._started=!0,this._startCb=i,!this.app){if(!t||!e)throw new Error("Must start vue-router with a component and a root container.");if(t instanceof ct)throw new Error("Must start vue-router with a component, not a Vue instance.");this._appContainer=e;var n=this._appConstructor="function"==typeof t?t:ct.extend(t);n.options.name=n.options.name||"RouterApp"}if(this._historyFallback){var o=window.location,r=new W({root:this._root}),a=r.root?o.pathname.replace(r.rootRE,""):o.pathname;if(a&&"/"!==a)return void o.assign((r.root||"")+"/"+this.history.formatPath(a)+o.search)}this.history.start()},t.prototype.stop=function(){this.history.stop(),this._started=!1},t.prototype.stringifyPath=function(t){var e="";if(t&&"object"==typeof t){if(t.name){var i=ct.util.extend,n=this._currentTransition&&this._currentTransition.to.params,o=t.params||{},r=n?i(i({},n),o):o;e=encodeURI(this._recognizer.generate(t.name,r))}else t.path&&(e=encodeURI(t.path));if(t.query){var a=this._recognizer.generateQueryString(t.query);e+=e.indexOf("?")>-1?"&"+a.slice(1):a}}else e=encodeURI(t?t+"":"");return e},t.prototype._addRoute=function(t,e,i){if(z(t,e),e.path=t,e.fullPath=(i.reduce(function(t,e){return t+e.path},"")+t).replace("//","/"),i.push({path:t,handler:e}),this._recognizer.add(i,{as:e.name}),e.subRoutes)for(var n in e.subRoutes)this._addRoute(n,e.subRoutes[n],i.slice())},t.prototype._notFound=function(t){z("*",t),this._notFoundHandler=[{handler:t}]},t.prototype._addRedirect=function(t,e){"*"===t?this._notFoundRedirect=e:this._addGuard(t,e,this.replace)},t.prototype._addAlias=function(t,e){this._addGuard(t,e,this._match)},t.prototype._addGuard=function(t,e,i){var n=this;this._guardRecognizer.add([{path:t,handler:function(t,o){var r=A(e,t.params,o);i.call(n,r)}}])},t.prototype._checkGuard=function(t){var e=this._guardRecognizer.recognize(t,!0);return e?(e[0].handler(e[0],e.queryParams),!0):this._notFoundRedirect&&(e=this._recognizer.recognize(t),!e)?(this.replace(this._notFoundRedirect),!0):void 0},t.prototype._match=function(t,e,i){var n=this;if(!this._checkGuard(t)){var o=this._currentRoute,r=this._currentTransition;if(r){if(r.to.path===t)return;if(o.path===t)return r.aborted=!0,void(this._currentTransition=this._prevTransition);r.aborted=!0}var a=new nt(t,this),s=new et(this,a,o);this._prevTransition=r,this._currentTransition=s,this.app||!function(){var t=n;n.app=new n._appConstructor({el:n._appContainer,created:function(){this.$router=t},_meta:{$route:a}})}();var c=this._beforeEachHooks,l=function(){s.start(function(){n._postTransition(a,e,i)})};c.length?s.runQueue(c,function(t,e,i){s===n._currentTransition&&s.callHook(t,null,i,{expectBoolean:!0})},l):l(),!this._rendered&&this._startCb&&this._startCb.call(null),this._rendered=!0}},t.prototype._onTransitionValidated=function(t){var e=this._currentRoute=t.to;this.app.$route!==e&&(this.app.$route=e,this._children.forEach(function(t){t.$route=e})),this._afterEachHooks.length&&this._afterEachHooks.forEach(function(e){return e.call(null,{to:t.to,from:t.from})}),this._currentTransition.done=!0},t.prototype._postTransition=function(t,e,i){var n=e&&e.pos;n&&this._saveScrollPosition?ct.nextTick(function(){window.scrollTo(n.x,n.y)}):i&&ct.nextTick(function(){var t=document.getElementById(i.slice(1));t&&window.scrollTo(window.scrollX,t.offsetTop)})},t}();return lt.installed=!1,lt.install=function(t){return lt.installed?void w("already installed."):(ct=t,q(ct),D(ct),N(ct),J.Vue=ct,void(lt.installed=!0))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(lt),lt})},3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={"/add":{component:function(t){i.e(1,function(e){var i=[e(4)];t.apply(null,i)}.bind(this))}},"/welcome":{component:function(t){i.e(2,function(e){var i=[e(31)];t.apply(null,i)}.bind(this))}},"/":{component:function(t){i.e(2,function(e){var i=[e(31)];t.apply(null,i)}.bind(this))}},"/project/:id/quit":{component:function(t){i.e(3,function(e){var i=[e(34)];t.apply(null,i)}.bind(this))}},"/project/:id/release":{component:function(t){i.e(4,function(e){var i=[e(37)];t.apply(null,i)}.bind(this))}},"/project/:id/settings":{component:function(t){i.e(5,function(e){var i=[e(40)];t.apply(null,i)}.bind(this))}},"/project/:id/export":{component:function(t){i.e(6,function(e){var i=[e(43)];t.apply(null,i)}.bind(this))}},"/project/:id/members":{component:function(t){i.e(7,function(e){var i=[e(46)];t.apply(null,i)}.bind(this))}},"/profile/relation":{component:function(t){i.e(8,function(e){var i=[e(50)];t.apply(null,i)}.bind(this))}},"/profile/security":{component:function(t){i.e(9,function(e){var i=[e(53)];t.apply(null,i)}.bind(this))}},"/profile":{component:function(t){i.e(10,function(e){var i=[e(56)];t.apply(null,i)}.bind(this))}},"/project/:id/transfer":{component:function(t){i.e(11,function(e){var i=[e(59)];t.apply(null,i)}.bind(this))}},"/project/:id":{component:function(t){$("body").addClass("loading"),i.e(12,function(e){var i=[e(62)];t.apply(null,i)}.bind(this))}}}},49:function(t,e,i){t.exports=i.p+"f548f0c825d33e93f4ccd3cb27b33ea7.jpg"},137:function(t,e,i){var n,o;n=i(138),o=i(139),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},138:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){a["default"].get("/project/list.json",{},function(t){s.projects=t.data.projects},null,function(t){return location.href.indexOf("/project/demo")!=-1})}Object.defineProperty(e,"__esModule",{value:!0});var r=i(9),a=n(r),s={showContent:!1,projects:[],filter:""};e["default"]={data:function(){return s},created:function(){o(this)},watch:{reloadProject:function(t){t&&(o(this),this.reloadProject=!1)}},methods:{logout:function(){a["default"].logout()}}}},139:function(t,e,i){t.exports=' <div class="db-left-content dlc1 bg"> <div class="ta-c logo"><a v-link="\'/\'"><img src='+i(140)+'></a></div> <div class="dbl-projects hide"> <div class=db-left-search> <div class=cb> <div class=fl><i class="iconfont icon-sousuo"></i></div> <div class=fl> <input type=text v-model=filter value={{filter}} placeholder=快速查找项目> </div> </div> </div> <div class=line></div> <br/> <ul> <li class=db-item><a v-link="{path:\'/add\'}" class=bd-add> <i class="iconfont icon-add-circle"></i>创建项目</a></li> <li class=line></li> <li class=bd-project-title>我的项目</li> <li class=db-item v-for="item in projects | filterBy filter in \'name\'"> <a v-link="{ path: \'/project/\'+item.id,params:{name:item.name}}"><i class="iconfont icon-projects"></i>{{item.name}}</a> </li> </ul> </div> <div class=dbl-userinfo> <br/> <br/> <br/> <br/> <ul> <li class=db-item> <a v-link="{ path: \'/profile\'}"><i class="iconfont icon-projects"></i>个人信息</a> </li> <li class=db-item> <a v-link="{ path: \'/profile/security\'}"><i class="iconfont icon-safe"></i>安全设置</a> </li> <li class=db-item> <a v-link="{ path: \'/profile/relation\'}"><i class="iconfont icon-relation"></i>关联账户</a> </li> <li class=db-item> <a v-on:click.stop.prevent=logout><i class="iconfont icon-logout"></i>退出登录</a> </li> </ul> </div> </div> <div class="dlc2 bg"> <div class=db-left-bar> <div class="logo ta-c"><a v-link="\'/\'"><img src='+i(141)+'></a></div> <br/> <br/> <br/> <ul> <li class="db-item ta-c"><a v-link="{path:\'/add\'}"><i class="iconfont icon-add-circle"></i></a></li> <li class="db-item ta-c" v-on:click="showContent=!showContent"><a><i class="iconfont icon-projects" v-bind:class="{\'active\':showContent}"></i></a></li> </ul> </div> <div class=db-left-content v-show=showContent> <div class="ta-c logo"><a href=/ ><img src='+i(140)+'></a></div> <div class=db-left-search> <div class=cb> <div class=fl><i class="iconfont icon-sousuo"></i></div> <div class=fl> <input type=text placeholder=快速查找项目 value={{filter}} v-model=filter> </div> </div> </div> <div class=line></div> <br/> <ul> <li class=db-item><a v-link="{path:\'/add\'}" class=bd-add><i class="iconfont icon-add-circle"></i>创建项目</a></li> <li class=line></li> <li class=bd-project-title>我的项目</li> <li class=db-item v-for="item in projects | filterBy filter in \'name\'"> <a v-link="{ path: \'/project/\'+item.id,params:{name:item.name}}" v-on:click="showContent=false"><i class="iconfont icon-projects"></i>{{item.name}}</a> </li> </ul> </div> <div class=db-left-layer v-bind:class="{\'hide\':!showContent}" v-on:click="showContent=false"></div> </div> '},140:function(t,e,i){t.exports=i.p+"cc7ad20ab73b9cf7a1377320ec8a6ab1.png"},141:function(t,e,i){t.exports=i.p+"82af9e38a28b631a59e4707106f4184b.png"},142:function(t,e,i){var n,o;n=i(143),o=i(144),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},143:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(9),r=n(o);document.addEventListener("route.click",function(t){a.path=t.detail.path});var a={path:"",status:{show:""},user:r["default"].user(),messages:[]};$(document).on("click",function(){a.status.show=""}),e["default"]={data:function(){return a},watch:{path:function(t){t&&0==t.indexOf("/profile")?$("body").addClass("profile"):$("body").removeClass("profile")}},methods:{go:function(t){this.$route.router.go({path:"/project"+this.projectId+t})},logout:function(){r["default"].logout()}}}},144:function(t,e,i){t.exports=' <li class="fl db-back db-item" v-if="path.indexOf(\'/profile\')==0"><a v-link="\'/\'"><i class="iconfont icon-left"></i>返回控制台 </a></li> <template v-if=$parent.showProject> <li class="fl db-item"><a class=page-name>{{pageName}}</a></li> <li class="fl db-item"><a v-link="\'/project/\'+projectId+\'/members\'" v-on:click="pageName=\'成员管理\'">成员管理</a></li> <li class="fl db-item"><a v-link="\'/project/\'+projectId+\'/settings\'" v-on:click="pageName=\'项目设置\'">项目设置</a></li> <li class="fl db-item"> <a v-on:click.stop.prevent="status.show=\'more\'">更多操作<i class="iconfont icon-angeldownblock"></i></a> <ul class=db-item-sub v-show="status.show==\'more\'"> <li class=db-item><a v-link="\'/project/\'+projectId+\'/quit\'" v-on:click="pageName=\'退出项目\'"><i class="iconfont icon-shanchu"></i>退出项目</a> </li> <li class=db-item><a v-link="\'/project/\'+projectId+\'/transfer\'" v-on:click="pageName=\'项目转让\'"><i class="iconfont icon-shanchu"></i>项目转让</a></li> <li class=db-item><a v-link="\'/project/\'+projectId+\'/release\'" v-on:click="pageName=\'解散项目\'"><i class="iconfont icon-shanchu"></i>删除项目</a></li> <li class=db-item><a v-link="\'/project/\'+projectId+\'/export\'" v-on:click="pageName=\'项目导出\'"><i class="iconfont icon-shanchu"></i>导出项目</a> </li> </ul> </li> </template> <li class="fr db-item profile"> <a v-on:click.stop.prevent="status.show=\'profile\'" class=cb> <img v-bind:src=user.avatar v-if=user.avatar class="db-user-logo fl"> <img v-else src='+i(49)+' class="db-user-logo fl"> <span class=fl>个人面板</span></a> <ul class=db-item-sub v-show="status.show==\'profile\'" v-cloak> <li class="db-item db-profile-info"> <div class=cb> <img v-bind:src=user.avatar v-if=user.avatar class="db-user-logo fl"> <img src='+i(49)+' v-else=user.avatar class="db-user-logo fl"> <div class="fl db-nav-sub-profile"> <p class=db-nav-profile-name>{{user.nickname}}</p> <p class=db-nav-profile-email>{{user.email}}</p> </div> </div> </li> <li class=db-item><a v-link="\'/profile\'"><i class="iconfont icon-user"></i>个人中心</a></li> <li class=db-item><a v-link="\'/profile/security\'"><i class="iconfont icon-setting"></i>安全设置</a></li> <li class=db-item><a v-on:click.stop.prevent=logout><i class="iconfont icon-logout"></i>退出登录</a></li> </ul> </li> <li class="fr db-item db-msg"> <span class=db-subscript v-if="messages && messages.length>0">{{messages.length}}</span> <ul class=db-item-sub v-show="status.show==\'message\'" v-if="messages.length>0"> <li class="db-item item-title"> <div class="cb db-nav-msg-box"> <span class=fl>站内消息通知</span> </div> </li> <li class=db-item v-for="item in messages"> <a href="">{{item.content}}</a> <p><i class="iconfont icon-time"></i>{{item.createTime}}</p> </li> </ul> </li> <li class="fr db-item"> <a href=/ >首页</a> </li> ';
}});