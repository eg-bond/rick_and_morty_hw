import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
import Characters from './pages/Characters'
import Episode from './pages/Episode'
import Location from './pages/Location'
import ListItems from './pages/ListItems'
import locations from '../assets/location.json'
import episodes from '../assets/episode.json'

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
          <Route path=':id' element={<Episode />} />
        </Route>
        <Route path='/locations'>
          <Route index element={<ListItems items={locations} />} />
          <Route path=':id' element={<Location />} />
        </Route>
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
