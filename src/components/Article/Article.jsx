import React from 'react';
import cn from 'classnames';

import logo from '../../assets/S7Logo.png';

import style from './Article.module.scss';

export const Article = () => {
  return (
    <article className={style.article}>
      <span className={style.price}>13 400 Р </span>
      <img className={style.logo} src={logo} alt='логотип авиакомпании' />

      <div className={style.line}>
        <div className={style.firstInfo}>
          <span className={style.title}>MOW – HKT</span>
          <span className={style.value}>10:45 – 08:00</span>
        </div>

        <div className={style.secondInfo}>
          <span className={style.title}>В пути</span>
          <span className={style.value}>21ч 15м</span>
        </div>

        <div className={style.thirdInfo}>
          <span className={style.title}>1 пересадка</span>
          <span className={style.value}>HKG, JNB</span>
        </div>
      </div>
    </article>
  );
};
