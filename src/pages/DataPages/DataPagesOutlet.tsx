import { Outlet } from 'react-router-dom'
import { AppRoutes } from '../../types'
import { useDataFromApi } from '../../hooks/useDataFromApi'

export function DataPagesOutlet({
  apiURL,
  route,
}: {
  apiURL: string
  route: AppRoutes
}) {
  const { data, loading } = useDataFromApi(apiURL, 1)
  return <Outlet context={{ data, loading, route }} />
}
