<?php

if(!empty($_POST)) {
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $services = isset($_POST['service']) ? $_POST['service'] : [];

    // Process the email address (e.g., save to database, send confirmation, etc.)
    
} 

?>