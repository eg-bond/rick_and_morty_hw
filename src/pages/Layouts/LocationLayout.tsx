import { Link } from 'react-router-dom'
import type { LocationDataT } from '../types'

function LocationLayout({ item }: { item: LocationDataT }) {
  return (
    <>
      <div>
        <p>Название: {item.name}</p>
        <p>Тип: {item.type}</p>
        <p>Измерение: {item.dimension}</p>
      </div>
      <Link to='/locations'>Вернуться к выбору локации</Link>
    </>
  )
}

export default LocationLayout
