<?php

namespace App;
use function Couchbase\defaultDecoder;
use function foo\func;
use function GuzzleHttp\Psr7\str;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Storage;
use Tmkook\Folder;
use TYPO3\CMS\Core\Exception;
use Illuminate\Database\Eloquent\Model;

class Core extends Model
{
    //
    public static function Master()
    {
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


//----------------------标签---------------------------//



    static function keyword()      //bc关键词
    {
        return com(self::Master() . '/key');
    }

    static function 固定key()
    {      //与当前页面的KEY相同，使用此标签前提要使用过keyword标签
        return fixed(self::Master() . '/gdkey');
    }

    static function 正常key()      //正常关键词
    {
        return com(self::Master() . '/zckey');
    }

    static function title()
    {
        return com(self::Master() . '/bt');
    }

    static function content($url)
    {      //随机调用一段话   Ada新增
        return com(self::Master() . '/content');
    }

    static function body()
    {
        return com(self::Master() . '/txt');
    }

    static function diy()
    {
        return com(self::Master() . '/zdy');
    }

    static function random_url()
    {
        return com(self::Master() . '/url');
    }

    static function 图片地址()
    {
        return 'http://www.958shop.com/clu' . getimagename(self::Master() . '/imgurl');  //图片地址
    }

    static function url2()
    {     //二级目录url（例：/cotest/test1/）`Ada新增
        return com(self::Master() . '/url2');
    }

    static function url1()
    {     //一级目录url（例：/cotest/）`Ada新增
        return com(self::Master() . '/url1');
    }

    static function url22()
    {    //二级目录url（例：/cotest/test1.html）`Ada新增
        return com(self::Master() . '/url22');
    }

    static function deletespace($url)
    {

        return str_replace(array("\r\n", "\r", "\n", "\t"), "", $url);
    }

    static function 随机数字($num)
    {    //随机拿取100到传入最大数
        return rand(100, $num);
    }

    static function 随机数字3()
    {    //随机拿取100-999数字     Ada新增
        return rand(100, 999);
    }

    static function 随机数字2()
    {    //随机拿取1-200数字       Ada新增
        return rand(1, 200);
    }

    static function 随机数字1()
    {    //随机拿取该段数字      Ada新增
        return rand(1000000000, 9999999999);
    }

    static function 文章标题()
    {
        return com(self::Master() . '/head');
    }

    static function 固定标题()
    {       //固定标题调用的句子将与当前页面的title相同，使用此标签前提要使用过title标签
        return fixed(self::Master() . '/fixed');
    }

    static function 正常标题()
    {       //非菠菜标题
        return com(self::Master() . '/zcbt');
    }

    static function des()
    {      //description
        return com(self::Master() . '/des');
    }

    static function 网站名称()
    {
        return com(self::Master() . '/name');
    }

    static function 时间()
    {    //年-月-日
        return date('Y-m-d');
    }

    static function 当前时间()
    {     //年-月-日 小时:分:秒
        return date('Y-m-d H:i:s');
    }

    static function 当前月日()
    {     //月-日
        return date('m-d');
    }

    static function 随机时间()
    {        //获取三天内的随机时间,年-月-日 小时:分:秒
        $begintime = date('Y-m-d H:i:s', strtotime("-3 day"));
        $begin = strtotime($begintime);
        $end = strtotime(date('Y-m-d H:i:s'));
        $timestamp = rand($begin, $end);
        return date("Y-m-d H:i:s", $timestamp);

    }

    static function 随机日期()
    {        //获取三天内的随机时间,年-月-日 小时:分:秒
        $begintime = date('Y-m-d', strtotime("-3 day"));
        $begin = strtotime($begintime);
        $end = strtotime(date('Y-m-d'));
        $timestamp = rand($begin, $end);
        return date("Y-m-d", $timestamp);

    }

    static function 过去时间($time)
    {     //传入的参数：整数，代表想获取多少天前的时间,年-月-日 小时:分:秒
        return date('Y-m-d H:i:s', strtotime("-" . $time . " day"));

    }

    static function 重复标题()
    {      //重复上一次正常标题的内容
        return fixed(self::Master() . '/cfbt');
    }

    static function 内容标题()
    {      //将从采集到的文章文档中，截 取到内容的标题
        return bt(self::Master() . '/txt');
    }

    static function 相对内容()
    {        //将从采集到的文章文档中，截取到内容(次内容将会和内容标题对应，所以要用此标签前必须使用内容标题)
        return con(self::Master() . '/txt');
    }

    static function 标题($num)
    {       //使用发发：标题($url,数字1、2、3、4、5、)
        return biaotid(self::Master() . '/zcbt', $num);
    }

    static function 对应标题($num)
    {    ////使用发发：对应标题($url,数字1、2、3、4、5、)
        return fixed(self::Master() . '/cfbt', $num);
    }

    static function p_name()
    {         //随机获取人名    Ada新增
        return com(self::Master() . '/p_name');
    }

    static function city()
    {         //随机获取城市名    Ada新增
        return com(self::Master() . '/city');
    }

    static function cfcity()
    {         //重复上一次城市名    Ada新增
        return fixed(self::Master() . '/cfcity');
    }

    static function 网站名()
    {      //网站名    Ada新增
        return com(self::Master() . '/web_name');
    }

    static function 栏目()
    {      //栏目名    Ada新增
        return com(self::Master() . '/lanmu');
    }

    static function cfzc()
    {         //重复上一次增城市名    Ada新
        return fixed(self::Master() . '/cfzc');
    }



























//----------------------标签到此为止-----------------------------//



}



function com($path)
{

//    dd(asset('Storage/file.txt'));

    return Storage::get('preview.jpg');


    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path); //打开 folder
    $keydata = $folder->getFiles();
    $whitchfile = $keydata[rand(0, count($keydata) - 1)];

