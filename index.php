<?php
// Replace 'YOUR_API_KEY' with your actual SpaceX API key
$apiKey = 'spacex-key';

// Get the header from the request
$receivedHeader = $_SERVER['HTTP_SPACEX_KEY'] ?? '';

echo $receivedHeader; 

// Check if the received header matches the API key
if ($receivedHeader === $apiKey) {
    // Authentication successful, proceed with protected route logic
    echo "Authentication successful! You have access to the protected route.";
} else {
    // Authentication failed, return 401 Unauthorized response
    http_response_code(401);
    echo "Authentication failed. Unauthorized.";
}
?>