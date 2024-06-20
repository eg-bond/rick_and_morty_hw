import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from '../../types'
import s from './routing.module.css'
import { PrivateRoute } from '../PrivateRoute'
import { Suspense } from 'react'
import { ErrorBoundary } from '../ErrorBoundary'
import { DataPagesOutlet } from '../../pages/DataPages/DataPagesOutlet'
import { LazyMain } from '../../pages/Main'
import { LazyNotFound } from '../../pages/NotFound'
import { LazyListData } from '../../pages/DataPages/ListData'
import { LazySelectedDataItem } from '../../pages/DataPages/SelectedDataItem'
import { LazyLogin } from '../../pages/Login'

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
          <Route path={AppRoutes.Main} element={<LazyMain />} />
          <Route path={AppRoutes.NotFound} element={<LazyNotFound />} />
          <Route
            path={AppRoutes.Login}
            element={
              <ErrorBoundary>
                <LazyLogin />
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
                      <LazyListData />
                    </ErrorBoundary>
                  </PrivateRoute>
                }
              />
              <Route
                path=':id'
                element={
                  <PrivateRoute>
                    <ErrorBoundary>
                      <LazySelectedDataItem />
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
