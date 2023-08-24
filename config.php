<?php
// fetch_data.php
$hostedLink = "https://api.spacexdata.com/v4/capsules";
$data = file_get_contents($hostedLink);
header('Content-Type: application/json');
echo $data;
?>