<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Event', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title',100)->nullable();
            $table->text('date')->nullable();
            $table->bigInteger('price')->nullable();
            $table->text('description')->nullable();
            $table->text('image')->nullable();
            $table->bigInteger('event_id')->nullable();
        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event');
    }
}
