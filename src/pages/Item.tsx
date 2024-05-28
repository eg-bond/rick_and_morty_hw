import { useParams } from 'react-router-dom'

type LocationItemT = {
  id: number
  name: string
  type: string
  dimension: string
}
type EpisodeItemT = {
  id: number
  name: string
  air_date: string
  episode: string
}
type CharactersItemT = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}

type AllPossibleTypes = EpisodeItemT | LocationItemT | CharactersItemT

type DataTypesT = 'location' | 'episode' | 'characters'

function getItem<T extends { id: number }>(
  items: T[],
  id: string | undefined
): T | undefined {
  return items.find(ep => ep.id.toString() === id)
}

function Item<T extends AllPossibleTypes>({
  items,
  type,
}: {
  items: T[]
  type: DataTypesT
}) {
  const { id } = useParams<{ id: string }>()
  const item = getItem(items, id)

  if (!item) {
    return null
  }

  return <ItemLayout item={item} type={type} />
}

function ItemLayout({
  item,
  type,
}: {
  item: AllPossibleTypes
  type: DataTypesT
}) {
  if (type === 'location') {
    return <LocationLayout item={item} />
  }

  if (type === 'episode') {
    return <EpisodeLayout item={item} />
  }

  if (type === 'characters') {
    return <CharacterLayout item={item} />
  }

  return null
}

function LocationLayout({ item }: { item: LocationItemT }) {
  return (
    <div>
      <p>Название: {item.name}</p>
      <p>Тип: {item.type}</p>
      <p>Измерение: {item.dimension}</p>
    </div>
  )
}
function EpisodeLayout({ item }: { item: EpisodeItemT }) {
  return (
    <div>
      <p>Название серии: {item.name}</p>
      <p>Дата выхода серии: {item.air_date}</p>
      <p>Код эпизода: {item.episode}</p>
    </div>
  )
}
function CharacterLayout({ item }: { item: CharactersItemT }) {
  return (
    <div>
      <p>Имя: {item.name}</p>
      <p>Статус: {item.status}</p>
      <p>Вид: {item.species}</p>
      <p>Пол: {item.gender}</p>
      <p>Фото: {item.image}</p>
    </div>
  )
}

export default Item
