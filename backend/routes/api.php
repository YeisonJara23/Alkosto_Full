<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CategoryController;

// Rutas públicas de autenticación
Route::prefix('auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/verify-account', [RegisterController::class, 'verifyAccount']);
    Route::get('/check-email', [RegisterController::class, 'checkEmail']);
    Route::post('/login', [LoginController::class, 'login']);
});

// Rutas protegidas con Sanctum
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/auth/logout', [LoginController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    Route::get('/dashboard', function (Request $request) {
        return response()->json([
            'message' => 'Dashboard del usuario',
            'user'    => $request->user(),
        ]);
    });

    // Rutas de categorías
    Route::apiResource('categories', CategoryController::class);
    Route::get('/categories-tree', [CategoryController::class, 'tree']);
    Route::post('/categories/{id}/restore', [CategoryController::class, 'restore']);
});