# HeavenEcoland-React-Laravel
Building a portfolio webste for Heaven-Ecoland using React and laravel



/*************************************************** API Routes for EVENTS:  *************************************************/
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
        // get event by id
        $eventsById = DB::table('Event')->where('id', '=', $id)->get();
        return $eventsById;
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

/*************************************************** API Routes for EVENTS:  *************************************************/




/*************************************************** API Routes for BUNDLES:  *************************************************/

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


/*************************************************** API Routes for BUNDLES:  *************************************************/



/*************************************************** API Routes for EVENT_BUNDLE  *************************************************/
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


/*************************************************** API Routes for EVENT_BUNDLE  *************************************************/
