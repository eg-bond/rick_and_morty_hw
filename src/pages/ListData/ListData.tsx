import { useEffect, useState } from 'react'
import { Link, useOutletContext, useSearchParams } from 'react-router-dom'
import { SortingKinds, SortingKindsT, sort } from '../../helpers'
import s from './listData.module.css'
import type { AllPossibleDataArraysT, OutletContextT } from '../../types'

function ListData() {
  const { data } = useOutletContext<OutletContextT>()
  const [list, setList] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSorting(type: SortingKindsT) {
    //@ts-ignore ... Не понимаю как правильно затипизировать
    setSearchParams(prev => ({ ...prev, sort: type }))
  }

  useEffect(() => {
    setList(data)
  }, [data])

  // sorts list if 'sort' query parameter exists
  useEffect(() => {
    if (searchParams.get('sort') !== null) {
      const sorted = sort(searchParams.get('sort') as SortingKindsT, data)
      setList(sorted as AllPossibleDataArraysT)
    }
  }, [searchParams])

  return (
    <div>
      <div className={s.sort}>
        <button onClick={() => handleSorting(SortingKinds.DESC)}>
          По убыванию
        </button>
        <button onClick={() => handleSorting(SortingKinds.ASC)}>
          По возрастанию
        </button>
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
