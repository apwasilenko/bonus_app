import React from 'react';
import '../css/Header.css';

const Header = () => {

  return (
    <div className='header'>
      <div className='header-block'>
        <div className='header-inline'>
          Начало смены
        </div>
        <div className='header-inline'>
          :
        </div>
        <div className='header-inline'>
          07:45 23.08.2022г.
        </div>
        <div className='header-inline'>
          -
        </div>
      </div>
      <div className='header-block'>
        <div className='header-inline'>
          Конец смены
        </div>
        <div className='header-inline'>
          :
        </div>
        <div className='header-inline'>
          17:45 23.08.2022г.
        </div>
        <div className='header-inline'>
          -
        </div>
      </div>
    </div>
  )
}

export default Header