// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var u,t;u=this,t=function(){"use strict";var u="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return u({},"x",{}),!0}catch(u){return!1}},e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,c=r.__lookupSetter__,a=e,f=function(u,t,e){var a,f,p,y;if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. First argument must be an object. Value: `"+u+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(l.call(u,t)||c.call(u,t)?(a=u.__proto__,u.__proto__=r,delete u[t],u[t]=e.value,u.__proto__=a):u[t]=e.value),p="get"in e,y="set"in e,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(u,t,e.get),y&&i&&i.call(u,t,e.set),u},p=t()?a:f,y=function(u,t,e){p(u,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=function(u){return"string"==typeof u},_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),s=function(){return _&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,B=E,F=function(u){return B.call(u)},d=Object.prototype.hasOwnProperty,m=function(u,t){return null!=u&&d.call(u,t)},g="function"==typeof Symbol?Symbol.toStringTag:"",v=m,j=g,D=E,S=F,h=function(u){var t,e,r;if(null==u)return D.call(u);e=u[j],t=v(u,j);try{u[j]=void 0}catch(t){return D.call(u)}return r=D.call(u),t?u[j]=e:delete u[j],r},P=s()?h:S,w=String.prototype.valueOf,O=P,A=function(u){try{return w.call(u),!0}catch(u){return!1}},T=s(),G=function(u){return"object"==typeof u&&(u instanceof String||(T?A(u):"[object String]"===O(u)))},x=b,k=G,C=y,R=function(u){return x(u)||k(u)},V=G;C(R,"isPrimitive",b),C(R,"isObject",V);var X=R,$=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},N=$;y(N,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/);var U=N;return function(u){return X.isPrimitive(u)&&U.REGEXP.test(u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(u="undefined"!=typeof globalThis?globalThis:u||self).isUNCPath=t();
//# sourceMappingURL=browser.js.map
