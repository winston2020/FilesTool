
//var mark = '#';
//if(window.location.href=='http://www.yoka.com/'
//||window.location.href=='http://www.yoka.com'
//||window.location.href.indexOf('http://www.yoka.com/index.shtml')>-1
//||window.location.href.indexOf('http://www.yoka.com/homekh/main/index.html')>-1
//||window.location.href.indexOf('http://www.yoka.com/union/homesyth/main/index.html')>-1
//||window.location.href.indexOf('http://www.yoka.com/homehq/index.html')>-1
//||window.location.href.indexOf('http://www.yoka.com/default/indexdj.html')>-1
//)
//{
var mark='about:blank';
var pic_other = 'images/space.gif';
var pageCharset = document.charset;
var loginSucessCallBack = null; // 登录成功回调
//}
//异步加载script,并执行script_info={url:"",charset:"",async:false,onload:function(){}}
function load_script(script_info){
	 var H = document.createElement("script");
            H.type = "text/javascript";
            H.src = script_info.url;
	    if(script_info.async)H.async = script_info.async;
	    if(script_info.charset) H.charset = script_info.charset;
	    H.onload = function(){if(script_info.onload)script_info.onload()};
            document.body.appendChild(H);
}
function checkFocus(){
	return true;
	}
	document.hasFocus=checkFocus;
