import React from 'react';
import cn from 'classnames';

import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Filter } from '../Filter/Filter';
import { Article } from '../Article/Article';
import { Sort } from '../Sort/Sort';
import { Button } from '../Button/Button';

import style from './Layout.module.scss';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main className={style.main}>
        <Filter className={style.filter} />

        <div className={style.articles}>
          <Sort />
          <Article />
          <Article />
          <Article />
          <Button color='blue' text='Показать еще 5 билетов!' className={style.bigButton} />
        </div>
      </main>
    </Container>
  );
};
