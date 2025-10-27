<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    /**
     * Registrar usuario
     *
     * Crea una nueva cuenta y devuelve token + usuario.
     */
    public function register(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        // Gracias al cast 'password' => 'hashed' en User, se cifra automáticamente.
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => $data['password'],
        ]);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'success' => true,
            'user'    => $user,
            'token'   => $token,
            'message' => 'Usuario registrado exitosamente',
        ], 201);
    }

    /**
     * Verificar si un email existe (para el modal de login/registro)
     *
     * GET /api/auth/check-email?email=...
     * Respuesta: { "exists": true|false }
     */
    public function checkEmail(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
        ]);

        // Normaliza el correo por seguridad
        $email  = strtolower(trim($validated['email']));
        // En la mayoría de motores (MySQL por defecto) el match es case-insensitive
        $exists = User::where('email', $email)->exists();

        return response()->json(['exists' => $exists]);
    }

    /**
     * (Opcional) Verificar cuenta
     */
    public function verifyAccount(Request $request): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'Cuenta verificada exitosamente',
        ]);
    }
}