//yo_topNav
(function(){

/*
 * Event
 */
var Event = {
	add : (function(){
		if(document.addEventListener){
			return function(obj,type,fn){ obj.addEventListener(type,fn,false)}
		}
		return function(obj,type,fn){ obj.attachEvent('on'+type,fn)}
	})(),
	remove : (function(){
		if(document.removeEventListener){
			return function(obj,type,fn){ obj.removeEventListener(type,fn,false)}
		}
		return  function(obj,type,fn){ obj.detachEvent('on'+type,fn)}
	})(),
	stop:function(e){
		if(e&&e.stopPropagation){
			e.stopPropagation();
			e.preventDefault();
		}else{
			window.event.cancelBubble = true;
			window.event.returnValue = false;
		}
	}
}
		
		var str = '',
			theme = { black :'yo_topNav', grey :'yo_topNav'},
			className = '',
			loginState = false, /*  登录状态  登录前=flase  登录后=true  */
			userInfo = {
				name : '',
				uid : '',
				link : ''
			},
			obj_login = null, /*  登录后空间信息  */
			obj_loginout = null, /* 登录前 */
			obj_user = null, /* 登录后用户信息 */
			obj_msg = "", 
			obj_space = null,
			obj_bbs = null,
			obj_username = null,
			obj = null,
			closeBtn = null,
			mask = null,
			iframe = null,
			ie6 = !window.XMLHttpRequest && window.ActiveXObject ? true : false,
			winSize = {w:0,h:0},
			userList = false,
			obj_nameText = null,
			obj_userList = null,
			obj_userListUl = null,
			yaoka_msg ="";


	function init(s,w){
		setStyle(s,w);



		str = "<style>.w980 { width:980px;}.w986{ width:986px;}.yo_topNav { height:21px; overflow:hidden; background:#f8f8f8; border-bottom:1px solid #dcdcdc; color:#404040; font-size:12px;  line-height:18px; font-family:Tahoma,Arial,sans-serif;margin:0 auto;}.yo_topNav span , .yo_topNav i, .yo_topNav em { font-style:normal;display:inline-block;}.yo_topNav_links { float:left; padding:0 0 0 10px; margin:0;}.yo_topNav_links li { float:left; padding:1px 20px 0 0; list-style:none; margin:0;}.yo_topNav_link_grey a:link , .yo_topNav_link_grey a:visited { color:#404040;text-decoration:none;}.yo_topNav_link_blue a:link , .yo_topNav_link_blue a:visited { color:#123497;text-decoration:none;}.yo_topNav_link_blue a:hover, .yo_topNav_link_grey a:hover { color:#f60;text-decoration:underline;}.yo_topNav_info { float:right; }.yo_topNav_topic { padding:2px 10px 0 0; float:right; overflow:hidden;}.yo_topNav_topic span { width:18px; text-align:center; color:#bcbcbc;}.yo_topNav_beforeLogin { float:right; padding:2px 0 0 0;}.yo_topNav_beforeLogin span { padding:0 13px 0 0;}.yo_topNav_beforeLogin a { display:inlin-block; margin:0 9px 0 0;}.yo_topNav_login { float:right; padding:2px 18px 0 0;}.yo_topNav_login i { padding:0 15px 0 0; line-height:16px;}.yo_topNav_mine { float:right; padding:2px 18px 0 0;}.yo_topNav_mine a { display:inline-block; margin:0 0 0 8px;}.yo_topNav_mine a:link em , .yo_topNav_mine a:visited em {  font-weight:bold;}.yo_topNav_mine a:hover em { color:#f60; text-decoration:underline; cursor:pointer;} .yo_topNav_mine a.on{color:#f01919;} .yo_topNav_theme2 { height:27px; background:url(http://p1.yokacdn.com/pic/div/public/img/yo_topNavbg3.gif) repeat-x #fff; color:#85868a;}.yo_topNav_theme2 .yo_topNav_link_grey a:link , .yo_topNav_theme2 .yo_topNav_link_grey a:visited { color:#000;text-decoration:none;}.yo_topNav_theme2 .yo_topNav_link_blue a:link , .yo_topNav_theme2 .yo_topNav_link_blue a:visited { color:#4b85d4;text-decoration:none;}.yo_topNav_theme2 .yo_topNav_link_blue a:hover, .yo_topNav_theme2 .yo_topNav_link_grey a:hover { color:#f60;text-decoration:underline;}.yo_topNav_theme2 .yo_topNav_mine a:link em , .yo_topNav_theme2 .yo_topNav_mine a:visited em { color:#f60; font-weight:bold;}.yo_topNav_theme2 .yo_topNav_mine a:hover em { color:#f60; text-decoration:underline; cursor:pointer;}.yo_topNav_theme2 .yo_topNav_topic { color:#000;}.yo_loginWinBox { position:fixed; _position:absolute; top:0; left:0; z-index:3000; display:none;}.yo_loginWin { width:470px; height:389px; left:50%; top:50%; margin:-195px 0 0 -230px; position:absolute; z-index:3001;}.yo_loginWinMask { width:470px; height:389px; background:#d4d4d4; position:absolute; z-index:3002;}.yo_loginContent { width:460px; height:379px;  position:absolute; z-index:3003; left:5px; top:5px;background:#fff;}.yo_loginTitle { height:45px; overflow:hidden; background:#ededed; padding:0 10px 0 20px; width:420px; margin: 5px 5px 0;}.yo_loginTitle span { display:block;width:125px;height:25px;background:url(http://p1.yokacdn.com/pic/div/public/img/yo_login_title_bg.png) no-repeat;float:left; overflow:hidden; margin:9px 0 0 0;color:#3e3e3e;}.yo_loginTitle i { display:block; width:25px; height:25px; overflow:hidden; background:url(http://p1.yokacdn.com/pic/div/public/img/login_close_btn.png) no-repeat; float:right; margin:10px 0 0 0; cursor:pointer;}.yo_loginContentLeft { width:388px;height:242px; overflow:hidden;  padding:22px 0 0;}.yo_loginContentLeft dl { height:60px; padding:0; margin:0;}.yo_loginContentLeft dt { font-size:16px; font-family:'Microsoft YaHei'; color:#3e3e3e; width:104px; text-align:right; padding:7px 10px 0 0; float:left;}.yo_loginContentLeft dd { float:left; padding:0; margin:0;position:relative;}.yo_loginInput ,.yo_loginInput_mask{ width:260px; height:40px; border:1px solid #b8b8b8; margin:0; padding:0px 0 0 10px;  color:#bfbfbf; font-size: 16px; line-height:40px;font-family:'Microsoft YaHei';}.yo_loginInput_mask{border:0;position:absolute;left:1px;height:38px;top:2px;z-index:2;background:#fff;}.yo_loginInput_on{color:#333;}.yo_loginInput_error { background-position:0 -125px;}.yo_loginContentLeft ul { padding:0 0 0 114px; height:96px; overflow:hidden; margin:0; font-size:12px;}.yo_loginContentLeft li { padding:0; margin:0; list-style:none; color:#333; height:45px;}.yo_loginContentLeft li span { display:block;  height:25px; overflow:hidden;}.yo_loginContentLeft em { height:20px; display:block; overflow:hidden; font-style:normal;padding:0 0 0 3px;}.yo_loginContentLeft li em{ display: inline-block; float: right; margin-top: 10px;}.yo_loginContentLeft i {font-size: 12px;display: inline-block; padding: 0 0 10px 114px; height:16px; color:#ff0000; font-style:normal;}.yo_loginBtn { width:89px; height:30px; border:0; margin:0 0 0 3px; padding:0; background:url(http://p1.yokacdn.com/pic/div/public/img/yo_topNavbg.gif) no-repeat -90px 0; cursor:pointer; float:left;}.yo_login_forgetPwd { display:inline-block; margin:4px 0 0 10px; float:right;}.yo_loginContentLeft div {  width:288px; margin:0 0 0 20px; overflow:hidden; padding:15px 0 0;}.yo_login_qq:link , .yo_login_qq:visited , .yo_login_sina:link , .yo_login_sina:visited { display:inline-block; margin:0 26px 0 0; height:20px; padding:0 0 0 19px; background:url(http://p1.yokacdn.com/pic/div/public/img/yo_topNavbg.gif) no-repeat -184px 2px; text-decoration:none; font-family:'Microsoft YaHei'; font-size:13px; color:#333;}.yo_login_sina:link , .yo_login_sina:visited { background-position:-184px -22px; padding:0 0 0 20px;}.yo_loginContentRight { width:182px; float:right; text-align:center; font-size:15px; font-family:'Microsoft YaHei'; color:#333; line-height:24px; padding:50px 0 0;}.yo_loginContentRight a:link , .yo_loginContentRight a:visited { margin:15px auto 0; display:block; overflow:hidden; text-indent:-3000px; width:89px; height:30px; background:url(http://p1.yokacdn.com/pic/div/public/img/yo_topNavbg.gif) no-repeat;}.yo_loginContentRight a:hover { background-position:0 -31px;}.yo_loginMask { position:absolute; z-index:2999; background:#000; filter:alpha(opacity=55); opacity:0.55; left:0; top:0; width:100%;}.yo_loginWinBox iframe { width:100%; border:0; background:none; opacity:0; filter:alpha(opacity=0);position:absolute; z-index:2998;left:0; top:0;}.yo_loginUserList{ display: none;  position:absolute; z-index:3004; top:139px; left:114px; width:268px; border:1px solid #dbdbdb; background:#fff; padding:2px 1px 1px;}.yo_loginUserList dl{  padding:0;margin:0;}.yo_loginUserList dt{ padding:5px 0 0 10px;margin:0; height:25px;background:#f7f7f7; color:#999; font-size:12px; line-height:18px;}.yo_loginUserList dd{  padding:0;margin:0;}.yo_loginUserList ul{margin:0;padding:0;width:100%;list-style:none;}.yo_loginUserList li{list-style:none; padding:5px 0 0 10px; border-top:1px solid #fff; margin:0; cursor:pointer; height:20px;font-size:14px; color:#333;}.yo_loginUserList li.on{ background:#e8f4fc;}.yo_loginUserList span.on{ background:url(http://p1.yokacdn.com/pic/div/public/img/yo_topNavbg5.gif) no-repeat left -15px;}.yo_loginUserList li.on span.on{ background-position:left top;}.yo_loginUserList i { font-style:normal;}.yo_loginUserList span { display:inline-block;width:13px;height:13px;overflow:hidden;margin:1px 4px 0 0; float:left;padding:0;}.yo_loginUserList div{ border-top:1px dashed #e2e2e2; margin:10px 0 0; padding:5px 0 0 10px; height:18px; font-size:12px; color:#999;}.yo_loginUserList div a:link , .yo_loginUserList div a:visited{ color:#4b85d4; text-decoration:none;}.yo_loginUserList div a:hover{ color:#f60;text-decoration:underline;}.yo_thirdLogin{height:35px;background:#ededed;margin:10px 0 0; padding:20px 0 0 115px;}.yo_topNav_news{margin: 0;padding: 0; width: 116px;overflow: hidden; position: absolute;top: 0; z-index: 9999; font-size: 12px; height: 0; opacity: 0; transition:1s;}.yo_topNav_news dt{margin: 0;padding: 0; width: 60px; height: 22px; line-height: 22px; text-align: center; overflow: hidden; background: #fff; border-left: 1px solid #e2e2e2;border-right: 1px solid #e2e2e2;}.yo_topNav_news dt a , .yo_topNav_news dt a:visited{color: #f01919; text-decoration: none;}.yo_topNav_news dt a:hover{color: #f60;}.yo_topNav_news dd{margin: 0;padding: 0; width: 114px; overflow: hidden; background: #fff; border-left: 1px solid #e2e2e2;border-right: 1px solid #e2e2e2;}.yo_topNav_news dd a{width: 94px; height: 30px; padding: 0 10px; display: block; line-height: 30px; overflow: hidden; border-bottom: 1px solid #e2e2e2;}.yo_topNav_news dd i{float: right; color: #f01919; font-family: Arial;}.yo_topNav_news dd a , .yo_topNav_news dd a:visited{color: #3d3d3d;text-decoration: none;}.yo_topNav_news dd a:hover{color: #f60; background: #f9f9f9;}</style>";

		str += '<div class="'+ className + '"><ul class="yo_topNav_link_grey yo_topNav_links"><li><a href="http://www.yoka.com">YOKA 时尚网</a></li><li><a href="http://www.yoka.com/mobile/">YOKA 移动</a></li></ul><div class="yo_topNav_info"><div class="yo_topNav_link_grey yo_topNav_topic"><a href="http://www.yoka.com/z/" target="_blank">精彩专题</a><span>|</span><a href="http://space.yoka.com/shichang/" target="_blank" onclick="_hmt.push([\'_trackEvent\',\'jifenmarket\',\'click\'])">积分商城</a></div>';

		
		str += '<div class="yo_topNav_link_blue yo_topNav_mine" id="yo_topNav_mine" style="display:none">我的<a href="http://space.yoka.com/'+ userInfo.uid +'/" target="_blank">[空间]</a><a href="http://space.yoka.com/space.php?do=bbs" target="_blank">[帖子]</a><a href="http://space.yoka.com/msg/" target="_blank">[消息<em id="span_new_msg" style="display:inline;"></em>]</a></div><div class="yo_topNav_link_blue yo_topNav_login"  id="yo_topNav_userName"  style="display:none">你好，<i><a href="http://space.yoka.com/'+ userInfo.uid +'/" target="_blank">'+ userInfo.name +'</a></i><a href="http://passport.yoka.com/logout.php" target="_self">[退出]</a></div>';
		
		str += '<div class="yo_topNav_beforeLogin yo_topNav_link_blue" id="yo_topNav_beforeLogin" style="display:none"><span>你好，欢迎来到YOKA</span><a href="javascript:void(0)" target="_self" onclick="yo_topNav.showLoginWin()">[登录]</a><a href="http://passport.yoka.com/register.php" target="_blank">[注册]</a></div>';
	
		str += '</div></div><div style="position:absolute;z-index:99999;width:0;height:0;left:0;top:0;"><div class="yo_loginWinBox" id="yo_loginWinBox" ><div class="yo_loginWin"><div class="yo_loginWinMask"></div><div class="yo_loginContent"><div class="yo_loginTitle"><i></i><span></span></div><div class="yo_loginContentLeft "><i id="yaoka_msg" class="yo_topNav_link_blue">手机号未验证，无法使用手机号登录,<a href="#">立即验证</a></i><dl><dt>登录名</dt><dd><input type="text" id="header_username_multi" name="header_username_multi" autocomplete="off" class="yo_loginInput" value="邮箱/用户名/手机号"><input id="header_username" class="newlotext1 multiLoginUsername" type="hidden" value="" name="username"></dd></dl><dl><dt>密码</dt><dd><input id="header_password" type="password" name="password" class="yo_loginInput" style="color:#333;"><span class="yo_loginInput_mask">请输入登录密码</span></dd></dl><ul><li class="yo_topNav_link_blue"><a href="http://passport.yoka.com/forgot.php" class="yo_login_forgetPwd">忘记密码？</a><span><input type="hidden" value="'+window.location+'" name="loc_url" /><input type="checkbox" checked="checked" value="1" name="remember" id="remember">下次自动登录</span></li><li class="yo_topNav_link_blue"><input type="button" value="" id="loginclick" class="yo_loginBtn" onmouseover="this.style.cssText=\'background-position:-90px -31px;\'" onmouseout="this.style.cssText=\'\'" style=""><em>还没有账号 <a href="http://passport.yoka.com/register.php">免费注册一个</a></em></li></ul></div><div class="yo_thirdLogin"><a href="javascript:void(0);" target="_self" onclick="toThirdLogin(1,\'\',\'top\');return false;" class="yo_login_qq">QQ登录</a><a href="javascript:void(0);" target="_self" onclick="toThirdLogin(3,\'\',\'top\');return false;" class="yo_login_sina">新浪微博登录</a></div><div class="yo_loginUserList" id="yo_loginUserList"><dl><dt>请选择登录用户</dt><dd><ul></ul></dd></dl><div>无匹配用户，查看<a href="http://www.yoka.com/help/login.shtml">帮助</a></div></div></div></div><iframe frameborder="0" src="about:blank"></iframe><div class="yo_loginMask"></div></div></div>';

	

		str += '<iframe id="loginFrame" name="loginFrame" style="display: none;" src="'+mark+'" ></iframe>';
		document.write(str);

		getElements();
		yoTopNavNews();
	}

	function getElements(){

		/* nav */
		obj_login = document.getElementById('yo_topNav_mine');
		obj_user = document.getElementById('yo_topNav_userName');
		obj_loginout = document.getElementById('yo_topNav_beforeLogin');

		obj_msg = obj_login.getElementsByTagName('em')[0];
		obj_space = obj_login.getElementsByTagName('a')[0];
		obj_bbs = obj_login.getElementsByTagName('a')[1];
		obj_username = obj_user.getElementsByTagName('a')[0];

		/* win */
		obj = document.getElementById('yo_loginWinBox');
		closeBtn = obj.getElementsByTagName('i')[0];
		mask = obj.getElementsByTagName('div');
		winSize = {w: document.documentElement.clientWidth||document.body.clientWidth,h: document.documentElement.clientHeight||document.body.clientHeight};

		mask = mask[mask.length-1];
		iframe = obj.getElementsByTagName('iframe')[0];
		mask.style.height = winSize.h + 'px';
		iframe.style.height = winSize.h + 'px';
		obj.style.cssText = 'display:none;width:'+winSize.w+'px;height:'+winSize.h+'px;';
		closeBtn.onclick = hide;

		obj_nameText = obj.getElementsByTagName('input')[0];
		obj_userList = document.getElementById('yo_loginUserList');
		obj_userListUl = obj_userList.getElementsByTagName('ul')[0];

		
		//用户名隐藏域
		obj_nameHidden = document.getElementById('header_username');
		//登录
		obj_loginclick= document.getElementById('loginclick');
		//消息
		yaoka_msg=document.getElementById('yaoka_msg');

		handle();

		

	}

	var PassportDomain='http://passport.yoka.com/';
	var Uri=PassportDomain+'multiLogin.php?';
	var dds = null,
		ddlength = 0;
	function handle(){
		var num = 0;
		
		Event.add(obj_nameText,'focus',function(e){
			if(encodeURIComponent(obj_nameText.value) == '%E9%82%AE%E7%AE%B1%2F%E7%94%A8%E6%88%B7%E5%90%8D%2F%E6%89%8B%E6%9C%BA%E5%8F%B7'){
				obj_nameText.value = '';
			}
			obj_nameText.className += ' yo_loginInput_on';
		})
		Event.add(obj_nameText,'blur',function(e){
			if(encodeURIComponent(obj_nameText.value) == '%E9%82%AE%E7%AE%B1%2F%E7%94%A8%E6%88%B7%E5%90%8D%2F%E6%89%8B%E6%9C%BA%E5%8F%B7' || obj_nameText.value == ''){
				obj_nameText.className = obj_nameText.className.replace(/\syo_loginInput_on/g,'');
			}
			if(obj_nameText.value == ''){
				obj_nameText.value = decodeURIComponent('%E9%82%AE%E7%AE%B1%2F%E7%94%A8%E6%88%B7%E5%90%8D%2F%E6%89%8B%E6%9C%BA%E5%8F%B7')
			}
		})
		Event.add(obj_nameText,'keyup',function(e){
			Event.stop(e);
			e = e || window.event;
			
			if(!userList) return; 
			if(ddlength == 0) return; 
			if(e.keyCode == 13){ // enter
			
				if(num!=0) dds[num-1].className = '';
				if(num!=0) {
					console.log(dds[num-1].getElementsByTagName('i')[0].innerHTML)
					obj_nameHidden.value = dds[num-1].getAttribute('value');
					obj_nameText.value = dds[num-1].getAttribute('value');
				}
				obj_userList.style.display = 'none';
				userList = false;
				num=0;
				return;
			}
			if(e.keyCode == 38){ // up
				if(num==0) {
					obj_nameText.focus();
					return;
				}
				dds[num-1].className = '';
				num--;
				if(num==0){
					num++;
				}
				dds[num-1].className = 'on';
				// 等待处理 当前选中值，写入username文本框
				obj_nameHidden.value = dds[num-1].getAttribute('value');
				return;

			}
			if(e.keyCode == 40){  // down
				if(num>ddlength){
					return;
				}
				if(num!==0)dds[num-1].className = '';
				num++;
				if(num>ddlength){
					num--;
				}
				dds[num-1].className = 'on';
				// 等待处理 当前选中值，写入username文本框
				obj_nameHidden.value= dds[num-1].getAttribute('value');
				return;
			}
			
			
			
		})
		Event.add(obj_userListUl,'click',function(e){
			showList();
			Event.stop(e);
			e = e || window.event;
			var tar = e.target || e.srcElement;
			if(tar.nodeName == 'LI' || tar.nodeName == 'I'){
				if(num!==0) dds[num-1].className = '';
				obj_userList.style.display = 'none';
				userList = false;
				num=0;
				hideList();

				// 等待处理 当前选中值，写入username文本框
				if(tar.nodeName == 'I') {
					obj_nameHidden.value=tar.parentNode.getAttribute('value');
					if(obj_nameText.value.indexOf('@')>0)
					{
						obj_nameText.value=tar.parentNode.getAttribute('value');
						obj_nameHidden.value=tar.getAttribute('value');
						
					}
					
				}else{
					obj_nameHidden.value=tar.getAttribute('value');
					if(obj_nameText.value.indexOf('@')>0)
					{
						obj_nameText.value=tar.getAttribute('value');
						obj_nameHidden.value=tar.getElementsByTagName('i')[0].getAttribute('value');
							
					}
				}
				
			}
		})

		Event.add(obj_userList,'click',function(e){
			Event.stop(e);
		})

		Event.add(obj,'click',function(e){
			e = e || window.event;
			var tar = e.target || e.srcElement;
			if(tar.nodeName != 'INPUT'){
				hideList();	
			}
			
		})

		Event.add(obj_nameText,'keyup',function(e){
			e = e || window.event;
			if(e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13) return;
		    
			obj_nameTextValue=obj_nameText.value;

			//如果是手机号 t=0
			/*if(obj_nameTextValue.search(/^1(3|5|8)\d{9}$/)==0){
				Yoka_setScript(Uri+'jsoncallback=window.parent.yo_topNav.Yoka_mobilejsoncallback&t=0&mobile='+obj_nameTextValue);
				
				return;
			}
			//如果是电子邮件 t=1
			if(obj_nameTextValue.indexOf('@')>0){
				Yoka_setScript(Uri+'jsoncallback=window.parent.yo_topNav.Yoka_emailjsoncallback&t=1&email='+obj_nameTextValue);
				return;
			}*/
			
			
		})

		//提交事件
		Event.add(obj_loginclick,'click',function(e){
			
			submitYoka();

		})
		
		var obj_login_pwd = document.getElementById('header_password'),
			obj_login_pwd_mask = obj_login_pwd.parentNode.getElementsByTagName('span')[0];
		Event.add(obj_login_pwd_mask,'click',function(e){
			obj_login_pwd_mask.style.display = 'none';
			obj_login_pwd.focus();
		})
		Event.add(obj_login_pwd,'blur',function(e){
			if(obj_login_pwd.value == ''){
				obj_login_pwd_mask.style.display = 'block';
			}
		})
		Event.add(obj_login_pwd,'focus',function(){
			obj_login_pwd_mask.style.display = 'none';
		})

		//回车提交
		Event.add(obj_login_pwd,'keyup',function(e){
			e = e || window.event;
	
			if(e.keyCode == 13 )
			{
				submitYoka();
			}

		})
		


	}
	
	var _timer = null;
	/* 显示用户下拉列表 */
	function showList(){
		if(_timer){
			clearTimeout(_timer);
			_timer = null;
		}
		obj_userList.style.display = 'block';
		userList = true;
	}
	function hideList(){
		if(_timer) return;
		_timer = setTimeout(function(){
			obj_userList.style.display = 'none';
			userList = false;
			num=0;
		},100)
	}
	
	//动态添加 Script
	function Yoka_setScript(url)
	{
        var script = document.createElement('script');
        script.setAttribute('src', url);
	script.async=true;
        document.getElementsByTagName('head')[0].appendChild(script);
	}

	//回调函数
	function Yoka_mobilejsoncallback(date)
	{
		var objs = eval(date);
		if(objs!=null)
		{
			setUserList(objs);
		}
	}

	//回调函数
	function Yoka_emailjsoncallback(date)
	{
		var objs = eval(date);
		if(objs!=null)
		{
			setUserList(objs,1);
		}
	}

	//提交方法
	function submitYoka()
	{
			document.charset="UTF-8";
			var name=document.getElementById('header_username');
			var pwd=document.getElementById('header_password');
			var remember=document.getElementById('remember');

			name.value=obj_nameText.value;

			
			if(obj_nameText.value=="")
			{
				
				yaoka_msg.innerHTML="登录名不能为空";
				return ;
				
			}
			if(pwd.value=="")
			{
				yaoka_msg.innerHTML="密码不能为空";
				return ;
			}
			yaoka_msg.innerHTML="";
			
			var queryString = "username="+name.value+"&password="+pwd.value;
			queryString=encodeURI(queryString);//防止乱码
			
			createIframe("http://passport.yoka.com/login.php");
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				if(!window.ActiveXObject){ // Mozilla, Safari,
					if(parent.window.frames["loginFrame"].contentWindow)
					{
						var loginframe_obj = parent.window.frames["loginFrame"].contentWindow;
					}else
					{
						var loginframe_obj = parent.window.frames["loginFrame"]
					}
					loginframe_obj.document.getElementById("loginform").innerHTML='<input type="hidden" id="username" name="username" value="'+name.value+'"/><input type="hidden"  name="password" value="'+pwd.value+'"><input type="hidden"  name="error_url" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg"><input type="hidden" name="remember" value="'+remember.checked+'"><input type="hidden"  name="forward" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg&error_code=1"/>';
					//提交表单
					loginframe_obj.document.getElementById("loginform").submit();

				}else{
				
					var loginframe_obj = (document.getElementById("loginform")||document.getElementById('loginFrame').contentWindow.document.getElementById("loginform"));
						
					loginframe_obj.innerHTML='<input type="hidden" id="username" name="username" value="'+name.value+'"/><input type="hidden"  name="password" value="'+pwd.value+'"><input type="hidden"  name="error_url" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg"><input type="hidden" name="remember" value="'+remember.checked+'"><input type="hidden"  name="forward" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg&error_code=1"/>';
					//提交表单
					loginframe_obj.submit();
					/*if(navigator.appVersion.match(/10./i)=="10.")
					{
						var loginframe_obj = document.getElementById('loginFrame').contentWindow;
						loginframe_obj.document.getElementById("loginform").innerHTML='<input type="hidden" id="username" name="username" value="'+name.value+'"/><input type="hidden"  name="password" value="'+pwd.value+'"><input type="hidden"  name="error_url" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg"><input type="hidden" name="remember" value="'+remember.checked+'"><input type="hidden"  name="forward" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg&error_code=1"/>';
						//提交表单
						loginframe_obj.document.getElementById("loginform").submit();

					}
					else
					{
						document.getElementById("loginform").innerHTML='<input type="hidden" id="username" name="username" value="'+name.value+'"/><input type="hidden"  name="password" value="'+pwd.value+'"><input type="hidden"  name="error_url" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg"><input type="hidden" name="remember" value="'+remember.checked+'"><input type="hidden"  name="forward" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg&error_code=1"/>';
						//提交表单
						document.getElementById("loginform").submit();
					}*/


					
				}

			}else {
					
					document.getElementById("loginform").innerHTML='<input type="hidden" id="username" name="username" value="'+name.value+'"/><input type="hidden"  name="password" value="'+pwd.value+'"><input type="hidden"  name="error_url" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg"><input type="hidden" name="remember" value="'+remember.checked+'"><input type="hidden"  name="forward" value="http:\/\/'+window.location.host+'/pageproxy.html?method=window.parent.yo_topNav.yokaLoginMsg&error_code=1"/>';
					//提交表单
					document.getElementById("loginform").submit();

				}

	}
	
	//提示信息
	function yokaLoginMsg(queryString)
	{
		
		if(queryString['error_code']==4)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				window.parent.document.getElementById("yaoka_msg").innerHTML="密码不正确";

			}else {
				
				document.getElementById("yaoka_msg").innerHTML="密码不正确";

			}

			return ;
		}
		if(queryString['error_code']==8)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				window.parent.document.getElementById("yaoka_msg").innerHTML="用户名不存在";

			}else {
				
				document.getElementById("yaoka_msg").innerHTML="用户名不存在";

			}

			return ;
		}
		if(queryString['error_code']==9)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				window.parent.document.getElementById("yaoka_msg").innerHTML="邮箱不存在";

			}else {
				
				document.getElementById("yaoka_msg").innerHTML="邮箱不存在";

			}

			return ;
		}
		if(queryString['error_code']==10)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				window.parent.document.getElementById("yaoka_msg").innerHTML="手机号码不存在";

			}else {
				
				document.getElementById("yaoka_msg").innerHTML="手机号码不存在";

			}

			return ;
		}
		if(queryString['error_code']==5)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7
				var email = window.parent.document.getElementById("header_username").value;
				window.parent.document.getElementById("yaoka_msg").innerHTML="邮箱未验证，<a href='http://passport.yoka.com/verify.php?code_str="+encodeURIComponent(queryString['code_str'])+"' target='_blank'>立即验证</a>";

			}else {
				var email = document.getElementById("header_username").value;
				document.getElementById("yaoka_msg").innerHTML="邮箱未验证，<a href='http://passport.yoka.com/verify.php?code_str="+encodeURIComponent(queryString['code_str'])+"' target='_blank'>立即验证</a>";

			}

			return ;
		}
		if(queryString['error_code']==6)
		{
		
			if(window.XMLHttpRequest){ //Mozilla, Safari, IE7
				var mobile = window.parent.document.getElementById("header_username").value;
				window.parent.document.getElementById("yaoka_msg").innerHTML="手机号码未激活，<a href='http://passport.yoka.com/verify.php?code_str="+encodeURIComponent(queryString['code_str'])+"' target='_blank'>立即验证</a>";

			}else {
				var mobile = document.getElementById("header_username").value;
				document.getElementById("yaoka_msg").innerHTML="手机号码未激活，<a href='http://passport.yoka.com/verify.php?code_str="+encodeURIComponent(queryString['code_str'])+"' target='_blank'>立即验证</a>";

			}

			return ;
		}
		if(queryString['error_code']==1)
		{
			hide();
			document.charset=pageCharset;
            if(typeof(loginSucessCallBack)=='function'){
                loginSucessCallBack();
            }else if(window.XMLHttpRequest){ //Mozilla, Safari, IE7
				
				window.parent.location.reload(true);
			}else
			{
				location.reload(true);
			}

		}		

	}

	/* 写入用户下拉列表内容 */
	function setUserList(data,type){

		var text="";
		var name="";
		obj_userListUl.innerHTML="";
		for(var i=0;i<data.length;i++){
			
			if(type=="")
			{
				name=data[i][0];
				maskNameString=maskName(name);
			}else
			{
				name=data[i][0];
				maskNameString=maskName(data[i][0]);
			}

			if(data[i][1]==1)
			{
				text += '<li value="'+name+'"><span class="on" title="验证帐户"></span><i value="'+data[i][0]+'">'+maskNameString+'</i></li>';
			}else
			{
				text += '<li value="'+name+'"><span></span><i value="'+data[i][0]+'">'+maskNameString+'</i></li>';
			}
		}
		if(text!="")
		{
			obj_userListUl.innerHTML =text;

			dds = obj_userListUl.getElementsByTagName('li');
			ddlength = dds.length;

			showList();
		}
	}

	function setStyle(style,width){
		var name = '';
		if(style == 'grey' || style == 'black'){
			name += theme[style];
		}
		if(width && width == '980'){
			name += ' w980';
		}
		if(width && width == '986'){
			name += ' w986';
		}
		className = name;
	}

	function login(name,uid,linkId){
		
		userInfo.name = name;
		userInfo.uid = uid;
		userInfo.link = 'http://space.yoka.com/space.php?do=bbs';
		
		loginState = true;

		if(obj_login){
			changeState();
		}
	}

	function changeState(){
		
		obj_space.href = 'http://space.yoka.com/'+ userInfo.uid +'/';
		obj_bbs.href = userInfo.link;
		obj_username.innerHTML = userInfo.name;
		obj_username.href = 'http://space.yoka.com/'+ userInfo.uid +'/';
		
		obj_login.style.display = 'block';
		obj_user.style.display = 'block';
		obj_loginout.style.display = 'none';

	}

	function logout(){
		obj_login.style.display = 'none';
		obj_user.style.display = 'none';
		obj_loginout.style.display = 'block';
		loginState = false;
	}

	function setMsg(n){
		if(loginState){
			if(n>10) n = '10+';
			obj_msg.innerHTML = n;
		}
	}



	/* 弹出窗口方法 */
	function show(callback){
		obj.style.display = 'block';
		//清空文本内容
		//obj_nameText.value="";
		document.getElementById('header_username').value="";
		//document.getElementById('header_password').value="";
		document.getElementById('yaoka_msg').innerHTML="";
		if(callback){
			callback();
		}
	}

	function hide(callback){
		obj.style.display = 'none';
		document.getElementById('header_username').value="";
		document.getElementById('header_password').value="";
		document.getElementById('yaoka_msg').innerHTML="";
		if(typeof callback === 'function'){
			callback();
		}
	}
	//名字加密
	function maskName(name){
		function start(n){
			var v='';
			for(i=0;i<n;i++){
				v+='*';
			}
			return v;
		}
		var len=name.length;mask='';
		if(len==2){
			mask=name.substr(0,1)+start(1);
		}else if(len<12){
			n=Math.floor(len/3);
			h=Math.ceil(len/3);
			t=h+n;
			mask=name.substr(0,h)+start(n)+name.substr(t);
		}else{
			n=4;
			h=Math.ceil(len/3);
			t=h+n;
			mask=name.substr(0,h)+start(n)+name.substr(t);
		}
		return mask;
	}

	/**
	*
	*创建form
	*/
	function createIframe(url){
	
		var form=null;
	  		if(window.XMLHttpRequest){ //Mozilla, Safari, IE7

				if(!window.ActiveXObject){ // Mozilla, Safari,

					 form=document.getElementById('loginform');

				}else{
					if(parent.window.frames["loginFrame"].contentWindow)
					{
						var loginframe_obj = parent.window.frames["loginFrame"].contentWindow;
					}else
					{
						var loginframe_obj = parent.window.frames["loginFrame"]
					}
					form=loginframe_obj.document.getElementById('loginform');
	
				}

			}else {
					
					form=document.getElementById('loginform');

			}
	
	  if(form==null)
		{
		   
		   form = document.createElement('form');
		   form.id = 'loginform';
		   form.action = url;
		   form.method = "post";
		   form.target = "loginFrame";
		   form.acceptCharset="UTF-8";
			if(!window.ActiveXObject){ // Mozilla, Safari,
				if(parent.window.frames["loginFrame"].contentWindow)
				{
					var loginframe_obj = parent.window.frames["loginFrame"].contentWindow;
				}else
				{
					var loginframe_obj = parent.window.frames["loginFrame"]
				}
				form.target = "_self";
				loginframe_obj.document.body.appendChild(form);
			}
			else{
				(document.getElementById('loginFrame').contentWindow||document.getElementById('loginFrame')).document.body.appendChild(form);
				/*if(navigator.appVersion.match(/10./i)=="10.")
				{
					document.getElementById('loginFrame').contentWindow.document.body.appendChild(form);
				}
				else
				{
					document.getElementById('loginFrame').document.body.appendChild(form);
				}*/
			}

		}else
		{
			form.action = url;

		}
		


	}


	if(ie6){
		window.attachEvent('onscroll',follow);

		function follow(){
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			obj.style.top = top + 'px';
		}
	}

	Event.add(window,'resize',resize)
	function resize(){
		winSize = {w: document.documentElement.clientWidth||document.body.clientWidth,h: document.documentElement.clientHeight||document.body.clientHeight};
		mask.style.height = winSize.h + 'px';
		iframe.style.height = winSize.h + 'px';
		obj.style.width = winSize.w +'px';
		obj.style.height = winSize.h +'px';
		if(ie6){
			follow()
		}
	}

	function yoTopNavNews(){
		var oBox = document.getElementById('yo_topNav_mine')||null;
		if (!oBox) {return};
		var data = [{name:'好友动态',num : 100,href:'http://space.yoka.com/space.php?do=pm&filter=feed'},{name:'最新回复',num : 10,href:'http://space.yoka.com/space.php?do=pm&filter=reply'},{name:'新增粉丝',num : 9,href:'http://space.yoka.com/space.php?do=pm&filter=fans'},{name:'我的私信',num : 6,href:'http://space.yoka.com/space.php?do=pm&filter=inbox'},{name:'系统通知',num : 1,href:'http://space.yoka.com/space.php?do=pm&filter=systempm'}];
		var len = data.length||0;
		if (!len) {return};
		var oDl = document.createElement('dl');
		var oDt,oDd;
		var bBtn = false;
		var oDd = document.createElement('dd');
		var iL = 0,iT=0;
		var oTime = null;

		Event.add(oBox,'mouseover',function(ev){
			var ev = ev||event;
			var target = ev.target||ev.srcElement;
			if (target.nodeName === 'A' && target.innerHTML.indexOf('消息')>-1) {
				if (bBtn) {
					iL = getLeft(target).x-4;
					iT = getLeft(target.parentNode.parentNode).y;
					show(target);
				};
			};
		});

		function setHtml(){
			var aNum = 0;
			for(var i=0;i<len;i++){
				data[i].num = arguments[i]||0;
				aNum += parseInt(arguments[i]);
			}
			oDl.innerHTML = '<dt><a target="_blank" href="http://space.yoka.com/msg/">[消息'+(aNum<100 ? aNum : '99+')+']</a></dt>';
			oDd.innerHTML = '';
			for(var i=0;i<len;i++){
				var oA = document.createElement('a');
				var html = '';
				if (data[i].num>99) {
					html = '<i>99+</i>'+data[i].name;
				}else{
					html = '<i>'+data[i].num+'</i>'+data[i].name;
				}
				oA.href = data[i].href;
				oA.innerHTML = html;
				oDd.appendChild(oA);
			}
			oDl.appendChild(oDd);
			oDl.id = 'yoTopNavNews_box';
			oDl.className = 'yo_topNav_news';
			document.body.appendChild(oDl);
			oDt = oDl.getElementsByTagName('dt')[0];
			if (!bBtn) {
				Event.add(oDt,'mouseover',show)
				Event.add(oDt,'mouseout',hide)
				Event.add(oDd,'mouseover',show)
				Event.add(oDd,'mouseout',hide)
			};
			bBtn = true;
		}
		function show(){
			clearTimeout(oTime);
			oDl.style.cssText += ';left:'+iL+'px;top:'+iT+'px;height:auto;opacity:1;';
		}
		function hide(){
			oTime = setTimeout(function(){
				oDl.style.cssText += ';height:0;opacity:0;';
			},100)
		}
		function getLeft(obj){
			var o = typeof obj === 'string' ? document.getElementById(obj) : obj,
				x=0,
				y=0;
			while(o){
				x+=o.offsetLeft;
				y+=o.offsetTop;
				o = o.offsetParent;
			}
			return {x:x,y:y}
		}
		window.yoTopNavNewsData = setHtml;
	}

	window.yo_topNav = {
		init : init, 
		setMsg : setMsg,
		login : login,
		logout : logout,
		showLoginWin : show,
		hideLoginWin : hide,
		yokaLoginMsg : yokaLoginMsg,
		Yoka_emailjsoncallback : Yoka_emailjsoncallback,
		Yoka_mobilejsoncallback : Yoka_mobilejsoncallback,
        setLoginCallBack:function(cb){
            loginSucessCallBack = cb;
        }
		
	}
	

})();


