import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { SortingTypeT, sort } from '../helpers'
import type { AllPossibleDataArraysT, OutletContextT } from '../types'

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
      <button onClick={() => handleSorting('DESC')}>
        Сортировать по убыванию
      </button>
      <button onClick={() => handleSorting('ASC')}>
        Сортировать по возрастанию
      </button>
      {list.map(item => (
        <div key={item.id}>
          <Link to={`${item.id}`}>{item.name.toString()}</Link>
        </div>
      ))}
    </div>
  )
}

export default ListData
