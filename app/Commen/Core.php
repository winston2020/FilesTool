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

use function Couchbase\defaultDecoder;
use function foo\func;
use function GuzzleHttp\Psr7\str;




function Master()
{

    $url = Input::path();
    if (strpos($url, 'clu/GG') !== false || strpos($url, 'clu/gg') !== false) {
        return 'George';
    }//George
    elseif (strpos($url, 'clu/WS') !== false || strpos($url, 'clu/ws') !== false) {
        return 'Winston';
    }//Winston
    elseif (strpos($url, 'clu/LK') !== false || strpos($url, 'clu/lk') !== false) {
        return 'LUKE';
    }//Luke
    elseif (strpos($url, 'clu/AV') !== false || strpos($url, 'clu/av') !== false) {
        return 'Arvin';
    }//Arvin
    elseif (strpos($url, 'clu/AD') !== false || strpos($url, 'clu/ad') !== false) {
        return 'Ada';
    }//Ada
    elseif (strpos($url, 'clu/NI') !== false || strpos($url, 'clu/ni') !== false) {
        return 'Nicholas';
    }//ZhaoSi
    elseif (strpos($url, 'clu/PR') !== false || strpos($url, 'clu/pr') !== false) {
        return 'Perry';
    }//Perry
    elseif (strpos($url, 'clu/HD') !== false || strpos($url, 'clu/hd') !== false) {
        return 'Hedy';
    }//Hedy
    elseif (strpos($url, 'clu/BB') !== false || strpos($url, 'clu/bb') !== false) {
        return 'Bieber';
    }//Bieber
    return 'data';
}


function getrandom($path = '/txt', $num = 0)
{
    $files = Storage::files($path); //获取路径下所有文件
    dd($files);
    $rand = rand(0, count($files) - 1);
    $file = @fopen($files[$rand], 'r'); //以读取模式打开文件
    $rand = rand(0,count(file($files[$rand]))-1);

    if ($file) { //判断文件
        $i = 0;

        while (!feof($file)) { //判断是否到最后一行

            if ($rand == $i){
                $line = fgets($file);
                break;
            }
            $i++;
        }
        fclose($file);
        if ($num != 0) {
            setkeywords($path, $num, $line);
            $line = getkeywords($path, $num);
            return $line;
        }
        @fclose($file);
        return deletespace($line); //返回一行

    }
    @fclose($file);
//  若文件出错将不会返回任何,以免程序崩溃

}


function getkeywords($path, $num)
{
    $name = str_after($path, '/') . $num;
    $file = @fopen(Master() . '/bf/' . $name . '.txt', 'r');
    if ($file) {
//        dd($file);
        $boo = fgets($file);
        @fclose($file);
        return deletespace($boo);
    }
}

function setkeywords($path, $num, $line)
{
    $name = str_after($path, '/') . $num;
    $file = @fopen(Master() . '/bf/' . $name . '.txt', 'at+');
    if ($file) {
        @fwrite($file, $line);
        fclose($file);
    }
}




function gettitle($path = 'body')
{
    $files = Storage::files($path);
    $rand = rand(0, count($files) - 1);
    $file = @fopen($files[$rand], 'r');
    $rand = rand(0,count(file($files[$rand]))-1);
    if ($file) {
        $i = 0;
        while (!feof($file)) {
            if ($rand == $i){
                $line = fgets($file);
                break;
            }
            $i++;
        }
        $max = strpos($line, '#');
        $bt = substr($line, 0, $max);
        setbodytitle($path, $rand, $bt);
        fclose($file);
        return $bt;

    }
}

function getallbody($path = 'body')
{
    try {
        $files = Storage::files($path);
        $btbf = @fopen(Master() . '/bf/txt.txt', 'r');
        if ($btbf) {
            $line = fgets($btbf);
            $num = substr($line, 0, 1);
            $bt = substr($line, 2);
//           dd($bt);
            $file = @fopen($files[$num], 'r');
            if ($file) {
                $i = 0;
                while (!feof($file)) {
                    $body = fgets($file);

                    if (strpos($body, $bt) !== false) {
                        $num = strripos($body,'#');
                        $body = substr($body,$num+1);
                        fclose($file);
                        return $body;
                    }
                    $i++;
                }
            }
        }
        $body = getrandom($path);
        $num = strripos($body,'#');
        $body = substr($body,$num+1);
        @fclose($file);
        return $body;
    } catch (Exception $e) {
        $body = getrandom($path);
        $num = strripos($body,'#');
        $body = substr($body,$num+1);
        @fclose($file);
        return $body;
    }
}


