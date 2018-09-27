<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeController extends Controller
{
    //
    function index(){
        return view('index');
    }

    function luke(){
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



}
