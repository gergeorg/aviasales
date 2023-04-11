import cn from 'classnames';

import style from './Button.module.scss';

export const Button = ({ className, color, text }) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.blue]: color === 'blue',
        [style.white]: color === 'white',
      })}
    >
      {text}
    </button>
  );
};
