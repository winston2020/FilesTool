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



Route::get('/', 'WeController@index');


Route::get('cluggvp/2018092716wh.html','WeController@onlygg');
Route::get('cluggby/20180927oxqa.html','WeController@onlygg');
Route::get('cluggu6/20180927qpde.html','WeController@onlygg');
Route::get('cluggjq/20180927ocm1.html','WeController@onlygg');
Route::get('cluggvp/20180927eowl.html','WeController@onlygg');
Route::get('cluggwr/20180927ro0c.html','WeController@onlygg');

//-------------LUKE---------------//
Route::get('cluLK','WeController@luke')->middleware('cache.response:525600');
Route::get('cluLK{one}','WeController@luke')->middleware('cache.response:525600');
Route::get('cluLK{one}/{two}','WeController@luke')->middleware('cache.response:525600');
Route::get('cluLK{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');
Route::get('clulk','WeController@luke')->middleware('cache.response:525600');
Route::get('clulk{one}','WeController@luke')->middleware('cache.response:525600');
Route::get('clulk{one}/{two}','WeController@luke')->middleware('cache.response:525600');
Route::get('clulk{one}/{two}/{three}','WeController@luke')->middleware('cache.response:525600');

//-------------George---------------//
Route::get('cluGG','WeController@george')->middleware('cache.response:525600');
Route::get('cluGG{one}','WeController@george')->middleware('cache.response:525600');
Route::get('cluGG{one}/{two}','WeController@george')->middleware('cache.response:525600');
Route::get('cluGG{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');
Route::get('clugg','WeController@george')->middleware('cache.response:525600');
Route::get('clugg{one}','WeController@george')->middleware('cache.response:525600');
Route::get('clugg{one}/{two}','WeController@george')->middleware('cache.response:525600');
Route::get('clugg{one}/{two}/{three}','WeController@george')->middleware('cache.response:525600');

//-------------Arvin---------------//
Route::get('cluAV','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluAV{one}','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluAV{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluAV{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluav','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluav{one}','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluav{one}/{two}','WeController@arvin')->middleware('cache.response:525600');
Route::get('cluav{one}/{two}/{three}','WeController@arvin')->middleware('cache.response:525600');

//-------------Ada---------------//
Route::get('cluAD{one}','WeController@ada')->middleware('cache.response:525600');
Route::get('cluAD','WeController@ada')->middleware('cache.response:525600');
Route::get('cluAD{one}/{two}','WeController@ada')->middleware('cache.response:525600');
Route::get('cluAD{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');
Route::get('cluad{one}','WeController@ada')->middleware('cache.response:525600');
Route::get('cluad','WeController@ada')->middleware('cache.response:525600');
Route::get('cluad{one}/{two}','WeController@ada')->middleware('cache.response:525600');
Route::get('cluad{one}/{two}/{three}','WeController@ada')->middleware('cache.response:525600');

//-------------Nicholas---------------//
Route::get('cluNI{one}','WeController@nicholas');
Route::get('cluNI','WeController@nicholas');
Route::get('cluNI{one}/{two}','WeController@nicholas');
Route::get('cluNI{one}/{two}/{three}','WeController@nicholas');
Route::get('cluni{one}','WeController@nicholas');
Route::get('cluni','WeController@nicholas');
Route::get('cluni{one}/{two}','WeController@nicholas');
Route::get('cluni{one}/{two}/{three}','WeController@nicholas');

//-------------Perry---------------//
Route::get('cluPR{one}','WeController@perry');
Route::get('cluPR','WeController@perry');
Route::get('cluPR{one}/{two}','WeController@perry');
Route::get('cluPR{one}/{two}/{three}','WeController@perry');
Route::get('clupr{one}','WeController@perry');
Route::get('clupr','WeController@perry');
Route::get('clupr{one}/{two}','WeController@perry');
Route::get('clupr{one}/{two}/{three}','WeController@perry');

//-------------Winston---------------//
Route::get('cluWS{one}','WeController@winston')->middleware('cache.response:525600');
Route::get('cluWS','WeController@winston')->middleware('cache.response:525600');
Route::get('cluWS{one}/{two}','WeController@winston')->middleware('cache.response:525600');
Route::get('cluWS{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');
Route::get('cluws{one}','WeController@winston')->middleware('cache.response:525600');
Route::get('cluws','WeController@winston')->middleware('cache.response:525600');
Route::get('cluws{one}/{two}','WeController@winston')->middleware('cache.response:525600');
Route::get('cluws{one}/{two}/{three}','WeController@winston')->middleware('cache.response:525600');

//-------------Hedy---------------//
Route::get('cluHD{one}','WeController@hedy');
Route::get('cluHD','WeController@hedy');
Route::get('cluHD{one}/{two}','WeController@hedy');
Route::get('cluHD{one}/{two}/{three}','WeController@hedy');
Route::get('cluhd{one}','WeController@hedy');
Route::get('cluhd','WeController@hedy');
Route::get('cluhd{one}/{two}','WeController@hedy');
Route::get('cluhd{one}/{two}/{three}','WeController@hedy');

//-------------Bieber---------------//
Route::get('cluBB','WeController@bieber');
Route::get('cluBB{one}','WeController@bieber');
Route::get('cluBB{one}/{two}','WeController@bieber');
Route::get('cluBB{one}/{two}/{three}','WeController@bieber');
Route::get('clubb','WeController@bieber');
Route::get('clubb{one}','WeController@bieber');
Route::get('clubb{one}/{two}','WeController@bieber');
Route::get('clubb{one}/{two}/{three}','WeController@bieber');



//-------------公共页面---------------//
Route::get('/{one}', 'WeController@index');
Route::get('/{one}/{two}', 'WeController@index');
Route::get('/{one}/{two}/{three}', 'WeController@index');