import CharacterLayout from './CharacterLayout';
import EpisodeLayout from './EpisodeLayout';
import LocationLayout from './LocationLayout';
import { AppRoutes } from '@/types/routesTypes';
import {
  type DataPagesOutletContextT,
  type AllPossibleDataT,
  type CharactersDataT,
  type EpisodeDataT,
  type LocationDataT,
} from '@/types/dataPagesTypes';

interface ItemLayoutProps {
  dataItem: AllPossibleDataT;
  route: DataPagesOutletContextT['route'];
}

function ItemLayout({ dataItem, route }: ItemLayoutProps) {
  switch (route) {
    case AppRoutes.Locations:
      return (
        <LocationLayout location={dataItem as LocationDataT} route={route} />
      );
    case AppRoutes.Episodes:
      return <EpisodeLayout episode={dataItem as EpisodeDataT} route={route} />;
    case AppRoutes.Characters:
      return (
        <CharacterLayout
          character={dataItem as CharactersDataT}
          route={route}
        />
      );
    default:
      return null;
  }
}

export default ItemLayout;
