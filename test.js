// let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// let base64 = function (t) { var r, n, i, a, o, s; for (i = t.length, n = 0, r = ""; n < i;) { if (a = 255 & t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4), r += "=="; break } if (o = t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4 | (240 & o) >> 4), r += e.charAt((15 & o) << 2), r += "="; break } s = t.charCodeAt(n++), r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4 | (240 & o) >> 4), r += e.charAt((15 & o) << 2 | (192 & s) >> 6), r += e.charAt(63 & s) } return r }
// console.log(base64('111'));

function p(e){return e};
function u(e){var t=[],r={};for(var n in e)t.push(n);t.sort();for(var n in t){var i=t[n];r[i]=e[i]}return r}
function f(e){var t="";for(var r in e)"sign"==r||""==e[r]||"string"!=typeof e[r]&&"number"!=typeof e[r]||(t+=r+"="+e[r]+"&");return t+="sign="+d.sign}

let makeSign = function(e){e=u(e);var t=f(e);return p(t).toUpperCase()};
console.log(makeSign(123));