const crypto = require('crypto');
const md5 = crypto.createHash('md5')



var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//将Ansi编码的字符串进行Base64编码
function encode64(input) {
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;
  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)
      + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);
  return output;
}
function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;
  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break;
      case 12: case 13:
        // 110x xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx 10xx xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
    }
  }
  return out;
}

function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;
  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break;
      case 12: case 13:
        // 110x xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx 10xx xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
    }
  }
  return out;
}

//将Base64编码字符串转换成Ansi编码的字符串
function decode64(input) {
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;
  if (input.length % 4 != 0) {
    return "";
  }
  var base64test = /[^A-Za-z0-9\+\/\=]/g;
  if (base64test.exec(input)) {
    return "";
  }
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    output = output + String.fromCharCode(chr1);
    if (enc3 != 64) {
      output += String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output += String.fromCharCode(chr3);
    }
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);
  return output;
}
function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
  }
  return out;
}
let t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
let base64decode = function (e) { var r, n, i, a, o, s, c; for (s = e.length, o = 0, c = ""; o < s;) { do r = t[255 & e.charCodeAt(o++)]; while (o < s && r == -1); if (r == -1) break; do n = t[255 & e.charCodeAt(o++)]; while (o < s && n == -1); if (n == -1) break; c += String.fromCharCode(r << 2 | (48 & n) >> 4); do { if (i = 255 & e.charCodeAt(o++), 61 == i) return c; i = t[i] } while (o < s && i == -1); if (i == -1) break; c += String.fromCharCode((15 & n) << 4 | (60 & i) >> 2); do { if (a = 255 & e.charCodeAt(o++), 61 == a) return c; a = t[a] } while (o < s && a == -1); if (a == -1) break; c += String.fromCharCode((3 & i) << 6 | a) } return c };
let base64encode = function (t) { var r, n, i, a, o, s; for (i = t.length, n = 0, r = ""; n < i;) { if (a = 255 & t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4), r += "=="; break } if (o = t.charCodeAt(n++), n == i) { r += e.charAt(a >> 2), r += e.charAt((3 & a) << 4 | (240 & o) >> 4), r += e.charAt((15 & o) << 2), r += "="; break } s = t.charCodeAt(n++), r += keyStr.charAt(a >> 2), r += keyStr.charAt((3 & a) << 4 | (240 & o) >> 4), r += keyStr.charAt((15 & o) << 2 | (192 & s) >> 6), r += keyStr.charAt(63 & s) } return r }
// 加密开始
// let de = encode64(utf16to8(JSON.stringify({ "openid": "oLsmfwWFmH12eyeOZFQXOgMKX5X8", "appid": "778428", "lot_id": "0", "sign": "F4442C4F86D1CF59194DF9F739923EEC" })));
// de = md5.update(Date.now.toString()).digest("hex") + de;
// de = de.split("").reverse().join("").replace(/^(=)+/, "");
// console.log(de);

// 解密开始
let de = 'QfiYDRxETRDljRyIUN3ITNGJTQBRkR1UzM0Y0Q2MkNxkTOiojIudWazJCLigjM0gzN3IiOiQWawBXYiwiI4gVNYtUTn9EWRZkWPVWelJTMI1mRXdnZtNHTvJiOiQWauVGcvJyefd9de56dbedfb520e4ad9406c6cc7dc3';
de = de.split("").reverse().join("");
console.log(de);
de = utf8to16(base64decode(de));
// de = base64decode(de);
console.log(de);
