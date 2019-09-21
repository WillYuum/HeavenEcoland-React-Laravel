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
Route::get('bundle/{id}', 'bundleController@show');
// Create new bundle
Route::post('bundle', 'bundleController@store');
// Update article
Route::put('bundle', 'bundleController@store');
// Delete article
Route::delete('bundle/{id}', 'bundleController@destroy');