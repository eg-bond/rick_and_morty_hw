import { useParams } from 'react-router-dom'
import episodes from '../assets/episode.json'

type EpisodePropsT = {
  name: string
  air_date: string
  episode: string
}

function getEpisode(id: string | undefined): EpisodePropsT | undefined {
  return episodes.find(ep => ep.id.toString() === id)
}

function Episode() {
  const { id } = useParams<{ id: string }>()

  const episode = getEpisode(id)

  if (!episode) {
    return null
  }

  return (
    <div>
      <p>Название серии: {episode.name}</p>
      <p>Дата выхода серии: {episode.air_date}</p>
      <p>Код эпизода: {episode.episode}</p>
    </div>
  )
}

export default Episode