//if(/www\.yoka\.com\/union\//.test(location.href) === false){
//	document.write('<if'+'rame scrolling="no" style="height: 0px; width: 0px; display: none;" src="http:\/\/www.yoka.com\/include\/230\/2013\/201303\/57.html"><\/ifr'+'ame>');
//	document.write('<if'+'rame scrolling="no" style="height: 0px; width: 0px; display: none;" src="http:\/\/www.yoka.com\/include\/230\/2013\/201304\/59.html"><\/ifr'+'ame>');
//	document.write('<if'+'rame scrolling="no" style="height: 0px; width: 0px; display: none;" src="http:\/\/www.yoka.com\/include\/230\/2012\/201212\/51.html"><\/ifr'+'ame>');
//}





//http://ss1.yokacdn.com/www/public/j/yoka_common_dy_1.0.1.js

/**
YOKA 公共类库
@author:		wangyi yz124s@hotmail.com
@date:		2009-12-25
@desc:
	1 CookieManage: 统一的COOKIE管理类；
	2 TimerManage: 统一的定时器管理类；
	3 copy_text: 公共方法，复制文本内容

*/
var _YOKA = {};
var _CONFIG = {};

function byid(id){
	return document.getElementById(id);
}

/**
===============================================
统一的COOKIE管理类。
	refresh:		刷新管理类中的cookie内容，重新从 document.cookie 中获取；
	setCookie:		设置指定的cookie数据；
	getCookie:		获取指定的cookie数据，如果指定了cookie的key，则会获取到特定的value；
	decode_utf8:	对字符串进行utf-8编码；
===============================================
*/
_YOKA.CookieManage = new function(){
	/*
	 * 刷新管理类中的cookie内容，重新从 document.cookie 中获取
	 */
	this.refresh = function(){
		var CookieString = document.cookie;
		var aCookieString = CookieString.split("; ");
		cookieList = new Array();
		for (var i = 0;i < aCookieString.length; i++){
			var j = aCookieString[i].indexOf("=");
			var cname = aCookieString[i].substring(0,j);
			var cvalue = unescape(aCookieString[i].substr(j+1));
			cookieList[cname] = cvalue;
		}
	};
	this.setCookie = function(name,value,expiry,path,domain,secure){
		var nameString = name + '=' + escape(value);
		var expiryString = (expiry == null) ? '' : ' ;expires = '+ expiry.toGMTString();
		var pathString = (path == null) ? '' : ' ;path = '+ path;
		var domainString = (domain == null) ? '' : ' ;domain = '+ domain;
		var secureString = (secure) ?';secure':'';
		document.cookie = nameString + expiryString + pathString + domainString + secureString;
		cookieList[name] = value;
	};
	this.deleteCookie = function(name){
		var expires = new Date();
		expires.setTime (expires.getTime() - 1);
		this.setCookie(name, null, expires);
	};
	/**
	 * 获取指定的cookie数据，如果指定了cookie的key，则会获取到特定的value
	 * @param String name:	cookie的名称
	 * @param String key:	cookie值的特定项
	 * @return String cookie的数据内容
	 */
	this.getCookie = function(name, key){
		var cstring = cookieList[name];
		if (cstring && key)
		{
			var aCookieString=cstring.split("&");
			for (var i=0;i<aCookieString.length;i++){
				j=aCookieString[i].indexOf("=");
				if (arguments[1]==aCookieString[i].substring(0,j))
					return unescape(aCookieString[i].substr(j+1));
			}
		}
		else
		{
			return cstring;
		}
	};
	/**
	 * 对字符串进行UTF-8编码
	 * @param String utftext 原始字符串
	 * @return String 编码转换后的字符串
	 */
	this.decode_utf8 = function(utftext) {
		if (!utftext)
		{
			return '';
		}
		var plaintext = ""; var i=0; var c=c1=c2=0;
		while(i<utftext.length)
			{
			c = utftext.charCodeAt(i);
			if (c<128) {
				plaintext += String.fromCharCode(c);
				i++;}
			else if((c>191) && (c<224)) {
				c2 = utftext.charCodeAt(i+1);
				plaintext += String.fromCharCode(((c&31)<<6) | (c2&63));
				i+=2;}
			else {
				c2 = utftext.charCodeAt(i+1); c3 = utftext.charCodeAt(i+2);
				plaintext += String.fromCharCode(((c&15)<<12) | ((c2&63)<<6) | (c3&63));
				i+=3;}
			}
		return plaintext;
	}

	var cookieList = {};
	this.refresh();
};



