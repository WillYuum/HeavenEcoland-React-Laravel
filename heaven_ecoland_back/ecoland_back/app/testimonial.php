<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class testimonial extends Model
{
    //
    protected $table='Testimonial';
    protected $fillable = [

        'author','date', 'content','image'

    ];
}
