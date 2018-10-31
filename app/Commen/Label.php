<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/10/1
 * Time: 15:52
 */



//-------------标签-------------//

function BC关键词($num = 0)
{ //随机获取一个BC关键词
    return unicode_encode(getrandom(Master() . '/BCkey', $num));
}

function 正常关键词($num = 0)
{ //随机获取一个正常关键词
    return getrandom(Master() . '/zckey', $num);
}

function 句子()
{ //随机获取一个句子
    return getrandom(Master() . '/content');
}

function 标题($num = 0)
{ //随机从标题库中获取一个标题，用于配合句子标签使用
    return getrandom(Master() . '/biaoti', $num);
}

function 人名($num = 0)
{ //随机获取一个人名
    return getrandom(Master() . '/p_name', $num);
}

function 城市名($num = 0)
{ //随机获取一个城市名
    return getrandom(Master() . '/city_name', $num);
}

function 网站名($num = 0)
{ //随机获取一个网站名
    return getrandom(Master() . '/web_name', $num);
}

function 栏目($num = 0)
{ //随机获取一个栏目
    return getrandom(Master() . '/lanmu', $num);
}

function 整篇文章()
{ //从文章库中随机获取一篇文章,将以文章标题标签获取的标题寻找文章
    return getallbody(Master() . '/txt');
}

function 文章标题()
{ //从整篇文章中截取到标题，用于配合整篇文章标签使用
    return gettitle(Master() . '/txt');
}

function 年月日()
{ //年-月-日
    return date('Y-m-d');
}

function 年月日时分秒()
{ //年-月-日 小时:分:秒
    return date('Y年m月d日 H:i:s');
}

function 年月日时分()
{ //年-月-日 小时:分:秒
    return date('Y年m月d日 H:i');
}

function 随机时间()
{        //获取三天内的随机时间,年-月-日 小时:分:秒
    $begintime = date('Y-m-d H:i:s', strtotime("-3 day"));
    $begin = strtotime($begintime);
    $end = strtotime(date('Y-m-d H:i:s'));
    $timestamp = rand($begin, $end);
    return date("Y-m-d H:i:s", $timestamp);

}

function 随机日期()
{        //获取三天内的随机时间,年-月-日
    $begintime = date('Y-m-d', strtotime("-3 day"));
    $begin = strtotime($begintime);
    $end = strtotime(date('Y-m-d'));
    $timestamp = rand($begin, $end);
    return date("Y-m-d", $timestamp);

}

function 过去时间($time)
{     //传入的参数：整数，代表想获取多少天前的时间,年-月-日 小时:分:秒
    return date('Y-m-d H:i:s', strtotime("-" . $time . " day"));

}

function random_url()
{      //{数字5}代表随机5位数字，例如：/AD2yp/{数字5}/{数字4}
    return geturl(Master() . '/url');
}

function 图片()
{
    return 'http://runzz.cn'.   getimg(Master() . '/img');
}

function url1()
{
    return geturl(Master() . '/url1');
}

function url2()
{
    return geturl(Master() . '/url2');
}

function 随机1($num = 0)
{ //随机获取一条数据，在文件放你想要的数据
    return getrandom(Master() . '/random1', $num);
}

function 随机2($num = 0)
{ //随机获取一条数据，在文件放你想要的数据
    return getrandom(Master() . '/random2', $num);
}


//---------标签结束----------//