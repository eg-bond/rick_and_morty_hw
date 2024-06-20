import { lazy } from 'react'
import { SelectedDataItem } from './SelectedDataItem'

const LazySelectedDataItem = lazy(() =>
  import('./SelectedDataItem').then(module => ({
    default: module.SelectedDataItem,
  }))
)

export { SelectedDataItem, LazySelectedDataItem }
