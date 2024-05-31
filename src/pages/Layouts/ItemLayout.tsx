import CharacterLayout from './CharacterLayout'
import EpisodeLayout from './EpisodeLayout'
import LocationLayout from './LocationLayout'
import type {
  AllPossibleDataT,
  CharactersDataT,
  EpisodeDataT,
  LocationDataT,
  RoutesURLsT,
} from '../../types'

function ItemLayout({
  dataItem,
  url,
}: {
  dataItem: AllPossibleDataT
  url: RoutesURLsT
}) {
  switch (url) {
    case 'locations':
      return <LocationLayout item={dataItem as LocationDataT} url={url} />
    case 'episodes':
      return <EpisodeLayout item={dataItem as EpisodeDataT} url={url} />
    case 'characters':
      return <CharacterLayout item={dataItem as CharactersDataT} url={url} />
    default:
      return null
  }
}

export default ItemLayout
