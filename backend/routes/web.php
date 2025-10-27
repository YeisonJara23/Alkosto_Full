<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'app'    => config('app.name', 'Alkosto API'),
        'status' => 'ok',
        'env'    => app()->environment(),
    ]);
})->name('home');

// Opcional: dashboard en formato API
Route::middleware(['auth:sanctum'])->get('/dashboard', function () {
    return response()->json([
        'success' => true,
        'message' => 'Dashboard (API)',
        'user'    => request()->user(),
    ]);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
