import type { AllPossibleDataArraysT } from '@/types/dataPagesTypes';

export enum SortingTypes {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * function to sort incoming data array by 'created' field
 * @param {string} type - type of sorting
 * @param {AllPossibleDataArraysT} items - data array to sort
 * @returns {AllPossibleDataArraysT} sorted array
 */
export function sort(type: SortingTypes | null, items: AllPossibleDataArraysT) {
  if (type === null) return items;
  if (items.length === 0) return [];
  return [...items].sort((a, b) => {
    const dateA = Date.parse(a.created);
    const dateB = Date.parse(b.created);
    return type === SortingTypes.ASC ? dateA - dateB : dateB - dateA;
  });
}
