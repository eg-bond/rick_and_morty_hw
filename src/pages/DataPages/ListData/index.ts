import { lazy } from 'react';
import { ListData } from './ListData';

const LazyListData = lazy(() =>
  import('../ListData').then(module => ({
    default: module.ListData,
  }))
);

export { ListData, LazyListData };
