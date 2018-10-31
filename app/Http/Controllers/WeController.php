<?php

namespace App\Http\Controllers;

use Cache;
use Illuminate\Http\Request;

class WeController extends Controller
{
    //
    function index(){
        return view('index');
    }

    function luke(){

        if (rand(0,1) ==1)
            return view('LU/m/index');
        return view('LU/index');
    }

    function george(){
        return view('GG/index');
    }

    function arvin(){
        return view('AV/index');
    }

    function ada(){

        return view('AD/index');
    }

    function nicholas(){
        return view('NI/index');
    }

    function perry(){
        return view('PR/index');
    }

    function winston(){
        return view('ws/index');
    }

    function hedy(){
        return view('HD/index');
    }

    function bieber(){
        return view('BB/index');
    }

    function  onlygg(){
        $path = $_SERVER['HTTP_HOST'];
        $url = $_SERVER['REQUEST_URI'];
        $md5 = Cache::get(md5('http://'.$path.$url));
        $content =$md5['content'];
        $num = strpos($content , '</head>');
        $new = substr_replace($content,"    <script charset=\"utf-8\" src=\"http://runzz.cn/George/YOKA/js/ad.js\" rel=\"nofollow\"></script>",$num,0);
        return $new;
    }

    function no(){
        return view('404');
    }
}