function setbodytitle($path = 'body', $num = 1, $line = 'demo')
{
    $name = str_after($path, '/');
    $file = @fopen(Master() . '/bf/' . $name . '.txt', 'at+');
    if ($file) {
        @fwrite($file, $num . '#' . $line);
        fclose($file);
    }
}

function getimg($path = 'img')
{
    $files = Storage::files($path);
    if (!count($files) <= 0) {
        $rand = rand(0, count($files) - 1);
        $file = Storage::url($files[$rand]);
        dd($file);
        $file = str_replace('/storage', '', $file);
        return $file;
    }
}

function geturl($path = 'url')
{ //随机生成URL
    $url = getrandom($path);
    if (strpos($url, '{数字4}') !== false) {
        $url = str_replace('{数字4}',rand(1000,9999),$url);
    }
    if (strpos($url, '{数字5}') !== false) {
        $url = str_replace('{数字5}', rand(10000, 99999), $url);
    }
    if (strpos($url,'字母') !== false){
        $url = zimu($url);
    }
    return $url;
}

function zimu($url)
{
    $need = array('{字母1}', '{字母2}', '{字母3}', '{字母4}', '{字母5}', '{字母6}', '{字母7}');
    $place = array(givezimu(1), givezimu(2), givezimu(3), givezimu(4), givezimu(5), givezimu(6), givezimu(7));
    return str_replace($need,$place,$url);
}

function givezimu($num)
{
    $zimu = '';

    for ($i = 0; $i <= $num; $i++) {
        $one = rand(65,90);
        $two = rand(97,122);
        $str = rand(1,3)<rand(2,4)?chr($one):chr($two);
        $zimu = $zimu . $str;
    }
    return $zimu;
}

function clear()
{  //清除备份文件
    $files = Storage::files(Master() . '/bf');
    Storage::delete($files);
}

function unicode_encode($str, $encoding = 'utf-8', $prefix = '&#', $postfix = ';') {
    $str = iconv($encoding, 'UCS-2', $str);
    $arrstr = str_split($str, 2);
    $unistr = '';
    for($i = 0, $len = count($arrstr); $i < $len; $i++) {
        $dec = hexdec(bin2hex($arrstr[$i]));
        $unistr .= $prefix . $dec . $postfix;
    }
    return $unistr;
}

function deletespace($str)
{

    return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $str);
}



function 开启缓存($url){
    $path = base_path();
    $cachepath = $path.'/public/cache/'.LookingForMaster($url).'/';
    $num = strripos($url,'/');

//        dd($before);
    $before = str_before($url,'/');
    if(substr_count($url,'/')>=1){
        $before = substr($url,0,$num);
        if(strpos($url,'html')==false){
            $url = $url.'.html';
        }
    }

    if(strpos($before,'.html')!==false){
        $before = str_before($before,'.');
    }
    sd($before,$url);

    $address = $cachepath.$url;
    if(strpos($url,'index.html')!==false){
        $address = $cachepath.$before;
    }elseif (strpos($url,'.html')!==false){
        if (strpos($url,'/')==false){
            $url = str_before($url,'.').'/'.$url;
            $address = $cachepath.$before;
        }else{
            $address = $cachepath.$before;
            if (strpos($address,'.html')!==false){
                $address = $cachepath.str_before($before,'.');
            }
        }
    }else{
        $address = $cachepath.$before;
    }
    if(strcmp($url,'/')==0){
        if(file_exists($cachepath.'/index/index.html')){
            include $cachepath.'/index/index.html';
        }

    }else{
        if(file_exists($cachepath.$url) && strpos($url,'/')!==false){
//                dd($address);
            //有缓存文件直接调用
            $folder = new Folder();

            if (不是标签($address)==false){
                $folder->open( $address); //打开 folder
                if (strpos($url,'index.html')!==false){
                    include $cachepath.$url;
                }elseif (strpos($url,'.html')!==false){
                    if (strpos($url,'/')){
//                                dd($cachepath.$url);
                        include $cachepath.$url;
                    }else{
                        include $address.'/'.$url;
                    }

                }elseif (strpos($url,'/')!==false){
                    include $cachepath.$url.'.html';
                }else{
                    include $cachepath.$url.'/'.$before.'.html';

                }
                //获取当前时间戳
                exit;
            }
        }elseif (strpos($url,'/')==false && file_exists($cachepath.$url)){
            if(不是标签2($address)==false){
//                    dd(1);
                include $cachepath.$url.'/'.$before.'.html';
                exit;

            }

        }
    }
    ob_start(); //开启缓存
}


