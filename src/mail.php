<?php
  $to      = 'zolotukhinwebpr@mail.ru';
  $subject = 'Обратная связь с сайта PolaGroup';
  $message = 'Имя: ' . $_POST["name"] . ' Телефон: ' . $_POST["email"] . ' Текст: ' . $_POST["text"];
  $headers = 'From: admin@pola-group.com' . "\r\n" .
      'Content-Type: text/plain; charset=utf8;' . "\r\n" .
      'Reply-To: admin@pola-group.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);
?>

