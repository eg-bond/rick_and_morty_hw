import { useCallback, useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { AllPossibleDataArraysT, OutletContextT } from './types'

type SortingTypeT = 'ASC' | 'DESC'

function ListItems() {
  const { items } = useOutletContext<OutletContextT>()
  const [list, setList] = useState(items)

  const sort = useCallback(
    (type: SortingTypeT) => {
      const sorted = [...items].sort((a, b) => {
        const dateA = Date.parse(a.created)
        const dateB = Date.parse(b.created)
        return type === 'ASC' ? dateA - dateB : dateB - dateA
      })
      setList(sorted as AllPossibleDataArraysT)
    },
    [items]
  )

  useEffect(() => {
    setList(items)
  }, [items])

  return (
    <div>
      <button onClick={() => sort('DESC')}>Сортировать по убыванию</button>
      <button onClick={() => sort('ASC')}>Сортировать по возрастанию</button>
      {list.map(item => (
        <div key={item.id}>
          <Link to={`${item.id}`}>{item.name.toString()}</Link>
        </div>
      ))}
    </div>
  )
}

export default ListItems
