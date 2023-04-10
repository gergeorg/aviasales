import React from 'react';
import cn from 'classnames';

import { Button } from '../Button/Button';

import style from './Sort.module.scss';

export const Sort = () => {
  return (
    <div className={style.sort}>
      <Button color='blue' text='Самый дешевый' className={style.left} />
      <Button color='white' text='Самый быстрый' />
      <Button color='white' text='Оптимальный' className={style.right} />
    </div>
  );
};
