
const crypto = require('crypto');
const md5 = crypto.createHash('md5')


// let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// let base64 = function (t) { var r, n, i, a, o, s; for (i = t.length, n = 0, r = ""; n < i;) { if (a = 255 & t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4), r += "=="; break } if (o = t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4 | (240 & o) >> 4), r += e.charAt((15 & o) << 2), r += "="; break } s = t.charCodeAt(n++), r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4 | (240 & o) >> 4), r += e.charAt((15 & o) << 2 | (192 & s) >> 6), r += e.charAt(63 & s) } return r }
// console.log(base64('111'));

function p(e){return md5.update(e+'052781d8bfb9a505aa4a2968718b99ae').digest("hex")};
function u(e){var t=[],r={};for(var n in e)t.push(n);t.sort();for(var n in t){var i=t[n];r[i]=e[i]}return r}
function f(e){var t="";for(var r in e)"sign"==r||""==e[r]||"string"!=typeof e[r]&&"number"!=typeof e[r]||(t+=r+"="+e[r]+"&");return t+="sign="}

let makeSign = function(e){e=u(e);var t=f(e);return p(t)};
// F4442C4F86D1CF59194DF9F739923EEC
// 9916C6CF4355FDAA2F5275B2F9CE11D6
console.log(makeSign({"openid":"oLsmfwWFmH12eyeOZFQXOgMKX5X8","appid":"778428"}));

// let a= function(){
//   let r = {};
//   return r.a = 1,r.b=2,r;
// }
// console.log(a());