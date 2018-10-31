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



Route::get('/', 'WeController@no');
    //-------------LUKE---------------//
    Route::get('clu/LK','WeController@luke');
    Route::get('clu/LK{one}','WeController@luke');
    Route::get('clu/LK/{one}/','WeController@luke');
    Route::get('clu/LK/{one}/{two}','WeController@luke');
    Route::get('clu/LK/{one}/{two}/{three}','WeController@luke');
    Route::get('clu/LK{one}/{two}','WeController@luke');
    Route::get('clu/LK{one}/{two}/{three}','WeController@luke');
    Route::get('clu/LK{one}/{two}/{three}/{four}','WeController@luke');
    Route::get('clu/lk','WeController@luke');
    Route::get('clu/lk{one}','WeController@luke');
    Route::get('clu/lk/{one}/','WeController@luke');
    Route::get('clu/lk/{one}/{two}','WeController@luke');
    Route::get('clu/lk/{one}/{two}/{three}','WeController@luke');
    Route::get('clu/lk{one}/{two}','WeController@luke');
    Route::get('clu/lk{one}/{two}/{three}','WeController@luke');
    Route::get('clu/lk{one}/{two}/{three}/{four}','WeController@luke');

//-------------George---------------//
    Route::get('clu/GG','WeController@george');
    Route::get('clu/GG{one}','WeController@george');
    Route::get('clu/GG/{one}/','WeController@george');
    Route::get('clu/GG/{one}/{two}','WeController@george');
    Route::get('clu/GG/{one}/{two}/{three}','WeController@george');
    Route::get('clu/GG{one}/{two}','WeController@george');
    Route::get('clu/GG{one}/{two}/{three}','WeController@george');
    Route::get('clu/GG{one}/{two}/{three}/{four}','WeController@george');
    Route::get('clu/gg','WeController@george');
    Route::get('clu/gg{one}','WeController@george');
    Route::get('clu/gg/{one}/','WeController@george');
    Route::get('clu/gg/{one}/{two}','WeController@george');
    Route::get('clu/gg/{one}/{two}/{three}','WeController@george');
    Route::get('clu/gg{one}/{two}','WeController@george');
    Route::get('clu/gg{one}/{two}/{three}','WeController@george');
    Route::get('clu/gg{one}/{two}/{three}/{four}','WeController@george');

//-------------Arvin---------------//
    Route::get('clu/AV','WeController@arvin');
    Route::get('clu/AV{one}','WeController@arvin');
    Route::get('clu/AV/{one}/','WeController@arvin');
    Route::get('clu/AV/{one}/{two}','WeController@arvin');
    Route::get('clu/AV/{one}/{two}/{three}','WeController@arvin');
    Route::get('clu/AV{one}/{two}','WeController@arvin');
    Route::get('clu/AV{one}/{two}/{three}','WeController@arvin');
    Route::get('clu/AV{one}/{two}/{three}/{four}','WeController@arvin');
    Route::get('clu/av','WeController@arvin');
    Route::get('clu/av{one}','WeController@arvin');
    Route::get('clu/av/{one}/','WeController@arvin');
    Route::get('clu/av/{one}/{two}','WeController@arvin');
    Route::get('clu/av/{one}/{two}/{three}','WeController@arvin');
    Route::get('clu/av{one}/{two}','WeController@arvin');
    Route::get('clu/av{one}/{two}/{three}','WeController@arvin');
    Route::get('clu/av{one}/{two}/{three}/{four}','WeController@arvin');

//-------------Ada---------------//
    Route::get('clu/AD{one}','WeController@ada');
    Route::get('clu/AD','WeController@ada');
    Route::get('clu/AD/{one}/','WeController@ada');
    Route::get('clu/AD/{one}/{two}','WeController@ada');
    Route::get('clu/AD/{one}/{two}/{three}','WeController@ada');
    Route::get('clu/AD{one}/{two}','WeController@ada');
    Route::get('clu/AD{one}/{two}/{three}','WeController@ada');
    Route::get('clu/AD{one}/{two}/{three}/{four}','WeController@ada');
    Route::get('clu/ad{one}','WeController@ada');
    Route::get('clu/ad','WeController@ada');
    Route::get('clu/ad/{one}/','WeController@ada');
    Route::get('clu/ad/{one}/{two}','WeController@ada');
    Route::get('clu/ad/{one}/{two}/{three}','WeController@ada');
    Route::get('clu/ad{one}/{two}','WeController@ada');
    Route::get('clu/ad{one}/{two}/{three}','WeController@ada');
    Route::get('clu/ad{one}/{two}/{three}/{four}','WeController@ada');

//-------------Nicholas---------------//
    Route::get('clu/NI{one}','WeController@nicholas');
    Route::get('clu/NI','WeController@nicholas');
    Route::get('clu/NI/{one}/','WeController@nicholas');
    Route::get('clu/NI/{one}/{two}','WeController@nicholas');
    Route::get('clu/NI/{one}/{two}/{three}','WeController@nicholas');
    Route::get('clu/NI{one}/{two}','WeController@nicholas');
    Route::get('clu/NI{one}/{two}/{three}','WeController@nicholas');
    Route::get('clu/NI{one}/{two}/{three}/{four}','WeController@nicholas');
    Route::get('clu/ni{one}','WeController@nicholas');
    Route::get('clu/ni','WeController@nicholas');
    Route::get('clu/ni/{one}/','WeController@nicholas');
    Route::get('clu/ni/{one}/{two}','WeController@nicholas');
    Route::get('clu/ni/{one}/{two}/{three}','WeController@nicholas');
    Route::get('clu/ni{one}/{two}','WeController@nicholas');
    Route::get('clu/ni{one}/{two}/{three}','WeController@nicholas');
    Route::get('clu/ni{one}/{two}/{three}/{four}','WeController@nicholas');

