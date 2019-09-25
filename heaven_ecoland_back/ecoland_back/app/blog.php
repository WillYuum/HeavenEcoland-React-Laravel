<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class blog extends Model
{
    //
    protected $table='Blog';
    protected $fillable = [

        'content','date', 'title','author'

    ];
}
