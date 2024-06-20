import { Link } from 'react-router-dom'
import { AllPossibleDataT } from '../../../types'
import s from './listData.module.css'

export function DataItem({
  item,
  isLastNode,
  lastNodeRef,
}: {
  item: AllPossibleDataT
  isLastNode: boolean
  lastNodeRef: (node: HTMLDivElement | null) => void
}) {
  if (isLastNode) {
    return (
      <div ref={lastNodeRef} className={s.item}>
        <Link to={`${item.id}`}>{item.name.toString()}</Link>
      </div>
    )
  }
  return (
    <div className={s.item}>
      <Link to={`${item.id}`}>{item.name.toString()}</Link>
    </div>
  )
}
