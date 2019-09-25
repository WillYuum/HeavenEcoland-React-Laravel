<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class admin extends Model
{
    // select table
    protected $table ="Admin";
    protected $fillable = [

        'username','password'

    ];
}
