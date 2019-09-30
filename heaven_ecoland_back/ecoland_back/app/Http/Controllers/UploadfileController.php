<?php

namespace App\Http\Controllers;
use Intervention\Image\ImageServiceProvider;
use DB;
use Illuminate\Http\Request;
use App\Http\Requests;

class UploadfileController extends Controller
{
    function index() // returns HTML
    {
     return view('upload');
    }

    function upload(Request $request)  // UPLOAD FUNCTIONALITY
    {
     $this->validate($request, [ // UPLOAD VALIDATION
      'select_file'  => 'required|image|mimes:JPG,jpg,png,gif|max:2048'
     ]);

     $image = $request->file('select_file');  // retrieve FILENAME from upload request and store it in $image,  'select_file' is input name
     $image_name=$image ->getClientOriginalName(); // gets IMAGE NAME
     $image->move(public_path('images'), $image_name ); // moves the file to the IMAGE folder in PUBLIC with the name ($image_name)
    DB::table('Gallery')->insert(  // insert image to Gallery table in database
        ['image' =>   $image_name]
    );
    
    }
}
?>


