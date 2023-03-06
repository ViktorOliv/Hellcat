<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true); // Отримуємо JSON-дані з запиту та розпаковуємо їх в масив
  $to = 'example@example.com'; // Адреса, на яку буде надіслано повідомлення
  $subject = 'Нове повідомлення з сайту'; // Тема повідомлення
  $message = $data['message']; // Отримуємо повідомлення з масиву JSON-даних
  $headers = 'From: ' . $data['email'] . "\r\n" . // Додаємо адресу відправника
             'Reply-To: ' . $data['email'] . "\r\n" . // Додаємо адресу для відповіді
             'Content-Type: text/plain; charset=UTF-8' . "\r\n"; // Встановлюємо тип контенту та кодування
  $result = mail($to, $subject, $message, $headers); // Надсилаємо повідомлення
  echo json_encode(array('status' => $result)); // Повертаємо результат у форматі JSON
}
?>
