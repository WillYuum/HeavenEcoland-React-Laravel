<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event_bundle extends Model
{
    // define table

protected $table='Event_Bundle';
protected $fillable=['name', 'bundle_id', 'price'];
}
