import { Outlet, Route, Routes } from 'react-router-dom'
import episodesData from '../../assets/episode.json'
import locationsData from '../../assets/location.json'
import charactersData from '../../assets/characters.json'
import NotFound from '../../pages/NotFound/NotFound'
import { Main } from '../../pages/Main'
import { ListData } from '../../pages/ListData'
import { SelectedDataItem } from '../../pages/SelectedDataItem'
import { AppRoutes } from '../../types'
import s from './routing.module.css'
import { Login } from '../../pages/Login'
import { PrivateRoute } from '../PrivateRoute'

export default function Routing() {
  const dataPages = [
    { route: AppRoutes.Episodes, data: episodesData },
    { route: AppRoutes.Locations, data: locationsData },
    { route: AppRoutes.Characters, data: charactersData },
  ]

  return (
    <div className={s.content}>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
        <Route path={AppRoutes.Login} element={<Login />} />

        {dataPages.map(({ route, data }) => (
          <Route
            key={route}
            path={route}
            element={<Outlet context={{ data, route }} />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <ListData />
                </PrivateRoute>
              }
            />
            <Route
              path=':id'
              element={
                <PrivateRoute>
                  <SelectedDataItem />
                </PrivateRoute>
              }
            />
          </Route>
        ))}
      </Routes>
    </div>
  )
}
