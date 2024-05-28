import { Link, Route, Routes } from 'react-router-dom'
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
        <Route path='/episodes'>
          <Route index element={<ListItems items={episodes} />} />
          <Route
            path=':id'
            element={<Item items={episodes} type='episodes' />}
          />
        </Route>
        <Route path='/locations'>
          <Route index element={<ListItems items={locations} />} />
          <Route
            path=':id'
            element={<Item items={locations} type='locations' />}
          />
        </Route>
        <Route path='/characters'>
          <Route index element={<ListItems items={characters} />} />
          <Route
            path=':id'
            element={<Item items={characters} type='characters' />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
