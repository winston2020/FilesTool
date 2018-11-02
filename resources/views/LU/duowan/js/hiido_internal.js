/* @version hiido_internal.js: v2.0.2 2018-08-30 18:16:41 */
!function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n){return e(n={exports:{}},n.exports),n.exports}var t=n(function(n){!function(e){function t(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function i(e,n,i,o,r,a){return t((s=t(t(n,e),t(o,a)))<<(c=r)|s>>>32-c,i);var s,c}function o(e,n,t,o,r,a,s){return i(n&t|~n&o,e,n,r,a,s)}function r(e,n,t,o,r,a,s){return i(n&o|t&~o,e,n,r,a,s)}function a(e,n,t,o,r,a,s){return i(n^t^o,e,n,r,a,s)}function s(e,n,t,o,r,a,s){return i(t^(n|~o),e,n,r,a,s)}function c(e,n){var i,c,u,d,l;e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var f=1732584193,b=-271733879,m=-1732584194,w=271733878;for(i=0;i<e.length;i+=16)c=f,u=b,d=m,l=w,b=s(b=s(b=s(b=s(b=a(b=a(b=a(b=a(b=r(b=r(b=r(b=r(b=o(b=o(b=o(b=o(b,m=o(m,w=o(w,f=o(f,b,m,w,e[i],7,-680876936),b,m,e[i+1],12,-389564586),f,b,e[i+2],17,606105819),w,f,e[i+3],22,-1044525330),m=o(m,w=o(w,f=o(f,b,m,w,e[i+4],7,-176418897),b,m,e[i+5],12,1200080426),f,b,e[i+6],17,-1473231341),w,f,e[i+7],22,-45705983),m=o(m,w=o(w,f=o(f,b,m,w,e[i+8],7,1770035416),b,m,e[i+9],12,-1958414417),f,b,e[i+10],17,-42063),w,f,e[i+11],22,-1990404162),m=o(m,w=o(w,f=o(f,b,m,w,e[i+12],7,1804603682),b,m,e[i+13],12,-40341101),f,b,e[i+14],17,-1502002290),w,f,e[i+15],22,1236535329),m=r(m,w=r(w,f=r(f,b,m,w,e[i+1],5,-165796510),b,m,e[i+6],9,-1069501632),f,b,e[i+11],14,643717713),w,f,e[i],20,-373897302),m=r(m,w=r(w,f=r(f,b,m,w,e[i+5],5,-701558691),b,m,e[i+10],9,38016083),f,b,e[i+15],14,-660478335),w,f,e[i+4],20,-405537848),m=r(m,w=r(w,f=r(f,b,m,w,e[i+9],5,568446438),b,m,e[i+14],9,-1019803690),f,b,e[i+3],14,-187363961),w,f,e[i+8],20,1163531501),m=r(m,w=r(w,f=r(f,b,m,w,e[i+13],5,-1444681467),b,m,e[i+2],9,-51403784),f,b,e[i+7],14,1735328473),w,f,e[i+12],20,-1926607734),m=a(m,w=a(w,f=a(f,b,m,w,e[i+5],4,-378558),b,m,e[i+8],11,-2022574463),f,b,e[i+11],16,1839030562),w,f,e[i+14],23,-35309556),m=a(m,w=a(w,f=a(f,b,m,w,e[i+1],4,-1530992060),b,m,e[i+4],11,1272893353),f,b,e[i+7],16,-155497632),w,f,e[i+10],23,-1094730640),m=a(m,w=a(w,f=a(f,b,m,w,e[i+13],4,681279174),b,m,e[i],11,-358537222),f,b,e[i+3],16,-722521979),w,f,e[i+6],23,76029189),m=a(m,w=a(w,f=a(f,b,m,w,e[i+9],4,-640364487),b,m,e[i+12],11,-421815835),f,b,e[i+15],16,530742520),w,f,e[i+2],23,-995338651),m=s(m,w=s(w,f=s(f,b,m,w,e[i],6,-198630844),b,m,e[i+7],10,1126891415),f,b,e[i+14],15,-1416354905),w,f,e[i+5],21,-57434055),m=s(m,w=s(w,f=s(f,b,m,w,e[i+12],6,1700485571),b,m,e[i+3],10,-1894986606),f,b,e[i+10],15,-1051523),w,f,e[i+1],21,-2054922799),m=s(m,w=s(w,f=s(f,b,m,w,e[i+8],6,1873313359),b,m,e[i+15],10,-30611744),f,b,e[i+6],15,-1560198380),w,f,e[i+13],21,1309151649),m=s(m,w=s(w,f=s(f,b,m,w,e[i+4],6,-145523070),b,m,e[i+11],10,-1120210379),f,b,e[i+2],15,718787259),w,f,e[i+9],21,-343485551),f=t(f,c),b=t(b,u),m=t(m,d),w=t(w,l);return[f,b,m,w]}function u(e){var n,t="",i=32*e.length;for(n=0;n<i;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function d(e){var n,t=[];for(t[(e.length>>2)-1]=undefined,n=0;n<t.length;n+=1)t[n]=0;var i=8*e.length;for(n=0;n<i;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function l(e){var n,t,i="";for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),i+="0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n);return i}function f(e){return unescape(encodeURIComponent(e))}function b(e){return function(e){return u(c(d(e),8*e.length))}(f(e))}function m(e,n){return function(e,n){var t,i,o=d(e),r=[],a=[];for(r[15]=a[15]=undefined,o.length>16&&(o=c(o,8*e.length)),t=0;t<16;t+=1)r[t]=909522486^o[t],a[t]=1549556828^o[t];return i=c(r.concat(d(n)),512+8*n.length),u(c(a.concat(i),640))}(f(e),f(n))}function w(e,n,t){return n?t?m(n,e):l(m(n,e)):t?b(e):l(b(e))}"function"==typeof undefined&&undefined.amd?undefined(function(){return w}):n.exports?n.exports=w:e.md5=w}(e)}),i="hdjs_session_id",o="hdjs_session_time",r="_HIIDO_DEFER_",a={PC:1,MOBILE:2},s=["ubuntu","centos","fedora","debian","gentoo","suse","mandriva","slackware","freebsd","archlinux"],c={android:/android (\d+\.\d+)/i,ios:/cpu (?:iphone )os (\d+_\d+)/i,wp:[/windows phone(?:[ os]{3})? (\d+\.\d+)/i,/windows nt (\d\.\d)/i],blackberry:/(?:Version|Blackberry[\w]+)\/(\d\.\d)/i,symbian:/symbian(?:os)?\/(\d+[.\d]{0,2})/i,tizen:/tizen (\d+\.\d+)/i},u=-1,d=[{engine:"baidu.com",rule:"wd|word|w|kw|key",value:1},{engine:"haosou.com",rule:"q",value:2},{engine:"sogou.com",rule:"query",value:3},{engine:"google.",rule:"q",value:4},{engine:"bing.com",rule:"q",value:5},{engine:"yahoo.com",rule:"p|q",value:6},{engine:"youdao.com",rule:"q",value:7},{engine:"yodao.com",rule:"q",value:8},{engine:"iask.sina.com.cn",rule:"searchWord|k",value:9},{engine:"zhongsou.com",rule:"w|word",value:10},{engine:"search.com",rule:"q",value:11},{engine:"sm.cn",rule:"q",value:12},{engine:"chinaso.com",rule:"q",value:13},{engine:"soku.com",rule:"keyword",value:14},{engine:"alexa.com",rule:"q",value:15},{engine:"s.weibo.com",rule:function(e){return e.split("&")[0].split("/").pop()},value:16},{engine:"qq.com",rule:"k",value:17},{engine:"lofter.com",rule:function(e){var n;return e.indexOf("queryString")>-1&&null!==(n=new RegExp("(^|)queryString=([^&]*)(&|$)","gi").exec(e))?n[2]:e.split("?")[0].split("/").pop()},value:18}],l="hd_newui",f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},m="-1",w={name:"na",version:m};function h(e){return function(n){return Object.prototype.toString.call(n)==="[object "+e+"]"}}var p=h("String"),v=h("RegExp"),g=h("Object"),y=h("Function");function x(e,n,t,i){var o=w;!function(e,n){for(var t=0,i=e.length;t<i&&!1!==n.call(e,e[t],t);t++);}(n,function(n){var t=function(e,n,t){var i=y(n)?n.call(null,t):n;if(!i)return null;var o={name:e,version:m,codename:""};if(!0===i)return o;if(p(i)){if(-1!==t.indexOf(i))return o}else{if(g(i))return i.hasOwnProperty("version")&&(o.version=i.version),o;if(v(i)){var r=i.exec(t);if(r)return r.length>=2&&r[1]?o.version=r[1].replace(/_/g,"."):o.version=m,o}}}(n[0],n[1],e);if(t)return o=t,!1}),t.call(i,o.name,o.version)}var k=function(){function e(n){b(this,e),this._rules=n}return e.prototype.parse=function(e){var n={};x(e=(e||"").toLowerCase(),this._rules.device,function(e,t){var i=parseFloat(t);n.device={name:e,version:i,fullVersion:t},n.device[e]=i},n),x(e,this._rules.os,function(e,t){var i=parseFloat(t);n.os={name:e,version:i,fullVersion:t},n.os[e]=i},n);var t=this.IEMode(e);return x(e,this._rules.engine,function(e,i){var o=i;t&&(i=t.engineVersion||t.engineMode,o=t.engineMode);var r=parseFloat(i);n.engine={name:e,version:r,fullVersion:i,mode:parseFloat(o),fullMode:o,compatible:!!t&&t.compatible},n.engine[e]=r},n),x(e,this._rules.browser,function(e,i){var o=i;t&&("ie"===e&&(i=t.browserVersion),o=t.browserMode);var r=parseFloat(i);n.browser={name:e,version:r,fullVersion:i,mode:parseFloat(o),fullMode:o,compatible:!!t&&t.compatible},n.browser[e]=r},n),n},e.prototype.IEMode=function(e){if(!this._rules.re_msie.test(e))return null;var n,t,i=void 0,o=void 0,r=void 0;if(-1!==e.indexOf("trident/")&&(i=/\btrident\/([0-9.]+)/.exec(e))&&i.length>=2){o=i[1];var a=i[1].split(".");a[0]=parseInt(a[0],10)+4,r=a.join(".")}t=(i=this._rules.re_msie.exec(e))[1];var s=i[1].split(".");return void 0===r&&(r=t),s[0]=parseInt(s[0],10)-4,n=s.join("."),void 0===o&&(o=n),{browserVersion:r,browserMode:t,engineVersion:o,engineMode:n,compatible:o!==n}},e}(),_=(Object.freeze||Object)({"default":k,__moduleExports:k}),O="undefined"==typeof window?e:window,S=O.external,j=/\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/,C=/\bbb10\b.+?\bversion\/([\d.]+)/,M=/\bblackberry\b.+\bversion\/([\d.]+)/,A=/\bblackberry\d+\/([\d.]+)/;function z(e){if(S)try{var n=S.twGetRunPath.toLowerCase(),t=S.twGetSecurityID(O),i=S.twGetVersion(t);if(n&&-1===n.indexOf(e))return!1;if(i)return{version:i}}catch(o){}}var E={device:[["nokia",function(e){return-1!==e.indexOf("nokia ")?/\bnokia ([0-9]+)?/:/\bnokia([a-z0-9]+)?/}],["samsung",function(e){return-1!==e.indexOf("samsung")?/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/:/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/}],["wp",function(e){return-1!==e.indexOf("windows phone ")||-1!==e.indexOf("xblwp")||-1!==e.indexOf("zunewp")||-1!==e.indexOf("windows ce")}],["pc","windows"],["ipad","ipad"],["ipod","ipod"],["iphone",/\biphone\b|\biph(\d)/],["mac","macintosh"],["mi",/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],["hongmi",/\bhm[ \-]?([a-z0-9]+)/],["aliyun",/\baliyunos\b(?:[\-](\d+))?/],["meizu",function(e){return e.indexOf("meizu")>=0?/\bmeizu[\/ ]([a-z0-9]+)\b/:/\bm([0-9cx]{1,4})\b/}],["nexus",/\bnexus ([0-9s.]+)/],["huawei",function(e){var n=/\bmediapad (.+?)(?= build\/huaweimediapad\b)/;return-1!==e.indexOf("huawei-huawei")?/\bhuawei\-huawei\-([a-z0-9\-]+)/:n.test(e)?n:/\bhuawei[ _\-]?([a-z0-9]+)/}],["lenovo",function(e){return-1!==e.indexOf("lenovo-lenovo")?/\blenovo\-lenovo[ \-]([a-z0-9]+)/:/\blenovo[ \-]?([a-z0-9]+)/}],["zte",function(e){return/\bzte\-[tu]/.test(e)?/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/:/\bzte[ _\-]?([a-su-z0-9\+]+)/}],["vivo",/\bvivo(?: ([a-z0-9]+))?/],["htc",function(e){return/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e)?/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/:/\bhtc[ _\-]?([a-z0-9 ]+)/}],["oppo",/\boppo[_]([a-z0-9]+)/],["konka",/\bkonka[_\-]([a-z0-9]+)/],["sonyericsson",/\bmt([a-z0-9]+)/],["coolpad",/\bcoolpad[_ ]?([a-z0-9]+)/],["lg",/\blg[\-]([a-z0-9]+)/],["android",/\bandroid\b|\badr\b/],["blackberry",function(e){return e.indexOf("blackberry")>=0?/\bblackberry\s?(\d+)/:"bb10"}]],os:[["wp",function(e){return-1!==e.indexOf("windows phone ")?/\bwindows phone (?:os )?([0-9.]+)/:-1!==e.indexOf("xblwp")?/\bxblwp([0-9.]+)/:-1!==e.indexOf("zunewp")?/\bzunewp([0-9.]+)/:"windows phone"}],["windows",/\bwindows nt ([0-9.]+)/],["macosx",/\bmac os x ([0-9._]+)/],["ios",function(e){return/\bcpu(?: iphone)? os /.test(e)?/\bcpu(?: iphone)? os ([0-9._]+)/:-1!==e.indexOf("iph os ")?/\biph os ([0-9_]+)/:/\bios\b/}],["yunos",/\baliyunos ([0-9.]+)/],["android",function(e){return e.indexOf("android")>=0?/\bandroid[ \/-]?([0-9.x]+)?/:e.indexOf("adr")>=0?e.indexOf("mqqbrowser")>=0?/\badr[ ]\(linux; u; ([0-9.]+)?/:/\badr(?:[ ]([0-9.]+))?/:"android"}],["chromeos",/\bcros i686 ([0-9.]+)/],["linux","linux"],["windowsce",/\bwindows ce(?: ([0-9.]+))?/],["symbian",/\bsymbian(?:os)?\/([0-9.]+)/],["blackberry",function(e){var n=e.match(C)||e.match(M)||e.match(A);return n?{version:n[1]}:"blackberry"}]],browser:[["edge",/edge\/([0-9.]+)/],["sogou",function(e){return e.indexOf("sogoumobilebrowser")>=0?/sogoumobilebrowser\/([0-9.]+)/:e.indexOf("sogoumse")>=0||/ se ([0-9.x]+)/}],["theworld",function(){var e=z("theworld");return void 0!==e?e:/theworld(?: ([\d.])+)?/}],["360",function(e){var n=z("360se");return void 0!==n?n:-1!==e.indexOf("360 aphone browser")?/\b360 aphone browser \(([^\)]+)\)/:/\b360(?:se|ee|chrome|browser)\b/}],["maxthon",function(){try{if(S&&(S.mxVersion||S.max_version))return{version:S.mxVersion||S.max_version}}catch(e){}return/\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/}],["micromessenger",/\bmicromessenger\/([\d.]+)/],["qq",/\bm?qqbrowser\/([0-9.]+)/],["green","greenbrowser"],["tt",/\btencenttraveler ([0-9.]+)/],["liebao",function(e){if(e.indexOf("liebaofast")>=0)return/\bliebaofast\/([0-9.]+)/;if(-1===e.indexOf("lbbrowser"))return!1;var n=void 0;try{S&&S.LiebaoGetVersion&&(n=S.LiebaoGetVersion())}catch(t){}return{version:n||"-1"}}],["tao",/\btaobrowser\/([0-9.]+)/],["coolnovo",/\bcoolnovo\/([0-9.]+)/],["saayaa","saayaa"],["baidu",/\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],["ie",j],["mi",/\bmiuibrowser\/([0-9.]+)/],["opera",function(e){var n=/\bopera.+version\/([0-9.ab]+)/;return n.test(e)?n:/\bopr\/([0-9.]+)/}],["oupeng",/\boupeng\/([0-9.]+)/],["yandex",/yabrowser\/([0-9.]+)/],["ali-ap",function(e){return e.indexOf("aliapp")>0?/\baliapp\(ap\/([0-9.]+)\)/:/\balipayclient\/([0-9.]+)\b/}],["ali-ap-pd",/\baliapp\(ap-pd\/([0-9.]+)\)/],["ali-am",/\baliapp\(am\/([0-9.]+)\)/],["ali-tb",/\baliapp\(tb\/([0-9.]+)\)/],["ali-tb-pd",/\baliapp\(tb-pd\/([0-9.]+)\)/],["ali-tm",/\baliapp\(tm\/([0-9.]+)\)/],["ali-tm-pd",/\baliapp\(tm-pd\/([0-9.]+)\)/],["uc",function(e){return e.indexOf("ucbrowser/")>=0?/\bucbrowser\/([0-9.]+)/:e.indexOf("ubrowser/")>=0?/\bubrowser\/([0-9.]+)/:/\buc\/[0-9]/.test(e)?/\buc\/([0-9.]+)/:e.indexOf("ucweb")>=0?/\bucweb([0-9.]+)?/:/\b(?:ucbrowser|uc)\b/}],["chrome",/ (?:chrome|crios|crmo)\/([0-9.]+)/],["android",function(e){if(-1!==e.indexOf("android"))return/\bversion\/([0-9.]+(?: beta)?)/}],["blackberry",function(e){var n=e.match(C)||e.match(M)||e.match(A);return n?{version:n[1]}:"blackberry"}],["safari",/\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],["webview",/\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],["firefox",/\bfirefox\/([0-9.ab]+)/],["nokia",/\bnokiabrowser\/([0-9.]+)/]],engine:[["edgehtml",/edge\/([0-9.]+)/],["trident",j],["blink",function(){return"chrome"in O&&"CSS"in O&&/\bapplewebkit[\/]?([0-9.+]+)/}],["webkit",/\bapplewebkit[\/]?([0-9.+]+)/],["gecko",function(e){var n=e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);if(n)return{version:n[1]+"."+n[2]}}],["presto",/\bpresto\/([0-9.]+)/],["androidwebkit",/\bandroidwebkit\/([0-9.]+)/],["coolpadwebkit",/\bcoolpadwebkit\/([0-9.]+)/],["u2",/\bu2\/([0-9.]+)/],["u3",/\bu3\/([0-9.]+)/]],re_msie:j},T=E.device,q=E.os,F=E.browser,R=E.engine,D=E.re_msie,I=(Object.freeze||Object)({"default":E,__moduleExports:E,device:T,os:q,browser:F,engine:R,re_msie:D}),N=_&&k||_,V=I&&E||I,J=(navigator.userAgent||"")+" "+(navigator.appVersion||"")+" "+(navigator.vendor||""),L=new N(V);function U(e){var n=L.parse(e),t=function(e){if(!V.re_msie.test(e))return null;var n,t,i=void 0,o=void 0,r=void 0;if(-1!==e.indexOf("trident/")&&(i=/\btrident\/([0-9.]+)/.exec(e))&&i.length>=2){o=i[1];var a=i[1].split(".");a[0]=parseInt(a[0],10)+4,r=a.join(".")}t=(i=V.re_msie.exec(e))[1];var s=i[1].split(".");return void 0===r&&(r=t),s[0]=parseInt(s[0],10)-4,n=s.join("."),void 0===o&&(o=n),{browserVersion:r,browserMode:t,engineVersion:o,engineMode:n,compatible:o!==n}}(e);if(t){var i=n.engine.name,o=t.engineVersion||t.engineMode,r=parseFloat(o),a=t.engineMode;n.engine={name:i,version:r,fullVersion:o,mode:parseFloat(a),fullMode:a,compatible:!!t&&t.compatible},n.engine[n.engine.name]=r;var s=n.browser.name,c=n.browser.fullVersion;"ie"===s&&(c=t.browserVersion);var u=t.browserMode,d=parseFloat(c);n.browser={name:s,version:d,fullVersion:c,mode:parseFloat(u),fullMode:u,compatible:!!t&&t.compatible},n.browser[s]=d}return n}var B=U(J);B.parse=U;var H=B,P={"金立":"gionee","大显":"daxian","天语":"tianyu"},G=[{name:"blackberry",regex:/playbook/},{name:"philips",regex:/philips/},{name:"nec",regex:/nec/},{name:"palm",regex:/palm/},{name:"benq",regex:/benq/},{name:"taixin",regex:/telson/},{name:"cect",regex:/cect/},{name:"dbtel",regex:/dbtel/},{name:"konka",regex:/konka/},{name:"changhong",regex:/changhong/},{name:"wanlida",regex:/malata/},{name:"pantech",regex:/pantech/},{name:"dongxin",regex:/eastcom/},{name:"duowei",regex:/doov/},{name:"koobee",regex:/koobee/},{name:"alcatel",regex:/alcatel/},{name:"bird",regex:/bird/}];function $(e){var n=function(e){return/mobile|phone|wpdesktop|windows ce|android|iphone|ipad|ipod|blackberry|bb10|rim tablet os|webos|opera|symbian|symbos|series60|series40|syb-[0-9]+|s60|palm|tizen|xblwp7|zunewp7|yunos|ucweb|midp|mqq|htc|nokia|samsung/i.test(e)?a.MOBILE:a.PC}(e=e.toLowerCase());return{pcmb:n,os:function(e){var n,t=H.parse(e).os,i=t.name,o=t.fullVersion;if("windows"===i){if(e.indexOf("wpdesktop")>-1)return"wp|";i="win",e.indexOf("windows nt 5.0")>-1||e.indexOf("windows nt 5.01")>-1||e.indexOf("windows 2000")>-1?o="2000":e.indexOf("windows nt 5.1")>-1||e.indexOf("windows xp")>-1?o="xp":e.indexOf("windows nt 5.2")>-1||e.indexOf("windows 2003")>-1?o="2003":e.indexOf("windows nt 6.0")>-1||e.indexOf("windows vista")>-1?o="vista":e.indexOf("windows nt 6.1")>-1||e.indexOf("windows 2008")>-1||e.indexOf("windows 7")>-1?o="7":e.indexOf("windows nt 6.2")>-1||e.indexOf("windows 8")>-1?o="8.0":e.indexOf("windows nt 6.3")>-1?o="8.1":e.indexOf("windows nt 10.0")>-1&&(o="10.0")}else if("linux"===i){for(var r=s,a=r.length,u=0;u<a;u++)if(e.indexOf(r[u])>-1){o=r[u];break}}else"blackberry"===i&&"-1"===o?(n=e.match(c.blackberry))&&(o=n[1]):"symbian"===i&&"3"===o&&(o="^3");return/tizen/.test(e)&&(i="tizen",(n=e.match(c.tizen))&&(o=n[1])),"chromeos"===i&&(i="cros"),"na"===i&&(/symbian|symbos|series\s?60|series40|syb-[0-9]+|s60/.test(e)&&(i="symbian",(n=e.match(c.symbian))&&(o="3"===n[1]?"^3":n[1])),/blackberry|bb10|rim tablet os/.test(e)&&(i="blackberry",(n=e.match(c.blackberry))&&(o=n[1])),/hisense/.test(e)&&(i="android")),o&&(o="-1"===o?"":(o=o.split(".")).length>1?o[0]+"."+o[1]:o[0]),i+"|"+o}(e),bs:function(e){if(/baiduboxapp/.test(e))return"baidubox";if(/spark/.test(e))return"baiduspark";if(/qiyu/.test(e))return"qiyu";if(/yunhai/.test(e))return"yunhai";if(/yy/.test(e))return"yy";if(/myie/.test(e))return"mayi";if(/11[45]{1}browser/.test(e))return"115";if(/2345/.test(e))return"2345";var n=H.parse(e).browser,t=n.name,i=n.fullVersion;if("ie"===t)switch(i){case"6.0":t="ie6";break;case"7.0":t="ie7";break;case"8.0":t="ie8";break;case"9.0":t="ie9";break;case"10.0":t="ie10";break;case"11.0":t="ie11";break;case"12.0":t="ie12"}return"micromessenger"===t&&(t="wechat"),"tao"===t&&(t="taobao"),"oupeng"===t&&(t="opera"),t.indexOf("dolfin")>-1&&(t="dolphin"),(t.indexOf("ie")>-1||"android"===t)&&/2345/.test(e)&&(t="2345"),"na"===t&&(/android/.test(e)?t="android":/yandex/.test(e)&&(t="yandex")),t}(e),mb:function(e){var n,t,i=H.parse(e).device,o=G.length;if("pc"===i.name||"mac"===i.name)return"";if("hongmi"===i.name)return"mi";if(/\bhonor/.test(e)||/\b(h\d+-l\d+)/.test(e))return"huawei";if(/\bsmartisan\b/.test(e)||/sm-?(\d{3,})/.test(e))return"smartisan";if(/\ba0001 build/.test(e))return"oneplus";if(/hisense/.test(e))return"hisense";if(/\bmot[-]([a-z0-9]+)/.test(e)||/ (xt\d+) build/.test(e))return"moto";if(P[i.name])return P[i.name];if("na"===i.name){for(n=0;n<o;n++)if((t=G[n]).regex.test(e))return t.name;return""}return i.name}(e)}}function X(e){var n=("; "+document.cookie).split("; "+e+"=");return 1===n.length?"":decodeURIComponent(n[1].split(";")[0])}function Y(e,n,t){t=t||{};var i=e+"="+encodeURIComponent(n);if(t.expires&&"number"==typeof t.expires){var o=new Date;t.expires=1e3*t.expires*60*60*24,i=i+"; expires="+(o=new Date(o.getTime()+t.expires)).toUTCString()}i=i+"; path="+(t.path?t.path:"/"),i+=t.domain?"; domain="+t.domain:"",document.cookie=i}function Z(e){var n=u;try{n=e.GetVariable("$version")}catch(t){}return n}function K(e){var n=u;try{n=new ActiveXObject(e)}catch(t){n={activeXError:!0}}return n}var W="2.0.2",Q="2.0.2";function ee(e){return"v"+(e?Q:W)}var ne=[{domain:"duowan.com",key:"duowan"},{domain:"yy.com",key:"yy"},{domain:"yy.tv",key:"yytv"},{domain:"kuaikuai.cn",key:"kuaikuai"},{domain:"hiido.com",key:"hiido"},{domain:"hiido.cn",key:"hiidocn"},{domain:"hiido.net",key:"hiidonet"},{domain:"bengou.com",key:"bengou"},{domain:"5253.com",key:"5253"},{domain:"duowan.cn",key:"duowancn"},{domain:"zzvv.com",key:"zzvv"},{domain:"99d.com",key:"99d"},{domain:"sc2.com.cn",key:"sc2"},{domain:"100.com",key:"100"},{domain:"5153.com",key:"5153"},{domain:"huya.com",key:"huya"},{domain:"1931.com",key:"1931"},{domain:"fengkaobiguo.com",key:"fengkaobiguo"},{domain:"up24.com",key:"up24"},{domain:"edu24ol.com",key:"edu24ol"},{domain:"ruixueys.com",key:"ruixueys"},{domain:"hqgwy.cn",key:"hqgwy"},{domain:"erdmusic.com",key:"erdmusic"},{domain:"zhiniu8.com",key:"zhiniu8"},{domain:"100yy.com",key:"100yy"},{domain:"dwmoniqi.com",key:"dwmoniqi"},{domain:"bigo.tv",key:"bigotv"},{domain:"bigo.sg",key:"bigosg"},{domain:"like.video",key:"bigolike"},{domain:"mcpemaster.com",key:"mcpemaster"},{domain:"cubetv.sg",key:"cubetvsg"}];function te(){var e=function(){var e,n,t=document.getElementById("_hiido_script_id_")||document.currentScript||(n=document.getElementsByTagName("script"))[n.length-1];if(!t||!t.src)throw new Error("[HiidoJS] Cannot find Script!");if((e=t.src.split("?")).length>1){for(var i=e[1].split("&"),o={},r=0;r<i.length;r++){var a=i[r].split("=");o[a[0]]=a[1]}return o}return{}}();return e.siteid?e.siteid:""}function ie(){var e=Math.random()+"";return Y(i,e),e}function oe(){var e=new Date;return e=e.getTime(),Y(o,e),e}var re=a.MOBILE,ae=Object.prototype.hasOwnProperty,se=window.location.protocol+"//ylog.hiido.com/j.gif";function ce(e){var n=ce.isInternal;e=e.toLowerCase();var t,o=(t=document.referrer)?{host:t.split("/")[2],origin:t}:{host:"",origin:""},a=function(e){var n=e.host,t=e.origin;if(!n)return{engine:"",key:""};for(var i=d.length,o=!1,r={engine:"",key:""},a=0;a<i&&!o;a++){var s=d[a],c=s.engine;if(n.indexOf(c)>-1){o=!0,r.engine=s.value;var u,l=s.rule;if("function"==typeof l)r.key=l(t);else{u=l.split("|");for(var f=0;f<u.length;f++){var b=u[f],m=new RegExp("(^|)"+b+"=([^&]*)(&|$)","gi").exec(t);if(null!==m){r.key=m[2];break}}}}}return r}(o),s=n?function(e){for(var n,t,i,o,r="",a=e.split("."),s="",c=0;c<ne.length;c++)if(t=(n=ne[c]).domain,e.indexOf(t)>-1){if(i=t.split("."),a[o=a.length-i.length]!==i[0]||e.substr(e.length-t.length)!==t)continue;var u=window._hiido_no;r=void 0!==u&&0===u?n.key:(0===o?"www":a[o-1])+"@"+n.key,s=n.domain;break}var d=X("hiido_ui");return d||Y("hiido_ui",d=Math.random(),{expires:700,domain:"."+s}),r}(window.location.hostname):te(),c=$(e),f=!X(l);if("undefined"==typeof window["_hdjs_loaded_"+s]){window["_hdjs_loaded_"+s]=!0,this.isInternal=n,this.detect=c,this.data={ht:window.location.hostname,siteid:s,speid:function(e){var n,t=e||window._hiido_wid,i=Object.prototype.toString;if(t)if("[object Array]"===i.call(t))n=t.join("|");else if("function"==typeof t)try{n=t.call(window),"[object Array]"===i.call(n)&&(n=n.join("|"))}catch(o){window.console.log("[HiidoJS] _hiido_wid 函数实现错误!"),window.console.dir(o),n=""}return n||""}(),ui:function(e){var n=X(l),t=window.location.hostname;return t=t.split("."),n||(n=Math.random(),e&&t.length>1?Y(l,n,{expires:36500,domain:"."+t[t.length-2]+"."+t[t.length-1]}):Y(l,n,{expires:36500})),n}(n),sc:window.screen.width+"."+window.screen.height,cl:(window.screen.colorDepth||0)+"-bit",pcmb:c.pcmb,os:c.os,bs:c.bs,mb:c.mb,se:a.engine,wd:a.key,rfh:o.host,rf:o.origin,sns:function(e,n){if("wechat"===e)return"wechat";for(var t=null,i=d,o=i.length,r=0;r<o&&null===t;r++)n.engine===i[r].value&&(t=i[r].engine);return"s.weibo.com"===t?"weibo":""}(c.bs,a),fl:function(){var e=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(e){return Z(e)}},{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(e){var n="6,0,21";try{e.AllowScriptAccess="always",n=Z(e)}catch(t){}return n}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(e){return Z(e)}}],n=u,t=navigator;try{if(t.plugins){for(var i=0;i<t.plugins.length;i++)if(t.plugins[i].name.indexOf("Shockwave Flash")>-1){(n=t.plugins[i].description.split("Shockwave Flash ")).length>1?(n=n[1])&&(n=n.split(".")[0]):n=n[0];break}}else if(window.ActiveXObject)for(var o=0;o<e.length&&n===u;o++){var r=K(e[o].name);r.activeXError||(n=e[o].version(r))!==u&&(n=n.split(",")[0].split(" ")[1])}}catch(a){}return n}(),ln:navigator.language||"",ja:function(){try{return navigator.javaEnabled()?1:0}catch(e){return 0}}(),ck:navigator.cookieEnabled?1:0,ot:"",lt:"",xy:"",ext:"",v:ee(n),pl:window.location.href},f&&(this.data.isnew=1),this._hasBootstrapReport=!1,this._inactiveThreshold=2e4,this.data.hsid=this.getSessionId(),ce.module||window[r]||this._bootstrapReport();var b=this;this.report=window.hd=function(e,n,t){b.isOversea=t,n=n||{};var o=new Date-0+"",a={hsid:X(i),ht:b.data.ht,ui:b.data.ui,siteid:b.data.siteid,pl:b.data.pl,v:b.data.v,rf:b.data.rf,rfh:b.data.rfh,pcmb:b.data.pcmb,rnd:b.data.ui+o,ut:o};if("event"===e){if(!n.eventAction)return void window.console.warn("[HiidoJS] 请使用正确的字段进行事件上报; 详情请查询 https://hdjs.hiido.com/docs/#/events");a.ea=n.eventAction,a.ec=n.eventCategory||"",a.el=n.eventLabel||"",a.ev=n.eventValue||"",b.log("webaction",a)}else"view"===e&&(ce.module||window[r]?(n.uid&&(b.data.uid=n.uid),n.reserve&&(b.data.reserve=ce.JSON.stringify(n.reserve)),b._bootstrapReport()):window.console.warn("[HiidoJS] 请在hiido.js加载前设置defer模式,详见:","http://hdjs.hiido.com/docs/#/usage?id=手动触发上报"))},this.attachMetricMethods()}}ce.prototype={constructor:ce,_bootstrapReport:function(){this._hasBootstrapReport?window.console.warn("[HiidoJS] 请不要重复调用手动上报方法!"):(this._hasBootstrapReport=!0,this.reportEnter(),this.recordLifetime(),this.attachEvents())},attachMetricMethods:function(){var e=this;this.oldMetrics=null,window.Metrics&&(window.__oldMetrics__=window.Metrics,this.oldMetrics=window.__oldMetrics__),window.__Metrics__=window.Metrics=this.Metrics={serviceReport:function(n){if(e.validateMetricsReportData(n)){var t=(new Date).getTime(),i=e.generateMetricBasicData(t,n);i.reqdata=JSON.stringify([{scode:n.scode,uri:n.uri,reqtime:n.timeSpent,ret:n.code,rtime:t}]),e.log("mmetric",i)}},countReport:function(n){if(e.validateMetricsReportData(n)){var t=(new Date).getTime(),i=e.generateMetricBasicData(t,n);i.counterdata=JSON.stringify([{scode:n.scode,uri:n.uri,counterName:n.countName,value:n.count,invokecount:1}]),e.log("mmetric",i)}},customReport:function(n){if(e.validateMetricsReportData(n)){var t=(new Date).getTime(),i=e.generateMetricBasicData(t,n);i.flatdata=JSON.stringify([{scode:n.scode,uri:n.uri,topic:n.topic,val:n.val,extra:n.extra}]),e.log("mmetric",i)}},noConflict:function(){window.__oldMetrics__&&(window.Metrics=window.__oldMetrics__)}}},generateActKey:function(e,n){return t(e+n+"HiidoYYSystem").toLowerCase()},generateMetricBasicData:function(e,n){var t=e;e=Math.round(e/1e3);var i=this.generateActKey("mmetric",e),o=this.detect,r=o.os.split("|"),a=o.bs,s=r[0],c={ios:0,wp:1,android:2,macosx:3,win:4},u=ce.JSON.stringify([]);return{time:e,key:i,appkey:"",ver:n.ver,sdkver:ee(this.isInternal),sys:ae.call(c,s)?c[s]:s,osver:a,model:o.mb,sjp:o.mb,net:"",clienttime:t,reqdata:u,counterdata:u,flatdata:u}},reportEnter:function(){if(!this._enterReportSent){var e=new Date-0+"",n=ce.assign(this.data,{io:1,ut:e,rnd:this.data.ui+e});this.log("webstat",n),this._enterReportSent=!0}},recordLifetime:function(){var e,n=this,t=window.requestAnimationFrame,i=window.cancelAnimationFrame;function o(){e.start()}function r(){e.stop()}this.data.lt=0,e=this._heartbeat=function(){var e;function o(){var i=new Date,r=i-n._ltStart;n.data.lt=n.data.lt+r,n._inactiveTime=n._inactiveTime+r,n._ltStart=i,e=n._inactiveTime<=n._inactiveThreshold?t(o):null}return{start:function(){e||(n._ltStart=new Date,e=t(o))},stop:function(){e&&(i(e),e=null)}}}(),"onfocusin"in document?(document.onfocusin=o,document.onfocusout=r):(window.onfocus=o,window.onblur=r);var a,s,c,u=["","webkit","moz","ms","o"];if(this.data.pcmb===re){for(var d=0;d<u.length;d++)if((s=(a=u[d])?a+"Hidden":"hidden")in document){c=a+"visibilitychange";break}c&&ce.addEvent(document,c,function(){document[s]?r():o()})}this._inactiveTime=0,e.start()},reportLeave:function(){if(!this._leaveReportSent){var e=new Date-0+"",n=ce.assign(this.data,{io:0,ut:e,rnd:this.data.ui+e,hsid:X(i)});this.log("webstat",n),this._leaveReportSent=!0}},log:function(e,n){var t=this,i=[];for(var o in n)i.push(encodeURIComponent(o)+"="+encodeURIComponent(n[o]));var r,a,s=i.join("&"),c="log_"+(new Date).getTime(),u=new Image(1,1);if(window[c]=u,u.onerror=function(){(!0===window._HIIDO_OVERSEA_||t.isOversea)&&(u.src=se+"?act="+e+"&"+s,u.onerror=function(){window[c]=null}),window[c]=null},u.onload=function(){window[c]=null},r=!0===window._HIIDO_OVERSEA_||t.isOversea?"//hlog.hiido.com/j.gif?act="+e+"&"+s:se+"?act="+e+"&"+s,!("string"==typeof(a=r)&&a.length<=2e3))throw new RangeError("[HiidoJS]: Exceeding Maximum URL length - 2000 Characters");u.src=r},attachEvents:function(){var e=this;ce.addEvent(document,"click",function(n){var t=n.target||n.srcElement;(function(e){for(var n;e&&"a"!==(n=e.tagName.toLowerCase())&&"html"!==n;)e=e.parentNode;return"a"===n})(t)&&(e.data.ot=t.href),e.data.xy=n.clientX+","+n.clientY},!0),window.onbeforeunload=function(){e.reportLeave()},window.onunload=function(){e.reportLeave()},this.data.pcmb===re&&(ce.addEvent(window,"pageshow",function(n){n.persisted&&(e._leaveReportSent=!1,e._enterReportSent=!1,e.data.lt=0,e.reportEnter())}),ce.addEvent(window,"pagehide",function(n){n.persisted&&e.reportLeave()}),ce.addEvent(window,"touchstart",function(){e._inactiveTime=0,e._heartbeat.start()}))},getSessionId:function(){var e,n=X(o);return""===n?(e=ie(),oe()):""!==this.data.rfh&&-1===this.data.rfh.indexOf(this.data.ht)?e=ie():(n=X(o),e=(new Date).getTime()-n>18e5?ie():X(i)),oe(),e},validateMetricsReportData:function(e){for(var n,t=["scode","ver","uri"],i=0;i<t.length;i++)if(!e[n=t[i]])return window.console.warn("HiidoJS: Metrics 上报必须上报"+n+". 详情请查询 https://hdjs.hiido.com/docs/#/metrics"),!1;return!0}};var ue=n(function(n,t){(function(){var i="function"==typeof undefined&&undefined.amd,o={"function":!0,object:!0},r=t&&!t.nodeType&&t,a=o["undefined"==typeof window?"undefined":f(window)]&&window||this,s=r&&o.object&&n&&!n.nodeType&&"object"==f(e)&&e;function c(e,n){e||(e=a.Object()),n||(n=a.Object());var t=e.Number||a.Number,i=e.String||a.String,r=e.Object||a.Object,s=e.Date||a.Date,u=e.SyntaxError||a.SyntaxError,d=e.TypeError||a.TypeError,l=e.Math||a.Math,b=e.JSON||a.JSON;"object"==(void 0===b?"undefined":f(b))&&b&&(n.stringify=b.stringify,n.parse=b.parse);var m,w,h,p=r.prototype,v=p.toString,g=new s(-0xc782b5b800cec);try{g=-109252==g.getUTCFullYear()&&0===g.getUTCMonth()&&1===g.getUTCDate()&&10==g.getUTCHours()&&37==g.getUTCMinutes()&&6==g.getUTCSeconds()&&708==g.getUTCMilliseconds()}catch(D){}function y(e){if(y[e]!==h)return y[e];var o;if("bug-string-char-index"==e)o="a"!="a"[0];else if("json"==e)o=y("json-stringify")&&y("json-parse");else{var r,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var c=n.stringify,u="function"==typeof c&&g;if(u){(r=function(){return 1}).toJSON=r;try{u="0"===c(0)&&"0"===c(new t)&&'""'==c(new i)&&c(v)===h&&c(h)===h&&c()===h&&"1"===c(r)&&"[1]"==c([r])&&"[null]"==c([h])&&"null"==c(null)&&"[null,null,null]"==c([h,v,null])&&c({a:[r,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,r)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new s(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new s(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new s(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new s(-1))}catch(D){u=!1}}o=u}if("json-parse"==e){var d=n.parse;if("function"==typeof d)try{if(0===d("0")&&!d(!1)){var l=5==(r=d(a)).a.length&&1===r.a[0];if(l){try{l=!d('"\t"')}catch(D){}if(l)try{l=1!==d("01")}catch(D){}if(l)try{l=1!==d("1.")}catch(D){}}}}catch(D){l=!1}o=l}}return y[e]=!!o}if(!y("json")){var x=y("bug-string-char-index");if(!g)var k=l.floor,_=[0,31,59,90,120,151,181,212,243,273,304,334],O=function(e,n){return _[n]+365*(e-1970)+k((e-1969+(n=+(n>1)))/4)-k((e-1901+n)/100)+k((e-1601+n)/400)};if((m=p.hasOwnProperty)||(m=function(e){var n,t={};return(t.__proto__=null,t.__proto__={toString:1},t).toString!=v?m=function(e){var n=this.__proto__,t=e in(this.__proto__=null,this);return this.__proto__=n,t}:(n=t.constructor,m=function(e){var t=(this.constructor||n).prototype;return e in this&&!(e in t&&this[e]===t[e])}),t=null,m.call(this,e)}),w=function(e,n){var t,i,r,a=0;for(r in(t=function(){this.valueOf=0}).prototype.valueOf=0,i=new t)m.call(i,r)&&a++;return t=i=null,a?w=2==a?function(e,n){var t,i={},o="[object Function]"==v.call(e);for(t in e)o&&"prototype"==t||m.call(i,t)||!(i[t]=1)||!m.call(e,t)||n(t)}:function(e,n){var t,i,o="[object Function]"==v.call(e);for(t in e)o&&"prototype"==t||!m.call(e,t)||(i="constructor"===t)||n(t);(i||m.call(e,t="constructor"))&&n(t)}:(i=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],w=function(e,n){var t,r,a="[object Function]"==v.call(e),s=!a&&"function"!=typeof e.constructor&&o[f(e.hasOwnProperty)]&&e.hasOwnProperty||m;for(t in e)a&&"prototype"==t||!s.call(e,t)||n(t);for(r=i.length;t=i[--r];s.call(e,t)&&n(t));}),w(e,n)},!y("json-stringify")){var S={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j=function(e,n){return("000000"+(n||0)).slice(-e)},C=function(e){for(var n='"',t=0,i=e.length,o=!x||i>10,r=o&&(x?e.split(""):e);t<i;t++){var a=e.charCodeAt(t);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=S[a];break;default:if(a<32){n+="\\u00"+j(2,a.toString(16));break}n+=o?r[t]:e.charAt(t)}}return n+'"'};n.stringify=function(e,n,t){var i,r,a,s;if(o[void 0===n?"undefined":f(n)]&&n)if("[object Function]"==(s=v.call(n)))r=n;else if("[object Array]"==s){a={};for(var c,u=0,l=n.length;u<l;c=n[u++],("[object String]"==(s=v.call(c))||"[object Number]"==s)&&(a[c]=1));}if(t)if("[object Number]"==(s=v.call(t))){if((t-=t%1)>0)for(i="",t>10&&(t=10);i.length<t;i+=" ");}else"[object String]"==s&&(i=t.length<=10?t:t.slice(0,10));return function b(e,n,t,i,o,r,a){var s,c,u,l,p,g,y,x,_,S,M,A,z,E,T,q;try{s=n[e]}catch(D){}if("object"==(void 0===s?"undefined":f(s))&&s)if("[object Date]"!=(c=v.call(s))||m.call(s,"toJSON"))"function"==typeof s.toJSON&&("[object Number]"!=c&&"[object String]"!=c&&"[object Array]"!=c||m.call(s,"toJSON"))&&(s=s.toJSON(e));else if(s>-1/0&&s<1/0){if(O){for(p=k(s/864e5),u=k(p/365.2425)+1970-1;O(u+1,0)<=p;u++);for(l=k((p-O(u,0))/30.42);O(u,l+1)<=p;l++);p=1+p-O(u,l),y=k((g=(s%864e5+864e5)%864e5)/36e5)%24,x=k(g/6e4)%60,_=k(g/1e3)%60,S=g%1e3}else u=s.getUTCFullYear(),l=s.getUTCMonth(),p=s.getUTCDate(),y=s.getUTCHours(),x=s.getUTCMinutes(),_=s.getUTCSeconds(),S=s.getUTCMilliseconds();s=(u<=0||u>=1e4?(u<0?"-":"+")+j(6,u<0?-u:u):j(4,u))+"-"+j(2,l+1)+"-"+j(2,p)+"T"+j(2,y)+":"+j(2,x)+":"+j(2,_)+"."+j(3,S)+"Z"}else s=null;if(t&&(s=t.call(n,e,s)),null===s)return"null";if("[object Boolean]"==(c=v.call(s)))return""+s;if("[object Number]"==c)return s>-1/0&&s<1/0?""+s:"null";if("[object String]"==c)return C(""+s);if("object"==(void 0===s?"undefined":f(s))){for(E=a.length;E--;)if(a[E]===s)throw d();if(a.push(s),M=[],T=r,r+=o,"[object Array]"==c){for(z=0,E=s.length;z<E;z++)A=b(z,s,t,i,o,r,a),M.push(A===h?"null":A);q=M.length?o?"[\n"+r+M.join(",\n"+r)+"\n"+T+"]":"["+M.join(",")+"]":"[]"}else w(i||s,function(e){var n=b(e,s,t,i,o,r,a);n!==h&&M.push(C(e)+":"+(o?" ":"")+n)}),q=M.length?o?"{\n"+r+M.join(",\n"+r)+"\n"+T+"}":"{"+M.join(",")+"}":"{}";return a.pop(),q}}("",((c={})[""]=e,c),r,a,i,"",[])}}if(!y("json-parse")){var M,A,z=i.fromCharCode,E={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},T=function(){throw M=A=null,u()},q=function(){for(var e,n,t,i,o,r=A,a=r.length;M<a;)switch(o=r.charCodeAt(M)){case 9:case 10:case 13:case 32:M++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=x?r.charAt(M):r[M],M++,e;case 34:for(e="@",M++;M<a;)if((o=r.charCodeAt(M))<32)T();else if(92==o)switch(o=r.charCodeAt(++M)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=E[o],M++;break;case 117:for(n=++M,t=M+4;M<t;M++)(o=r.charCodeAt(M))>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||T();e+=z("0x"+r.slice(n,M));break;default:T()}else{if(34==o)break;for(o=r.charCodeAt(M),n=M;o>=32&&92!=o&&34!=o;)o=r.charCodeAt(++M);e+=r.slice(n,M)}if(34==r.charCodeAt(M))return M++,e;T();default:if(n=M,45==o&&(i=!0,o=r.charCodeAt(++M)),o>=48&&o<=57){for(48==o&&((o=r.charCodeAt(M+1))>=48&&o<=57)&&T(),i=!1;M<a&&((o=r.charCodeAt(M))>=48&&o<=57);M++);if(46==r.charCodeAt(M)){for(t=++M;t<a&&((o=r.charCodeAt(t))>=48&&o<=57);t++);t==M&&T(),M=t}if(101==(o=r.charCodeAt(M))||69==o){for(43!=(o=r.charCodeAt(++M))&&45!=o||M++,t=M;t<a&&((o=r.charCodeAt(t))>=48&&o<=57);t++);t==M&&T(),M=t}return+r.slice(n,M)}if(i&&T(),"true"==r.slice(M,M+4))return M+=4,!0;if("false"==r.slice(M,M+5))return M+=5,!1;if("null"==r.slice(M,M+4))return M+=4,null;T()}return"$"},F=function(e,n,t){var i=R(e,n,t);i===h?delete e[n]:e[n]=i},R=function(e,n,t){var i,o=e[n];if("object"==(void 0===o?"undefined":f(o))&&o)if("[object Array]"==v.call(o))for(i=o.length;i--;)F(o,i,t);else w(o,function(e){F(o,e,t)});return t.call(e,n,o)};n.parse=function(e,n){var t,i;return M=0,A=""+e,t=function o(e){var n,t;if("$"==e&&T(),"string"==typeof e){if("@"==(x?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(n=[];"]"!=(e=q());t||(t=!0))t&&(","==e?"]"==(e=q())&&T():T()),","==e&&T(),n.push(o(e));return n}if("{"==e){for(n={};"}"!=(e=q());t||(t=!0))t&&(","==e?"}"==(e=q())&&T():T()),","!=e&&"string"==typeof e&&"@"==(x?e.charAt(0):e[0])&&":"==q()||T(),n[e.slice(1)]=o(q());return n}T()}return e}(q()),"$"!=q()&&T(),M=A=null,n&&"[object Function]"==v.call(n)?R(((i={})[""]=t,i),"",n):t}}}return n.runInContext=c,n}if(!s||s.global!==s&&s.window!==s&&s.self!==s||(a=s),r&&!i)c(a,r);else{var u=a.JSON,d=a.JSON3,l=!1,b=c(a,a.JSON3={noConflict:function(){return l||(l=!0,a.JSON=u,a.JSON3=d,u=d=null),b}});a.JSON={parse:b.parse,stringify:b.stringify}}i&&undefined(function(){return b})}).call(e)});!function(e){for(var n=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!e.requestAnimationFrame;++i)e.requestAnimationFrame=e[t[i]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[t[i]+"CancelAnimationFrame"]||e[t[i]+"CancelRequestAnimationFrame"];if(e.requestAnimationFrame||(e.requestAnimationFrame=function(t){var i=(new Date).getTime(),o=Math.max(0,16-(i-n)),r=e.setTimeout(function(){t(i+o)},o);return n=i+o,r}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(n){e.clearTimeout(n)}),!window.console){var o={log:function(){},dir:function(e){for(var n in e)o.log(n+" ",e[n])}};o.warn=o.log,window.console=o}window.console.dir||(window.console.dir=function(e){for(var n in e)window.console.log(n+" ",e[n])}),window.console.warn||(window.console.warn=window.console.log)}(window),ce.addEvent=function(e,n,t,i){e.addEventListener?e.addEventListener(n,t,!!i):e.attachEvent&&(e["e"+n+t]=t,e[n+t]=function(){e["e"+n+t](window.event)},e.attachEvent("on"+n,e[n+t]))},ce.assign=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ce.isInternal=!0,ce.module=!1,ce.JSON=ue,function(){try{var e=navigator.userAgent;new ce(e)}catch(a){window.console.dir(a);var n=new Image(1,1),t="";for(var i in a)t+=i+":"+a[i]+";";var o=encodeURIComponent,r=a.stack?o(a.stack):"";n.src=window.location.protocol+"//wbugs.hiido.com/c.gif?e="+o(t)+"|"+r+"|"+o(window.location.href)+"|"+o(e),n.onload=function(){}}}()}();