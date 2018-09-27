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



//-------------LUKE---------------//
Route::get('cluLK','WeController@luke');
Route::get('cluLK{one}','WeController@luke');
Route::get('cluLK{one}/{two}','WeController@luke');
Route::get('cluLK{one}/{two}/{three}','WeController@luke');
Route::get('clulk','WeController@luke');
Route::get('clulk{one}','WeController@luke');
Route::get('clulk{one}/{two}','WeController@luke');
Route::get('clulk{one}/{two}/{three}','WeController@luke');

//-------------George---------------//
Route::get('cluGG','WeController@george');
Route::get('cluGG{one}','WeController@george');
Route::get('cluGG{one}/{two}','WeController@george');
Route::get('cluGG{one}/{two}/{three}','WeController@george');
Route::get('clugg','WeController@george');
Route::get('clugg{one}','WeController@george');
Route::get('clugg{one}/{two}','WeController@george');
Route::get('clugg{one}/{two}/{three}','WeController@george');

//-------------Arvin---------------//
Route::get('cluAV','WeController@arvin');
Route::get('cluAV{one}','WeController@arvin');
Route::get('cluAV{one}/{two}','WeController@arvin');
Route::get('cluAV{one}/{two}/{three}','WeController@arvin');
Route::get('cluav','WeController@arvin');
Route::get('cluav{one}','WeController@arvin');
Route::get('cluav{one}/{two}','WeController@arvin');
Route::get('cluav{one}/{two}/{three}','WeController@arvin');

//-------------Ada---------------//
Route::get('cluAD{one}','WeController@ada');
Route::get('cluAD','WeController@ada');
Route::get('cluAD{one}/{two}','WeController@ada');
Route::get('cluAD{one}/{two}/{three}','WeController@ada');
Route::get('cluad{one}','WeController@ada');
Route::get('cluad','WeController@ada');
Route::get('cluad{one}/{two}','WeController@ada');
Route::get('cluad{one}/{two}/{three}','WeController@ada');

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
Route::get('cluWS{one}','WeController@winston');
Route::get('cluWS','WeController@winston');
Route::get('cluWS{one}/{two}','WeController@winston');
Route::get('cluWS{one}/{two}/{three}','WeController@winston');
Route::get('cluws{one}','WeController@winston');
Route::get('cluws','WeController@winston');
Route::get('cluws{one}/{two}','WeController@winston');
Route::get('cluws{one}/{two}/{three}','WeController@winston');

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