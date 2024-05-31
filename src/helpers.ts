import type { AllPossibleDataArraysT, AllPossibleDataT } from './types'

export type SortingTypeT = 'ASC' | 'DESC'

export function sort(type: SortingTypeT, items: AllPossibleDataArraysT) {
  return [...items].sort((a, b) => {
    const dateA = Date.parse(a.created)
    const dateB = Date.parse(b.created)
    return type === 'ASC' ? dateA - dateB : dateB - dateA
  })
}

export function getDataItem(
  items: AllPossibleDataArraysT,
  id: string | undefined
): AllPossibleDataT | undefined {
  return items.find(item => item.id.toString() === id)
}
