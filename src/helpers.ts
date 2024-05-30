import type { AllPossibleDataArraysT } from './pages/types'

export type SortingTypeT = 'ASC' | 'DESC'

export function sort(type: SortingTypeT, items: AllPossibleDataArraysT) {
  const sorted = [...items].sort((a, b) => {
    const dateA = Date.parse(a.created)
    const dateB = Date.parse(b.created)
    return type === 'ASC' ? dateA - dateB : dateB - dateA
  })
  return sorted
}
