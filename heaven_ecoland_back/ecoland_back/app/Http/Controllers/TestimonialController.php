<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // GET testimonial
        $testimonials = DB::table('Testimonial')->get();
        return $testimonials;
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
        // insert testimonial
        $img = $request->get('img');
        $date= $request->get('date');
        $content = $request->get('content');
        $author = $request->get('author');

        DB::table('Testimonial')->insert(
         ['content'=>$content,
         'date' => $date,
         'author'=>$author,
            'image' => $img,

          ]
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
        // edit testimonial by id
        $img = $request->get('img');
        $date= $request->get('date');
        $content = $request->get('content');
        $author = $request->get('author');

        DB::table('Testimonial')
        ->where('id', $id)
        ->update([

            'image' => $img,
        'date' => $date,
        'content'=>$content,
        'author' => $author,
       ]);
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
        // delete testimonial by id

DB::table('Testimonial')->where('id', '=', $id)->delete();
    }
}
