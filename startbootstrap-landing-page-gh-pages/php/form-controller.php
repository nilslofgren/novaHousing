<?php
$servername = "den1.mysql6.gear.host";
$username = "subletparadise1";
$password = "P@ssw0rd";
$dbname = "subletparadise1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$Address = $_POST['user_address'];
$Name = $_POST['user_name'];
$Owner = $_POST['owner_name'];
$Email = $_POST['user_mail'];
$Phone = $_POST['user_tel'];
$Message = $_POST['user_message'];

$sql = "INSERT INTO Properties (propAddress, propName, ownName, propEmail, propTel, propMessage)
VALUES ('$Address', '$Name', '$Owner', '$Email', '$Phone', '$Message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

header('Location: /subletparadise/thanks.html');
?>