/**
===============================================
统一的定时器管理类。
	setTaskHandler:		方法，设置任务处理器；
	startup:			方法，启动定时器；
	shutdown:			方法，停止定时器；
	setSpeed:			方法，设置定时器的间隔时间；
	setTaskSpeed:		方法，设置任务处理器的间隔时间；
===============================================
*/
_YOKA.TimerManage = new function(){
	/**
	 * 设置任务处理器
	 * @param String name:		任务处理器的名称，任务的唯一标识
	 * @param Function handler:	任务处理方法，如果要移除一个任务，则设置为NULL，格式： function(){}
	 * @param Integer intval: 任务处理器的间隔时间，单位：毫秒
	 * @param Integer count: 最多执行次数，默认0不限制
	 */
	this.setTaskHandler = function(name, handler, intval, max_count){
		intval = intval ? intval : default_intval;
		max_count = max_count ? max_count : 0;
		handlerList[name] = {'func' : handler, 'intval' : intval, 'lasttime' : 0, 'count' : 0, 'max_count' : max_count};
	};
	/**
	 * 启动定时器
	 */
	this.startup = function(){
		timer = setTimeout(_startup, speed);
	};
	/**
	 * 停止定时器
	 */
	this.shutdown = function(){
		if (timer)
		{
			clearTimeout(timer);
			timer = null;
		}
	};
	/**
	 * 设置定时器的间隔时间
	 * @param Integer intval 毫秒数
	 */
	this.setSpeed = function(intval){
		try
		{
			intval = parseInt(intval + '');
		}
		catch (ex){}
		if (!intval || intval < default_speed / 10)
		{
			speed = default_speed;
		}
		speed = intval;
	};
	/**
	 * 设置任务处理器的间隔时间
	 * @param String taskname 任务处理器的名称
	 * @param Integer intval 间隔时间，单位：毫秒
	 */
	this.setTaskSpeed = function(taskname, intval)
	{
		try
		{
			intval = parseInt(intval + '');
		}
		catch (ex){}
		if (!intval || intval < speed)
		{
			intval = default_intval;
		}
		var handler = handlerList[taskname];
		if (handler && typeof(handler.func) == 'function')
		{
			handler.intval = intval;
		}
	}

	var speed = 100;			// 定时器的时间间隔，setSpeed可以修改
	var default_speed = 100;	// 默认的定时器间隔时间
	var default_intval = 3000;	// 默认的任务间隔时间
	var handlerList = {};		// 当前的处理事件集合
	var timer = null;			// 定时器对象
	var _startup = function(){	// 触发各个处理事件
		if (timer)
		{
			clearTimeout(timer);
			timer = null;
		}
		if (handlerList)
		{
			for (var name in handlerList)
			{
				var handler = handlerList[name];
				if (handler && typeof(handler.func) == 'function' && (new Date()).getTime() - handler.lasttime > handler.intval && (handler.max_count <= 0 || handler.max_count > handler.count))
				{
					try
					{
						handler.func();
						handler.lasttime = (new Date()).getTime();
						handler.count += 1;
						handlerList[name] = handler;
					}
					catch (exx)
					{}
				}
			}
		}
		timer = setTimeout(_startup, speed);
	};
};


