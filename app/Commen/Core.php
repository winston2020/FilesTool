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




function Master()
{
    $url = Input::path();
    if (strpos($url, 'cluGG') !== false || strpos($url, 'clugg') !== false) {
        return 'George';
    }//George
    elseif (strpos($url, 'cluWS') !== false || strpos($url, 'cluws') !== false) {
        return 'Winston';
    }//Winston
    elseif (strpos($url, 'cluLK') !== false || strpos($url, 'clulk') !== false) {
        return 'LUKE';
    }//Luke
    elseif (strpos($url, 'cluAV') !== false || strpos($url, 'cluav') !== false) {
        return 'Arvin';
    }//Arvin
    elseif (strpos($url, 'cluAD') !== false || strpos($url, 'cluad') !== false) {
        return 'Ada';
    }//Ada
    elseif (strpos($url, 'cluNI') !== false || strpos($url, 'cluni') !== false) {
        return 'Nicholas';
    }//ZhaoSi
    elseif (strpos($url, 'cluPR') !== false || strpos($url, 'clupr') !== false) {
        return 'Perry';
    }//Perry
    elseif (strpos($url, 'cluHD') !== false || strpos($url, 'cluhd') !== false) {
        return 'Hedy';
    }//Hedy
    elseif (strpos($url, 'cluBB') !== false || strpos($url, 'clubb') !== false) {
        return 'Bieber';
    }//Bieber
    return 'data';
}


function getrandom($path = '/txt', $num = 0)
{
    $files = Storage::files($path); //获取路径下所有文件
    $rand = rand(0, count($files) - 1);
    $file = @fopen($files[$rand], 'r'); //以读取模式打开文件
    $array = array();
    if ($file) { //判断文件
        $i = 0;
        while (!feof($file)) { //判断是否到最后一行

            $line = fgets($file); //读取一行文本
            $array[$i] = $line; //将文件内容以数组形式存储

            $i++;
        }
        fclose($file);
        $rand = rand(0, count($array) - 1);
        if ($num != 0) {
            setkeywords($path, $num, $array[$rand]);
            $line = getkeywords($path, $num);
            return $line;
        }

        return deletespace($array[$rand]); //返回一行

    }
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
    $array = array();
    if ($file) {
        $i = 0;
        while (!feof($file)) {
            $line = fgets($file); //读取一行文本
            $array[$i] = $line; //将文件内容以数组形式存储

            $i++;
        }
        $num = rand(0, count($array) - 1);
        $max = strpos($array[$num], '#');
        $bt = substr($array[$num], 0, $max);
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
                        return $body;
                    }
                    $i++;
                }
            }
        }
        $body = getrandom($path);
        $num = strripos($body,'#');
        $body = substr($body,$num+1);
        return $body;
    } catch (Exception $e) {
        $body = getrandom($path);
        $num = strripos($body,'#');
        $body = substr($body,$num+1);
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
        $str = rand(1,3)<rand(2,4)?chr(65,90):chr(97,122);
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



