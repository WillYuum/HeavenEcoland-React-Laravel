<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventBundleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Event_Bundle', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('event_id')->nullable();
            $table->bigInteger('bundle_id')->nullable();
            $table->timestamps();
            // Set event_id as foreign key and event_id (in Event table) as primary key
            $table->foreign('event_id')->references('event_id')->on('Event');
            // Set bundle_id as foreign key and  bundle_id (in Bundle table) as primary key
            $table->foreign('bundle_id')->references('bundle_id')->on('Bundle');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_bundle');
    }
}
