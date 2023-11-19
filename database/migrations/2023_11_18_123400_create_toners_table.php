<?php

use App\Models\Toner;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /*            if (item.color === 1) {
                color = "Fekete";
            } 
            else if (item.color === 2) {
                color = "Magenta";
            } 
            else if (item.color === 3) {
                color = "Cián";
            } 
            else if (item.color === 4) {
                color = "Sárga";
            } 
            else if (item.color === 5) {
                color = "Hulladéktartály";
            }  */
    public function up(): void
    {
        Schema::create('toners', function (Blueprint $table) {
            $table->id();
            $table->boolean('condition'); /*0-good 1-bad  */
            $table->smallInteger('color');
            $table->smallInteger('type'); /* 1-xerox1 2-xerox2 3-hp1 4-hp2*/
            $table->timestamps();
        });

        Toner::create(['condition' => 0, 'color' => 1, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 2, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 3, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 4, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 4, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 4, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 4, 'type' => 0]);
        Toner::create(['condition' => 0, 'color' => 1, 'type' => 1]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('toners');
    }
};
