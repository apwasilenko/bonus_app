export function getMySql(data) {
  console.log('Data = ', data);
  let jsonData = JSON.stringify(data);
  console.log('jsonData = ', jsonData);

  let body = 'my_json=' + encodeURIComponent(jsonData);

  let xhr_temper = new XMLHttpRequest(); // 1. Создаём новый XMLHttpRequest-объект
  xhr_temper.open('POST', 'http://f0659051.xsph.ru/api/mysqlapi.php');																									// 2. Настраиваем его: GET-запрос по URL /article/.../load
  xhr_temper.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr_temper.send(body);																																						// 3. Отсылаем запрос
  xhr_temper.onload = function () {																															// 4. Этот код сработает после того, как мы получим ответ сервера
    if (xhr_temper.status !== 200) {			 																												// анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      console.log(`Ошибка ${xhr_temper.status}: ${xhr_temper.statusText}`); 										// Например, 404: Not Found
    } else {																																										// если всё прошло гладко, выводим результат
      console.log(`Готово, получили ${xhr_temper.response.length} байт`); 	// response -- это ответ сервера
      console.log(xhr_temper.response);

    }
  }
}