<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests;
use App\Http\Requests\LoginRequest;
use App\User;
// use Illuminate\Support\Facades\Validator;
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

Route::resource('event','EventController');
Route::resource('bundle','BundleController');
Route::resource('eventbundle','EventBundleController');
Route::resource('admin','AdminController');

Route::resource('gallery','GalleryController');
Route::resource('testimonial','TestimonialController');
Route::resource('blog','BlogController');

// login authorization
Route::post('login',function (LoginRequest $request) {

   
     if(count(User::where('email', $request->get('email'))->get()) > 0){
        $user = User::where('email', $request->get('email'))->first();
        $auth = Hash::check($request->get('password'), $user->password);
        if($user && $auth){
     
           $user->rollApiKey(); //Model Function
     
           return response(array(
              'currentUser' => $user,
              'message' => 'Authorization Successful!',
           ));
        }
        return [
           'id'=> 2,
           'user'=>$user,
           'pass'=>$auth
        ];
     }
     return response(array(
        'message' => 'Unauthorized, check your credentials.',
     ), 401);
});




// return VIEW of image upload
// Route::get('/uploadfile', 'UploadfileController@index');

// FUNCTION of upload request
Route::post('fileupload', 'FileuploadController@store');