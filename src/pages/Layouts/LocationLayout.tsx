import { Link } from 'react-router-dom'
import type { LocationDataT } from '../../types'

function LocationLayout({
  item,
  url,
}: {
  item: LocationDataT
  url: 'locations'
}) {
  return (
    <>
      <div>
        <p>Название: {item.name}</p>
        <p>Тип: {item.type}</p>
        <p>Измерение: {item.dimension}</p>
      </div>
      <Link to={`/${url}`}>Вернуться к выбору локации</Link>
    </>
  )
}

export default LocationLayout
