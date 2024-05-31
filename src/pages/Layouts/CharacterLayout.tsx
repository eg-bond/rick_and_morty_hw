import { Link } from 'react-router-dom'
import type { CharactersDataT } from '../../types'

function CharacterLayout({
  item,
  url,
}: {
  item: CharactersDataT
  url: 'characters'
}) {
  return (
    <>
      <div>
        <img src={item.image} alt={item.name} />
        <p>Имя: {item.name}</p>
        <p>Статус: {item.status}</p>
        <p>Вид: {item.species}</p>
        <p>Пол: {item.gender}</p>
      </div>
      <Link to={`/${url}`}>Вернуться к выбору персонажа</Link>
    </>
  )
}

export default CharacterLayout
