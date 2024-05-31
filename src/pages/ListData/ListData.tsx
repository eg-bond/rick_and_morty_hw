import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { SortingTypeT, sort } from '../../helpers'
import s from './listData.module.css'
import type { AllPossibleDataArraysT, OutletContextT } from '../../types'

function ListData() {
  const { data } = useOutletContext<OutletContextT>()
  const [list, setList] = useState(data)

  function handleSorting(type: SortingTypeT) {
    const sorted = sort(type, data)
    setList(sorted as AllPossibleDataArraysT)
  }

  useEffect(() => {
    setList(data)
  }, [data])

  return (
    <div>
      <div className={s.sort}>
        <button onClick={() => handleSorting('DESC')}>По убыванию</button>
        <button onClick={() => handleSorting('ASC')}>По возрастанию</button>
      </div>

      {list.map(item => (
        <div className={s.item} key={item.id}>
          <Link to={`${item.id}`}>{item.name.toString()}</Link>
        </div>
      ))}
    </div>
  )
}

export default ListData
