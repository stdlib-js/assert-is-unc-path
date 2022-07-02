// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return u({},"x",{}),!0}catch(u){return!1}},r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,l=e.__lookupGetter__,i=e.__lookupSetter__;var c=r,f=function(u,t,r){var c,f,p,y;if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. First argument must be an object. Value: `"+u+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(u,t)||i.call(u,t)?(c=u.__proto__,u.__proto__=e,delete u[t],u[t]=r.value,u.__proto__=c):u[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(u,t,r.get),y&&a&&a.call(u,t,r.set),u},p=t()?c:f;var y=function(u,t,r){p(u,t,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(u){return"string"==typeof u};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return _&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,g=s;var m=function(u){return g.call(u)},E=Object.prototype.hasOwnProperty;var d=function(u,t){return null!=u&&E.call(u,t)},j="function"==typeof Symbol?Symbol.toStringTag:"",B=d,S=j,F=s;var w=m,O=function(u){var t,r,e;if(null==u)return F.call(u);r=u[S],t=B(u,S);try{u[S]=void 0}catch(t){return F.call(u)}return e=F.call(u),t?u[S]=r:delete u[S],e},h=v()?O:w,D=String.prototype.valueOf;var P=h,A=function(u){try{return D.call(u),!0}catch(u){return!1}},T=v();var G=function(u){return"object"==typeof u&&(u instanceof String||(T?A(u):"[object String]"===P(u)))},k=b,x=G;var V=y,C=function(u){return k(u)||x(u)},R=b,X=G;V(C,"isPrimitive",R),V(C,"isObject",X);var $=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},q=$();function z(u){return R(u)&&q.test(u)}y($,"REGEXP",q);export{z as default};
//# sourceMappingURL=mod.js.map
