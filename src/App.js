import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import CanvasDraw from './components/CanvasDraw';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton'
import './css/App.css';
import MySql from 'mysql';


function App() {

  const [heads] = useState({
    key: 1, num: 1, datatimehome: "7:45 06.09.2022", odehome: 602457, balanshome: 10789, auto: 889, datatimeend: "16:45 06.09.2022", odeend: 602777, balansend: 10389, datatime: "10:50", ode: 320, balans: 312, doxod: 1889,
  });

  const [posts] = useState([
    { key: 1, num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '-', zvez: '-', },
    { key: 2, num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '-', zvez: '3', },
    { key: 3, num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '-', },
    { key: 4, num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { key: 5, num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { key: 6, num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { key: 7, num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { key: 8, num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { key: 9, num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { key: 10, num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { key: 11, num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { key: 12, num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { key: 13, num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { key: 14, num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { key: 15, num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
  ]);

  const [modal, setModal] = useState(false);

  function createZakaz() {
    console.log('Добавлен заказ');
    setModal(false);
  }

  function getMySql() {
    console.log('Get MySql');


    let xhr_temper = new XMLHttpRequest();  																											// 1. Создаём новый XMLHttpRequest-объект
    xhr_temper.open('GET', 'http://f0659051.xsph.ru/php/mysqlapi.json.php');																									// 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr_temper.send();																																						// 3. Отсылаем запрос
    xhr_temper.onload = function () {																															// 4. Этот код сработает после того, как мы получим ответ сервера
      if (xhr_temper.status != 200) {			 																												// анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.log(`Ошибка ${xhr_temper.status}: ${xhr_temper.statusText}`); 										// Например, 404: Not Found
      } else {																																										// если всё прошло гладко, выводим результат
        console.log(`Готово, получили ${xhr_temper.response.length} байт`); 	// response -- это ответ сервера
        let temperatura = JSON.parse(xhr_temper.response);
        console.log(temperatura);
      }
    }
  }

  return (
    <div className="App">

      <MyButton style={{ marginTop: 30 }} onClick={() => getMySql()} >MySql</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)} >
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisibile={setModal}>
        <MyButton onClick={createZakaz}>Добавить заказ</MyButton>
      </MyModal>
      <Header heads={heads} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;