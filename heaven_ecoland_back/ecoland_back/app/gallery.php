<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class gallery extends Model
{
    //
    protected $table='Gallery';
    protected $fillable = [

        'image'

    ];
}
