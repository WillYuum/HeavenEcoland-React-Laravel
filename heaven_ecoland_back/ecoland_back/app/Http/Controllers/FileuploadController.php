<?php
use Intervention\Image\ImageServiceProvider;
namespace App\Http\Controllers;
use DB;
use App\Fileupload;
use App\Http\Requests;
use Illuminate\Http\Request;

class FileuploadController extends Controller
{
    //

    public function store(Request $request)
    {
        if($request->file('select_file'))
       {
          $image = $request->file('select_file');
          $name = time() . $image->getClientOriginalName();
        
          DB::table('Gallery')->insert(  // insert image to Gallery table in database
            ['image' =>   $name]
        );
          \Image::make($request->file('select_file'))->save(public_path('images/').$name);
          
        return response()->json([
            'success' => true
        ]);
        }else {
            return [
                
            'success'=> false,
            'data' => $request->file('select_file')

            ];
        }



    }
}
