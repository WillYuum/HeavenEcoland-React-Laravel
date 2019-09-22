<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToBundle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bundle', function (Blueprint $table) {
            // add columns
            // $table->string('name', 255)->nullable();
            // $table->bigInteger('bundle_id')->nullable();
            // $table->bigInteger('price')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bundle', function (Blueprint $table) {
            //drop columns
            // $table->dropColumn('name');
        });
    }
}