/**
===============================================
公共的处理方法
===============================================
*/

/**
 * 复制页面中的内容到剪切板
 * 如果剪切板不可用，使用prompt的方式提醒用户手动复制
 * @param String txt 需要被复制的内容
 * @param String desc 无法启用剪切板时的提示文字
 * @return Boolean 是否复制成功
 */
_YOKA.copy_text = function(txt, desc) 
{
	if (window.clipboardData) 
	{
		window.clipboardData.setData("Text",txt);
		return true;
	}
	else 
	{
		prompt(desc, txt);
		return false;
	}
};


//统计的专用代码,添加于20101020，用于微博链接的统计
function yokaClick(num) {
	//统计人员xiao 告知此统计系统不再使用了
	//(new Image()).src ="http://statistics.yoka.com/click.aspx?id="+num+"&url="+encodeURIComponent(document.URL)+"&t="+Math.random();
}



//http://ss1.yokacdn.com/www/public/j/yoka_common_passport_dy_1.0.1.js

_YOKA.Passport=new function(){this.setLoginHandler=function(A,B){N[A]=B;};this.setLogoutHandler=function(A,B){P[A]=B;};this.getLoginUserInfo=function(){var Q={};var B=_YOKA.CookieManage.getCookie(I,"uid");var G=_YOKA.CookieManage.getCookie(O,"uid");if((B-0)>0){B=parseInt(B);var A=_YOKA.CookieManage.decode_utf8(_YOKA.CookieManage.getCookie(I,"nickName"));if(typeof (A)=="undefined"||A.length<1){A=_YOKA.CookieManage.decode_utf8(_YOKA.CookieManage.getCookie(I,"nickname"));}var C=_YOKA.CookieManage.decode_utf8(_YOKA.CookieManage.getCookie(I,"nick"));var D=_YOKA.CookieManage.getCookie(I,"avatar_url");var E=_YOKA.CookieManage.getCookie(I,"third_source");Q={uid:B,username:A,truename:C,avatar:D,track_uid:B,track_name:A,third_source:E};}else{if((G-0)>0){G=parseInt(G);var F=_YOKA.CookieManage.decode_utf8(_YOKA.CookieManage.getCookie(O,"nickName"));if(typeof (F)=="undefined"||F.length<1){F=_YOKA.CookieManage.decode_utf8(_YOKA.CookieManage.getCookie(O,"nickname"));}Q={track_uid:G,track_name:F};}}return Q;};var J=function(){_YOKA.CookieManage.refresh();var A=_YOKA.CookieManage.getCookie(I,"uid");if(!A||A==""||A=="0"||A<1){A=undefined;}if(!K.uid&&A){L();}else{if(K.uid&&!A){M();}else{if(K.uid!=A){L();}}}};var L=function(){K=_YOKA.Passport.getLoginUserInfo();for(var A in N){var B=N[A];if(B){try{B(K);}catch(C){}}}};var M=function(){for(var A in P){var B=P[A];if(B){try{B(K);}catch(C){}}}K=_YOKA.Passport.getLoginUserInfo();};var I="KM.PASSPORT.MEMBER";var O="KM.PASSPORT.MEMBER.TRACK";var K=this.getLoginUserInfo();var N={};var P={};_YOKA.TimerManage.setTaskHandler("yoka_passport_loghandler",J,3000,0);};


