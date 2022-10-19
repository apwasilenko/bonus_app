import React from 'react';
import '../css/Header.css';


const Header = (props) => {
  console.log(props);
  return (
    <div class="header">
      <div id="left" className="md1"></div>
      <div id="center" className="md2">Дата время</div>
      <div id="center" className="md3">Одометр</div>
      <div id="center" className="md4">Баланс</div>
      <div id="center" className="md5">Автомобиль</div>
      <div class="mydiv1"></div>
      <div id="left" className="md1">Начало</div>
      <div id="center" className="md2">{props.heads.datatimehome}</div>
      <div id="right" className="md3">{props.heads.odehome} км</div>
      <div id="right" className="md4">{props.heads.balanshome} ₽</div>
      <div id="center" className="md5">{props.heads.auto} ₽</div>
      <div class="mydiv1"></div>
      <div id="left" className="md1">Конец</div>
      <div id="cener" className="md2">{props.heads.datatimeend}</div>
      <div id="right" className="md3">{props.heads.odeend} км</div>
      <div id="right" className="md4">{props.heads.balansend} ₽</div>
      <div id="center" className="md5">Доход</div>
      <div class="mydiv1"></div>
      <div id="left" className="md1">ИТОГО</div>
      <div id="center" className="md2">{props.heads.datatime}</div>
      <div id="right" className="md3">{props.heads.ode} км</div>
      <div id="right" className="md4">{props.heads.balans} ₽</div>
      <div id="center" className="md5">{props.heads.doxod} ₽</div>
      <div class="mydiv1"></div>
    </div>

  )
}

export default Header