<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }
        $credentials = $request->only('email', 'password');
        if (!($token = JWTAuth::attempt($credentials))) {

            return response()->json([
                'status' => 'error',
                'error' => 'Invalid username, password, security token',
                'msg' => 'Invalid username, password, security token'
            ], Response::HTTP_BAD_REQUEST);
        }
        $user = Auth::user();
        $response  = [
            'msg' => 'You are logged in!',
            'token' => $token,
            'user_name' => $user->name,
            'user' => $user
        ];
        return response()->json($response, Response::HTTP_OK);
    }

    public function refresh()
    {
        return response(JWTAuth::getToken(), Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        $request->validate(['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json('You have successfully logged out.', Response::HTTP_OK);
        } catch (JWTException $e) {
            return response()->json('Failed to logout, please try again.', Response::HTTP_BAD_REQUEST);
        }
    }

}