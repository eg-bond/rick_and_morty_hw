import { lazy } from 'react'
import { Main } from './Main'

const LazyMain = lazy(() =>
  import('./Main').then(module => ({ default: module.Main }))
)

export { Main, LazyMain }
