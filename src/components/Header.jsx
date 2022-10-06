import React from 'react';
import '../css/Header.css';

const Header = () => {

  return (
    <div class="header">
      <div id="left" class="md1"></div>
      <div id="center" class="md2">Дата время</div>
      <div id="center" class="md3">Одометр</div>
      <div id="center" class="md4">Баланс</div>
      <div id="center" class="md5">Автомобиль</div>  
      <div class="mydiv1"></div>
      <div id="left" class="md1">Начало</div>
      <div id="right" class="md2">7:45 06.09.2022</div>
      <div id="right" class="md3">602 457 км</div>
      <div id="right" class="md4">10 789 ₽</div>
      <div id="center" class="md5">889 ₽</div>
      <div class="mydiv1"></div>
      <div id="left" class="md1">Конец</div>
      <div id="right" class="md2">16:45 06.09.2022</div>
      <div id="right" class="md3">602 777 км</div>
      <div id="right" class="md4">10 389 ₽</div>
      <div id="center" class="md5">Доход</div>
      <div class="mydiv1"></div>
      <div id="left" class="md1">ИТОГО</div>
      <div id="center" class="md2">10:05</div>
      <div id="right" class="md3">320 км</div>
      <div id="right" class="md4">312 ₽</div>
      <div id="center" class="md5">1 889 ₽</div>
    </div>
  )
}

export default Header