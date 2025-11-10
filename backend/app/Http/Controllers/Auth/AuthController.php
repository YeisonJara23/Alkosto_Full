<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * GET /api/auth/check-email?email=...
     * Responde: { exists: bool }
     */
    public function checkEmail(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $exists = User::where('email', $request->email)->exists();

        return response()->json(['exists' => $exists]);
    }

    /**
     * POST /api/auth/register
     * Campos: email, password, password_confirmation, (opcional) name
     */
    public function register(Request $request)
    {
        $data = $request->validate([
            'email'                 => ['required', 'email', 'unique:users,email'],
            'password'              => ['required', 'confirmed', 'min:8'],
            'password_confirmation' => ['required'],
            'name'                  => ['nullable', 'string', 'max:255'],
        ]);

        $name = $data['name'] ?? Str::before($data['email'], '@');

        $user = User::create([
            'name'              => $name,
            'email'             => $data['email'],
            'password'          => Hash::make($data['password']),
            // Si no haces verificación por correo de momento:
            'email_verified_at' => now(),
        ]);

        // Emite un token Bearer para que el usuario quede autenticado
        $token = $user->createToken('web')->plainTextToken;

        return response()->json([
            'message' => 'Cuenta creada correctamente.',
            'user'    => $user,
            'token'   => $token,
        ], 201);
    }

    /**
     * (Opcional) Verificación de cuenta por token, si decides implementarlo
     * POST /api/auth/verify-account  (body: token)
     */
    public function verifyAccount(Request $request)
    {
        // Si más adelante decides enviar email con token, implementa aquí.
        // Por ahora respondemos 501.
        return response()->json([
            'message' => 'No implementado (opcional).',
        ], 501);
    }

    /**
     * POST /api/auth/login
     * Campos: email, password
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        /** @var \App\Models\User|null $user */
        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Las credenciales no son válidas.'],
            ]);
        }

        // Crea token de acceso (Sanctum)
        $token = $user->createToken('web')->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión correcto.',
            'user'    => $user,
            'token'   => $token,
        ]);
    }

    /**
     * GET /api/me
     * Retorna el usuario autenticado (token Bearer requerido)
     */
    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * POST /api/auth/logout
     * Revoca TODOS los tokens del usuario (o sólo el actual si prefieres)
     */
    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();

        // Elimina todos los tokens del usuario:
        $user->tokens()->delete();

        // Si prefieres sólo el token actual:
        // $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Sesión cerrada.']);
    }
}
