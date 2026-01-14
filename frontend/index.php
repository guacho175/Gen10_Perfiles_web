<?php
require_once __DIR__ . '/config.php';

$page = $_GET['page'] ?? 'index';
$page = trim($page, '/');

if ($page === '') {
    $page = 'index';
}

if (!preg_match('/^[a-zA-Z0-9\/_-]+(\.php|\.html)?$/', $page)) {
    http_response_code(400);
    echo 'Ruta inválida.';
    exit;
}

$viewPath = FRONTEND_VIEWS . '/' . $page;

if (!preg_match('/\.(php|html)$/', $viewPath)) {
    if (file_exists($viewPath . '.php')) {
        $viewPath .= '.php';
    } elseif (file_exists($viewPath . '.html')) {
        $viewPath .= '.html';
    }
}

if (!file_exists($viewPath)) {
    http_response_code(404);
    echo 'Vista no encontrada.';
    exit;
}

if (pathinfo($viewPath, PATHINFO_EXTENSION) === 'php') {
    require $viewPath;
    exit;
}

readfile($viewPath);
