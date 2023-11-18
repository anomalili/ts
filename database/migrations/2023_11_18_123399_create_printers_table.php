<?php

use App\Models\Printer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('printers', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('type');
            $table->string('place');
            $table->timestamps();
        });
    Printer::create(['type'=>0,'place'=>'D001']);
    Printer::create(['type'=>0,'place'=>'D002']);
    Printer::create(['type'=>1,'place'=>'D003']);
    Printer::create(['type'=>0,'place'=>'D004']);
    }


    public function down(): void
    {
        Schema::dropIfExists('printers');
    }
};
