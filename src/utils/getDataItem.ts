import type {
  AllPossibleDataArraysT,
  AllPossibleDataT,
} from '@/types/dataPagesTypes';

// function to get the particular data item from an array using 'item.id' field
export function getDataItem(
  items: AllPossibleDataArraysT,
  id: string | undefined
): AllPossibleDataT | undefined {
  return items.find(item => item.id.toString() === id);
}