//http://ss1.yokacdn.com/www/public/j/yoka_header_top_common_dy_1.0.1.js
var headerEmailAlertCookieName = "KM.PASSPORT.MEMBER.EMAIL_ALERT";	// 验证邮箱的提示信息是否显示
var headerSpaceUrl = 'http://space.yoka.com';
//var headerPassportUrl = 'http://passport.yoka.com/login.php';
var headerPassportUrl = 'http://space.yoka.com/login/login.php';
var headerRegisterUrl = 'http://passport.yoka.com/register.php';
var headerLogoutUrl = 'http://passport.yoka.com/logout.php';
var headerBuildTitleHandle = null;		// 标题自动闪动的定时器
var headerLoadUserMessageHandle = null;	// 获取消息数的定时器

function headerSetHome(obj,vrl){
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}
	catch(ex){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (exx) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}

function headerLoginopen(ar)
{
	try
	{
		for (var i=0;i<ar.length;i++){showv(i);}
		function showv(i){
			byid(ar[i][0])["onmouseover"]=function(){byid(ar[i][1]).innerHTML=ar[i][3];if (ar[i][3] != ''){byid(ar[i][1]).className="show";}}
			byid(ar[i][0])["onmouseout"]=function(){byid(ar[i][1]).innerHTML="";byid(ar[i][1]).className="";}
			if (ar[i][2] != '')
			{
				byid(ar[i][0])["onclick"]=function(){byid(ar[i][1]).innerHTML=ar[i][2];byid(ar[i][1]).className="show";}
			}
		}
	}
	catch (exx)
	{
	}
}
function headerLoginmove(id)
{
	setInterval(plays,10);
	var ids=byid(id);
	function plays()
	{
		var olds=ids.offsetTop||0;
		var news=(document.body.scrollTop||document.documentElement.scrollTop)+100;
		if(olds!=news){var dy=(news-olds)*0.15;dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));ids.style.top=(olds+dy)+"px";}
	}
}

// 验证邮箱的提示
function headerCheckRegistryMail()
{
	if (!_YOKA.CookieManage.getCookie(headerEmailAlertCookieName) && byid('loginvshow'))
	{
		var scriptElement = document.createElement("script");
		scriptElement.src = headerSpaceUrl + "/services/user_checkemail.php?onsuccuess=headerOnSucCheckEmail";
		scriptElement.async=true;
		document.body.appendChild(scriptElement);
	}
}

// 是否验证邮箱的回调函数
function headerOnSucCheckEmail(checked)
{
	if (!checked)
	{
		if (!_YOKA.CookieManage.getCookie(headerEmailAlertCookieName))
		{
			byid("loginvshow").style.display = "";
			headerLoginmove("loginvshow");
		}
	}
	// 所有页面每天只展示一次
	var now = new Date();
	now.setDate(now.getDate() + 1);
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	document.cookie = headerEmailAlertCookieName + "=1;expires=" + now.toUTCString() + ";domain=yoka.com;path=/;";
	_YOKA.CookieManage.refresh();
}

// 隐藏验证邮箱的提示
function headerCloseRegistryMail()
{
	byid("loginvshow").style.display = "none";
}

// 构建页面的标题（自动闪）
function headerBuildTitle(messageNum, titleIndex)
{
	if (window.location.href.indexOf("space.yoka.com") == -1)
	{
		return;
	}
	try
	{
		if (headerBuildTitleHandle)
		{
			clearTimeout(headerBuildTitleHandle);
			headerBuildTitleHandle = null;
		}
		if (messageNum > 0)
		{
			document.title = titleIndex % 2 ? "【　　　】 - " + originalTitle : "【新消息】 - " + originalTitle;
			titleIndex++;
			headerBuildTitleHandle = setTimeout(function(){headerBuildTitle(messageNum, titleIndex);}, 1000);
		}
		else
		{
			document.title = originalTitle;
		}	
	}
	catch (exx)
	{
	}
}

// 加载用户消息
function headerLoadUserMessage()
{
	if (headerLoadUserMessageHandle)
	{
		clearTimeout(headerLoadUserMessageHandle);
	}
	if (myuid_track !=null && myuid_track != '' && myuid_track != '0')
	{
		var scriptElement = document.createElement("script");
		scriptElement.src = headerSpaceUrl + "/services/getUserActionJs.php?uid=" + myuid_track + "&onload=hasNewMessage&t=" + (new Date()).getTime();
		scriptElement.async=true;
		document.body.appendChild(scriptElement);
	}
}
// 请先登录
function headerToLogin(from)
{
	try
	{
		for (var i = 1; i < 7; i++)
		{
			if (byid("header_login_input" + i))
			{
				byid("header_login_input" + i).style.display = '';
			}
		}
		byid("header_welcome").style.display = 'none';
		byid("header_navigation_1").style.display = 'none';
		byid("header_navigation_2").style.display = 'none';
		byid("header_navigation_3").style.display = 'none';
		byid("header_login_from").value = from;
		byid("header_password").focus();
	}
	catch (exx)
	{
		alert(exx);
	}
}
// 开始读取用户的消息、验证邮箱等信息
function headerStartFetchUserMessage()
{
	if (headerLoadUserMessageHandle)
	{
		clearTimeout(headerLoadUserMessageHandle);
	}
	headerLoadUserMessageHandle = setTimeout(headerLoadUserMessage, 10000);		// 过 10 秒加载一次消息数
	if (myuid != null && myuid != "" && myuid != "0" && !_YOKA.CookieManage.getCookie(headerEmailAlertCookieName))
	{	// 用户已经登录，并且还不知道用户是否已经激活邮箱
		//暂时注释激活邮箱
		//setTimeout(headerCheckRegistryMail, 15000);
	}
}

