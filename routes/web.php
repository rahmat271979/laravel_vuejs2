<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('{any}', function () {
//     return view('layouts.app');
// })->where('any', '.*');
Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*');
Auth::routes();

Route::get('/home2', function () {
    return view('home2');
});

Route::get('/home', [HomeController::class, 'index'])->name('home');
