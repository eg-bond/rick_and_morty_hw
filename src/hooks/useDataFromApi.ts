import axios from 'axios'
import { useEffect, useState } from 'react'
import { AllPossibleDataArraysT } from '../types'

export function useDataFromApi(url: string, pageNumber: number) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<AllPossibleDataArraysT>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [url])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url,
      params: { page: pageNumber },
    })
      .then(res => {
        setLoading(false)
        setData(prev => [...prev, ...res.data.results])
        setHasMore(res.data.info.next !== null)
      })
      .catch(e => {
        setError(true)
        console.error(e)
      })
  }, [url, pageNumber])

  return {
    loading,
    error,
    data,
    hasMore,
  }
}
