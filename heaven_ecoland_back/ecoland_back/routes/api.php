<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List bundles
Route::get('bundles', 'bundleController@index');
// List single article
Route::get('article/{id}', 'bundleController@show');
// Create new article
Route::post('bundle', 'bundleController@store');
// Update article
Route::put('article', 'bundleController@store');
// Delete article
Route::delete('article/{id}', 'bundleController@destroy');