import React from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { LoginPage, MainPage } from '../pages';
import { RequireAuth, WithoutAuth } from '../hoc';

export const useRoutes = () => {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <Routes>
      <Route
        path="/login"
        element={(
          <WithoutAuth isAuth={isAuth}>
            <LoginPage />
          </WithoutAuth>
            )}
      />
      <Route
        path="/"
        element={(
          <RequireAuth isAuth={isAuth}>
            <MainPage />
          </RequireAuth>
            )}
      />
      <Route
        path="*"
        element={(
          <RequireAuth isAuth={isAuth}>
            <MainPage />
          </RequireAuth>
            )}
      />
    </Routes>
  );
};
