<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'php_mailer/src/PHPMailer.php';
require 'php_mailer/src/Exception.php';
require 'php_mailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = 'mailout.hostnet.nl'; // Hostnet SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'simone@improve-coaching.nl'; // Your email
    $mail->Password   = 'Hello_World22'; // Your email password (or app password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender and recipient
    $mail->setFrom('simone@improve-coaching.nl', 'Improve Coaching');
    $mail->addAddress('simone@improve-coaching.nl'); // Change if needed

    // Email content
    $mail->Subject = "New message from " . htmlspecialchars($_POST["name"]);
    $mail->Body    = "Name: " . htmlspecialchars($_POST["name"]) . "\n" .
                     "Email: " . htmlspecialchars($_POST["email"]) . "\n\n" .
                     "Message:\n" . htmlspecialchars($_POST["message"]);

    // Send the email
    if ($mail->send()) {
        // Redirect to the previous page with a success message
        header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=success');
        exit; // Make sure to exit after the redirect to stop further execution
    } else {
        // Redirect to the previous page with an error message
        header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=error');
        exit;
    }
} catch (Exception $e) {
    echo "Error: Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>