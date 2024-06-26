import { lazy } from 'react';
import { NotFound } from './NotFound';

const LazyNotFound = lazy(() =>
  import('./NotFound').then(module => ({ default: module.NotFound }))
);

export { NotFound, LazyNotFound };
