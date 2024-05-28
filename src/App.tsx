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
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/episodes'>
          <Route index element={<ListItems items={episodes} />} />
          <Route
            path=':id'
            element={<Item items={episodes} type='episode' />}
          />
        </Route>
        <Route path='/locations'>
          <Route index element={<ListItems items={locations} />} />
          <Route
            path=':id'
            element={<Item items={locations} type='location' />}
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
