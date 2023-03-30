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





if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents("php://input"), true);
  
  $name = $data['name'];
  $email = $data['email'];
  $shoppingLists = $data['shoppingLists'];
  $idData = $data['idData'];
  $tel = $data['tel'];
  $pib = $data['pib'];
  $location = $data['location'];
  $totalPrise = $data['totalPrise'];
  
  // Відправлення електронної пошти
  $to = 'biturba@gmail.com';
  $subject = "$idData Нове замовлення для: $tel";
  $body = "Данні замовника: \n Телефон: $tel \n П.І.Б.:$pib  \n Адреса: $location\n Замовлення:\n$shoppingLists \n Вартість замовлення:   $totalPrise грн";
  
  if (mail($to, $subject, $body)) {
    // Відповідь на успішну відправку
    http_response_code(200);
    echo json_encode(array('message' => 'Дякуємо за ваше замовлення!'));
  } else {
    // Відповідь на невдалу відправку
    http_response_code(500);
    echo json_encode(array('message' => 'Щось пішло не так! Будь ласка, спробуйте ще раз.'));
  }
}






// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'phpmailer/src/Exception.php';
// require 'phpmailer/src/PHPMailer.php';


// $mail = new PHPMailer(true);
// $mail->CharSet = 'UTF-8';
// $mail->setLanguage('ru', 'phpmailer/language/');
// $mail->isHTML(true);

// $mail->setFrom('vitya999123@gmail.com', 'hellcat Замовлення');
// $mail->addAddress('vitya999123@gmail.com');  

// $mail->Subject = 'hellcat Замовлення';

// $mail->Body    = '<p>Замовлення <b>in bold!</b>'.$_POST['tel']. '</p>';


// if (!$mail->send()) {
//     $message = 'Ошибка';
// }else {
//     $message = 'Данные отправлены';
// };

// $response = ['message' => $message];
// header('Content-type: application/json');
// echo json_encode($response);

?>