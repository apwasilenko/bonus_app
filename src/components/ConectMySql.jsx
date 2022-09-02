import React from 'react'
import MySql from 'mysql'

const ConectMySql = () => {

  var MySql = require('mysql');
  var connection = MySql.createConnection({
    host: '141.8.193.236',
    user: 'f0659051_apwasilenko',
    password: 'apwasilenko',
    database: 'f0659051_apwasilenko'
  });
  connection.connect(function (err) {
    if (err) {
      return console.error('ошибка: ' + err.message);
    }

    console.log('Подключились к базе данных MySQL');
  });

  return (
    <div>ConectMySql</div>
  )
}

export default ConectMySql