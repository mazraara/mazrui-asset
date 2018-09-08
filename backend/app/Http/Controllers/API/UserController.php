<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display the specified user.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        try {
            $oUser = User::where('id', Auth::user()->id)->first();
            return response()->success($oUser);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /** Revoke access token.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        try {
            if (Auth::check()) {
                $result = Auth::user()->authAcessToken()->delete();
                return response()->success($result);
            }
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}
