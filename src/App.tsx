import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import ListData from './pages/ListData'
import SelectedDataItem from './pages/SelectedDataItem'
import episodesData from './assets/episode.json'
import locationsData from './assets/location.json'
import charactersData from './assets/characters.json'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <Link to='/episodes'>Эпизоды</Link>
        </li>
        <li>
          <Link to='/characters'>Персонажи</Link>
        </li>
        <li>
          <Link to='/locations'>Локации</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/episodes'
          element={
            <Outlet context={{ data: episodesData, url: 'episodes' }} />
          }>
          <Route index element={<ListData />} />
          <Route path=':id' element={<SelectedDataItem />} />
        </Route>
        <Route
          path='/locations'
          element={
            <Outlet context={{ data: locationsData, url: 'locations' }} />
          }>
          <Route index element={<ListData />} />
          <Route path=':id' element={<SelectedDataItem />} />
        </Route>
        <Route
          path='/characters'
          element={
            <Outlet context={{ data: charactersData, url: 'characters' }} />
          }>
          <Route index element={<ListData />} />
          <Route path=':id' element={<SelectedDataItem />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
