!function(window,$){function PlusReport(){}function init(){var t=Util.getScriptArg("channel"),o=new PlusReport;switch(t){case"readnews":o.init(),$(document).on("click",".bdsharebuttonbox [data-cmd],.bdshare_popup_box [data-cmd]",function(){var t=new PlusReport;t.init("sharenews")});break;case"watchvideos":o.init();break;case"watchtuku":o.init();break;case"gamevote":$(document).on("click",".ZanAct",function(){o.init()});break;case"gamevote2":$(document).on("click","[data-role='vote']",function(){var t="gamevote",e=$(this).attr("data-gameid");o.init(t,e)});break;case"clickads":var e=[];$.ajax({url:"http://plus.duowan.com/task/adPos",data:{},dataType:"jsonp",success:function(t){e=t.data}}),$(".g-body").on("click","[data-dakey]",function(){for(var t=$(this).attr("data-dakey"),o=e.length,r=0;o>r;r++)if(e[r]==t){var n=new PlusReport;n.init("clickads",t)}})}}var md5=window.md5||{};!function(){function t(t){return s(o(c(t),t.length*m))}function o(t,o){t[o>>5]|=128<<o%32,t[(o+64>>>9<<4)+14]=o;for(var e=1732584193,u=-271733879,c=-1732584194,s=271733878,d=0;d<t.length;d+=16){var l=e,h=u,f=c,g=s;e=r(e,u,c,s,t[d+0],7,-680876936),s=r(s,e,u,c,t[d+1],12,-389564586),c=r(c,s,e,u,t[d+2],17,606105819),u=r(u,c,s,e,t[d+3],22,-1044525330),e=r(e,u,c,s,t[d+4],7,-176418897),s=r(s,e,u,c,t[d+5],12,1200080426),c=r(c,s,e,u,t[d+6],17,-1473231341),u=r(u,c,s,e,t[d+7],22,-45705983),e=r(e,u,c,s,t[d+8],7,1770035416),s=r(s,e,u,c,t[d+9],12,-1958414417),c=r(c,s,e,u,t[d+10],17,-42063),u=r(u,c,s,e,t[d+11],22,-1990404162),e=r(e,u,c,s,t[d+12],7,1804603682),s=r(s,e,u,c,t[d+13],12,-40341101),c=r(c,s,e,u,t[d+14],17,-1502002290),u=r(u,c,s,e,t[d+15],22,1236535329),e=n(e,u,c,s,t[d+1],5,-165796510),s=n(s,e,u,c,t[d+6],9,-1069501632),c=n(c,s,e,u,t[d+11],14,643717713),u=n(u,c,s,e,t[d+0],20,-373897302),e=n(e,u,c,s,t[d+5],5,-701558691),s=n(s,e,u,c,t[d+10],9,38016083),c=n(c,s,e,u,t[d+15],14,-660478335),u=n(u,c,s,e,t[d+4],20,-405537848),e=n(e,u,c,s,t[d+9],5,568446438),s=n(s,e,u,c,t[d+14],9,-1019803690),c=n(c,s,e,u,t[d+3],14,-187363961),u=n(u,c,s,e,t[d+8],20,1163531501),e=n(e,u,c,s,t[d+13],5,-1444681467),s=n(s,e,u,c,t[d+2],9,-51403784),c=n(c,s,e,u,t[d+7],14,1735328473),u=n(u,c,s,e,t[d+12],20,-1926607734),e=a(e,u,c,s,t[d+5],4,-378558),s=a(s,e,u,c,t[d+8],11,-2022574463),c=a(c,s,e,u,t[d+11],16,1839030562),u=a(u,c,s,e,t[d+14],23,-35309556),e=a(e,u,c,s,t[d+1],4,-1530992060),s=a(s,e,u,c,t[d+4],11,1272893353),c=a(c,s,e,u,t[d+7],16,-155497632),u=a(u,c,s,e,t[d+10],23,-1094730640),e=a(e,u,c,s,t[d+13],4,681279174),s=a(s,e,u,c,t[d+0],11,-358537222),c=a(c,s,e,u,t[d+3],16,-722521979),u=a(u,c,s,e,t[d+6],23,76029189),e=a(e,u,c,s,t[d+9],4,-640364487),s=a(s,e,u,c,t[d+12],11,-421815835),c=a(c,s,e,u,t[d+15],16,530742520),u=a(u,c,s,e,t[d+2],23,-995338651),e=i(e,u,c,s,t[d+0],6,-198630844),s=i(s,e,u,c,t[d+7],10,1126891415),c=i(c,s,e,u,t[d+14],15,-1416354905),u=i(u,c,s,e,t[d+5],21,-57434055),e=i(e,u,c,s,t[d+12],6,1700485571),s=i(s,e,u,c,t[d+3],10,-1894986606),c=i(c,s,e,u,t[d+10],15,-1051523),u=i(u,c,s,e,t[d+1],21,-2054922799),e=i(e,u,c,s,t[d+8],6,1873313359),s=i(s,e,u,c,t[d+15],10,-30611744),c=i(c,s,e,u,t[d+6],15,-1560198380),u=i(u,c,s,e,t[d+13],21,1309151649),e=i(e,u,c,s,t[d+4],6,-145523070),s=i(s,e,u,c,t[d+11],10,-1120210379),c=i(c,s,e,u,t[d+2],15,718787259),u=i(u,c,s,e,t[d+9],21,-343485551),e=p(e,l),u=p(u,h),c=p(c,f),s=p(s,g)}return Array(e,u,c,s)}function e(t,o,e,r,n,a){return p(u(p(p(o,t),p(r,a)),n),e)}function r(t,o,r,n,a,i,p){return e(o&r|~o&n,t,o,a,i,p)}function n(t,o,r,n,a,i,p){return e(o&n|r&~n,t,o,a,i,p)}function a(t,o,r,n,a,i,p){return e(o^r^n,t,o,a,i,p)}function i(t,o,r,n,a,i,p){return e(r^(o|~n),t,o,a,i,p)}function p(t,o){var e=(65535&t)+(65535&o),r=(t>>16)+(o>>16)+(e>>16);return r<<16|65535&e}function u(t,o){return t<<o|t>>>32-o}function c(t){for(var o=Array(),e=(1<<m)-1,r=0;r<t.length*m;r+=m)o[r>>5]|=(t.charCodeAt(r/m)&e)<<r%32;return o}function s(t){for(var o=f?"0123456789ABCDEF":"0123456789abcdef",e="",r=0;r<4*t.length;r++)e+=o.charAt(t[r>>2]>>r%4*8+4&15)+o.charAt(t[r>>2]>>r%4*8&15);return e}function d(t){function o(t,o){var e=t<<o|t>>>32-o;return e}function e(t){var o,e,r="";for(o=7;o>=0;o--)e=t>>>4*o&15,r+=e.toString(16);return r}function r(t){t=t.replace(/\r\n/g,"\n");for(var o="",e=0;e<t.length;e++){var r=t.charCodeAt(e);128>r?o+=String.fromCharCode(r):r>127&&2048>r?(o+=String.fromCharCode(r>>6|192),o+=String.fromCharCode(63&r|128)):(o+=String.fromCharCode(r>>12|224),o+=String.fromCharCode(r>>6&63|128),o+=String.fromCharCode(63&r|128))}return o}var n,a,i,p,u,c,s,d,l,h=new Array(80),f=1732584193,g=4023233417,m=2562383102,_=271733878,v=3285377520;t=r(t);var k=t.length,w=new Array;for(a=0;k-3>a;a+=4)i=t.charCodeAt(a)<<24|t.charCodeAt(a+1)<<16|t.charCodeAt(a+2)<<8|t.charCodeAt(a+3),w.push(i);switch(k%4){case 0:a=2147483648;break;case 1:a=t.charCodeAt(k-1)<<24|8388608;break;case 2:a=t.charCodeAt(k-2)<<24|t.charCodeAt(k-1)<<16|32768;break;case 3:a=t.charCodeAt(k-3)<<24|t.charCodeAt(k-2)<<16|t.charCodeAt(k-1)<<8|128}for(w.push(a);w.length%16!=14;)w.push(0);for(w.push(k>>>29),w.push(k<<3&4294967295),n=0;n<w.length;n+=16){for(a=0;16>a;a++)h[a]=w[n+a];for(a=16;79>=a;a++)h[a]=o(h[a-3]^h[a-8]^h[a-14]^h[a-16],1);for(p=f,u=g,c=m,s=_,d=v,a=0;19>=a;a++)l=o(p,5)+(u&c|~u&s)+d+h[a]+1518500249&4294967295,d=s,s=c,c=o(u,30),u=p,p=l;for(a=20;39>=a;a++)l=o(p,5)+(u^c^s)+d+h[a]+1859775393&4294967295,d=s,s=c,c=o(u,30),u=p,p=l;for(a=40;59>=a;a++)l=o(p,5)+(u&c|u&s|c&s)+d+h[a]+2400959708&4294967295,d=s,s=c,c=o(u,30),u=p,p=l;for(a=60;79>=a;a++)l=o(p,5)+(u^c^s)+d+h[a]+3395469782&4294967295,d=s,s=c,c=o(u,30),u=p,p=l;f=f+p&4294967295,g=g+u&4294967295,m=m+c&4294967295,_=_+s&4294967295,v=v+d&4294967295}var l=e(f)+e(g)+e(m)+e(_)+e(v);return l.toLowerCase()}function l(t){var o,e,r,n,a,i,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(r=t.length,e=0,o="";r>e;){if(n=255&t.charCodeAt(e++),e==r){o+=p.charAt(n>>2),o+=p.charAt((3&n)<<4),o+="==";break}if(a=t.charCodeAt(e++),e==r){o+=p.charAt(n>>2),o+=p.charAt((3&n)<<4|(240&a)>>4),o+=p.charAt((15&a)<<2),o+="=";break}i=t.charCodeAt(e++),o+=p.charAt(n>>2),o+=p.charAt((3&n)<<4|(240&a)>>4),o+=p.charAt((15&a)<<2|(192&i)>>6),o+=p.charAt(63&i)}return o}function h(t,o){for(var e="",r=0,n=t.length,a=o.length;n>r&&!(r>=a);r++)e+=String.fromCharCode(t.charCodeAt(r)^o.charCodeAt(r));return e}md5.xor=h,md5.sha1=d,md5.hex_md5=t,md5.base64encode=l;var f=0,g="",m=8}();var Util={getCookie:function(t){var o=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=o?decodeURI(o[2]):null},isLogin:function(){return Util.getCookie("yyuid")||Util.getCookie("lg_uid")?!0:!1},getScriptArg:function(t){var o=document.getElementsByTagName("script"),e=o[o.length-1],r=e.src;return(r.match(new RegExp("(?:\\?|&)"+t+"=(.*?)(?=&|$)"))||["",null])[1]},encodePwd:function(t,o){var e=md5.sha1(t),r=md5.sha1(e),n=md5.xor(md5.xor(o,r),e);return md5.base64encode(n)}};PlusReport.prototype={task_id:Util.getScriptArg("channel"),target_id:location.pathname.replace(/[^0-9]/g,""),yyuid:Util.getCookie("yyuid")||Util.getCookie("lg_uid"),dwFoottTestNum:0,dwFootMaxTestNum:10,init:function(t,o){t&&(this.task_id=t),o&&(this.target_id=o),Util.isLogin()&&!Util.getCookie("dwtask_"+this.task_id+"_"+this.yyuid)&&this._report()},_inWhite:function(){for(var t=Util.getCookie("username"),o=[],e=o.length,r=0;e>r;r++)if(t==o[r])return!0;return!1},_report:function(){var t=this,o="http://plus.duowan.com/task/report";if(t.task_id&&t.target_id){var e={task_id:t.task_id,target_id:t.target_id,shop_id:6,time:(new Date).getTime()},r=Util.getCookie("password")||Util.getCookie("lg_openid");e.sign=Util.encodePwd(r,md5.sha1($.param(e))),$.ajax({url:o,data:e,type:"GET",dataType:"jsonp",withCredentials:!0}).done(function(o){0==o.code&&o.data&&o.data.title&&("sharenews"==t.task_id?setTimeout(function(){t._popDwFootPop(o.data)},3e4):t._popDwFootPop(o.data))})}},_popDwFootPop:function(t){var o=this;++o.dwFoottTestNum;setTimeout(function(){try{dwMiniNewsPopup&&dwMiniNewsPopup.showKaDou({text:t.title,taskid:t.task_id})}catch(e){o.dwFoottTestNum<o.dwFootMaxTestNum&&o._popDwFootPop(t)}},500)},_popup:function(data){var cssStyle='.popup-plus-report{width:100%;height:100%;position:fixed;top:0;left:0;z-index:2000;font-family:PingFang sc,"Helvetica Neue",Helvetica,Tahoma,Arial,"Liberation Sans","Hiragino Sans GB","Source Han Sans CN","Source Han Sans SC","Microsoft YaHei","Wenquanyi Micro Hei","WenQuanYi Zen Hei","ST Heiti",SimHei,"WenQuanYi Zen Hei Sharp",sans-serif}.popup-plus-report .mask-plus-report{width:100%;height:100%;background:#000;opacity:.5;-moz-opacity:.5;filter:alpha(opacity=50);position:absolute;top:0;left:0;z-index:1;box-shadow:0 0 10px 5px #CCC}.popup-plus-report .cont-plus-report{position:absolute;top:50%;left:50%;z-index:2;margin:-100px 0 0 -230px;line-height:1;padding:40px 0 30px;background:#FFF;text-align:center;width:460px}.popup-plus-report .cont-plus-report h2{font-size:16px;line-height:18px;height:18px;overflow:hidden;color:#e94646}.popup-plus-report .cont-plus-report p{font-size:12px;color:#666;margin-top:27px}.popup-plus-report .cont-plus-report .btn-plus-task{display:block;margin:23px auto 0;font-size:12px;color:#FFF;background:#e94646;width:80px;height:30px;line-height:30px;cursor:pointer}.popup-plus-report .cont-plus-report .btn-plus-task:hover{text-decoration:none;background:#f45959}.popup-plus-report .btn-plus-report{position:absolute;top:20px;right:20px;width:10px;height:10px;background:url(http://pub.dwstatic.com/common//dwPlusReport/icon-close2_18ae84c.png) no-repeat;cursor:pointer}',plusReportPopup=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="popup-plus-report">\r\n    <div class="mask-plus-report"></div>\r\n    <div class="cont-plus-report">\r\n        <h2>'+(null==(__t=data.title)?"":__t)+"</h2>\r\n        <p>"+(null==(__t=data.content)?"":__t)+'</p>\r\n        <div class="btn-plus-task" data-url="'+(null==(__t=data.url)?"":__t)+'">'+(null==(__t=data.btn)?"":__t)+'</div>\r\n        <div class="btn-plus-report"></div>\r\n    </div>\r\n</div>';return __p};$("body").append("<style>"+cssStyle+"</style>"),$("body").append(plusReportPopup({data:data})),this._initPopup()},_initPopup:function(){var t=this;$(".popup-plus-report .btn-plus-report").click(function(){t._removePopup()}),$(".popup-plus-report .btn-plus-task").click(function(){var o=$(this).attr("data-url");t._removePopup(),window.open(o)})},_removePopup:function(){$(".popup-plus-report").remove()}},init()}(window,$);