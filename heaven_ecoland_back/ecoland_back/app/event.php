<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event extends Model
{
    //
    protected $table='Event';
    protected $fillable = ['title', 'date', 'price','description','event_id','image'];
}
