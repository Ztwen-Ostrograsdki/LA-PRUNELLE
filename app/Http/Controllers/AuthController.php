<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function auth()
    {
    	if (auth()->user()) {
    		$r = true;
    	}
    	else{
    		$r = false;
    	}
    	return response()->json($r);
    }
}
