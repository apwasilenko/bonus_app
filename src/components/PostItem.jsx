import React from 'react';
import './../css/PostItem.css';

const Postitem = function (props) {
  console.log(props);

  return (
    <div className="post">
      <div className="post__content">
        <div className="post_elem">
          <div className="num_zakaz" id="right">{props.post.num}.</div>
        </div>
        <div className="post_elem">
          <div className="time_zakaz" id="center">{props.post.time}</div>
          <div className="date_zakaz" id="center">{props.post.date}</div>
        </div>
        <div className="post_elem">
          <div className="dist_zakaz" id="right">{props.post.distance}_</div>
          <div className="ed_izm" id="left">км.</div>
          <div className="prenos"></div>
          <div className="vremy_zakaz" id="right">{props.post.vremy}_</div>
          <div className="ed_izm" id="left">мин.</div>
        </div>
        <div className="post_elem">
          <div className="summ_zakaz" id="right">{props.post.summa} руб.</div>

          <div className="comis_zakaz" id="right">{props.post.comis} руб.</div>
        </div>
      </div>
      <div className="post__btns">
        <button>Изменить</button>
        <br />
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default Postitem;