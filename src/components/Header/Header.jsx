import React from 'react';

import logo from '../../assets/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt='Логотип aviasales' />
    </header>
  );
};
