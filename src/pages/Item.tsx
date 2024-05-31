import { useOutletContext, useParams } from 'react-router-dom'
import { getDataItem } from '../helpers'
import LocationLayout from './Layouts/LocationLayout'
import EpisodeLayout from './Layouts/EpisodeLayout'
import CharacterLayout from './Layouts/CharacterLayout'
import type {
  AllPossibleDataT,
  CharactersDataT,
  EpisodeDataT,
  LocationDataT,
  OutletContextT,
  RoutesTypesT,
} from './types'

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
  switch (type) {
    case 'locations':
      return <LocationLayout item={item as LocationDataT} />
    case 'episodes':
      return <EpisodeLayout item={item as EpisodeDataT} />
    case 'characters':
      return <CharacterLayout item={item as CharactersDataT} />
    default:
      return null
  }
}

export default Item
