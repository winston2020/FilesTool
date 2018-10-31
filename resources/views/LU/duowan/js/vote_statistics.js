XPath = {
	getIEXmlAX:function (){
		var i,activeXarr;
		var activeXarr = [			
			"MSXML4.DOMDocument",
			"MSXML3.DOMDocument",
			"MSXML2.DOMDocument",
			"MSXML.DOMDocument",
			"Microsoft.XmlDom"
						];	
		for(i=0; i<activeXarr.length; i++){
			try{
				var o = new ActiveXObject(activeXarr[i]);
				return o;
			}catch(e){}
		}
		return false;
	}
	,
	parseXML:function(source){
		try{
			var domParser = new DOMParser();
			var o = domParser.parseFromString(source,'text/xml');	
			return o;
		}catch(e){
			try{
				var o = this.getIEXmlAX();
				o.loadXML(source);
				return o;
			}catch(e){
				return null;
			}
		}
	}
	,
	loadXML:function(path){
		var xmlDoc=null;
		if (window.ActiveXObject){
			xmlDoc=this.getIEXmlAX();
		}else if (document.implementation && document.implementation.createDocument){
			xmlDoc=document.implementation.createDocument("","",null);
		}else{
			alert('Your browser cannot handle this script');
		}
		xmlDoc.async=false;
		xmlDoc.load(path);
		return xmlDoc;
	}
	,
	selectNodes:function(doc,path){
	    var results = [] ; 
	    if( navigator.appName.indexOf('Microsoft')== -1 ){
			var nodesSnapshot = doc.evaluate(path, doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
			for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
				var thisElement = nodesSnapshot.snapshotItem(i);
				results[i]=thisElement;
			}
		}
		else {
			val = doc.selectNodes(path) ;
			for (var i = 0; i < val.length; i++) {
				results[i] = val(i);
			}
		}
		if(results.length==0){return null ;}
		return results;		
	}
	,
	selectSingleNode:function(doc,path){
	    var result = null ; 
		if( navigator.appName.indexOf('Microsoft')== -1 ){
			var nodesSnapshot = doc.evaluate(path, doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
			for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
			    var thisElement = nodesSnapshot.snapshotItem(0);
			   	return  thisElement;
			}
		}
		else {
			val = doc.selectNodes(path) ;
			for (var i = 0; i < val.length; i++) {
				return val(0) ;
			}
		}
		return result;
	}
	,
	getNodeValue:function(node){
		if(node!=null)
		return node.firstChild.nodeValue;
	}
};

var loadJq = function() {
	var scriptBlock = document.createElement("script");
	scriptBlock.src = "http://www.duowan.com/public/assets/sys/js/jquery-1.7.2.min.js";
	document.getElementsByTagName("head")[0].appendChild(scriptBlock);
}

if (typeof $ == 'undefined') {
	loadJq();
}

function getCookie(name)// 取cookies函数
{
	var arr = document.cookie
			.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return unescape(arr[2]);
	return null;

}

