<?php
require_once __DIR__ . '/config.php';

$params = [];
if (isset($_GET['id'])) {
    $params['id'] = $_GET['id'];
}

$target = frontend_route('project/proyecto-detalle', $params);
header('Location: ' . $target, true, 301);
exit;
