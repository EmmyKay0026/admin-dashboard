<?php
function insertRowToZohoSheet() {
    $oauthtoken = "1000.3440a48cbd74cf9984e761cf71591683.cf2fff213a043f616f10ba65f4e386dd"; 
    $resourceId = "30sfs0aa377355f3845f3a74272e398afc504";  // Replace with your Spreadsheet ID
    $worksheetName = "Sheet2"; // Worksheet name
    $rowNumber = 2; // Row number to insert

    $url = "https://sheet.zoho.com/api/v2/" . $resourceId;

    // Data to insert
$data = json_decode(file_get_contents("php://input"), true);

    $dataArray = [
        [
            "firstName" => $data['firstName'],
            "lastName" => $data['lastName'],
            "email" => $data['email'],
            "phoneNo" => $data['phoneNo'],
            "reason" => $data['reason'],
            "message" => $data['message']
        ]
    ];
    
     
    // Convert to JSON
    $json_data = json_encode($dataArray);

    // Form URL encoded parameters
    $postData = http_build_query([
        "method" => "row.insert",
        "worksheet_name" => $worksheetName,
        "row" => $rowNumber,
        "json_data" => $json_data
    ]);

    // Set headers
    $headers = [
        "Content-Type: application/x-www-form-urlencoded",
        "Authorization: Zoho-oauthtoken " . $oauthtoken
    ];

    // Initialize cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // Execute request and get response
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        echo "cURL Error: " . $error;
    } else {
        echo "Response: " . $response;
    }
}

// Call the function
insertRowToZohoSheet();
?>
