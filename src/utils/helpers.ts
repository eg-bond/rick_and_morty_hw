import type { AllPossibleDataArraysT, AllPossibleDataT } from '../types';

// function to sort incoming data array
export enum SortingTypes {
  ASC = 'ASC',
  DESC = 'DESC',
}
export type SortingTypesT = SortingTypes.ASC | SortingTypes.DESC | null;

export function sort(type: SortingTypesT, items: AllPossibleDataArraysT) {
  if (type === null) return items;
  if (items.length === 0) return [];
  return [...items].sort((a, b) => {
    const dateA = Date.parse(a.created);
    const dateB = Date.parse(b.created);
    return type === SortingTypes.ASC ? dateA - dateB : dateB - dateA;
  });
}

// function to get the particular data item from an array using 'item.id' field
export function getDataItem(
  items: AllPossibleDataArraysT,
  id: string | undefined
): AllPossibleDataT | undefined {
  return items.find(item => item.id.toString() === id);
}
