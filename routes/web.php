<?php

use App\Http\Controllers\PrinterController;
use App\Http\Controllers\TonerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('printers', [PrinterController::class, 'allprinter']);
Route::get('toners', [TonerController::class, 'alltoner']);
Route::get('printers&toners', [TonerController::class, 'getAllPrintersWithToners']);
Route::get('xerox0', [TonerController::class, 'printer0']);
Route::get('xerox1', [TonerController::class, 'printer1']);
Route::get('hp2', [TonerController::class, 'printer2']);
Route::get('hp3', [TonerController::class, 'printer3']);
Route::get('/toner', [TonerController::class, 'index']);
