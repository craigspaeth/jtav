window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+C.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+j.join(r+" ")+r).split(" "),c(i,t,n))}var l,u,f,d="2.6.2",p={},h=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),g=y.style,b=":)",E=({}.toString,"Webkit Moz O ms"),C=E.split(" "),j=E.toLowerCase().split(" "),S={},w=[],x=w.slice,N=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),m.style.overflow=s),!!a},F={}.hasOwnProperty;f=o(F,"undefined")||o(F.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r}),S.backgroundsize=function(){return s("backgroundSize")},S.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},S.generatedcontent=function(){var e;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e};for(var T in S)f(S,T)&&(u=T.toLowerCase(),p[u]=S[T](),w.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,h!==void 0&&h&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},m++,e[h]=m,v[m]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||c(e,r),e}var l,u,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,v={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===void 0||e.createDocumentFragment===void 0||e.createElement===void 0}()}catch(n){l=!0,u=!0}})();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),p._version=d,p._domPrefixes=j,p._cssomPrefixes=C,p.testProp=function(e){return a([e])},p.testAllProps=s,p.testStyles=N,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+w.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();g=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){C.removeChild(f)},50);for(var r in N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,v=0,b={t:r,s:n,e:i,a:s,x:l};1===N[n]&&(v=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},y.splice(o,0,b),"img"!=e&&(v||2===N[n]?(C.insertBefore(f,E?null:m),h(u,l)):N[n].push(f))}function l(e,t,n,r,i){return g=0,t=t||"j",o(e)?s("c"==t?S:j,e,t,this.i++,n,r,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,C=E?p:m.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,j=b?"object":p?"script":"img",S=p?"script":j,w=Array.isArray||function(e){return"[object Array]"==v.call(e)},x=[],N={},F={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=F[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=x[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(N[s.url]?s.noexec=!0:N[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),N[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(w(e))for(s=0;e.length>s;s++)l=e[s],o(l)?a(l,0,f,0):w(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){F[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),s?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};