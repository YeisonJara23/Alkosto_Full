<?php

return [
    'paths' => ['api/*'], // basta con la API
    'allowed_methods' => ['*'],
    // Para depurar: permite TODOS los orígenes (temporalmente)
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 3600,
    'supports_credentials' => false, // usamos Bearer token, NO cookies
];
