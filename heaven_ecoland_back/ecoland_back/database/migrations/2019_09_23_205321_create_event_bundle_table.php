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
            $table->bigInteger('event_id')->nullable();
            $table->bigInteger('bundle_id')->nullable();
            $table->timestamps();
            // Set event_id as foreign key and id (in Event table) as primary key
            $table->foreign('event_id')->references('id')->on('Event');
            // Set bundle_id as foreign key and  id (in Bundle table) as primary key
            $table->foreign('bundle_id')->references('id')->on('Bundle');
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
