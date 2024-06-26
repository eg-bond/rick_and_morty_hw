import { AppRoutes } from './routesTypes';

export interface SharedDataT {
  id: number;
  name: string;
  created: string;
}

export interface LocationDataT extends SharedDataT {
  type: string;
  dimension: string;
}

export interface EpisodeDataT extends SharedDataT {
  air_date: string;
  episode: string;
}

export interface CharactersDataT extends SharedDataT {
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export type AllPossibleDataT = LocationDataT | EpisodeDataT | CharactersDataT;

export type AllPossibleDataArraysT =
  | LocationDataT[]
  | EpisodeDataT[]
  | CharactersDataT[];

export type DataPagesOutletContextT = {
  route: AppRoutes.Locations | AppRoutes.Episodes | AppRoutes.Characters;
  data: AllPossibleDataArraysT;
  loading: boolean;
  hasMore: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};
