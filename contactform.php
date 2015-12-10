<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$emailbody="From: $name \n Email: $email \n Message: $message";
$recipient = "jennifer@jenniferpham.biz";
$subject = "CodeSchool Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $emailbody, $mailheader) or die("Error!");
echo "Thank You for your interest in our code school. We'll review this application and contact you as soon as possible.";
?>