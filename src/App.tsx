import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import ListItems from './pages/ListItems'
import locations from './assets/location.json'
import episodes from './assets/episode.json'
import characters from './assets/characters.json'
import Item from './pages/Item'

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
          element={<Outlet context={{ items: episodes, type: 'episodes' }} />}>
          <Route index element={<ListItems />} />
          <Route path=':id' element={<Item />} />
        </Route>
        <Route
          path='/locations'
          element={
            <Outlet context={{ items: locations, type: 'locations' }} />
          }>
          <Route index element={<ListItems />} />
          <Route path=':id' element={<Item />} />
        </Route>
        <Route
          path='/characters'
          element={
            <Outlet context={{ items: characters, type: 'characters' }} />
          }>
          <Route index element={<ListItems />} />
          <Route path=':id' element={<Item />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
