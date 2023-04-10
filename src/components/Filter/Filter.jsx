import React from 'react';
import cn from 'classnames';

import { Checkbox } from '../Checkbox/Checkbox';

import style from './Filter.module.scss';

export const Filter = () => {
  return (
    <form className={style.filter}>
      <h2 className={style.title}>Количество пересадок</h2>
      <Checkbox name='all' text={'Все'} />
      <Checkbox name='without-transfers' text={'Без пересадок'} />
      <Checkbox name='1-transfers' text={'1 пересадка'} />
      <Checkbox name='2-transfers' text={'2 пересадки'} />
      <Checkbox name='3-transfers' text={'3 пересадки'} />
    </form>
  );
};
