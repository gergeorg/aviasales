import logo from '../../assets/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <a href='/'>
        <img className={style.logo} src={logo} alt='Логотип aviasales' />
      </a>
    </header>
  );
};
