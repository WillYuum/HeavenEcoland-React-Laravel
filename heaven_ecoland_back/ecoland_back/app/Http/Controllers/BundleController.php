<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BundleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // list bundles
        $bundles = DB::table('Bundle')->get();
        return $bundles;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // create new bundle
        $name = $request->get('name');
        $bundle_id= $request->get('bundle_id');
        $price = $request->get('price');
        DB::table('Bundle')->insert(   
         ['name' => $name,
          'bundle_id' => $bundle_id,
          'price'=>$price]
     );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // edit a bundle
        $name = $request->get('name');
        $bundle_id= $request->get('bundle_id');
        $price = $request->get('price');
        

        DB::table('Bundle')
            ->where('id', $id)
            ->update(['name' => $name,
            'bundle_id' => $bundle_id,
            'price'=>$price]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // delete bundle by id
        DB::table('Bundle')->where('id', '=', $id)->delete();
    }
}
