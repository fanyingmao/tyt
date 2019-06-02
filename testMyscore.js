d.getMyScore=function(e,t,r){s("api.getmyscore",{lot_id:e},function(e){if(0!=e.code){if("undefined"==typeof r)return;r&&r(e)}else t&&t(e.data)},c)}

let computePacket=function(e,t){
  var r={};
  return r.jsonrpc="2.0",r.id=this.id,r.method=e,r.params=t,r.params.token=this.token(),this.options.code||(this.options.code=p((new Date).getTime())),r.params.data=this.options.code+r.params.data,r.params.data=r.params.data.split("").reverse().join("").replace(/^(=)+/,""),this.options.code="","api.setscore"==e&&"undefined"!=typeof this.options.start&&(r.params.score=this.options.start),r}