function delCookie(name)// 删除cookie
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
 
 /*
 * 投票
 */
 function voteRadio(obj,divId,booleanLoad,justShowSum){
	var divObj = document.getElementById(divId);
	var type = -1;
	var articleId = -1;
	var channelId = -1
	var tag =   -1 ;
	var title = "" ; 
        var url = "" ; 
        var picurl = "";
	var encode = "" ; 
	var isLoad = booleanLoad ; 
	
  var inputs = divObj.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
			var id= inputs[i].id;
			if(id=="type"){type=inputs[i].value;}
			if(id=="articleId"){articleId=inputs[i].value;}
			if(id=="channelId"){channelId=inputs[i].value;}
			if(id=="tag"){tag=inputs[i].value;} 
			if(id=="title"){title=inputs[i].value;} 
			if(id=="url"){url=inputs[i].value;} 
                        if(id=="picurl"){picurl=inputs[i].value;}
		   if(id=="encode"){encode=inputs[i].value;} 		
	}
	
	if(type==-1 || type==null){alert("sorry,please input right type");}
	if(articleId==-1 || articleId==null){alert("sorry,please input right articleId");}
	if(channelId==-1 || channelId==null){alert("sorry,please input right channelId");}
	
	
	var name = "vote"+articleId+"/"+type ;
	var cookieVote = getCookie(name); 
	
	if(booleanLoad==0){
		if(cookieVote==1 && channelId != "pc"){alert("你今天已经进行过投票了,感谢你的参与!");isLoad="1";}
		else {
    		var Days = 1; // 此 cookie 将被保存 1 天
			var exp = new Date(); // new Date("December 31, 9998");
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(1) + ";expires=" + exp.toGMTString()
		}
    }
    else {
	   if(cookieVote==1){
		   isLoad="1";
		   justShowSum="0";
	   }
	}
	


	var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oScript= document.createElement("script"); 
	

    oScript.type = "text/javascript"; 
	var now = new Date() ;
	now = now.getTime();
    //alert(justShowSum);
	oScript.src="http://vote.duowan.com/vote?justShowSum="+justShowSum+"&articleId="+articleId+"&ramId="+now+"&type="+type+"&status="+obj+"&tag="+tag+"&channelId="+channelId+"&divId="+divId+"&isLoad="+isLoad+"&encode="+encode+"&title="+encodeURIComponent(encodeURIComponent(title))+"&url="+encodeURIComponent(encodeURIComponent(url))+"&picurl="+encodeURIComponent(encodeURIComponent(picurl)); 
	//alert(oScript.src);
	oHead.appendChild(oScript); 
 }
 
 
 /*
 * 投票(可控制cookie限制是否有效)
 */
 function voteRadio2(obj,divId,booleanLoad,justShowSum,cookieRestrict){
	var divObj = document.getElementById(divId);
	var type = -1;
	var articleId = -1;
	var channelId = -1
	var tag =   -1 ;
	var title = "" ; 
        var url = "" ; 
        var picurl = "";
	var encode = "" ; 
	var isLoad = booleanLoad ; 
	
  var inputs = divObj.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
			var id= inputs[i].id;
			if(id=="type"){type=inputs[i].value;}
			if(id=="articleId"){articleId=inputs[i].value;}
			if(id=="channelId"){channelId=inputs[i].value;}
			if(id=="tag"){tag=inputs[i].value;} 
			if(id=="title"){title=inputs[i].value;} 
			if(id=="url"){url=inputs[i].value;} 
                        if(id=="picurl"){picurl=inputs[i].value;}
		   if(id=="encode"){encode=inputs[i].value;} 		
	}
	
	if(type==-1 || type==null){alert("sorry,please input right type");}
	if(articleId==-1 || articleId==null){alert("sorry,please input right articleId");}
	if(channelId==-1 || channelId==null){alert("sorry,please input right channelId");}
	
	
	var name = "vote"+articleId+"/"+type ;
	var cookieVote = getCookie(name); 
	
	if(booleanLoad==0){
		if(cookieRestrict == 1){
			if(cookieVote==1 && channelId != "pc"){alert("你今天已经进行过投票了,感谢你的参与!");isLoad="1";}
			else {
	    		var Days = 1; // 此 cookie 将被保存 1 天
				var exp = new Date(); // new Date("December 31, 9998");
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
				document.cookie = name + "=" + escape(1) + ";expires=" + exp.toGMTString()
			}
		}
    }
    else {
	   if(cookieVote==1){
		   isLoad="1";
		   justShowSum="0";
	   }
	}
	


	var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oScript= document.createElement("script"); 
	

    oScript.type = "text/javascript"; 
	var now = new Date() ;
	now = now.getTime();
    //alert(justShowSum);
	oScript.src="http://vote.duowan.com/vote?justShowSum="+justShowSum+"&articleId="+articleId+"&ramId="+now+"&type="+type+"&status="+obj+"&tag="+tag+"&channelId="+channelId+"&divId="+divId+"&isLoad="+isLoad+"&encode="+encode+"&title="+encodeURIComponent(encodeURIComponent(title))+"&url="+encodeURIComponent(encodeURIComponent(url))+"&picurl="+encodeURIComponent(encodeURIComponent(picurl)); 
	//alert(oScript.src);
	oHead.appendChild(oScript); 
 }
 
 
 /*
 * 流量统计
 */
 function statisticsRadio(obj,divId,booleanLoad,justShowSum){
	var divObj = document.getElementById(divId);
	var type = -1;
	var articleId = -1;
	var channelId = -1
	var tag =   -1 ;
	var title = "" ; 
        var url = "" ; 
        var picurl = "";
	var encode = "" ; 
	var isLoad = booleanLoad ; 
	
  var inputs = divObj.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
			var id= inputs[i].id;
			if(id=="type"){type=inputs[i].value;}
			if(id=="articleId"){articleId=inputs[i].value;}
			if(id=="channelId"){channelId=inputs[i].value;}
			if(id=="tag"){tag=inputs[i].value;} 
			if(id=="title"){title=inputs[i].value;} 
			if(id=="url"){url=inputs[i].value;} 
                        if(id=="picurl"){picurl=inputs[i].value;}
		   if(id=="encode"){encode=inputs[i].value;} 		
	}
	
	if(type==-1 || type==null){alert("sorry,please input right type");}
	if(articleId==-1 || articleId==null){alert("sorry,please input right articleId");}
	if(channelId==-1 || channelId==null){alert("sorry,please input right channelId");}
	
	
	var name = "vote"+articleId+"/"+type ;
	var cookieVote = getCookie(name); 
	
	if(booleanLoad==0){
                if (cookieVote == 1) {
                	 isLoad="1";
		} else {
    			var Days = 1; // 此 cookie 将被保存 1 天
			var exp = new Date(); // new Date("December 31, 9998");
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(1) + ";expires=" + exp.toGMTString()
		}
    }
    else {
	   if(cookieVote==1){
		   isLoad="1";
		   justShowSum="0";
	   }
	}

	var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oScript= document.createElement("script"); 
	

    oScript.type = "text/javascript"; 
	var now = new Date() ;
	now = now.getTime();
    //alert(justShowSum);
	oScript.src="http://vote.duowan.com/vote?justShowSum="+justShowSum+"&articleId="+articleId+"&ramId="+now+"&type="+type+"&status="+obj+"&tag="+tag+"&channelId="+channelId+"&divId="+divId+"&isLoad="+isLoad+"&encode="+encode+"&title="+encodeURIComponent(encodeURIComponent(title))+"&url="+encodeURIComponent(encodeURIComponent(url))+"&picurl="+encodeURIComponent(encodeURIComponent(picurl)); 
	//alert(oScript.src);
	oHead.appendChild(oScript); 
 }

 /***
 *
 *解释内容
 * 
 */
 function  parseText(divId,xmlObj,justShowSum){

	  var contentObj = document.getElementById("voteContent");
	  if(contentObj!=null){
		contentObj.style.display = '' ;
	  }

		var jqXML = $($.parseXML(responseXML));

	 if("statistics" == divId){
		//var tmp_node = XPath.selectSingleNode(xmlObj,"xml/article/status/total");
		//if(tmp_node != null){
		//	articleClickNum = tmp_node.getAttribute("value");
		//}
		
		var articleClickNum = jqXML.find("total").attr("value");
		if(null != document.getElementById("articleClickNum")){
			document.getElementById("articleClickNum").innerHTML="浏览数："+articleClickNum;
		}
		
		return;
	}

	
	  var onePx = 50 ;
	  var div =  document.getElementById(divId);
	  var divAllObjs =  div.getElementsByTagName("input");
	  var sum = 0 ; 
	  for(var i=0;i<divAllObjs.length;i++){
		  var obj = divAllObjs[i] ;
		  if(obj.type!="radio") continue;
		  //var node = XPath.selectSingleNode(xmlObj,"xml/article/status/total[@statusId="+obj.value+"]");

		  var voteNum = jqXML.find("total[statusId='"+obj.value+"']").attr("value");
			if(voteNum === undefined){
				
			}else{
				sum = parseInt(voteNum) + sum;
			}

		  //var voteNum=0; 
		  //if(node!=null){
			//voteNum = node.getAttribute("value");
			//sum = parseInt(voteNum) + sum; 
		  //}
	  }
	  
	   

	  for(var i=0;i<divAllObjs.length;i++){
		  var obj = divAllObjs[i] ;
		  if(obj.type!="radio")continue;
		  var divXXs = div.getElementsByTagName("div");
		  for(var j=0;j<divXXs.length;j++){ 
			 var divXXLength =divXXs[j].id.indexOf("xx") ;
			 var divFace =divXXs[j].id.indexOf("face_title") ;
			 if(divFace>-1){
				var faceSum = divXXs[j].getElementsByTagName("span");
				if(faceSum!=null){
				     faceSum[0].innerHTML=sum+"";
					 //如果只展示结果，则不执行任何本地代码
					 if(justShowSum==1){
						return ; 
					 };
				}
			 }

		     if(divXXLength >-1){
				var idValue = divXXs[j].id.substring(divXXLength+2);
				if(idValue!=obj.value){continue;}
				divObj = divXXs[j];
				//var node = XPath.selectSingleNode(xmlObj,"xml/article/status/total[@statusId="+obj.value+"]");

				var voteNum = jqXML.find("total[statusId='"+obj.value+"']").attr("value");
				if(voteNum === undefined){
					divObj.style.height= "0px";
					continue ;
				}else{
					sum = parseInt(voteNum) + sum;
					var percent = voteNum*100/(sum*2)  ; 
					percent = percent + "px" ; 
					divObj.style.height= percent;
				}



				//if (node==null){
				//	 divObj.style.height= "0px";
				//	 continue ;
				//}
				//else{
				//     var voteNum = node==null? 0 : node.getAttribute("value");
				//	 var percent = voteNum*100/(sum*2)  ; 
				//	 percent = percent + "px" ; 
				//	 divObj.style.height= percent;	
				//}
			 }
		  }
		  
		  var spanObjs= div.getElementsByTagName("span");
		  for(var j=0;j<spanObjs.length;j++){
			   var spanLength =spanObjs[j].id.indexOf("span") ;
               if(spanLength>-1){
				   var idValue = spanObjs[j].id.substring(spanLength+4);
				   if(idValue!=obj.value){continue;}
				   var spanObj = spanObjs[j] ;
			       //var node = XPath.selectSingleNode(xmlObj,"xml/article/status/total[@statusId="+obj.value+"]");

				   var voteNum = jqXML.find("total[statusId='"+obj.value+"']").attr("value");
					if(voteNum === undefined){
						voteNum = 0;
					}

				   //var voteNum = node==null? 0:node.getAttribute("value");
				   spanObj.innerHTML=voteNum+"";
			   }
		  }
	  }
 }





