<?php

namespace App\Http\Controllers;

use App\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class DataController extends Controller
{

    public function importdata()
    {
        set_time_limit(0);
        ini_set('memory_limit', '3280M');
        $file =  Storage::allfiles('data');
        unset($file[0]);
        foreach ($file as $key=>$item){
            $filename = str_before(str_after(str_after($item,'/'),'/'),'.txt');
            $filedata =  file_get_contents($item);
            if ($filedata){
                iconv('GBK', 'UTF-8', $filedata);
            }
            $data[$key]['title'] = $filename;
            $data[$key]['author'] = 'Winston';
            $data[$key]['keywords'] = implode(",",\App\Content::tobekeyword(str_limit(preg_replace('/^(&nbsp;|\s)*|(&nbsp;|\s)*$/', '', $filename)  ,60,''),rand(2,4)));
            $data[$key]['content'] =  iconv('GBK', 'UTF-8', $filedata);
            $data[$key]['created_at'] = date('Y-m-d H:i:s');
            $data[$key]['updated_at'] = date('Y-m-d H:i:s');
        }
        $bool = DB::table('data')->insert($data);
        if ($bool){
            echo 'success';
        }else{
            echo 'fail';
        }
    }

}
