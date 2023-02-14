import React from 'react';
import { Link } from 'react-router-dom';
import { DogSvg } from './DogSvg';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { data } = useSelector(state => state.user);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home">
          <DogSvg />
        </Link>
        {data ? (
          <Link to="account" className={styles.loginLink}>
            {data.nome}
          </Link>
        ) : (
          <Link to="login" className={styles.loginLink}>
            Login/Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};
