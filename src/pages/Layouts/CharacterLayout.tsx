import { Link } from 'react-router-dom'
import type { CharactersDataT } from '../types'

function CharacterLayout({ item }: { item: CharactersDataT }) {
  return (
    <>
      <div>
        <p>Имя: {item.name}</p>
        <p>Статус: {item.status}</p>
        <p>Вид: {item.species}</p>
        <p>Пол: {item.gender}</p>
        <p>Фото: {item.image}</p>
      </div>
      <Link to='/characters'>Вернуться к выбору персонажа</Link>
    </>
  )
}

export default CharacterLayout
