<?php

namespace App\Http\Controllers;

use App\Models\Printer;
use App\Models\Toner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TonerController extends Controller
{
    public function alltoner()
    {

        $toners = Toner::all();
        return $toners;
    }

    /*       public function getAllPrintersWithToners()
       {
           
           $printers = Printer::all();
   

           foreach ($printers as $printer) {

               $toners = Toner::where('type', $printer->type)->get()->groupBy('color');
   

               echo "Nyomtató típusa: {$printer->type}";
               foreach ($toners as $color => $tonerGroup) {
                   echo ", Szín: $color, Tonerek száma: {$tonerGroup->count()}";
               }
   
               echo "<br>";
           }
} */


    public function getAllPrintersWithGoodToners()
    {
        // Lekérjük az összes nyomtatót a Printers táblából
        $printers = Printer::all();

        // Lekérjük az összes nyomtató és toner adatait
        $data = [];

        foreach ($printers as $printer) {
            // Lekérjük az adott nyomtatóhoz tartozó "good" állapotú tonereket, csoportosítva a szín alapján
            $toners = Toner::where('type', $printer->type)
                ->where('condition', 0) // Csak a "good" állapotú tonereket választjuk ki
                ->get()
                ->groupBy('color');

            // Tonerek adatait egy asszociatív tömbbe tároljuk
            $tonerData = [];

            foreach ($toners as $color => $tonerGroup) {
                $tonerData[] = [
                    'color' => $color,
                    'count' => $tonerGroup->count(),
                ];
            }

            // Nyomtató és toner adatokat tároljuk az $data tömbben
            $data[] = [
                'printerType' => $printer->type,
                'toners' => $tonerData,
            ];
        }

        // Visszaadjuk az adatokat JSON formátumban
        return response()->json($data);
    }

    public function printer0()
    {
        $toners = DB::table('toners')
            ->where('type', 0)
            ->where('condition', 0)
            ->select('color', DB::raw('COUNT(*) as count'))
            ->groupBy('color')
            ->get();

        return response()->json($toners);
    }
    public function printer1()
    {
        $toners = DB::table('toners')
        ->where('type', 1)
        ->where('condition', 0)
        ->select('color', DB::raw('COUNT(*) as count'))
        ->groupBy('color')
        ->get();

    return response()->json($toners);
    }
    public function printer2()
    {
        $toners = DB::table('toners')
            ->where('type', 2)
            ->where('condition', 0)
            ->select('color', DB::raw('COUNT(*) as count'))
            ->groupBy('color')
            ->get();

        return response()->json($toners);
    }
    public function printer3()
    {
        $toners = DB::table('toners')
            ->where('type', 3)
            ->where('condition', 0)
            ->select('color', DB::raw('COUNT(*) as count'))
            ->groupBy('color')
            ->get();

        return response()->json($toners);
    }
}
