import cn from 'classnames';

import style from './Checkbox.module.scss';

export const Checkbox = ({ text, name }) => {
  return (
    <label className={style.label}>
      <input className={style.input} type='checkbox' name={name} />

      <span className={style.checkbox}>
        <span className={style.text}>{text}</span>
      </span>
    </label>
  );
};
