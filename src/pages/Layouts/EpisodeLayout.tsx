import { Link } from 'react-router-dom'
import type { EpisodeDataT } from '../../types'

function EpisodeLayout({ item, url }: { item: EpisodeDataT; url: 'episodes' }) {
  return (
    <>
      <div>
        <p>Название серии: {item.name}</p>
        <p>Дата выхода серии: {item.air_date}</p>
        <p>Код эпизода: {item.episode}</p>
      </div>
      <Link to={`/${url}`}>Вернуться к выбору эпизода</Link>
    </>
  )
}

export default EpisodeLayout
