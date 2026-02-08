<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;

Route::middleware('api')->group(function () {
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/featured', [NewsController::class, 'featured']);
    Route::get('/news/categories', [NewsController::class, 'categories']);
    Route::get('/news/{slug}', [NewsController::class, 'show']);
});