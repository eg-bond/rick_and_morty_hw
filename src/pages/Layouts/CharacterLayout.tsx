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
        <p>Имя: {item.name}</p>
        <p>Статус: {item.status}</p>
        <p>Вид: {item.species}</p>
        <p>Пол: {item.gender}</p>
        <p>Фото: {item.image}</p>
      </div>
      <Link to={`/${url}`}>Вернуться к выбору персонажа</Link>
    </>
  )
}

export default CharacterLayout
