//20150203
//366

;(function(){
    var _STATYoka = _STATYoka || {};
    _STATYoka.Cookie = {
        Get: function (name) {
            var cv = document.cookie.split("; ");
            var value = "";
            var cva = [], temp;
            for (i = 0; i < cv.length; i++) {
                temp = cv[i].split("=");
                cva[temp[0]] = unescape(temp[1]);
                if (temp[0] == name) {
                    value = unescape(temp[1]);
                    return value;
                }
            }
            return value;

        },

        Set: function (name, value, expires, path, domain, secure) {
            if (!name || !value) return false;
            if (name == "" || value == "") return false;
            if (expires) {

                if (/^[0-9]+$/.test(expires)) {
                    var today = new Date();
                    expires = new Date(today.getTime() + expires * 1000).toGMTString();

                } else if (!/^wed, \d{2} \w{3} \d{4} \d{2}\:\d{2}\:\d{2} GMT$/.test(expires)) {
                    expires = undefined;
                }

            }

            var cv = name + "=" + escape(value) + ";"
        + ((expires) ? " expires=" + expires + ";" : "")
        + ((path) ? "path=" + path + ";" : "")
        + ((domain) ? "domain=" + domain + ";" : "")
        + ((secure && secure != 0) ? "secure" : "");

            if (cv.length < 4096) {
                document.cookie = cv;
                return true;
            } else {
                return false;
            }
        },
        Del: function (name, path, domain) {
            if (!name) return false;
            if (name == "") return false;
            if (!this.Get(name)) return false;

            document.cookie = name + "=;"
                    + ((path) ? "path=" + path + ";" : "")
                    + ((domain) ? "domain=" + domain + ";" : "")
                    + "expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            return true;

        }
    };

    _STATYoka.Yoka = {

     GetReferrer: function () {  
        var url = document.referrer;
            try {    
        if (url == "" && window.opener != null)
        { 
        url = window.opener.document.URL; 
        } 
        }
            catch (e) { url = ""; }
            return url;
        },

        GetLogValue: function (id) {
            o = document.getElementById(id);
            return o ? o.value : '';
        },

        GetPushID: function (url,ref) {
            var re_spid = /(popularizeid=)(\d+)/;
            //read from url  
            try {
                var m = re_spid.exec(url);
                var n = re_spid.exec(ref);
                var mn = m ? m : n;

                spid = "";
                if (mn) {
                    spid = (mn[mn.length - 1]);
                    if (spid) {
                        var cur = new Date();
                        var tm = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 23, 59, 59);
                        var div = parseInt((tm.getTime() - cur.getTime()) / 1000);
                        _STATYoka.Cookie.Set('yka_pid', spid, div, '/', this.GetHost());
                        //setLogCookie('pida', spid, '/', div);
                    }
                }

                if (!spid) {
                    spid = _STATYoka.Cookie.Get('yka_pid');
                    // spid = getLogCookie('pida');
                }

                return spid;
            }
            catch (e) {
                return '-1';
            }
        },

         GetSrcHost: function (ref) {

            try {

            var _srchost = _STATYoka.Cookie.Get('yka_srchost');

                if (_srchost == "" || _srchost == null)
            {
             var _host = window.location.host;

             if(ref == "" || ref == null){

                var cur = new Date();
                        var tm = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 23, 59, 59);
                        var div = parseInt((tm.getTime() - cur.getTime()) / 1000);

                        _STATYoka.Cookie.Set('yka_srchost', _host, div, '/', this.GetHost());

                return _host;
             }

                       var _refhost = ref.split("/")[2];    
    var _dir2=ref.split("/")[3]; 

             if(_dir2 && _refhost &&(_refhost.indexOf("www.yoka.com")>=0 || _refhost.indexOf("www.yokamen.cn")>=0))      {
                if(_dir2.indexOf("fashion")>=0 || _dir2.indexOf("beauty")>=0 ||_dir2.indexOf("luxury")>=0 ||_dir2.indexOf("club")>=0 ||
                _dir2.indexOf("star")>=0 || _dir2.indexOf("life")>=0 || _dir2.indexOf("test")>=0 || _dir2.indexOf("picture")>=0
                || _dir2.indexOf("video")>=0|| _dir2.indexOf("style")>=0|| _dir2.indexOf("face")>=0|| _dir2.indexOf("auto")>=0
                || _dir2.indexOf("digital")>=0|| _dir2.indexOf("bbs")>=0|| _dir2.indexOf("pic")>=0|| _dir2.indexOf("people")>=0
                || _dir2.indexOf("marry")>=0|| _dir2.indexOf("style")>=0|| _dir2.indexOf("watch")>=0|| _dir2.indexOf("video")>=0 || _dir2.indexOf("dna")>=0)

                _refhost = _refhost + "/" + _dir2;

             }

             var mn = _refhost ?_refhost : _host;

                     if (mn) {              
                        var cur = new Date();
                        var tm = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 23, 59, 59);
                        var div = parseInt((tm.getTime() - cur.getTime()) / 1000);
                        _STATYoka.Cookie.Set('yka_srchost', mn, div, '/', this.GetHost());

                     }
                    return mn;

            }
            else{
                return _srchost;
            }

            }
            catch (e) {
                return '';
            }
        },

         GetSearch: function (ref) {

            try {

            var _sear='';
            _sear = _STATYoka.Cookie.Get('yka_search');

                if(ref == '' || ref == null)
                {
                    return _sear;
                }
                else {

                    if(ref.indexOf("www.baidu.com") >=0 || ref.indexOf("m.baidu.com") >=0)
                    {
                        _sear=1;
                    }
                    else if(ref.indexOf("cn.bing.com") >=0)
                    {
                        _sear=2;
                    }
                    else if(ref.indexOf("www.yahoo.") >=0)
                    {
                        _sear=3;
                    }
                    else if(ref.indexOf("www.soso.com") >=0 || ref.indexOf("m.soso.com") >=0)
                    {
                        _sear=4;
                    }
                    else if(ref.indexOf("www.sogou.com") >=0 || ref.indexOf("m.sogou.com") >=0)
                    {
                        _sear=5;
                    }
                    else if(ref.indexOf("www.youdao.com") >=0 || ref.indexOf("m.youdao.com") >=0)
                    {
                        _sear=6;
                    }
                    else if(ref.indexOf(".google.") >=0)
                    {
                        _sear=7;
                    }
                    else if(ref.indexOf("www.so.com") >=0 || ref.indexOf("m.so.com") >=0)
                    {
                        _sear=8;
                    }
                    else if(ref.indexOf("www.easou.com") >=0 || ref.indexOf("m.easou.com") >=0)
                    {
                        _sear=9;
                    }

                    if(_sear > 0){

                        var cur = new Date();
                        var tm = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 23, 59, 59);
                        var div = parseInt((tm.getTime() - cur.getTime()) / 1000);
                           _STATYoka.Cookie.Set('yka_search', _sear, div, '/', this.GetHost());

                                           }

                    return _sear;       }

            }
            catch (e) {
                return '';
            }
        },

       GetWinSize:function(){

                var winHeight=0;
                var winWidth=0;
                if (window.innerWidth)
                     winWidth = window.innerWidth;
                    else if ((document.body) && (document.body.clientWidth))
                       winWidth = document.body.clientWidth;

                 if (window.innerHeight)
                       winHeight = window.innerHeight;
                 else if ((document.body) && (document.body.clientHeight))
                       winHeight = document.body.clientHeight;

                 if (document.documentElement  && document.documentElement.clientHeight &&
                                                      document.documentElement.clientWidth)
                 {
                     winHeight = document.documentElement.clientHeight;
                     winWidth = document.documentElement.clientWidth;
                 }

                var winSize = winHeight*winWidth;

                winSize=Math.round(winSize/10000);

                return winSize;

       },

        GetPSRC: function (url,ref) {
            var src = _STATYoka.Cookie.Get("yka_psrc"); //this.GetPushID();
            var pid = this.GetPushID(url,ref);
            if (pid != "" && pid > 0) {
                src = pid;
            }
            _STATYoka.Cookie.Set('yka_psrc', src, 2592000, '/', this.GetHost());
            return src;
        },

        GetLogTracID: function () {
            try {
                var re_spid = /(ats_trac=)([^&]+)/;

                var m = re_spid.exec(location.href);
                spid = '';
                if (m) {
                    spid = (m[m.length - 1]);
                }
                return spid;
            }
            catch (e) {
                return '';

            }
        },
        GetLogUID: function () {
            try {
                var str = _STATYoka.Cookie.Get('KM.PASSPORT.MEMBER');
                if (!str)
                    return '';
                arr = str.match(new RegExp(/uid=(\d+)/));
                return arr[1] ? arr[1] : '';
            }
            catch (e) {
                return '';
            }
        },
        GetHost: function () {
            var _h;
            try {
                _h = top.location.hostname;
            }
            catch (e) {
                _h = location.hostname;
            }

            if (_h) {
                if (_h.indexOf(".") > 0) {
                    _h = _h.substring(_h.indexOf(".") + 1);
                }
            } else {
                _h = "yoka.com"
            }
            return _h;
        },

     GetRVD: function () {
            var visit = _STATYoka.Cookie.Get("yka_ph");
            var cur = new Date();
            cur=   cur.getFullYear() + "/" + (cur.getMonth() + 1) + "/" + cur.getDate()
            cur= new Date(cur)

            if (visit == null || visit == "") {
                visit = "{ 'value': '00000000000000000000000000001','lastdate': '" + (cur.getTime()) + "'}";
                _STATYoka.Cookie.Set('yka_ph', visit, 311040000, "/", this.GetHost());
            }
            var o = eval("(" + visit + ")");

            var lastdate = new Date(parseInt(o.lastdate)); 

            lastdate= lastdate.getFullYear() + "/" + (lastdate.getMonth() + 1) + "/" + lastdate.getDate();
            lastdate= new Date(lastdate);

            //var dif = ((cur.getTime() - o.lastdate)/86400000);
            var dif = 0;        
            if ((cur.getTime() - lastdate.getTime() ) < 86400000)
                dif = 0;
            else {          
                dif = parseInt((cur.getTime() -lastdate.getTime()) / 86400000);         
            }

            var tmp = "";

            if (dif > 30) {
                o.value = '00000000000000000000000000001';
                tmp = o.value;
            }
            else if (dif == 0) {
                tmp = o.value;
                return tmp;
            }
            else {
                tmp = o.value.substring(dif);   
                for (var i = 1; i < dif; i++) {
                    tmp += '0';
                }
                tmp += '1';
            }

            visit = "{ 'value': '" + tmp + "','lastdate': '" + (cur.getTime()) + "'}";
            _STATYoka.Cookie.Set('yka_ph', visit, 311040000, "/", this.GetHost());

            return tmp;
        },
        Guid: function () {
            var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                    guid += "-";
            }
            return guid;
        }
    };

    _STATYoka.BrowserDet = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "unknown";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "unknown";
            this.OS = this.searchString(this.dataOS) || "unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {       // for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            {       // for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS: [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };

    _STATYoka.BrowserDet.init();

    try {

        var _gid = "";
        var _tid = "";
        var _pid = "";
        var _uid = "";
        var _gg ="";
        var _h = _STATYoka.Yoka.GetHost();

        _gid = _STATYoka.Cookie.Get('yka_gid');
        if (_gid == "" || _gid == null) {
            _gid = _STATYoka.Yoka.Guid();
            _gg = _STATYoka.Cookie.Get('yka_gid');
            if(_gg == "" || _gg == null)
               _STATYoka.Cookie.Set('yka_gid', _gid, 311040000, "/", _h);
        }

        _tid = _STATYoka.Cookie.Get('yka_tid');
        if (_tid == "" || _tid == null) {
            _tid = _STATYoka.Yoka.Guid();
        }
        _STATYoka.Cookie.Set('yka_tid', _tid, 1800, "/", _h);

        _uid = _STATYoka.Yoka.GetLogUID();

        var _ph = "";
        _ph = _STATYoka.Yoka.GetRVD();

        var _loc = _STATYoka.Yoka.GetLogValue('loc') ? _STATYoka.Yoka.GetLogValue('loc') : document.location.href;
        var _ref = escape(_STATYoka.Yoka.GetReferrer());

         var _src_host="";
         _src_host = _STATYoka.Yoka.GetSrcHost(_ref);

         var _sear = _STATYoka.Yoka.GetSearch(_ref);

        var _psrc = "";
        _psrc = _STATYoka.Yoka.GetPSRC(_loc, _ref);

        _pid = _STATYoka.Yoka.GetPushID(_loc, _ref);
        var _tracid = _STATYoka.Yoka.GetLogTracID();

        var _winsize= _STATYoka.Yoka.GetWinSize();

        var ykImage = new Image();
        ykImage.src = 'http://analysis.yoka.com/allstat.php?' + '&_loc=' + escape(_loc) + '&_func=' + _STATYoka.Yoka.GetLogValue('func')
                + '&_act=' + _STATYoka.Yoka.GetLogValue('act') + '&_actcom=' + _STATYoka.Yoka.GetLogValue('actcom')
                + '&_urlid=' + escape(_STATYoka.Yoka.GetLogValue('urlid')) + '&_topicid=' + escape(_STATYoka.Yoka.GetLogValue('topicid'))
                + '&_ref=' + _ref + '&_browser=' + escape(_STATYoka.BrowserDet.browser)
                + '&_browserv=' + escape(_STATYoka.BrowserDet.version) + '&_os=' + escape(_STATYoka.BrowserDet.OS)
                + '&_screen=' + screen.width + 'x' + screen.height + '&_pid=' + _pid + '&_uid=' + _uid
                + '&_gid=' + _gid + '&_tid=' + _tid + '&_psrc=' + _psrc + '&_ph=' + _ph
                + '&_tracid=' + _tracid + '&_src=' + _STATYoka.Yoka.GetLogValue('src') + '&_src_host=' +_src_host + 
            '&_sear=' +_sear + '&_winsize=' + _winsize +  '&rad=' + (Math.random() * 100000);

    }
    catch (e) {
    }

    //Baidu

    //Baidu
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var _bdHostName = location.hostname.toLowerCase();
    var _bdHostURL = document.URL;

    if (_bdHostName.indexOf(".yoka.com") > 0) {
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fa641a94f2a28291909af4213f237173a' type='text/javascript'%3E%3C/script%3E"));
    }
    else if (_bdHostName.indexOf(".yokamen.cn") > 0) {
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fc28d6083348b49ab84aeeeed11dccc34' type='text/javascript'%3E%3C/script%3E"));
    }
    else {
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fb3f90b1af5e30107faceeac4db4544c1' type='text/javascript'%3E%3C/script%3E"));
    }

    switch (_bdHostName) {
        case "bbs.yoka.com":
            //document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30072180' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F9e4d2565bb3f1e39bbc7ba3702137110' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "space.yoka.com":
            //document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30072180' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F9e4d2565bb3f1e39bbc7ba3702137110' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "city.yoka.com":
            //document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30072180' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F9e4d2565bb3f1e39bbc7ba3702137110' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "hzp.yoka.com":
            document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "try.yoka.com":
            document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "brandcenter.yoka.com":
            document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            break;
        case "brand.yoka.com":
            if (_bdHostURL.indexOf("/cosmetics/") > 0) {
                document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
                document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            }
            break;
        case "www.yoka.com":
            if (_bdHostURL.indexOf("/shai/") > 0) {
                document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
                document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            }
            break;
        case "g.yoka.com":
            if (_bdHostURL.indexOf("/cosmetics/") > 0) {
                document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
                document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            }
            break;
        case "me.yoka.com":
            document.write(unescape("%3Cscript src='http://w.cnzz.com/c.php?id=30074209' language='JavaScript'%3E%3C/script%3E")); //CNZZ
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F015edf2f5f6111e991f52b569a2cee6f' type='text/javascript'%3E%3C/script%3E"));
            break;
        default:
            break;
    }

})()