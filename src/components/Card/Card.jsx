import cn from 'classnames';

import logo from '../../assets/S7Logo.png';

import style from './Card.module.scss';

export const Card = () => {
  return (
    <li className={style.card}>
      <span className={style.price}>13 400 Р </span>
      <img className={style.logo} src={logo} alt='логотип авиакомпании' />

      <ul className={style.line}>
        <li className={style.firstInfo}>
          <span className={style.title}>MOW – HKT</span>
          <span className={style.value}>10:45 – 08:00</span>
        </li>

        <li className={style.secondInfo}>
          <span className={style.title}>В пути</span>
          <span className={style.value}>21ч 15м</span>
        </li>

        <li className={style.thirdInfo}>
          <span className={style.title}>1 пересадка</span>
          <span className={style.value}>HKG, JNB</span>
        </li>
      </ul>
    </li>
  );
};