// Abstract：存在新消息的回调函数 $html = $onload.'("'.$new_msg.'", "'.$leave_word.'", "'.$comment.'", "'.$system_msg.'", "'.$leave_word_reply.'", "'.$comment_reply.'");';
function hasNewMessage(new_msg, leave_word, comment, system_msg, leave_word_reply, comment_reply) {}
// Abstract：获取顶部导航需要的样式信息
function getHeaderStyle(){}
// Abstract：获取顶部导航的左侧到行信息（白色导航特有）
function getLeftNavigation(){}
/**
 * Abstract：获取导航栏的HTML内容，不包括
 * 依赖变量：myuid, mynick, myuid_track, mynick_track
 */
function getNavigationHtml(){}
// Abstract：将导航栏的HTML直接打印输出
function writeNavigation(){}

// 初始化导航栏的HTML，直接打印输出
function initNavigation()
{
	
	writeNavigation();
	// 用户登录过，获取用户的新消息数，用户在线，验证用户是否已经验证邮箱
	if (myuid_track != null && myuid_track != "" && myuid_track != "0" && myuid_track != "0")
	{
		if(window.attachEvent) window.attachEvent('onload', headerStartFetchUserMessage); else window.addEventListener('load', headerStartFetchUserMessage, false);
	}
	_YOKA.Passport.setLoginHandler('header_passport_login_handler', headerPassportLoginHandler);
	_YOKA.Passport.setLogoutHandler('header_passport_logout_handler', headerPassportLogoutHandler);
	_YOKA.TimerManage.startup();
}

// 顶部导航栏的登录处理事件
function headerPassportLoginHandler(curentUser)
{
	myuid = curentUser['uid'];
	mynick = curentUser['username'];
	myuid_track = curentUser['track_uid'];
	mynick_track = curentUser['track_name'];
	html = getNavigationHtml();
//	alert(html);
	//byid('header_container').innerHTML = html;
	if (myuid_track != null && myuid_track != "" && myuid_track != "0" && myuid_track != "0")
	{
		headerStartFetchUserMessage();
	}
}
// 顶部导航栏的退出处理事件
function headerPassportLogoutHandler(curentUser)
{
	myuid = '';
	mynick = '';
	myuid_track = curentUser['track_uid'];
	mynick_track = curentUser['track_name'];
	html = getNavigationHtml();
//	alert(html);
	//byid('header_container').innerHTML = html;
	headerStartFetchUserMessage();
}

var originalTitle = document.title;
// 获取用户登录的信息
var curentUser = _YOKA.Passport.getLoginUserInfo();
var myuid = curentUser['uid'];
var mynick = curentUser['username'];
var myuid_track = curentUser['track_uid'];
var mynick_track = curentUser['track_name'];

var topUrl = '';
if (window != window.top)
{	// 使用了框架页面
	topUrl = document.referrer;
	headerPassportUrl += '?from=' + topUrl;
	headerRegisterUrl += '?from=' + topUrl;
	headerLogoutUrl +=  '?from=' + topUrl;
}



//http://ss1.yokacdn.com/www/login/j/yoka_outsite_passport.js
(function(){if(document.domain.indexOf("yoka.com")==-1){var I="KM.PASSPORT.MEMBER";var H="http://passport.yoka.com/outsite_passport_cookie_validate.php";var G="";var F=document.cookie;var E=F.split("; ");for(var B=0;B<E.length;B++){var A=E[B].indexOf("=");var D=E[B].substring(0,A);if(D==I){G=escape(unescape(E[B].substr(A+1)));G=J(G);break;}}var C=H+"?t="+(new Date()).getTime()+"&c="+G;if(typeof (yoka_outsite_passport_refresh)!="undefined"){C=C+"&refresh="+yoka_outsite_passport_refresh;}else{/*C=C+"&refresh=1";*/}if(typeof (yoka_outsite_passport_from)!="undefined"){C=C+"&from="+yoka_outsite_passport_from;}document.write('<script type="text/javascript" charset="utf-8" src="'+C+'"><\/script>');}function J(M){var K="";var L=0;var N=c1=c2=0;while(L<M.length){N=M.charCodeAt(L);if(N<128){K+=String.fromCharCode(N);L++;}else{if((N>191)&&(N<224)){c2=M.charCodeAt(L+1);K+=String.fromCharCode(((N&31)<<6)|(c2&63));L+=2;}else{c2=M.charCodeAt(L+1);c3=M.charCodeAt(L+2);K+=String.fromCharCode(((N&15)<<12)|((c2&63)<<6)|(c3&63));L+=3;}}}M=K;return M;}})();

//http://ss1.yokacdn.com/www/public/j/yoka_header_top_html_new.js
function hasNewMessage(I,H,G,F,E){var C=(I-0)+(H-0)+(G-0)+(F-0)+(E-0);yoTopNavNewsData(I,H,G,F,E);var B=document.getElementById("span_new_msg");if(B!=null){byid("span_new_msg").innerHTML=C+""; if(C>0){B.parentNode.className="on";if (C>99) {B.innerHTML = '99+';}}else{B.parentNode.className="";}; var A="您有"+C+"条新信息";}headerLoadUserMessageHandle=setTimeout(headerLoadUserMessage,60000);headerBuildTitle(C,0);}function getNavigationHtml(){if(myuid!=null&&myuid!=""&&myuid!="0"&&myuid!=0){yo_topNav.login(mynick,myuid,"10013");}else{yo_topNav.logout();}}function writeNavigation(){getNavigationHtml();}

