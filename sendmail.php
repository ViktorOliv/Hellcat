<?php
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   $data = json_decode(file_get_contents('php://input'), true); // Отримуємо JSON-дані з запиту та розпаковуємо їх в масив
//   $to = 'example@example.com'; // Адреса, на яку буде надіслано повідомлення
//   $subject = 'Нове повідомлення з сайту'; // Тема повідомлення
//   $message = $data['message']; // Отримуємо повідомлення з масиву JSON-даних
//   $headers = 'From: ' . $data['email'] . "\r\n" . // Додаємо адресу відправника
//              'Reply-To: ' . $data['email'] . "\r\n" . // Додаємо адресу для відповіді
//              'Content-Type: text/plain; charset=UTF-8' . "\r\n"; // Встановлюємо тип контенту та кодування
//   $result = mail($to, $subject, $message, $headers); // Надсилаємо повідомлення
//   echo json_encode(array('status' => $result)); // Повертаємо результат у форматі JSON
// }


///////////////////////////////////////
// працюючий код
///////////////////////////////////////

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   $data = json_decode(file_get_contents("php://input"), true);


//   $headers = "From: vitya999123@gmail.com\r\n";
//   $headers .= "Reply-To: vitya999123@gmail.com\r\n";
//   $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  
//   // $name = $data['name'];
//   // $email = $data['email'];
//   $shoppingLists = $data['shoppingLists'];
//   $idData = $data['idData'];
//   $tel = $data['tel'];
//   $pib = $data['pib'];
//   $location = $data['location'];
//   $totalPrise = $data['totalPrise'];
  
//   // Відправлення електронної пошти
//   $to = 'vitya999123@gmail.com';
//   $subject = "$idData Нове замовлення для: $tel";
//   $body = "Данні замовника: \n Телефон: $tel \n П.І.Б.:$pib  \n Адреса: $location\n Замовлення:\n$shoppingLists \n Вартість замовлення:   $totalPrise грн";
  
//   if (mail($to, $subject, $body, $headers)) {
//     // Відповідь на успішну відправку
//     http_response_code(200);
//     echo json_encode(array('message' => 'Дякуємо за ваше замовлення!'));
//   } else {
//     // Відповідь на невдалу відправку
//     http_response_code(500);
//     echo json_encode(array('message' => 'Щось пішло не так! Будь ласка, спробуйте ще раз.'));
//   }
// }

///////////////////////////////////////
// PHPMailer
///////////////////////////////////////


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);

 //Server settings
 $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
 $mail->isSMTP();                                            //Send using SMTP
 $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
 $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
 $mail->Username   = 'vitya999123@gmail.com';                     //SMTP username
 $mail->Password   = 'cxmpuwvracfsozdj';                               //SMTP password
 $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
 $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
$mail->SMTPAuth = true;

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$data = json_decode(file_get_contents("php://input"), true);

$shoppingLists = $data['shoppingLists'];
$idData = $data['idData'];
$tel = $data['tel'];
$pib = $data['pib'];
$location = $data['location'];
$totalPrise = $data['totalPrise'];


$mail->setFrom('vitya999123@gmail.com', 'hellcat Замовлення');
$mail->addAddress('vitya999123@gmail.com');  


$mail->Subject = $idData.' Нове замовлення для:'.$pib;

$mail->Body    =
'<p>'.'Данні замовника:' . '</p>'.
'<p>'.'Телефон:'.$tel. '</p>'.
'<p>'.'П.І.Б.:'.$pib. '</p>'.
'<p>'.'Адреса:'.$location. '</p>'.
'<p>'.'Замовлення:'.$shoppingLists. '</p>'.
'<p>'.'Вартість замовлення:'.$totalPrise. 'грн</p>';


if (!$mail->send()) {
    $message = 'Щось пішло не так! Будь ласка, спробуйте ще раз.';
}else {
    $message = 'Дякуємо за ваше замовлення!';
};

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);

?>