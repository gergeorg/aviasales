import cn from 'classnames';

import { Button } from '../Button/Button';

import style from './Sort.module.scss';

export const Sort = () => {
  return (
    <ul className={style.sort}>
      <li>
        <Button color='blue' text='Самый дешевый' className={style.left} />
      </li>

      <li>
        <Button color='white' text='Самый быстрый' className={style.center} />
      </li>

      <li>
        <Button color='white' text='Оптимальный' className={style.right} />
      </li>
    </ul>
  );
};
