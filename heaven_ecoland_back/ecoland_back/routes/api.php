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

Route::resource('event','EventController');
Route::resource('bundle','BundleController');
Route::resource('eventbundle','EventBundleController');
Route::resource('admin','AdminController');
Route::resource('gallery','GalleryController');
Route::resource('testimonial','TestimonialController');
Route::resource('blog','BlogController');

// login authorization
Route::post('login',function (Request $request) {
    $this->validate($request, [
        'email' => 'required|email',
        'password' => 'required|string|min:8',
     ]);
     
     
     if(User::where('email', $request->get('email'))->exists()){
        $user = User::where('email', $request->get('email'))->first();
        $auth = Hash::check($request->get('password'), $user->password);
        if($user && auth){
     
           $user->rollApiKey(); //Model Function
     
           return response(array(
              'currentUser' => $user,
              'message' => 'Authorization Successful!',
           ));
        }
     }
     return response(array(
        'message' => 'Unauthorized, check your credentials.',
     ), 401);
});