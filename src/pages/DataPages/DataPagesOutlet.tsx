import { Outlet } from 'react-router-dom'
import { AppRoutes } from '../../types'
import { useDataFromApi } from '../../hooks/useDataFromApi'
import { useEffect, useState } from 'react'

export function DataPagesOutlet({
  apiURL,
  route,
}: {
  apiURL: string
  route: AppRoutes
}) {
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    setPageNumber(1)
  }, [apiURL])

  const { data, loading, hasMore } = useDataFromApi(apiURL, pageNumber)

  return <Outlet context={{ data, loading, route, hasMore, setPageNumber }} />
}
