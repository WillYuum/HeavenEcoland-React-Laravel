<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventBundleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // list eventbundles
        $eventbundle = DB::table('Event_Bundle')->get();
        return $eventbundle;
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
        // create new eventbundle
        $name = $request->get('name');
        $bundle_id= $request->get('bundle_id');
        $price= $request->get('price');
        DB::table('Event_Bundle')->insert(   
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
        //edit eventbundle

        $name = $request->get('name');
        $bundle_id= $request->get('bundle_id');
        $price= $request->get('price');

        DB::table('Event_Bundle')
            ->where('id', $id)
            ->update(['name' => $name,
            'bundle_id' => $bundle_id,
            'price'=>$price]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // delete by id
        DB::table('Event_Bundle')->where('id', '=', $id)->delete();
    }
}
