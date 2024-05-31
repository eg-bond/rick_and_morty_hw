import { Outlet, Route, Routes } from 'react-router-dom'
import episodesData from './assets/episode.json'
import locationsData from './assets/location.json'
import charactersData from './assets/characters.json'
import Main from './pages/Main'
import ListData from './pages/ListData'
import SelectedDataItem from './pages/SelectedDataItem'
import { DataPagesURLs } from './types'
import NotFound from './pages/NotFound'

export default function Routing() {
  const dataPages = [
    { url: DataPagesURLs.Episodes, data: episodesData },
    { url: DataPagesURLs.Locations, data: locationsData },
    { url: DataPagesURLs.Characters, data: charactersData },
  ]

  return (
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
  )
}
