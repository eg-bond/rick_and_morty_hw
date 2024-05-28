import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
import Characters from './pages/Characters'

function App() {
  return (
    <>
      <h1>Rick and Morty HW</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
        <li>
          <Link to='/locations'>Characters</Link>
        </li>
        <li>
          <Link to='/characters'>Locations</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </>
  )
}

export default App
