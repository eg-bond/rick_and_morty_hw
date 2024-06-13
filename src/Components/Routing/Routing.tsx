import { Outlet, Route, Routes } from 'react-router-dom'
import episodesData from '../../assets/episode.json'
import locationsData from '../../assets/location.json'
import charactersData from '../../assets/characters.json'
import NotFound from '../../pages/NotFound/NotFound'
import { Main } from '../../pages/Main'
import { ListData } from '../../pages/ListData'
import { SelectedDataItem } from '../../pages/SelectedDataItem'
import { DataPagesURLs } from '../../types'
import s from './routing.module.css'
import { AuthProvider } from '../../context/AuthProvider'

export default function Routing() {
  const dataPages = [
    { url: DataPagesURLs.Episodes, data: episodesData },
    { url: DataPagesURLs.Locations, data: locationsData },
    { url: DataPagesURLs.Characters, data: charactersData },
  ]

  return (
    <div className={s.content}>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<NotFound />} />

          {dataPages.map(({ url, data }) => (
            <Route
              key={url}
              path={url}
              element={<Outlet context={{ data, url }} />}>
              <Route index element={<ListData />} />
              <Route path=':id' element={<SelectedDataItem />} />
            </Route>
          ))}
        </Routes>
      </AuthProvider>
    </div>
  )
}
