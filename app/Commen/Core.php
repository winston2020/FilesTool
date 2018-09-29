<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/27
 * Time: 18:05
 */

use \Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Input;
use Tmkook\Folder;




//-------------标签-------------//

function BC关键词($num = 0){ //随机获取一个BC关键词
    return getrandom(Master().'/BCkey',$num);
}

function 正常关键词($num = 0){ //随机获取一个正常关键词
    return getrandom(Master().'/zckey',$num);
}

function 句子(){ //随机获取一个句子
    return getrandom(Master().'/content');
}

function 标题($num = 0){ //随机从标题库中获取一个标题，用于配合句子标签使用
    return getrandom(Master().'/biaoti',$num);
}

function 整篇文章(){ //从文章库中随机获取一篇文章,将以文章标题标签获取的标题寻找文章
    return ;
}

function 文章标题(){ //从整篇文章中截取到标题，用于配合整篇文章标签使用
    return gettitle(Master().'/txt');
}

function 年月日(){ //年-月-日
    return date('Y-m-d');
}

function 年与日时分秒(){ //年-月-日 小时:分:秒
    return date('Y-m-d H:i:s');
}

function 随机时间(){        //获取三天内的随机时间,年-月-日 小时:分:秒
    $begintime = date('Y-m-d H:i:s' , strtotime("-3 day"));
    $begin = strtotime($begintime);
    $end = strtotime(date('Y-m-d H:i:s'));
    $timestamp = rand($begin, $end);
    return date("Y-m-d H:i:s", $timestamp);

}
function 随机日期(){        //获取三天内的随机时间,年-月-日
    $begintime = date('Y-m-d' , strtotime("-3 day"));
    $begin = strtotime($begintime);
    $end = strtotime(date('Y-m-d'));
    $timestamp = rand($begin, $end);
    return date("Y-m-d", $timestamp);

}

function 过去时间($time){     //传入的参数：整数，代表想获取多少天前的时间,年-月-日 小时:分:秒
    return date('Y-m-d H:i:s' , strtotime("-".$time." day"));

}

function random_url(){
    return geturl();
}





//---------标签结束----------//































function Master(){
    $url = Input::path();
    if (strpos($url, 'cluGG') !== false || strpos($url, 'clugg') !== false) {
        return 'GG';
    }//George
    elseif (strpos($url, 'cluWS') !== false || strpos($url, 'cluws') !== false) {
        return 'WS';
    }//Winston
    elseif (strpos($url, 'cluLK') !== false || strpos($url, 'clulk') !== false) {
        return 'LU';
    }//Luke
    elseif (strpos($url, 'cluAV') !== false || strpos($url, 'cluav') !== false) {
        return 'AV';
    }//Arvin
    elseif (strpos($url, 'cluAD') !== false || strpos($url, 'cluad') !== false) {
        return 'AD';
    }//Ada
    elseif (strpos($url, 'cluNI') !== false || strpos($url, 'cluni') !== false) {
        return 'NI';
    }//ZhaoSi
    elseif (strpos($url, 'cluPR') !== false || strpos($url, 'clupr') !== false) {
        return 'PR';
    }//Perry
    elseif (strpos($url, 'cluHD') !== false || strpos($url, 'cluhd') !== false) {
        return 'HD';
    }//Hedy
    elseif (strpos($url, 'cluBB') !== false || strpos($url, 'clubb') !== false) {
        return 'BB';
    }//Bieber
    return 'data';
}







function getrandom($path = '/txt',$num){
    $files = Storage::files($path); //获取路径下所有文件
    $rand = rand(0,count($files)-1);
    $file = @fopen($files[$rand],'r'); //以读取模式打开文件
    $array = array();
    if ($file){ //判断文件
        $i = 0;
        while (!feof($file)) { //判断是否到最后一行

            $line = fgets($file); //读取一行文本
            $array[$i] = $line; //将文件内容以数组形式存储

            $i++;
        }
        fclose($file);
        $rand = rand(0,count($array)-1);
        if($num != 0){
            setkeywords($path,$num,$array[$rand]);
            $line = getkeywords($path,$num);
            return $line;
        }

        return $array[$rand]; //返回一行

    }
//  若文件出错将不会返回任何,以免程序崩溃

}


function getkeywords($path,$num){
    $name = str_after($path,'/').$num;
    $file = @fopen('bf/'.$name.'.txt','r');
    if($file){
//        dd($file);
        $boo = fgets($file);
        @fclose($file);
        return $boo;
    }
}

function setkeywords($path,$num,$line){
    $name = str_after($path,'/').$num;
    $file = @fopen('bf/'.$name.'.txt','at+');
    if($file){
        @fwrite($file,$line);
        fclose($file);
    }
}





function geturl($path = 'url'){ //随机生成URL
    $url = getrandom($path);
    if(strpos($url,'{数字4}') !== false){
        return str_replace('{数字4}',rand(1000,9999),$url);
    }elseif(strpos($url,'{数字5}') !== false){
        return str_replace('{数字5}',rand(10000,99999),$url);
    }
    return $url;
}

function gettitle($path = 'body'){
    $files = Storage::files($path);
    $rand = rand(0,count($files)-1);
    $file = @fopen($files[$rand],'r');
    $array = array();
    if($file){
        $i = 0;
        while (!feof($file)){
            $line = fgets($file); //读取一行文本
            $array[$i] = $line; //将文件内容以数组形式存储

            $i++;
        }
        $num = rand(0,count($array)-1);
        $max = strpos($array[$num],'#');
        $bt = substr($array[$num],0,$max);
        setbodytitle($path,$rand,$bt);
        fclose($file);
        return $bt;

    }
}

function getallbody($path = 'body'){
    try{
       $files = Storage::files($path);
       $btbf = @fopen('bf/body.txt','r');
       if ($btbf){
           $line = fgets($btbf);
           $num = substr($line,0,1);
           $bt = substr($line,2);
           $file = @fopen($files[$num],'r');
           if ($file){
               while (!feof($file)){
                   $body = fgets($file);
                    if (strpos($body,$bt) !== false)
                        $body = substr($body,strripos($body, '#')+1);
                    return $body;
               }
           }
       }
        return getrandom($path); 
    }catch (Exception $e){
        return getrandom($path);
    }
}



function setbodytitle($path = 'body',$num = 1,$line = 'demo'){
    $name = str_after($path,'/');
    $file = @fopen('bf/'.$name.'.txt','at+');
    if($file){
        @fwrite($file,$num.'#'.$line);
        fclose($file);
    }
}




function clear(){  //清除备份文件
    $files = Storage::files('bf');
    Storage::delete($files);
}

