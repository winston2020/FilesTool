<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//dd(Illuminate\Support\Facades\Input::path());

Route::get('/', 'WeController@no');
function checkrobot($useragent=''){
    static $kw_spiders = array('bot', 'crawl', 'spider' ,'slurp', 'sohu-search', 'lycos', 'robozilla');
    static $kw_browsers = array('msie', 'netscape', 'opera', 'konqueror', 'mozilla');

    $useragent = strtolower(empty($useragent) ? $_SERVER['HTTP_USER_AGENT'] : $useragent);
    if(strpos($useragent, 'http://') === false && dstrpos($useragent, $kw_browsers)) return false;
    if(dstrpos($useragent, $kw_spiders)) return true;
    return false;
}
function dstrpos($string, $arr, $returnvalue = false) {
    if(empty($string)) return false;
    foreach((array)$arr as $v) {
        if(strpos($string, $v) !== false) {
            $return = $returnvalue ? $v : true;
            return $return;
        }
    }
    return false;
}


function pd(){
    try{
        $RUrl = $_SERVER ['HTTP_REFERER'];
    }catch (Exception $exception){
        $RUrl = null;
    }
    if(checkrobot()){
        return true;
    }else{
        if (! empty ( $RUrl )) {
            $UArray = parse_url($RUrl);
            $UHost = $UArray ['host'];
            switch ($UHost) {
                case 'www.baidu.com' :
                    return true;
                    break;
                case 'www.google.com' :
                    return true;
                    break;
                case 'www.sogou.com' :
                    return true;
                    break;
                case 'm.sm.cn':
                    return true;
                    break;
                case 'm.baidu.com':
                    return true;
                    break;
                default :
                    return false;
                    break;
            }
        }
    }

}




$pand = pd();




if($pand == true){

    //-------------LUKE---------------//
    Route::get('clu/LK','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK{one}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK/{one}/','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK/{one}/{two}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK/{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK{one}/{two}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/LK{one}/{two}/{three}/{four}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk{one}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk/{one}/','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk/{one}/{two}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk/{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk{one}/{two}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');
    Route::get('clu/lk{one}/{two}/{three}/{four}','WeController@luke')->middleware('cache.response:525600');

//-------------George---------------//
    Route::get('clu/GG','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG{one}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG/{one}/','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG/{one}/{two}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG/{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG{one}/{two}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/GG{one}/{two}/{three}/{four}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg{one}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg/{one}/','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg/{one}/{two}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg/{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg{one}/{two}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');
    Route::get('clu/gg{one}/{two}/{three}/{four}','WeController@george')->middleware('cache.response:525600');

//-------------Arvin---------------//
    Route::get('clu/AV','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV{one}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV/{one}/','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV/{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV/{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/AV{one}/{two}/{three}/{four}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av{one}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av/{one}/','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av/{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av/{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');
    Route::get('clu/av{one}/{two}/{three}/{four}','WeController@arvin')->middleware('cache.response:525600');

//-------------Ada---------------//
    Route::get('clu/AD{one}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD/{one}/','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD/{one}/{two}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD/{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD{one}/{two}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/AD{one}/{two}/{three}/{four}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad{one}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad/{one}/','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad/{one}/{two}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad/{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad{one}/{two}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');
    Route::get('clu/ad{one}/{two}/{three}/{four}','WeController@ada')->middleware('cache.response:525600');

//-------------Nicholas---------------//
    Route::get('clu/NI{one}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI/{one}/','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI/{one}/{two}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI/{one}/{two}/{three}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI{one}/{two}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI{one}/{two}/{three}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/NI{one}/{two}/{three}/{four}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni{one}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni/{one}/','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni/{one}/{two}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni/{one}/{two}/{three}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni{one}/{two}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni{one}/{two}/{three}','WeController@nicholas')->middleware('cache.response:525600');
    Route::get('clu/ni{one}/{two}/{three}/{four}','WeController@nicholas')->middleware('cache.response:525600');

//-------------Perry---------------//
    Route::get('clu/PR{one}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR/{one}/','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR/{one}/{two}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR/{one}/{two}/{three}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR{one}/{two}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR{one}/{two}/{three}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/PR{one}/{two}/{three}/{four}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr{one}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr/{one}/','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr/{one}/{two}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr/{one}/{two}/{three}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr{one}/{two}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr{one}/{two}/{three}','WeController@perry')->middleware('cache.response:525600');
    Route::get('clu/pr{one}/{two}/{three}/{four}','WeController@perry')->middleware('cache.response:525600');

//-------------Winston---------------//
    Route::get('clu/WS{one}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS/{one}/','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS/{one}/{two}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS/{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS{one}/{two}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/WS{one}/{two}/{three}/{four}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws{one}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws/{one}/','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws/{one}/{two}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws/{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws{one}/{two}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');
    Route::get('clu/ws{one}/{two}/{three}/{four}','WeController@winston')->middleware('cache.response:525600');

//-------------Hedy---------------//
    Route::get('clu/HD{one}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD/{one}/','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD/{one}/{two}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD/{one}/{two}/{three}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD{one}/{two}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD{one}/{two}/{three}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/HD{one}/{two}/{three}/{four}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd{one}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd/{one}/','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd/{one}/{two}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd/{one}/{two}/{three}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd{one}/{two}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd{one}/{two}/{three}','WeController@hedy')->middleware('cache.response:525600');
    Route::get('clu/hd{one}/{two}/{three}/{four}','WeController@hedy')->middleware('cache.response:525600');

//-------------Bieber---------------//
    Route::get('clu/BB','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB{one}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB/{one}/','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB/{one}/{two}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB/{one}/{two}/{three}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB{one}/{two}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB{one}/{two}/{three}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/BB{one}/{two}/{three}/{four}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb/{one}/','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb/{one}/{two}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb/{one}/{two}/{three}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb{one}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb{one}/{two}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb{one}/{two}/{three}','WeController@bieber')->middleware('cache.response:525600');
    Route::get('clu/bb{one}/{two}/{three}/{four}','WeController@bieber')->middleware('cache.response:525600');



//-------------公共页面---------------//
    Route::get('/{one}', 'WeController@index')->middleware('cache.response:525600');
    Route::get('/{one}/', 'WeController@index')->middleware('cache.response:525600');
    Route::get('/{one}/{two}', 'WeController@index')->middleware('cache.response:525600');
    Route::get('/{one}/{two}/{three}', 'WeController@index')->middleware('cache.response:525600');
    Route::get('/{one}/{two}/{three}/{four}', 'WeController@index')->middleware('cache.response:525600');

}else{


    Route::get('/{one}', 'WeController@no');
    Route::get('/{one}/', 'WeController@no');
    Route::get('/{one}/{two}', 'WeController@no');
    Route::get('/{one}/{two}/{three}', 'WeController@no');
    Route::get('/{one}/{two}/{three}/{four}', 'WeController@no');
}