//http://ss1.yokacdn.com/www/login/j/connect_login_qq.js
var Class={create:function(){return function(){this.init.apply(this,arguments);};}};function bindFun(C,B){var A=Array.prototype.slice.call(arguments).slice(2);return function(){return B.apply(C,A);};}function addEvent(C,B,A){C.attachEvent?C.attachEvent("on"+B,A):C.addEventListener(B,A,false);}function connectLoginWin(D,L,G){if(!document.getElementById(D)){return false;}var C=document.getElementById(D),J=C.getElementsByTagName("div"),I=C.getElementsByTagName("i")[0],F=document.documentElement.offsetWidth||document.body.offsetWidth,B=document.documentElement.clientHeight,H=navigator.appName=="Microsoft Internet Explorer"&&navigator.appVersion.split(";")[1].indexOf("MSIE 6.0")>0?true:false;J=J[J.length-1];C.style.width=J.style.width=F+"px";C.style.height=J.style.height=B+"px";if(H){var N=document.body.scrollTop||document.documentElement.scrollTop;C.style.width=J.style.width=F-24+"px";C.style.top=N+"px";try{addEvent(window,"scroll",function(){N=document.body.scrollTop||document.documentElement.scrollTop;C.style.top=N+"px";});}catch(O){alert("window: "+O.message);}}addEvent(I,"click",function(){toggleWin(D);});var M=document.getElementById("loginType").getElementsByTagName("li"),A=document.getElementById("loginCon").getElementsByTagName("div");for(var E=0;E<2;E++){K(E);}function K(P){addEvent(M[P],"mouseover",function(){for(var Q=0;Q<2;Q++){M[Q].className="";A[Q].style.display="none";}M[P].className="passport_connect_on";A[P].style.display="block";});}return true;}function toggleWin(A){if(!document.getElementById(A)){return ;}var B=document.getElementById(A);B.style.display=B.style.display=="none"?"block":"none";}function initConnect(){var A='<div id="connect_inner_iframe" style="display: none;">';A+='<input type="hidden" id="connect_from" value="{$from}" />';A+='<iframe id="inner_post_iframe" name="inner_post_iframe" src="'+mark+'" style="width:400px;height:325px;"></iframe>';A+="</div>";A+='<div id="divLoginWin" class="passport_connect_loginBox" style="display:none;z-index:99999998">';A+='\t\t<div class="passport_connect_loginWin" style="z-index:99999999">';A+='\t\t\t<div class="passport_connect_loginConBox">';A+='\t\t\t<dl class="passport_connect_loginTit">';A+="\t\t\t\t<dt><i></i>连接YOKA</dt>";A+="\t\t\t\t<dd>您好！已通过QQ成功登录，现在可以连接YOKA了！</dd>";A+="\t\t\t</dl>";A+='\t\t\t<div class="passport_connect_loginType">';A+='\t\t\t\t<ul id="loginType">';A+='\t\t\t\t\t<li class="passport_connect_on"><b>YOKA用户</b>使用已有用户名连接</li>';A+="\t\t\t\t\t<li><b>非YOKA用户</b>注册新用户并连接</li>";A+="\t\t\t\t</ul>";A+="\t\t\t</div>";A+='\t\t\t<div class="passport_connect_loginCon" id="loginCon">';A+='\t\t\t\t<div class="passport_connect_logLeft" id="connect_div_login">';A+='\t\t\t\t<form id="connect_form_login" method="post" action="http://passport.yoka.com/login.php?redirect=1&from=http://'+location.host+'/pageproxy.html?method=top.connect_logined" onsubmit="return connect_submit();" target="inner_post_iframe">';A+='\t\t\t\t\t<dl><dt>用户名：</dt><dd><input type="text" name="username" id="connect_login_username" maxlength="12" /></dd></dl>';A+='\t\t\t\t\t<dl><dt>密&nbsp;&nbsp;码：</dt><dd><input type="password" name="password" id="connect_login_password" /><input type="hidden" name="error_url" value="http://'+location.host+'/pageproxy.html?method=top.connect_logined&action=loginError"/></dd></dl>';A+="\t\t\t\t</form>";A+="\t\t\t\t</div>";A+='\t\t\t\t<div class="passport_connect_logRight" style="display:none" id="connect_div_regiester">';A+='\t\t\t\t<form id="connect_form_register" method="post" action="http://passport.yoka.com/doreg.php" onsubmit="return connect_submit();" target="inner_post_iframe">';A+="\t\t\t\t\t<div>";A+='\t\t\t\t\t\t<dl><dt>用户名：</dt><dd><input type="text" name="username" id="connect_regiester_username" maxlength="12" />';A+='\t\t\t\t\t\t<input type="hidden" id="connect_regiester_truename" name="truename" />';A+='\t\t\t\t\t\t<input type="hidden" value="1" name="redirect" id="redirect" />';A+='\t\t\t\t\t\t<input type="hidden" value="http://'+location.host+'/pageproxy.html?method=top.connect_logined" name="refer" />';A+='\t\t\t\t\t\t<input type="hidden" value="http://'+location.host+'/pageproxy.html?method=top.connect_logined&action=regiestError" name="from" />';A+="\t\t\t\t\t\t</dd></dl>";A+='\t\t\t\t\t\t<dl><dt>密&nbsp;&nbsp;码：</dt><dd><input type="password" name="password" id="connect_regiester_password" maxlength="32" /></dd></dl>';A+='\t\t\t\t\t\t<dl><dt>重复密码：</dt><dd><input type="password" name="password2" id="connect_regiester_password2" maxlength="32" /></dd></dl>';A+="\t\t\t\t\t</div>";A+="\t\t\t\t\t<div>";A+='\t\t\t\t\t\t<dl><dt>验证邮箱：</dt><dd><input type="text" name="email" id="connect_regiester_email" maxlength="32" /></dd></dl>';A+='\t\t\t\t\t\t<dl class="passport_connect_yzm"><dt>验证码：</dt><dd><input type="text" name="seccode" id="connect_regiester_seccode" maxlength="4" /><input type="hidden" id="connect_regiester_check_key_1" name="checkkey" value=""/>';A+='</dd><dd><img src="'+pic_other+'" id="connect_regiester_image_code_1" height="21" /></dd><dd><a href="#" onclick="refresh_code();return false;" target="_self">刷新</a></dd></dl>';A+="\t\t\t\t\t</div>";A+="\t\t\t\t\t<ul>";A+='\t\t\t\t\t    <li><input type="checkbox" checked="checked" /></li>';A+='\t\t\t\t\t    <li>我已阅读并接受YOKA时尚网 <a href="http://passport.yoka.com/service.php" target="_blank">服务条款</a> 和 <a href="http://passport.yoka.com/privacy.php" target="_blank">隐私政策</a></li>';A+="\t\t\t\t    </ul>";A+="\t\t\t\t</form>";A+="\t\t\t\t</div>";A+="\t\t\t</div>";A+='\t\t\t<div class="passport_connect_loginBtn"><input type="button" value="" onclick="connect_submit();return false;" /></div>';A+="\t\t\t</div>";A+="\t\t\t<span></span>";A+="\t\t</div>";A+='\t\t<div class="passport_connect_mask"></div>';A+="\t\t</div>";document.write(A);loadConnectInfo();}function loadConnectInfo(){try{if(connectLoginWin("divLoginWin",546,317)==false){setTimeout(loadConnectInfo,100);return ;}if(document.getElementById("header_connect_qq")){document.getElementById("header_connect_qq").style.display="";}if(document.getElementById("header_connect_qq2")){document.getElementById("header_connect_qq2").style.display="";}if(document.getElementById("header_connect_weibo")){document.getElementById("header_connect_weibo").style.display="";}if(document.getElementById("header_connect_weibo2")){document.getElementById("header_connect_weibo2").style.display="";}}catch(A){setTimeout(loadConnectInfo,100);}}function loadConnectJs(){document.write('<link rel="stylesheet" type="text/css" href="css/login-connect.css"/>');initConnect();}var curentUser=_YOKA.Passport.getLoginUserInfo();var myuid=curentUser.uid;var mynick=curentUser.username;var myuid_track=curentUser.track_uid;var mynick_track=curentUser.track_name;if(myuid==null||myuid==""||myuid=="0"||myuid==0){loadConnectJs();}var code_key="";function onFetchConnectCheckCode(A){code_key=A;document.getElementById("connect_regiester_check_key_1").value=A;document.getElementById("connect_regiester_image_code_1").src="http://sec.yoka.com/checkcode/fetch_image.php?checkkey="+A+"&"+(new Date()).getTime();}function refresh_code(){var A=document.createElement("script");A.type="text/javascript";A.src="http://sec.yoka.com/checkcode/fetch_code.php?oncomplete=onFetchConnectCheckCode";document.getElementsByTagName("head")[0].appendChild(A);}function check_code(){var A=$$("#seccode");var B=$$.trim($("connect_regiester_seccode").value);if(B==""){warning(A,"请填写验证码");A.focus();return false;}}var qzone_token="";var qzone_openid="";var qzone_timestamp="";var qzone_signature="";var qzone_token_secret="";var qzone_vericode="";function connect_logined(B){_YOKA.CookieManage.refresh();var A=_YOKA.Passport.getLoginUserInfo();if(A&&A.uid){byid("inner_post_iframe").src="http://passport.yoka.com/login_qzone.php?action=login&oauth_token="+qzone_token+"&openid="+qzone_openid+"&oauth_signature="+qzone_signature+"&uid="+A.uid+"&oauth_token_secret="+qzone_token_secret+"&oauth_vericode="+qzone_vericode+"&timestamp="+qzone_timestamp+"&refhost="+location.host;}else{if(B.action=="loginError"){if(B.error_code==2){alert("请输入正确的用户名");byid("connect_login_password").select();}else{if(B.error_code==4){alert("用户名或密码错误，请重新输入");byid("connect_login_password").select();}else{alert("登录失败，请重新输入");byid("connect_login_password").select();}}}else{if(B.error_code==1){alert("验证码错误");}else{if(B.error_code==2){alert("系统错误");}else{if(B.error_code==3){alert("密码不一致");byid("connect_regiester_password2").select();}else{if(B.error_code==4){alert("密码为空或者太长");byid("connect_regiester_password").select();}else{if(B.error_code==5){alert("邮件格式不正确");byid("connect_regiester_email").select();}else{if(B.error_code==6){alert("邮箱已经被使用");byid("connect_regiester_email").select();}else{if(B.error_code==7){alert("IP重复注册");}else{if(B.error_code==11){alert("用户名不合法");byid("connect_regiester_username").select();}else{if(B.error_code==12){alert("用户名包含不允许注册的词语");byid("connect_regiester_username").select();}else{if(B.error_code==13){alert("用户名已经存在");byid("connect_regiester_username").select();}else{if(B.error_code==14){alert("填写的 Email 格式有误");byid("connect_regiester_email").select();}else{if(B.error_code==15){alert("填写的 Email 不允许注册");byid("connect_regiester_email").select();}else{if(B.error_code==16){alert("填写的 Email 已经被注册");byid("connect_regiester_email").select();}else{if(B.error_code==17){alert("注册失败");}else{alert("注册失败");}}}}}}}}}}}}}}refresh_code();}}}function connect_submit(){if(byid("connect_div_login").style.display!="none"){if(byid("connect_login_username").value.length<2){alert("请输入正确的用户名");byid("connect_login_username").focus();return false;}if(byid("connect_login_password").value.length<6){alert("请输入正确的密码");byid("connect_login_password").focus();return false;}byid("connect_form_login").submit();}else{if(byid("connect_regiester_username").value.length<2){alert("请输入正确的用户名");byid("connect_regiester_username").focus();return false;}if(byid("connect_regiester_password").value.length<6){alert("密码不能少于6位，请重新输入");byid("connect_regiester_password").select();return false;}if(byid("connect_regiester_password").value!=byid("connect_regiester_password2").value){alert("重复密码与密码不一致，请重新输入");byid("connect_regiester_password2").select();return false;}if(byid("connect_regiester_email").value.length<6||byid("connect_regiester_email").value.indexOf("@")<1){alert("请输入正确的验证邮箱");byid("connect_regiester_email").select();return false;}if(byid("connect_regiester_seccode").value.length!=4){alert("请输入正确的验证码");byid("connect_regiester_seccode").select();return false;}byid("connect_regiester_truename").value=byid("connect_regiester_username").value;byid("connect_form_register").submit();}return false;}function toQzoneLogin(){var A=window.open("http://passport.yoka.com/login_qzone.php?refhost="+location.host,"TencentLogin","width=450,height=320,menubar=0,scrollbars=0,status=1,titlebar=0,toolbar=0,location=1");}function qzone_logined(C){var A=C.oauth_token;var E=C.openid;var D=C.oauth_signature;qzone_token=A;qzone_openid=E;qzone_timestamp=C.timestamp;qzone_signature=D;qzone_token_secret=C.oauth_token_secret;qzone_vericode=C.oauth_vericode;refresh_code();try{toggleWin("divLoginWin");}catch(B){alert("qzone_logined : "+B.message);}}function onConnectLogined(B){var A=B.from;if(!A||A=="undefined"||A==""){if(location.href.indexOf("?")>-1){location.href=location.href+"&t="+(new Date()).getTime();}else{location.href=location.href+"?t="+(new Date()).getTime();}}else{location.href=A;}}function onYokaLogined(){alert("YOKA账号已经登录！");var A=params.from;if(!A||A=="undefined"||A==""){if(location.href.indexOf("?")>-1){location.href=location.href+"&t="+(new Date()).getTime();}else{location.href=location.href+"?t="+(new Date()).getTime();}}else{location.href="http://"+A;}}
document.write('<script charset="utf-8">gRefHost = \'passport.yoka.com\';<\/script>');
document.write('<script src="http://ss1.yokacdn.com/www/login/j/connect_login_third.js" charset="utf-8"><\/script>');
//load_script({url:'http://ss1.yokacdn.com/www/login/j/connect_login_third.js',async:true,charset:'utf-8',onload:function(){}}); //这里异步加载在ie7会乱样式
document.write('<input type="hidden" id="onsuccess_js"/>');
document.write('<input type="hidden" id="redirect" value="true"/>');













;












