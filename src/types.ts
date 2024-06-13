export interface SharedDataT {
  id: number
  name: string
  created: string
}

export interface LocationDataT extends SharedDataT {
  type: string
  dimension: string
}

export interface EpisodeDataT extends SharedDataT {
  air_date: string
  episode: string
}

export interface CharactersDataT extends SharedDataT {
  status: string
  species: string
  type: string
  gender: string
  image: string
}

export type AllPossibleDataT = LocationDataT | EpisodeDataT | CharactersDataT

export type AllPossibleDataArraysT =
  | LocationDataT[]
  | EpisodeDataT[]
  | CharactersDataT[]

export enum DataPagesURLs {
  Locations = 'locations',
  Episodes = 'episodes',
  Characters = 'characters',
}

export enum URLs {
  Main = '/',
  Locations = DataPagesURLs.Locations,
  Episodes = DataPagesURLs.Episodes,
  Characters = DataPagesURLs.Characters,
  Login = 'login',
}

export type RoutesURLsT =
  | 'locations'
  | 'episodes'
  | 'characters'
  | '/'
  | 'login'

export type OutletContextT = {
  url: RoutesURLsT
  data: AllPossibleDataArraysT
}
