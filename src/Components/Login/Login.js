import React from 'react';
import styles from './Login.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { LoginCreateAccount } from './LoginCreateAccount';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';
import { NotFound } from '../NotFound';
import { useSelector } from 'react-redux';
import { Loading } from '../Helper/Loading';

export const Login = () => {
  const { data, loading } = useSelector(state => state.user);

  if (loading) return <Loading />;

  if (data) return <Navigate to="/account" />;

  return (
    <section className={styles.loginContainer}>
      <div className={`${styles.login}`}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreateAccount />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};
