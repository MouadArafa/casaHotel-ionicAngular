<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$image = $data['image'];
$employee = $data['employee'];
$chambre = $data['image'];
$id = $_GET['id'];


$q = mysqli_query($con , "UPDATE etages SET ('img', 'Nom_C_Emp', 'nbEmp', 'tenu', 'TypeChambre', 'nbChambre') VALUES ('$img', '$Nom_C_Emp', '$nbEmp', '$tenu', '$TypeChambre', '$nbChambre') WHERE 'id' = '{$id}' LIMIT 1'");
 if ($q) {
    $message['status'] = 'Success';
}else {
    http_response_code(422);
    $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