/**
* 从文章模板获取数据
*/
function getValue(divId){
  var articleObj = document.getElementById("duowan.articleid");
  var channelObj = document.getElementById("duowan.channelid");
  var titleObj = document.getElementById("duowan.title");
  var urlObj = document.getElementById("duowan.url");
  var picurlObj = document.getElementById("duowan.picurl");
  var divObj =  document.getElementById(divId);
  var objs = divObj.getElementsByTagName("input");
  for(var j=0;j<objs.length;j++){
      if (objs[j].id=="articleId" && articleObj!=null)
      {
		  objs[j].value = articleObj.value;
      }

	  if (objs[j].id=="channelId" && channelObj!=null)
      {
		  objs[j].value = channelObj.value;
      }

	  if (objs[j].id=="title" && titleObj!=null)
      {
		  objs[j].value = titleObj.value;
      }

	  if (objs[j].id=="url" && urlObj!=null)
      {
		  objs[j].value = urlObj.value;
      }
          if (objs[j].id=="picurl" && picurlObj!=null)
      {
                  objs[j].value = picurlObj.value;
      }
  }
}

/**
* 从文章模板获取数据
*/
function getValue2(divId,flag){
  var articleObj = document.getElementById("duowan.articleid"+flag);
  var channelObj = document.getElementById("duowan.channelid"+flag);
  var titleObj = document.getElementById("duowan.title"+flag);
  var urlObj = document.getElementById("duowan.url"+flag);
  var picurlObj = document.getElementById("duowan.picurl"+flag);
  var divObj =  document.getElementById(divId);
  var objs = divObj.getElementsByTagName("input");
  for(var j=0;j<objs.length;j++){
      if (objs[j].id=="articleId" && articleObj!=null)
      {
		  objs[j].value = articleObj.value;
      }

	  if (objs[j].id=="channelId" && channelObj!=null)
      {
		  objs[j].value = channelObj.value;
      }

	  if (objs[j].id=="title" && titleObj!=null)
      {
		  objs[j].value = titleObj.value;
      }

	  if (objs[j].id=="url" && urlObj!=null)
      {
		  objs[j].value = urlObj.value;
      }
          if (objs[j].id=="picurl" && picurlObj!=null)
      {
                  objs[j].value = picurlObj.value;
      }
  }
}


