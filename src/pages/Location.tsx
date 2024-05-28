import { useParams } from 'react-router-dom'
import locations from '../assets/location.json'

type LocationPropsT = {
  name: string
  type: string
  dimension: string
}

function getEpisode(id: string | undefined): LocationPropsT | undefined {
  return locations.find(ep => ep.id.toString() === id)
}

function Location() {
  const { id } = useParams<{ id: string }>()

  const location = getEpisode(id)

  if (!location) {
    return null
  }

  return (
    <div>
      <p>Название: {location.name}</p>
      <p>Тип: {location.type}</p>
      <p>Измерение: {location.dimension}</p>
    </div>
  )
}

export default Location
