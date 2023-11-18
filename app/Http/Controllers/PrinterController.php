<?php

namespace App\Http\Controllers;

use App\Models\Printer;
use Illuminate\Http\Request;

class PrinterController extends Controller
{
   public function allprinter (){

    $printers = Printer::all();
    return $printers;
   }
}
