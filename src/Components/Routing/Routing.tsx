import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from '../../types'
import s from './routing.module.css'
import { PrivateRoute } from '../PrivateRoute'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from '../ErrorBoundary'
import { DataPagesOutlet } from '../../pages/DataPages/DataPagesOutlet'

const Main = lazy(() =>
  import('../../pages/Main').then(module => ({ default: module.Main }))
)
const NotFound = lazy(() =>
  import('../../pages/NotFound').then(module => ({ default: module.NotFound }))
)
const Login = lazy(() =>
  import('../../pages/Login').then(module => ({ default: module.Login }))
)
const ListData = lazy(() =>
  import('../../pages/DataPages/ListData').then(module => ({
    default: module.ListData,
  }))
)
const SelectedDataItem = lazy(() =>
  import('../../pages/DataPages/SelectedDataItem').then(module => ({
    default: module.SelectedDataItem,
  }))
)

const dataPages = [
  {
    route: AppRoutes.Episodes,
    apiURL: 'https://rickandmortyapi.com/api/episode',
  },
  {
    route: AppRoutes.Locations,
    apiURL: 'https://rickandmortyapi.com/api/location',
  },
  {
    route: AppRoutes.Characters,
    apiURL: 'https://rickandmortyapi.com/api/character',
  },
]

export default function Routing() {
  return (
    <div className={s.content}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={AppRoutes.Main} element={<Main />} />
          <Route path={AppRoutes.NotFound} element={<NotFound />} />
          <Route
            path={AppRoutes.Login}
            element={
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            }
          />

          {dataPages.map(({ route, apiURL }) => (
            <Route
              key={route}
              path={route}
              element={<DataPagesOutlet apiURL={apiURL} route={route} />}>
              <Route
                index
                element={
                  <PrivateRoute>
                    <ErrorBoundary>
                      <ListData />
                    </ErrorBoundary>
                  </PrivateRoute>
                }
              />
              <Route
                path=':id'
                element={
                  <PrivateRoute>
                    <ErrorBoundary>
                      <SelectedDataItem />
                    </ErrorBoundary>
                  </PrivateRoute>
                }
              />
            </Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
