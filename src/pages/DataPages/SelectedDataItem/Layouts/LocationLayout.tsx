import { Link } from 'react-router-dom'
import type { AppRoutes, LocationDataT } from '../../types'

function LocationLayout({
  location,
  route,
}: {
  location: LocationDataT
  route: AppRoutes.Locations
}) {
  return (
    <>
      <div>
        <p>Название: {location.name}</p>
        <p>Тип: {location.type}</p>
        <p>Измерение: {location.dimension}</p>
      </div>
      <Link to={`/${route}`}>Вернуться к выбору локации</Link>
    </>
  )
}

export default LocationLayout
