import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { AllPossibleDataArraysT, OutletContextT } from './types'
import { SortingTypeT, sort } from '../helpers'

function ListItems() {
  const { items } = useOutletContext<OutletContextT>()
  const [list, setList] = useState(items)

  function handleSorting(type: SortingTypeT) {
    const sorted = sort(type, items)
    setList(sorted as AllPossibleDataArraysT)
  }

  useEffect(() => {
    setList(items)
  }, [items])

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

export default ListItems