    $keyfile = file($whitchfile);

    foreach ($keyfile as $key => $item) {
        $keyword[$key] = $item;
    }
    $master = substr($path, 0, strpos($path, '/'));
    $count = count($keyword);
    $num = rand(0, $count - 1);
    if (strcmp($path, $master . '/bt') == 0) {
        $zcbt = @fopen($master . '/fixed/sen.txt', 'w');
        fwrite($zcbt, $keyword[$num]);
        fclose($zcbt);
    } elseif (strcmp($path, $master . '/key') == 0) {
        $gdkey = @fopen($master . '/gdkey/key.txt', 'w');
        fwrite($gdkey, $keyword[$num]);
        fclose($gdkey);
    } elseif (strcmp($path, $master . '/zcbt') == 0) {
        $gdkey = @fopen($master . '/cfbt/bt.txt', 'w');
        fwrite($gdkey, $keyword[$num]);
        fclose($gdkey);
    } elseif (strcmp($path, $master . '/city') == 0) {         //Ada新增
        $gdkey = @fopen($master . '/cfcity/cfcity.txt', 'w');
        fwrite($gdkey, $keyword[$num]);
        fclose($gdkey);
    } elseif (strcmp($path, $master . '/zckey') == 0) {
        $gdkey = @fopen($master . '/cfzc/cfzc.txt', 'w');
        fwrite($gdkey, $keyword[$num]);
        fclose($gdkey);
    }

    return deletespace($keyword[$num]);
}

function bt($path)
{
    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path); //打开 folder
    $keydata = $folder->getFiles();
    $whichfile = $keydata[rand(0, count($keydata) - 1)];
    $keyfile = file($whichfile);
    foreach ($keyfile as $key => $item) {
        $keyword[$key] = $item;
    }
    $master = substr($path, 0, strpos($path, '/'));
    $count = count($keyword);
    $num = rand(0, $count - 1);
    $btbf = @fopen($master . '/btbf/bt.txt', 'w');
    $line = $keyword[$num];
    $max = strpos($line, '#');
    $bt = substr($line, 0, $max);
//        $bt = strrchr($line,'#');
    fwrite($btbf, $bt);
    fclose($btbf);
    return $bt;
}

function con($path)
{
    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path); //打开 folder
    $keydata = $folder->getFiles();
    $body = '没有找到对应内容';
    $master = substr($path, 0, strpos($path, '/'));
    for ($i = 0; $i < count($keydata); $i++) {
//            dd(count($keydata));
        $whichfile = $keydata[$i];
//            print $i < count($keydata);
        $keyfile = file($whichfile);
        foreach ($keyfile as $key => $item) {
            $keyword[$key] = $item;
        }

        $folder->open(base_path() . '/public/' . $master . '/btbf'); //打开 folder
        $btbf = $folder->getFiles();
//            dd($btbf);
        $whitchfile = $btbf[0];
        $keyfile = file($whitchfile);
//            $body = $keyword;
//        dd($keyword);
        for ($j = 0; $j < count($keyword); $j++) {

            if (strpos($keyword[$j], $keyfile[0]) !== false) {
                $body = $keyword[$j];
//                    dd(111);
                break 2;
            }
        }
    }
//        dd($body);
    $num = strripos($body, '#');
    $neirong = substr($body, $num + 1);
    return $neirong;
}

function fixed($path, $num = 0)
{
    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path); //打开 folder
    $keydata = $folder->getFiles();
    if ($num != 0) {
        $whitchfile = $keydata[1];
        $num = $num - 1;
        $keyfile = file($whitchfile);
        return deletespace($keyfile[$num]);
    } else {
        $whitchfile = $keydata[0];
    }
    $keyfile = file($whitchfile);
    try {
        return deletespace($keyfile[$num]);
    } catch (\Exception $e) {
        if ($num == 0)
            return com(LookingForMaster('ccccc') . '/zcbt');
        dd('出错文件夹：' . $path);
    }
}

function biaotid($path, $num)
{
    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path); //打开 folder
    $keydata = $folder->getFiles();
    $whitchfile = $keydata[rand(0, count($keydata) - 1)];

    $keyfile = file($whitchfile);

    foreach ($keyfile as $key => $item) {
        $keyword[$key] = $item;
    }
    $master = substr($path, 0, strpos($path, '/'));
    $count = count($keyword);
    $rand = rand(0, $count - 1);
    if ($num == 1) {
        $gdkey = @fopen($master . '/cfbt/bt2.txt', 'w');
        fwrite($gdkey, $keyword[$rand]);
        fclose($gdkey);
    } else {
        $gdkey = @fopen($master . '/cfbt/bt2.txt', 'a');
        fwrite($gdkey, $keyword[$rand]);
        fclose($gdkey);
    }
    return deletespace($keyword[$rand]);
}


function getimagename($path)
{
    $folder = new Folder();
    $folder->open(base_path() . '/public/' . $path);
    $image = $folder->getFiles();
    $img = $image[rand(0, count($image) - 1)];
    $img = substr($img, strpos($img, 'public/'));
    $img = substr($img, strpos($img, '/'));
    return $img;
}