function 不是标签($path){//判断文件夹是否为空
//        dd($path);
    $i=0;
    if($handle=@opendir($path)) {
        while(false!==($file=readdir($handle))){//读取文件夹里的文件

            if($file!="."&&$file!="..") {

                $file_array[$i]["filename"]=$file;
//                    dd($file);
                if ($file=='index.html'){
                    $i--;
                }
                $i++;

            }
        }
        closedir($handle);//关闭文件夹

    }


    if($i==0){
        return true;//空
    }else{
        return false;//no空
    }
}

function 生成缓存($url){
    //在文件代码末尾获取上面生成的缓存内容
    $path = base_path();
    $cachepath = $path.'/public/cache/'.LookingForMaster($url).'/';
    $content = ob_get_contents();
    //写入到缓存内容到指定的文件夹
    $before = str_before($url,'/');
    $address = $cachepath.str_before($before,'.');
    if(strpos($url,'index.html')!==false){
        $fp = fopen($cachepath.$url,'w');

    }elseif (strpos($url,'.html')!==false){
        if (strpos($url,'/')){
            $fp = fopen($cachepath.$url,'w');
        }else{
            $fp = fopen($address.'/'.$url,'w');
        }

    }elseif (strpos($url,'/')!==false){
        $fp = fopen($cachepath.$url.'.html','w');
    }else{
        $fp = fopen($cachepath.$url.'/'.$url.'.html','w');
    }

    fwrite($fp,$content);
    fclose($fp);
    ob_flush(); //从PHP内存中释放出来缓存（取出数据）
    flush(); //把释放的数据发送到浏览器显示
    ob_end_clean(); //清空缓冲区的内容并关闭这个缓冲区

}

function mkdirs($dir, $mode = 0777)

{

    if (is_dir($dir) || @mkdir($dir, $mode)) return TRUE;

    if (!mkdirs(dirname($dir), $mode)) return FALSE;

    return @mkdir($dir, $mode);

}
function sd($no='1/2/3/4',$url)
{
    mkdirs(base_path().'/public/cache/'.LookingForMaster($url).'/'.$no);
}

function LookingForMaster($url){
//    dd($url);
    if(strpos($url,'cluGG')!==false || strpos($url,'clugg')!==false){return 'GG';}//George
    elseif (strpos($url,'cluWS')!==false || strpos($url,'cluws')!==false){return 'WS';}//Winston
    elseif (strpos($url,'cluLU')!==false || strpos($url,'clulu')!==false || strpos($url,'clulk')!==false){return 'LU';}//Luke
    elseif (strpos($url,'cluAV')!==false || strpos($url,'cluav')!==false){return 'AV';}//Arvin
    elseif (strpos($url,'cluAD')!==false || strpos($url,'cluad')!==false){return 'AD';}//Ada
    elseif (strpos($url,'cluNI')!==false || strpos($url,'cluni')!==false){return 'NI';}//ZhaoSi
    elseif (strpos($url,'cluPR')!==false || strpos($url,'clupr')!==false){return 'PR';}//Perry
    elseif (strpos($url,'cluHD')!==false || strpos($url,'cluhd')!==false){return 'HD';}//Hedy
    elseif (strpos($url,'cluBB')!==false || strpos($url,'clubb')!==false){return 'BB';}//Bieber
    return 'data';
}


function 不是标签2($path){//判断文件夹是否为空
    //            dd(trim(strrchr($path, '/'),'/'));
    $str = trim(strrchr($path, '/'),'/');
    $i=1;
    if($handle=@opendir($path)) {
        while(false!==($file=readdir($handle))){//读取文件夹里的文件

            if($file!="."&&$file!="..") {

                $file_array[$i]["filename"]=$file;
                //                    dd($file);
                if ($file==$str.'.html'){
                    $i=0;
                }


            }
        }
        closedir($handle);//关闭文件夹

    }


    if($i==1){
        return true;//空
    }else{
        return false;//no空
    }
}


