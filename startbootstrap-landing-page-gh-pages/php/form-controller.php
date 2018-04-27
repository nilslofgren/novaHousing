<html>
<body>


Success! Your input has been recorded!

This is your username: <?php echo $_GET['user_name']; ?>

</body>
</html>

<?php
$servername = "CSDB-Remote.sql";
$username = "nlofgren";
$password = "fL@01509628";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
