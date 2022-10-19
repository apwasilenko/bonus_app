import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import CanvasDraw from './components/CanvasDraw';
import './css/App.css';



function App() {
  const [heads] = useState({
    num: 1, datatimehome: "7:45 06.09.2022", odehome: 602457, balanshome: 10789, auto: 889, datatimeend: "16:45 06.09.2022", odeend: 602777, balansend: 10389, datatime: "10:50", ode: 320, balans: 312, doxod: 1889,
  });

  const [posts] = useState([
    { num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '-', zvez: '-', },
    { num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '-', zvez: '3', },
    { num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '-', },
    { num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
    { num: 1, time: '12:23', date: '22.09.2022', distance: '1.2', vremy: '3', summa: '90', comis: '9', form: 'Наличн.', tarif: 'Бонус поселок', avto: '1', zvez: '3', },
    { num: 11, time: '12:33', date: '22.09.2022', distance: '12.2', vremy: '12', summa: '200', comis: '30', form: 'Безнал.', tarif: 'Бонус деревни', avto: '1', zvez: '3', },
    { num: 111, time: '12:42', date: '22.09.2022', distance: '124.2', vremy: '134', summa: '2 380', comis: '119', form: 'Сбербанк', tarif: 'Бонус город', avto: '1', zvez: '3', },
  ]);




  return (
    <div className="App">
      <Header heads={heads} />
      <PostList posts={posts} />
      <CanvasDraw />
    </div>
  );
}

export default App;



