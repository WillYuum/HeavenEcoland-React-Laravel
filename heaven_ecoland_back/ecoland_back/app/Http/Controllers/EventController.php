<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // LIST EVENTS 
      
        $events = DB::table('Event')->get();
        return $events;
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
        // CREATE A NEW EVENT

       $title = $request->get('title');
       $date= $request->get('date');
       $price = $request->get('price');
       $description = $request->get('description');
       $event_id= $request->get('event_id');
       $image = $request->get('image');
       DB::table('Event')->insert(   
        ['title' => $title,
         'date' => $date,
         'price'=>$price,
         'description' => $description,
         'event_id' => $event_id,
         'image'=>$image]
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
        // Edit an Event
        $title = $request->get('title');
        $date= $request->get('date');
        $price = $request->get('price');
        $description = $request->get('description');
        $event_id= $request->get('event_id');
        $image = $request->get('image');

        DB::table('Event')
            ->where('id', $id)
            ->update(['title' => $title,
            'date' => $date,
            'price'=>$price,
            'description' => $description,
            'event_id' => $event_id,
            'image'=>$image]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Delete by id
        DB::table('Event')->where('id', '=', $id)->delete();
    }
}
