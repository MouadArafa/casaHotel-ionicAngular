<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$img = $data['img'];
$Nom_C_Emp = $data['Nom_C_Emp'];
$nbEmp = $data['nbEmp'];
$tenu = $data['tenu'];
$TypeChambre = $data['TypeChambre'];
$nbChambre = $data['nbChambre'];

$q = mysqli_query($con , "INSERT INTO etages(img,Nom_C_Emp,nbEmp,tenu,TypeChambre,nbChambre) VALUES ('$img', '$Nom_C_Emp', '$nbEmp', '$tenu', '$TypeChambre', '$nbChambre')");


// $sql = "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('John', 'Doe', 'john@example.com')";

 if ($con->query($q) === TRUE) {
  echo "New record created successfully";
 } else {
  echo "Error: " . $q . "<br>" . $con->error;
 }

 $con->close();


/*$q = mysqli_query($con , "INSERT INTO chambre(type) VALUES('$type')");

if ($q) {
    http_response_code(201);
    $message['status'] = 'Success';
}else {
    http_response_code(422);
    $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
*/
