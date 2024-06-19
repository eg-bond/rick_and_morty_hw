import { useEffect, useState } from 'react'
import { Link, useOutletContext, useSearchParams } from 'react-router-dom'
import { SortingKinds, SortingKindsT, sort } from '../../helpers'
import s from './listData.module.css'
import type { AllPossibleDataArraysT, OutletContextT } from '../../types'
import { useDataFromApi } from '../../hooks/useDataFromApi'

export function ListData() {
  const { apiURL } = useOutletContext<OutletContextT>()
  const { data, loading } = useDataFromApi(apiURL, 1)
  const [list, setList] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSorting(type: SortingKindsT) {
    //@ts-ignore
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
      {loading && <div>...Loading data</div>}
      {list.map(item => (
        <div className={s.item} key={item.id}>
          <Link to={`${item.id}`}>{item.name.toString()}</Link>
        </div>
      ))}
    </div>
  )
}
