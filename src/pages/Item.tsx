import { Link, useOutletContext, useParams } from 'react-router-dom'
import {
  AllPossibleDataArraysT,
  AllPossibleDataT,
  CharactersDataT,
  EpisodeDataT,
  LocationDataT,
  OutletContextT,
  RoutesTypesT,
} from './types'

function getDataItem(
  items: AllPossibleDataArraysT,
  id: string | undefined
): AllPossibleDataT | undefined {
  return items.find(item => item.id.toString() === id)
}

function Item() {
  const { id } = useParams<{ id: string }>()
  const { items, type } = useOutletContext<OutletContextT>()
  const item = getDataItem(items, id)

  if (!item) {
    return null
  }

  return <ItemLayout item={item} type={type} />
}

function ItemLayout({
  item,
  type,
}: {
  item: AllPossibleDataT
  type: RoutesTypesT
}) {
  if (type === 'locations') {
    return <LocationLayout item={item as LocationDataT} />
  }

  if (type === 'episodes') {
    return <EpisodeLayout item={item as EpisodeDataT} />
  }

  if (type === 'characters') {
    return <CharacterLayout item={item as CharactersDataT} />
  }

  return null
}

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
function EpisodeLayout({ item }: { item: EpisodeDataT }) {
  return (
    <>
      <div>
        <p>Название серии: {item.name}</p>
        <p>Дата выхода серии: {item.air_date}</p>
        <p>Код эпизода: {item.episode}</p>
      </div>
      <Link to='/episodes'>Вернуться к выбору эпизода</Link>
    </>
  )
}
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

export default Item
