<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bundle extends Model
{
    // define the table
protected $table ='Bundle';
protected $fillable = ['name', 'bundle_id', 'price'];
}
