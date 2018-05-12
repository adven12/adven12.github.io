<?php
// Принимаем постовые данные 
$name=$_POST['name'];
$phone=$_POST['phone'];
$what=$_POST['what']; // с какой формы
// Тут указываем на какой ящик посылать письмо
$to = "bondar00798@gmail.com";
// Далее идет тема и само сообщение 
$subject = "Заявка с сайта жалюзи";
$message = "
Письмо откровенно из моей формы. <br />
Пользователь хочет: " .htmlspecialchars($what)."<br />
Имя: " .htmlspecialchars($name). "<br />
Телефон: " .htmlspecialchars($phone);
// отправка письма 
$headers = "From: mysite.ru <site-emaile@mysite.ru>\r\nContent-type: text/html;
    charset = utf8 \r\n";
mail ($to, $subject, $message, $headers);
// после этого пользователь будет перенаправлен на страницу благодарности 
header('Location: thanks.html');
exit();
?>