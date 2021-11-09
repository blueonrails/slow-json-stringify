var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var g=a[e];if(!(g in c))return;c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var g=a.split(".");a=1===g.length;e=g[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var d=0;d<g.length-1;d++){var k=g[d];if(!(k in e))return;e=e[k]}g=g[g.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[g]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,g,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[g]&&(c=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[g]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(g):$jscomp.POLYFILL_PREFIX+c+"$"+g),$jscomp.defineProperty(e,$jscomp.propertyToPolyfillSymbol[g],{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var g=e.length;c=c||0;for(0>c&&(c=Math.max(c+g,0));c<g;c++){var d=e[c];if(d===b||Object.is(d,b))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,c||0)}},"es6","es3");
$jscomp.polyfill("Array.from",function(a){return a?a:function(b,c,e){c=null!=c?c:function(l){return l};var g=[],d="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof d){b=d.call(b);for(var k=0;!(d=b.next()).done;)g.push(c.call(e,d.value,k++))}else for(d=b.length,k=0;k<d;k++)g.push(c.call(e,b[k],k));return g}},"es6","es3");$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(d,k){this.$jscomp$symbol$id_=d;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:k})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0,g=function(d){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new b(c+(d||"")+"_"+e++,d)};return g},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=$jscomp.global[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&$jscomp.defineProperty(e.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){a instanceof String&&(a+="");var c=0,e=!1,g={next:function(){if(!e&&c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e=!0;return{done:!0,value:void 0}}};g[Symbol.iterator]=function(){return g};return g};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
var i=function(a,b){return function(){return b||a((b={exports:{}}).exports,b),b.exports}},m=i(function(a,b){b.exports=function(c){c=JSON.stringify(c,function(g,d){return d.isSJS?d.type+"__sjs":d});var e=JSON.parse(c);return{preparedString:c,preparedSchema:e}}}),f=i(function(a,b){var c=function(d){return d instanceof Function?function(k){for(var l="",n=k.length,p=0;p<n-1;p++)l+=d(k[p])+",";return l+=d(k[n-1]),"["+l+"]"}:function(k){return JSON.stringify(k)}},e=["number","string","boolean","array",
"null"],g=RegExp('\\n|\\r|\\t|\\"|\\\\',"gm");b.exports={_find:function(d){for(var k=d.length,l="obj",n=0;n<k;n++)l=l.replace(/^/,"("),l+=" || {})."+d[n];return eval("((obj) => "+l+")")},escape:function(d){d=void 0===d?g:d;return function(k){return k.replace(d,function(l){return"\\"+l})}},attr:function(d,k){if(!e.includes(d))throw Error('Expected one of: "number", "string", "boolean", "null". received "'+d+'" instead');return{isSJS:!0,type:d,serializer:"array"===d?c(k):k||function(l){return l}}}}}),
h=i(function(a,b){var c=f()._find;b.exports=function(e,g){var d=[];return function p(l,n){n=void 0===n?[]:n;if(/__sjs/.test(l)){var q=Array.from(n);q=c(q);var r=q(g).serializer;d.push({serializer:r,find:q,name:n[n.length-1]})}else return Object.keys(l).map(function(t){return p(l[t],[].concat($jscomp.arrayFromIterable(n),[t]))})}(e),d}}),x=i(function(a,b){b.exports=function(c,e){return c.replace(/"\w+__sjs"/gm,function(g){return/string/.test(g)?'"__par__"':"__par__"}).split("__par__").map(function(g,
d,k){var l='("'+(e[d]||{}).name+'":("?))$',n="(,?)"+l;d=/^("}|})/.test(k[d+1]||"");l=new RegExp(d?n:l);d=/^(",|,|")/;return{pure:g,prevUndef:g.replace(d,""),isUndef:g.replace(l,""),bothUndef:g.replace(d,"").replace(l,""),nextUndef:g.replace(new RegExp(n),"")}})}}),$=i(function(a,b){b.exports=function(c){return function(e,g){var d=c[g],k=e[g],l=e[g-1];e=e[g+1];return"undefined"!=typeof k?"undefined"==typeof l?d.prevUndef+k:d.pure+k:"undefined"==typeof l?d.bothUndef:"undefined"==typeof e?d.nextUndef:
d.isUndef}}}),E=m(),R=h(),j=x(),w=$(),$jscomp$destructuring$var4=f(),J=$jscomp$destructuring$var4.attr,v=$jscomp$destructuring$var4.escape,A=function(a){var b=E(a),c=b.preparedString,e=R(b.preparedSchema,a);a=j(c,e);var g=w(a),d=a[a.length-1].pure,k=e.length;return function(l){for(var n=e.map(function(r){var t=r.serializer;r=r.find;return t(r(l))}),p="",q=0;q<k;q++)p+=g(n,q);return p+d}};module.exports={sjs:A,attr:J,escape:v};