function getStatistics(divId){
  var articleObj = document.getElementById("duowan.articleid");
  var channelObj = document.getElementById("duowan.channelid");
  var titleObj = document.getElementById("duowan.title");
  var urlObj = document.getElementById("duowan.url");
  var picurlObj = document.getElementById("duowan.picurl");
  var divObj =  document.getElementById(divId);
  var objs = divObj.getElementsByTagName("input");
  for(var j=0;j<objs.length;j++){
      if (objs[j].id=="articleId" && articleObj!=null)
      {
                  objs[j].value = articleObj.value;
      }

          if (objs[j].id=="title" && titleObj!=null)
      {
                  objs[j].value = titleObj.value;
      }

          if (objs[j].id=="url" && urlObj!=null)
      {
                  objs[j].value = urlObj.value;
      }
          if (objs[j].id=="picurl" && picurlObj!=null)
      {
                  objs[j].value = picurlObj.value;
      }
  }

}

/**获取排行榜名单**/
function getOrder(xml,articleId,orderId){
  var obj = XPath.parseXML(xml);
  var art_arr = obj.getElementsByTagName("article");
  var length = art_arr.length ; 
  var resultArr = new Array();
  var value=0 ; 

  for(var i=0;i<length;i++){
	resultArr[i]=art_arr[i].getAttribute("value");
	if(articleId==art_arr[i].getAttribute("id")){
		value = resultArr[i] ;
	}
  }
  resultArr.sort(DescSort);

  for(var i=0;i<length;i++){
	 if (value==resultArr[i])
	 {
		 var order = document.getElementById(orderId);
		 if(order!=null){
		  order.innerHTML = i+1 ;
		 }
	 }
  }
}

/** js 逆序排序 **/
function  DescSort(x, y) 
{
   var result = y  -  x ;
   return result; 
}