//-------------Perry---------------//
    Route::get('clu/PR{one}','WeController@perry');
    Route::get('clu/PR','WeController@perry');
    Route::get('clu/PR/{one}/','WeController@perry');
    Route::get('clu/PR/{one}/{two}','WeController@perry');
    Route::get('clu/PR/{one}/{two}/{three}','WeController@perry');
    Route::get('clu/PR{one}/{two}','WeController@perry');
    Route::get('clu/PR{one}/{two}/{three}','WeController@perry');
    Route::get('clu/PR{one}/{two}/{three}/{four}','WeController@perry');
    Route::get('clu/pr{one}','WeController@perry');
    Route::get('clu/pr','WeController@perry');
    Route::get('clu/pr/{one}/','WeController@perry');
    Route::get('clu/pr/{one}/{two}','WeController@perry');
    Route::get('clu/pr/{one}/{two}/{three}','WeController@perry');
    Route::get('clu/pr{one}/{two}','WeController@perry');
    Route::get('clu/pr{one}/{two}/{three}','WeController@perry');
    Route::get('clu/pr{one}/{two}/{three}/{four}','WeController@perry');

//-------------Winston---------------//
    Route::get('clu/WS{one}','WeController@winston');
    Route::get('clu/WS','WeController@winston');
    Route::get('clu/WS/{one}/','WeController@winston');
    Route::get('clu/WS/{one}/{two}','WeController@winston');
    Route::get('clu/WS/{one}/{two}/{three}','WeController@winston');
    Route::get('clu/WS{one}/{two}','WeController@winston');
    Route::get('clu/WS{one}/{two}/{three}','WeController@winston');
    Route::get('clu/WS{one}/{two}/{three}/{four}','WeController@winston');
    Route::get('clu/ws{one}','WeController@winston');
    Route::get('clu/ws','WeController@winston');
    Route::get('clu/ws/{one}/','WeController@winston');
    Route::get('clu/ws/{one}/{two}','WeController@winston');
    Route::get('clu/ws/{one}/{two}/{three}','WeController@winston');
    Route::get('clu/ws{one}/{two}','WeController@winston');
    Route::get('clu/ws{one}/{two}/{three}','WeController@winston');
    Route::get('clu/ws{one}/{two}/{three}/{four}','WeController@winston');

//-------------Hedy---------------//
    Route::get('clu/HD{one}','WeController@hedy');
    Route::get('clu/HD','WeController@hedy');
    Route::get('clu/HD/{one}/','WeController@hedy');
    Route::get('clu/HD/{one}/{two}','WeController@hedy');
    Route::get('clu/HD/{one}/{two}/{three}','WeController@hedy');
    Route::get('clu/HD{one}/{two}','WeController@hedy');
    Route::get('clu/HD{one}/{two}/{three}','WeController@hedy');
    Route::get('clu/HD{one}/{two}/{three}/{four}','WeController@hedy');
    Route::get('clu/hd{one}','WeController@hedy');
    Route::get('clu/hd','WeController@hedy');
    Route::get('clu/hd/{one}/','WeController@hedy');
    Route::get('clu/hd/{one}/{two}','WeController@hedy');
    Route::get('clu/hd/{one}/{two}/{three}','WeController@hedy');
    Route::get('clu/hd{one}/{two}','WeController@hedy');
    Route::get('clu/hd{one}/{two}/{three}','WeController@hedy');
    Route::get('clu/hd{one}/{two}/{three}/{four}','WeController@hedy');

//-------------Bieber---------------//
    Route::get('clu/BB','WeController@bieber');
    Route::get('clu/BB{one}','WeController@bieber');
    Route::get('clu/BB/{one}/','WeController@bieber');
    Route::get('clu/BB/{one}/{two}','WeController@bieber');
    Route::get('clu/BB/{one}/{two}/{three}','WeController@bieber');
    Route::get('clu/BB{one}/{two}','WeController@bieber');
    Route::get('clu/BB{one}/{two}/{three}','WeController@bieber');
    Route::get('clu/BB{one}/{two}/{three}/{four}','WeController@bieber');
    Route::get('clu/bb','WeController@bieber');
    Route::get('clu/bb/{one}/','WeController@bieber');
    Route::get('clu/bb/{one}/{two}','WeController@bieber');
    Route::get('clu/bb/{one}/{two}/{three}','WeController@bieber');
    Route::get('clu/bb{one}','WeController@bieber');
    Route::get('clu/bb{one}/{two}','WeController@bieber');
    Route::get('clu/bb{one}/{two}/{three}','WeController@bieber');
    Route::get('clu/bb{one}/{two}/{three}/{four}','WeController@bieber');



//-------------公共页面---------------//
    Route::get('/{one}', 'WeController@index');
    Route::get('/{one}/', 'WeController@index');
    Route::get('/{one}/{two}', 'WeController@index');
    Route::get('/{one}/{two}/{three}', 'WeController@index');
    Route::get('/{one}/{two}/{three}/{four}', 'WeController@index');
