<?php
// Include the configuration file
$config = include('./config.php');

// API endpoint
$apiUrl = 'https://api.spacexdata.com/v4/capsules';

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $config['bearer_token']
]);

// Execute cURL session
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Process the API response
if ($response) {
    echo 'API Response: ' . $response;
} else {
    echo 'Failed to fetch data from the API.';
}
?>
