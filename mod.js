// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,i,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,u=parseInt(i,10),!isFinite(u)){if(!t(i))throw new Error("invalid integer. Value: "+i);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(i=(-u).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=u.toString(r),u||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":s(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var F=String.fromCharCode,k=isNaN,x=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,i,n,o,s,p,l,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,l=0;l<e.length;l++)if(c(i=e[l]))s+=i;else{if(r=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=u(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_(i.arg,i.width,i.padRight)),s+=i.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,a;for(t=[],a=0,i=j.exec(e);i;)(r=e.slice(a,j.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),a=j.lastIndex,i=j.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function A(e){return"string"==typeof e}function T(e){var r,t;if(!A(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return B.apply(null,r)}var D,I=Object.prototype,O=I.toString,C=I.__defineGetter__,P=I.__defineSetter__,R=I.__lookupGetter__,Z=I.__lookupSetter__;D=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(R.call(e,r)||Z.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C&&C.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var G=D;function W(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"string"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return X&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var M,q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";M=N()?function(e){var r,t,i,a,n;if(null==e)return U.call(e);t=e[H],n=H,r=null!=(a=e)&&z.call(a,n);try{e[H]=void 0}catch(r){return U.call(e)}return i=U.call(e),r?e[H]=t:delete e[H],i}:function(e){return U.call(e)};var J=M,K=String.prototype.valueOf;var Q=N();function Y(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function ee(e){return L(e)||Y(e)}W(ee,"isPrimitive",L),W(ee,"isObject",Y);var re="function"==typeof Object.defineProperty?Object.defineProperty:null;var te=Object.defineProperty;function ie(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ne(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(a):ae(a)+e,i&&(e="-"+e)),e}var oe=String.prototype.toLowerCase,ue=String.prototype.toUpperCase;function ce(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ne(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ue.call(e.specifier)?ue.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function se(e){return"string"==typeof e}var pe=Math.abs,le=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":pe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ye,"e"),t=ge.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,we,"$1."),t=ge.call(t,be,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):le.call(t)}function _e(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Fe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_e(i):_e(i)+e}var ke=String.fromCharCode,xe=isNaN,Se=Array.isArray;function Be(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function je(e){var r,t,i,a,n,o,u,c,s;if(!Se(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,c=0;c<e.length;c++)if(se(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=Be(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,xe(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,xe(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!xe(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xe(n)?String(i.arg):ke(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ee(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Fe(i.arg,i.width,i.padRight)),o+=i.arg||"",u+=1}return o}var Ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,t,i,a;for(t=[],a=0,i=Ve.exec(e);i;)(r=e.slice(a,Ve.lastIndex-i[0].length)).length&&t.push(r),t.push($e(i)),a=Ve.lastIndex,i=Ve.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Te(e){return"string"==typeof e}function De(e){var r,t;if(!Te(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ae(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return je.apply(null,r)}var Ie,Oe=Object.prototype,Ce=Oe.toString,Pe=Oe.__defineGetter__,Re=Oe.__defineSetter__,Ze=Oe.__lookupGetter__,Ge=Oe.__lookupSetter__;function We(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}Ie=function(){try{return re({},"x",{}),!0}catch(e){return!1}}()?te:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Ce.call(e))throw new TypeError(De("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ce.call(t))throw new TypeError(De("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Ze.call(e,r)||Ge.call(e,r)?(i=e.__proto__,e.__proto__=Oe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Pe&&Pe.call(e,r,t.get),o&&Re&&Re.call(e,r,t.set),e};var Le=/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/;function Xe(e){return L(e)&&Le.test(e)}Ie(We,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:Le});export{Xe as default};
//# sourceMappingURL=mod.js.map
