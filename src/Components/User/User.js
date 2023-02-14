import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './UserHeader';
import { UserFeed } from './UserFeed';
import { UserPost } from './UserPost';
import { UserStats } from './UserStats';
import { NotFound } from '../NotFound';
import { useSelector } from 'react-redux';

export const User = () => {
  const { data } = useSelector(state => state.user);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserFeed user={data.id} />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="post" element={<UserPost />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  );
};
