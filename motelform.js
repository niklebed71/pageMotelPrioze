
// задача этого скрипта что бы значения с полей input и textarea отправлялись в бд используя
//  наш скрипт feedback.php. Выбираем form при нажатии enter или кнопки это 'submit'
 document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); // это препятствует перезагрузке страницы

 const data = {// в data у нас собраны с помощью написанного ниже значения полей input email и textarea.
    name: document.querySelector('input').value,
    email: document.querySelector('input[type="email"]').value, 
    comment: document.querySelector('textarea').value
    }
    
    sendForm(data); //отправляем данные собранные в data
 });

 async function sendForm(data) {//создаеи функц. для отправки данных async значит что отправка будет
   //идти постепенно сначала данные с первого поля (name) и только потом второе поле (comment).
   const res = await fetch('feedback.php', { // fetch() можно отправлять сетевые запросы на сервер
       // — как получать, так и отправлять данные feedback.php адрес по которому делаем запрос
// доп инфа о запросе
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)//наш PHP ждет body в json формате, переводим data в json
     });

     const result = await res.json(); // ждем пока res выполниться за это отвечает await и когда
// res выполниться мы его и прочитаем
    
  if (res.status === 201) { //если статус запроса 201 т.е. все ок то выводим
        alert(`Thank you! ${result.message}`)  
      } else {//если статус запроса другой то выводим
        alert('Oops, something went wrong');
   } 
  }