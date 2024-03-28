  
 <?php

// что бы query со значениями постучалась в бд надо создать подключение к бд создаем переменную dbc и 
 // пишем функцию подключения mysqli_connect(место бд, root-это логин,""-пароль здесь нет,имя дб)
  $dbc = mysqli_connect('localhost', 'root', '', 'feedback');

 $data = json_decode(file_get_contents('php://input'), true);
 //если получаем запроса в JSON формате декодируем  его и переводим в понятный PHP языку формат
 $name = $data['name'];// data у нас декодирует json и в $name получаем значения 
 $email = $data['email'];// тоже самое
 $comment = $data['comment'];//тоже самое

 // с помощью INSERT INTO отправляем запрос на добавление в таблицу бд feedback в столбцы 
 //first_name email и comment значения  переменных name email и comment 
 $query = "INSERT INTO feedback (first_name,email, comment)
          VALUES ('$name','$email','$comment')";

//mysqli_query возвращает результат запроса $query в $dbc. В случае успешного выполнения запроса,
 //  функция вернет TRUE и новая запись будет добавлена в таблицу. 
 $result = mysqli_query($dbc, $query);

 //эта часть чтобы вывести сообщение что оно отправлено. не очень понимаю что и зачем 
   http_response_code('201'); // если код ответа сервера 201
   header('Content-type: application/json'); // тип документа
   print json_encode(array('message' => 'Feedback has been sent')); // опять кодировка в json при отправке получаю 
  // сообщение  json 'message' => 'Feedback has been sent'

// этой функцией закрываем бд.
mysqli_close($dbc);