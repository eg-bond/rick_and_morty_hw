import { Link } from 'react-router-dom'
import { URLs } from './types'
import Routing from './Routing'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${URLs.Main}`}>Главная</Link>
        </li>
        <li>
          <Link to={`/${URLs.Episodes}`}>Эпизоды</Link>
        </li>
        <li>
          <Link to={`/${URLs.Characters}`}>Персонажи</Link>
        </li>
        <li>
          <Link to={`/${URLs.Locations}`}>Локации</Link>
        </li>
      </ul>
      <Routing />
    </div>
  )
}

export default App
