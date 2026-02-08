<?php

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

// Rota para detalhes de notícia (SPA - React Router cuidará disso)
Route::get('/news/{slug}', function () {
    return view('welcome');
});

// Catch-all route para Single Page Application
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');