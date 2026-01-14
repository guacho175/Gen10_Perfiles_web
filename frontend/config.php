<?php
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptName = $_SERVER['SCRIPT_NAME'] ?? '/frontend/index.php';
$basePath = rtrim(str_replace('\\', '/', dirname($scriptName)), '/');
if ($basePath === '.') {
    $basePath = '';
}

if (!defined('FRONTEND_BASE')) {
    define('FRONTEND_BASE', $scheme . '://' . $host . $basePath);
}

if (!defined('FRONTEND_VIEWS')) {
    define('FRONTEND_VIEWS', __DIR__ . '/views');
}

if (!function_exists('frontend_url')) {
    function frontend_url(string $path = ''): string
    {
        return rtrim(FRONTEND_BASE, '/') . '/' . ltrim($path, '/');
    }
}

if (!function_exists('frontend_route')) {
    function frontend_route(string $page, array $params = []): string
    {
        $params = array_merge(['page' => $page], $params);
        return frontend_url('index.php?' . http_build_query($params));
    }
}
