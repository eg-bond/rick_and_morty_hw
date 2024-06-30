import { lazy } from 'react';
import { Login } from './Login';

const LazyLogin = lazy(() =>
  import('./Login').then(module => ({ default: module.Login }))
);

export { Login, LazyLogin };
