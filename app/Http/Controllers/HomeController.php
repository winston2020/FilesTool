<?php

namespace App\Http\Controllers;

use App\Data;
use App\Keywords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    function object_to_array($obj){
        $_arr=is_object($obj)?get_object_vars($obj):$obj;
        foreach($_arr as $key=>$val){
            $val=(is_array($val))||is_object($val)?self::object_to_array($val):$val;
            $arr[$key]=$val;
        }
        return $arr;
    }

    public function index()
    {
       $a = Storage::directories();
        dd($a);
        $datacount = DB::select('select count(1) from m_data');
        $a = self::object_to_array($datacount[0]);
        $count = $a['count(1)'];
        $id = rand(0,$count);
        $data = Data::where('id','>',$id)->limit(200)->get()->toArray();
        $count = DB::select('select count(1) from m_keyword');
        $b= self::object_to_array($count[0]);
        $keywordcount = $b['count(1)'];
        $keywordid = rand(0,$keywordcount);
        $keyword = Data::where('id','>',$keywordid)->limit(1)->get()->toArray();
        return view('index')->with(['data'=>$data,'keyword'=>$keyword]);
    }

}
