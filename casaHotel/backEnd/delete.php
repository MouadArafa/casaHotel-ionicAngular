<?php
include "config.php";
$data = array();
$id = $_GET['id'];
$q = mysqli_query($con,"DELETE FROM etages WHERE 'id' = '{$id}' LIMIT 1");

if ($q) {
    http_response_code(201);
    $message['status'] = 'Success';
}else {
    http_response_code(422);
    $message['status'] = 'Error';
}

echo json_encode($data);
echo mysqli_error($con);
